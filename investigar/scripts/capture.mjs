#!/usr/bin/env node
// Captura referentes en escritorio (1440×900) y móvil (390×844).
// Uso: node capture.mjs [--full] <carpeta_salida> "<url>|<origen>" ["<url>|<origen>"...]
//   --full  página entera en vez de la primera pantalla
//   origen  de dónde sale la URL: «búsqueda: <consulta>», «enlace en <página>» o «propia». Obligatorio:
//           una URL sin origen es una URL adivinada, y se rechaza antes de abrir el navegador
// Necesita Playwright (en el proyecto, global o vía npx) y un Chromium:
//   npx -y playwright install chromium
import { createRequire } from "node:module";
import { readdirSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { homedir, platform } from "node:os";
import { execSync } from "node:child_process";

const H = homedir();
const WIN = platform() === "win32";
const MAC = platform() === "darwin";

// 1. Localizar Playwright: proyecto → global → caché de npx.
function findPlaywright() {
  const roots = [join(process.cwd(), "node_modules")];
  try { roots.push(execSync("npm root -g", { encoding: "utf8" }).trim()); } catch {}
  const npxDirs = [join(H, ".npm/_npx"), WIN && process.env.LOCALAPPDATA && join(process.env.LOCALAPPDATA, "npm-cache/_npx")].filter(Boolean);
  for (const d of npxDirs) if (existsSync(d)) for (const s of readdirSync(d)) roots.push(join(d, s, "node_modules"));
  for (const r of roots) for (const pkg of ["playwright", "playwright-core"]) {
    if (existsSync(join(r, pkg))) return createRequire(join(r, "x.js"))(pkg);
  }
  return null;
}

// 2. Chromium de reserva si el que espera Playwright no está instalado.
function findChromium() {
  const cache = process.env.PLAYWRIGHT_BROWSERS_PATH
    || (WIN ? join(process.env.LOCALAPPDATA || "", "ms-playwright") : MAC ? join(H, "Library/Caches/ms-playwright") : join(H, ".cache/ms-playwright"));
  if (!existsSync(cache)) return undefined;
  const rel = WIN ? ["chrome-win64/chrome.exe", "chrome-win/chrome.exe"]
    : MAC ? ["chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing",
             "chrome-mac/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing",
             "chrome-mac/Chromium.app/Contents/MacOS/Chromium"]
    : ["chrome-linux64/chrome", "chrome-linux/chrome"];
  return readdirSync(cache).filter((d) => /^chromium-\d+$/.test(d)).sort((a, b) => b.split("-")[1] - a.split("-")[1])
    .flatMap((d) => rel.map((r) => join(cache, d, r))).find(existsSync);
}

async function launch(chromium) {
  try { return await chromium.launch(); } catch {}
  const exe = findChromium();
  if (exe) return chromium.launch({ executablePath: exe });
  try { return await chromium.launch({ channel: "chrome" }); } catch {}
  throw new Error("Sin navegador: npx -y playwright install chromium");
}

// 3. Detectar páginas que no sirven: error HTTP, Cloudflare/captcha, 404 servido con 200.
async function unusable(page, response) {
  const status = response?.status() ?? 0;
  if (status >= 400) return `HTTP ${status}`;
  const title = (await page.title().catch(() => "")).toLowerCase();
  const text = (await page.locator("body").innerText({ timeout: 2000 }).catch(() => "")).slice(0, 3000).toLowerCase();
  if (/just a moment|attention required|un momento/.test(title)
    || /verify(ing)? (that )?you('re| are) (a )?human|verifique que es un ser humano|checking your browser|cf-ray|captcha/.test(text)) return "bloqueo anti-bots (Cloudflare/captcha)";
  if (/\b404\b|not found|no encontrada|no existe/.test(title)
    || (text.length < 600 && /page not found|página no encontrada|error code: 404/.test(text))) return "página no encontrada (404)";
  return null;
}

// 4. Bajar por la página para que carguen imágenes y mapas diferidos, y volver arriba.
async function loadLazy(page) {
  await page.evaluate(async () => {
    const step = window.innerHeight;
    // behavior "instant": con scroll-behavior: smooth en la web, la vuelta arriba no llegaría a tiempo
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 150));
    }
    window.scrollTo({ top: 0, behavior: "instant" });
    await new Promise((r) => setTimeout(r, 200));
  }).catch(() => {});
  await page.waitForLoadState("networkidle", { timeout: 5000 }).catch(() => {});
}

