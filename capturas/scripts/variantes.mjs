#!/usr/bin/env node
// Antes y después reales: abre la web local, captura una zona, aplica un cambio en el navegador (CSS o JS, sin
// tocar el código) y vuelve a capturar la misma zona. También sirve para estados que shots.mjs no ve (menú
// abierto, página bajada, error de formulario) con `only: true`.
// Uso (desde la raíz del proyecto):
//   node ~/.claude/skills/capturas/scripts/variantes.mjs <archivo.mjs> [--only a,b] [--out dir]
// El archivo exporta una lista (ver SKILL.md → Variantes):
//   export default [{ name, path, vp?, prepare?, region?, css?, apply?, only? }]
// Salida (por defecto .shots/variantes/): <name>-antes.png y <name>-despues.png (o solo -antes con only: true).
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { die, findPlaywright, browserPool, ensureServer, hideCss, dismissCookies, loadLazy, settleImages } from "./lib.mjs";

const ROOT = process.cwd();
const args = process.argv.slice(2);
const opt = (f) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : undefined; };
const file = args.find((a, i) => !a.startsWith("--") && !["--only", "--out"].includes(args[i - 1]));
if (!file) die("Falta el archivo de variantes: variantes.mjs <archivo.mjs>");
const only = opt("--only")?.split(",");
const OUT = resolve(opt("--out") ?? join(ROOT, ".shots/variantes"));

const cfgPath = join(ROOT, "shots.config.json");
const cfg = existsSync(cfgPath) ? JSON.parse(readFileSync(cfgPath, "utf8")) : {};
const viewports = cfg.viewports ?? { movil: { width: 375, height: 812, mobile: true }, desk: { width: 1366, height: 768 } };
const defaultVp = Object.keys(viewports).find((v) => !viewports[v].mobile) ?? Object.keys(viewports)[0];

const variants = (await import(pathToFileURL(resolve(file)).href)).default.filter((v) => !only || only.includes(v.name));
if (!variants.length) die("No hay variantes que capturar.");

const pw = findPlaywright(ROOT) ?? die("No encuentro Playwright: npx -y playwright install chromium");
const { get, closeAll } = browserPool(pw);
const { base, server } = await ensureServer(cfg, ROOT);
mkdirSync(OUT, { recursive: true });

// Zona a capturar en coordenadas de documento. region: { selector, pad=40, height } | { y, height } | nada (pantalla).
async function zone(page, region, vp) {
  if (!region) return { y: await page.evaluate(() => scrollY), height: vp.height };
  if (region.selector) {
    const top = await page.evaluate(({ selector, pad }) => {
      const el = document.querySelector(selector);
      return el ? Math.max(0, el.getBoundingClientRect().top + scrollY - pad) : null;
    }, { selector: region.selector, pad: region.pad ?? 40 });
    if (top === null) throw new Error(`no encuentro ${region.selector}`);
    return { y: top, height: region.height ?? vp.height };
  }
  return { y: region.y ?? 0, height: region.height ?? vp.height };
}
async function shot(page, name, region, vp) {
  const { y, height } = await zone(page, region, vp);
  const docH = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.screenshot({ path: join(OUT, `${name}.png`), fullPage: true, clip: { x: 0, y, width: vp.width, height: Math.min(height, docH - y) } });
}

let failed = 0;
try {
  for (const v of variants) {
    const vp = viewports[v.vp ?? defaultVp] ?? die(`Viewport «${v.vp}» no está en shots.config.json`);
    const browser = await get(vp.browser ?? "chromium");
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height }, locale: cfg.locale ?? "es-ES",
      isMobile: !!vp.mobile && (vp.browser ?? "chromium") === "chromium", hasTouch: !!vp.mobile,
      deviceScaleFactor: vp.scale ?? 1, reducedMotion: "reduce",
    });
    const page = await ctx.newPage();
    try {
      await page.goto(base + v.path, { waitUntil: "networkidle", timeout: 90000 }).catch(() => page.waitForLoadState("load"));
      await page.addStyleTag({ content: hideCss(cfg) }).catch(() => {});
      await dismissCookies(page);
      await loadLazy(page);
      if (v.prepare) { await v.prepare(page); await settleImages(page); }
      await shot(page, `${v.name}-antes`, v.region, vp);
      if (!v.only) {
        if (v.css) await page.addStyleTag({ content: v.css });
        if (v.apply) await page.evaluate(v.apply);
        await settleImages(page);
        await page.waitForTimeout(300);
        await shot(page, `${v.name}-despues`, v.region, vp);
      }
      console.log(`✓ ${v.name}`);
    } catch (e) {
      failed++;
      console.error(`✗ ${v.name}: ${process.env.DEBUG ? e.message : e.message.split("\n")[0]}`);
    } finally {
      await ctx.close();
    }
  }
} finally {
  await closeAll();
  if (server) try { process.kill(-server.pid); } catch {}
}
console.log(`Salida: ${OUT}${failed ? ` · ${failed} con error` : ""}`);
process.exit(failed ? 1 : 0);
