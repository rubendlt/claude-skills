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
import { die, findPlaywright, browserPool, ensureServer, hideCss, dismissCookies, loadLazy } from "./lib.mjs";
import { readdirSync, existsSync, mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { execSync } from "node:child_process";
import { createHash } from "node:crypto";

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
const pw = findPlaywright(ROOT) ?? die("No encuentro Playwright: npx -y playwright install chromium webkit");
const { get: getBrowser, closeAll } = browserPool(pw);

// ---------- servidor ----------
const { server } = await ensureServer(cfg, ROOT);
const base = (cfg.baseUrl ?? "http://localhost:3000").replace(/\/$/, "");

// ---------- captura ----------
const HIDE = hideCss(cfg);

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
  await closeAll();
  if (server) try { process.kill(-server.pid); } catch {}
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  writeIndex();
}
if (failed) { console.error(`${failed} captura(s) fallida(s).`); process.exitCode = 2; }
