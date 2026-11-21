#!/usr/bin/env node
// Capturas del proyecto con caché: solo rehace las que el código ha dejado viejas.
// Uso (desde la raíz del proyecto):
//   node ~/.claude/skills/capturas/scripts/shots.mjs [opciones] [pagina...]
//   pagina...        nombres de shots.config.json (por defecto, las marcadas "key")
//   --all            todas las páginas del config
//   --vp a,b         viewports (por defecto, los marcados "key")
//   --force          rehacer aunque estén al día
//   --status         solo decir qué está al día y qué no, sin capturar
// Salida en .shots/: <pagina>-<vp>.png (página entera) y <pagina>-<vp>-N.png (trozos de una pantalla),
// manifest.json (firma de cada captura) e index.md (qué hay y si está al día).
import { createRequire } from "node:module";
import { readdirSync, existsSync, mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { homedir, platform } from "node:os";
import { execSync, spawn } from "node:child_process";
import { createHash } from "node:crypto";

const H = homedir();
const MAC = platform() === "darwin";
const ROOT = process.cwd();
const OUT = join(ROOT, ".shots");
const MAX_SEGMENTS = 10;

// ---------- config ----------
const cfgPath = join(ROOT, "shots.config.json");
if (!existsSync(cfgPath)) { console.error("Falta shots.config.json en la raíz (ver SKILL.md → Preparar el proyecto)."); process.exit(1); }
const cfg = JSON.parse(readFileSync(cfgPath, "utf8"));
const DEFAULT_VP = {
  movil: { width: 375, height: 812, mobile: true, browser: "webkit", key: true },
  desk: { width: 1366, height: 768, key: true },
};
const viewports = cfg.viewports ?? DEFAULT_VP;
const pages = cfg.pages ?? [];

const args = process.argv.slice(2);
const flag = (f) => args.includes(f);
const opt = (f) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : undefined; };
const vpArg = opt("--vp");
const names = args.filter((a, i) => !a.startsWith("--") && args[i - 1] !== "--vp");

const selPages = names.length ? names.map((n) => pages.find((p) => p.name === n) ?? die(`Página «${n}» no está en shots.config.json`))
  : flag("--all") ? pages : pages.filter((p) => p.key);
const selVps = (vpArg ? vpArg.split(",") : Object.keys(viewports).filter((v) => viewports[v].key))
  .map((v) => viewports[v] ? v : die(`Viewport «${v}» no está en shots.config.json`));

function die(m) { console.error(m); process.exit(1); }

// ---------- firma del código ----------
// HEAD + cambios sin commitear + archivos nuevos. Cualquier cambio invalida todo: no se puede saber
// qué pantallas toca un cambio en un estilo global o un layout.
function signature() {
  const sh = (c) => execSync(c, { cwd: ROOT, encoding: "utf8", maxBuffer: 1 << 28, stdio: ["ignore", "pipe", "ignore"] });
  try {
    const h = createHash("sha1");
    h.update(sh("git rev-parse HEAD"));
    h.update(sh("git diff HEAD --binary -- . ':(exclude).shots' ':(exclude)shots.config.json'"));
    const untracked = sh("git ls-files -o --exclude-standard -z").split("\0").filter(Boolean).filter((f) => !f.endsWith(".png"));
    for (const f of untracked) { h.update(f); try { h.update(readFileSync(join(ROOT, f))); } catch {} }
    h.update(JSON.stringify({ viewports, pages }));
    return h.digest("hex").slice(0, 12);
  } catch { return "sin-git-" + Date.now(); }
}

const manifestPath = join(OUT, "manifest.json");
const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, "utf8")) : {};
const sig = signature();
const id = (p, v) => `${p.name}-${v}`;
const todo = selPages.flatMap((p) => selVps.map((v) => ({ p, v })))
  .filter(({ p, v }) => flag("--force") || manifest[id(p, v)]?.sig !== sig);

function writeIndex() {
  const rows = Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)).map(([k, m]) =>
    `| ${m.sig === sig ? "✅" : "⚠️ vieja"} | \`${k}.png\` | ${m.url} | ${m.vp} | ${m.segments} | ${m.date} |`);
  writeFileSync(join(OUT, "index.md"),
    `# Capturas\n\nFirma actual del código: \`${sig}\`. ✅ = al día; ⚠️ = el código cambió después.\n` +
    `Trozos: \`<nombre>-1.png\` … \`-N.png\`, una pantalla cada uno (leer solo el que interese).\n\n` +
    `| Estado | Archivo | URL | Viewport | Trozos | Fecha |\n|---|---|---|---|---|---|\n${rows.join("\n")}\n`);
}

if (flag("--status")) {
  for (const p of selPages) for (const v of selVps) {
    const m = manifest[id(p, v)];
    console.log(`${!m ? "✗ falta" : m.sig === sig ? "✅ al día" : "⚠️ vieja"}  .shots/${id(p, v)}.png`);
  }
  process.exit(0);
}
if (!todo.length) { console.log(`Todo al día (firma ${sig}). Nada que capturar.`); process.exit(0); }

