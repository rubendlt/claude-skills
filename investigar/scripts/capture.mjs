#!/usr/bin/env node
// Captura referentes en escritorio (1440×900) y móvil (390×844).
// Uso: node capture.mjs [--full] <carpeta_salida> <url> [url...]
//   --full  página entera en vez de la primera pantalla
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

// 3. Cerrar el banner de cookies si lo hay (primero «rechazar»).
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
const [out, ...urls] = args.filter((a) => a !== "--full");
if (!out || !urls.length) { console.error("Uso: node capture.mjs [--full] <salida> <url>..."); process.exit(1); }

const pw = findPlaywright();
if (!pw) { console.error("No encuentro Playwright: npx -y playwright install chromium"); process.exit(1); }
mkdirSync(out, { recursive: true });
const browser = await launch(pw.chromium);

const views = {
  desk: { viewport: { width: 1440, height: 900 } },
  movil: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
};
for (const url of urls) {
  const u = new URL(url);
  const slug = (u.hostname.replace(/^www\./, "") + u.pathname.replace(/\/$/, "")).replace(/[^\w.]+/g, "-");
  for (const [name, opts] of Object.entries(views)) {
    const ctx = await browser.newContext({ ...opts, locale: "es-ES" });
    const page = await ctx.newPage();
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 30000 }).catch(() => page.waitForLoadState("load"));
      const cookies = await dismissCookies(page);
      const file = join(out, `${slug}-${name}${full ? "-full" : ""}.png`);
      await page.screenshot({ path: file, fullPage: full });
      console.log(file + (cookies ? "  (banner de cookies cerrado)" : ""));
    } catch (e) { console.error(`✗ ${url} (${name}): ${e.message.split("\n")[0]}`); }
    await ctx.close();
  }
}
await browser.close();