// 5. Cerrar el banner de cookies si lo hay (primero «rechazar»).
async function dismissCookies(page) {
  for (const re of [/^(rechazar|reject|decline|deny|denegar)/i, /^(aceptar|accept|agree|allow|entendido|ok)/i]) {
    const btn = page.getByRole("button", { name: re }).first();
    if (await btn.isVisible({ timeout: 800 }).catch(() => false)) {
      await btn.click({ timeout: 2000 }).catch(() => {});
      await page.waitForTimeout(400);
      return true;
    }
  }
  return false;
}

const args = process.argv.slice(2);
const full = args.includes("--full");
const [out, ...targets] = args.filter((a) => a !== "--full");
if (!out || !targets.length) { console.error('Uso: node capture.mjs [--full] <salida> "<url>|<origen>"...'); process.exit(1); }
const sinOrigen = targets.filter((t) => !t.includes("|") || !t.slice(t.indexOf("|") + 1).trim());
if (sinOrigen.length) {
  console.error(`Sin origen (¿URL adivinada?): ${sinOrigen.join(", ")}\nBúscala o navega hasta ella y pásala como "<url>|búsqueda: …" o "<url>|enlace en …".`);
  process.exit(1);
}
const urls = targets.map((t) => t.slice(0, t.indexOf("|")).trim());

const pw = findPlaywright();
if (!pw) { console.error("No encuentro Playwright: npx -y playwright install chromium"); process.exit(1); }
mkdirSync(out, { recursive: true });
const browser = await launch(pw.chromium);

const views = {
  desk: { viewport: { width: 1440, height: 900 } },
  movil: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
};
// Distintivos de desarrollo (Next.js, Vite…) que tapan contenido en capturas locales.
const HIDE_DEV = "nextjs-portal, [data-nextjs-toast], #vite-error-overlay { display: none !important; }";

let failed = 0;
for (const url of urls) {
  const u = new URL(url);
  const slug = (u.hostname.replace(/^www\./, "") + u.pathname.replace(/\/$/, "")).replace(/[^\w.]+/g, "-");
  for (const [name, opts] of Object.entries(views)) {
    const ctx = await browser.newContext({ ...opts, locale: "es-ES" });
    const page = await ctx.newPage();
    try {
      const response = await page.goto(url, { waitUntil: "networkidle", timeout: 30000 })
        .catch(async () => { await page.waitForLoadState("load"); return null; });
      const why = await unusable(page, response);
      if (why) { failed++; console.error(`✗ ${url} (${name}): ${why}. No se guarda: busca otra URL u otro referente.`); await ctx.close(); if (name === "desk") break; continue; }
      await page.addStyleTag({ content: HIDE_DEV }).catch(() => {});
      const cookies = await dismissCookies(page);
      await loadLazy(page);
      const file = join(out, `${slug}-${name}${full ? "-full" : ""}.png`);
      await page.screenshot({ path: file, fullPage: full });
      console.log(file + (cookies ? "  (banner de cookies cerrado)" : ""));
    } catch (e) { failed++; console.error(`✗ ${url} (${name}): ${e.message.split("\n")[0]}`); }
    await ctx.close();
  }
}
await browser.close();
if (failed) { console.error(`${failed} captura(s) fallida(s).`); process.exitCode = 2; }