// ---------- Playwright ----------
function findPlaywright() {
  const roots = [join(ROOT, "node_modules")];
  try { roots.push(execSync("npm root -g", { encoding: "utf8" }).trim()); } catch {}
  try { roots.push(execSync("pnpm root -g", { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim()); } catch {}
  const npx = join(H, ".npm/_npx");
  if (existsSync(npx)) for (const s of readdirSync(npx)) roots.push(join(npx, s, "node_modules"));
  for (const r of roots) for (const pkg of ["playwright", "playwright-core"])
    if (existsSync(join(r, pkg))) return createRequire(join(r, "x.js"))(pkg);
  return null;
}
const pw = findPlaywright() ?? die("No encuentro Playwright: npx -y playwright install chromium webkit");

const browsers = {};
async function getBrowser(name) {
  if (browsers[name]) return browsers[name];
  try { browsers[name] = await pw[name].launch(); }
  catch {
    if (name === "chromium") {
      const cache = process.env.PLAYWRIGHT_BROWSERS_PATH || (MAC ? join(H, "Library/Caches/ms-playwright") : join(H, ".cache/ms-playwright"));
      const exe = existsSync(cache) && readdirSync(cache).filter((d) => /^chromium-\d+$/.test(d)).sort().reverse()
        .map((d) => join(cache, d, "chrome-linux64/chrome")).find(existsSync);
      if (!exe) throw new Error("Sin Chromium: npx -y playwright install chromium");
      browsers[name] = await pw.chromium.launch({ executablePath: exe });
    } else {
      console.error(`(sin ${name}: uso Chromium con viewport móvil)`);
      browsers[name] = await getBrowser("chromium");
    }
  }
  return browsers[name];
}

// ---------- servidor ----------
const base = (cfg.baseUrl ?? "http://localhost:3000").replace(/\/$/, "");
const up = async () => { try { const r = await fetch(base, { signal: AbortSignal.timeout(3000) }); return r.status < 500; } catch { return false; } };
let server;
if (!(await up())) {
  if (!cfg.start) die(`${base} no responde y shots.config.json no tiene "start". Arranca el servidor y repite.`);
  console.log(`Arrancando: ${cfg.start}`);
  server = spawn(cfg.start, { cwd: ROOT, shell: true, stdio: "ignore", detached: true });
  const t0 = Date.now();
  while (!(await up())) {
    if (Date.now() - t0 > 180000) { process.kill(-server.pid); die(`${base} no respondió en 3 min.`); }
    await new Promise((r) => setTimeout(r, 1000));
  }
}

// ---------- captura ----------
const HIDE = "nextjs-portal, [data-nextjs-toast], #vite-error-overlay, #__next-build-watcher { display: none !important; }"
  + (cfg.hideSelectors?.length ? `${cfg.hideSelectors.join(",")} { display: none !important; }` : "");

async function dismissCookies(page) {
  for (const re of [/^(rechazar|reject|decline|deny|denegar)/i, /^(aceptar|accept|agree|allow|entendido|ok)$/i]) {
    const btn = page.getByRole("button", { name: re }).first();
    if (await btn.isVisible({ timeout: 800 }).catch(() => false)) { await btn.click({ timeout: 2000 }).catch(() => {}); return; }
  }
}
async function loadLazy(page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight) {
      window.scrollTo({ top: y, behavior: "instant" }); await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo({ top: 0, behavior: "instant" }); await new Promise((r) => setTimeout(r, 200));
  }).catch(() => {});
  await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
  await page.evaluate(() => document.fonts?.ready).catch(() => {});
}

mkdirSync(OUT, { recursive: true });
let failed = 0;
try {
  for (const { p, v } of todo) {
    const vp = viewports[v];
    const browser = await getBrowser(vp.browser ?? "chromium");
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height }, locale: cfg.locale ?? "es-ES",
      isMobile: !!vp.mobile && (vp.browser ?? "chromium") === "chromium", hasTouch: !!vp.mobile,
      deviceScaleFactor: vp.scale ?? 1, reducedMotion: "reduce",
    });
    const page = await ctx.newPage();
    const url = base + p.path;
    try {
      const res = await page.goto(url, { waitUntil: "networkidle", timeout: 90000 }).catch(async () => { await page.waitForLoadState("load"); return null; });
      if (res && res.status() >= 400) throw new Error(`HTTP ${res.status()}`);
      await page.addStyleTag({ content: HIDE }).catch(() => {});
      await dismissCookies(page);
      await loadLazy(page);
      const name = id(p, v);
      for (const f of readdirSync(OUT)) if (f.startsWith(name + "-") && /-\d+\.png$/.test(f)) rmSync(join(OUT, f));
      await page.screenshot({ path: join(OUT, `${name}.png`), fullPage: true });
      const height = await page.evaluate(() => document.documentElement.scrollHeight);
      const n = Math.min(MAX_SEGMENTS, Math.ceil(height / vp.height));
      for (let i = 0; i < n; i++) {
        const y = i * vp.height;
        await page.screenshot({ path: join(OUT, `${name}-${i + 1}.png`), fullPage: true,
          clip: { x: 0, y, width: vp.width, height: Math.min(vp.height, height - y) } });
      }
      manifest[name] = { sig, url: p.path, vp: `${vp.width}×${vp.height}${vp.browser === "webkit" ? " WebKit" : ""}`,
        segments: n + (height > MAX_SEGMENTS * vp.height ? "+" : ""), date: new Date().toISOString().slice(0, 16).replace("T", " ") };
      console.log(`✓ .shots/${name}.png (${n} trozos)`);
    } catch (e) { failed++; console.error(`✗ ${url} (${v}): ${e.message.split("\n")[0]}`); }
    await ctx.close();
  }
} finally {
  for (const b of new Set(Object.values(browsers))) await b.close().catch(() => {});
  if (server) try { process.kill(-server.pid); } catch {}
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  writeIndex();
}
if (failed) { console.error(`${failed} captura(s) fallida(s).`); process.exitCode = 2; }
