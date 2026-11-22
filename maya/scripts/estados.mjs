#!/usr/bin/env node
// Capturas para MAYA: páginas enteras de referentes y estados (normal / hover / foco) de elementos.
// Uso:
//   node estados.mjs pagina <carpeta> <url> [url…]
//   node estados.mjs hover  <carpeta> '[["nombre","url","selector"],…]'
//   node estados.mjs foco   <carpeta> '[["nombre","url","selector"],…]'
// Ejecutar desde cualquier sitio: busca Playwright en el proyecto, en los globales y en la caché de npx,
// y Chromium en ~/.cache/ms-playwright si el de la versión instalada no está.
import { createRequire } from "module";
import { existsSync, readdirSync, mkdirSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";
import { homedir } from "os";

const H = homedir();
function findPlaywright() {
  const roots = [join(process.cwd(), "node_modules")];
  for (const cmd of ["npm root -g", "pnpm root -g"]) {
    try { roots.push(execSync(cmd, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim()); } catch {}
  }
  const npx = join(H, ".npm/_npx");
  if (existsSync(npx)) for (const s of readdirSync(npx)) roots.push(join(npx, s, "node_modules"));
  for (const r of roots) for (const pkg of ["playwright", "playwright-core"])
    if (existsSync(join(r, pkg))) return createRequire(join(r, "x.js"))(pkg);
  return null;
}
async function launch(pw) {
  try { return await pw.chromium.launch(); } catch {
    const cache = process.env.PLAYWRIGHT_BROWSERS_PATH || join(H, process.platform === "darwin" ? "Library/Caches/ms-playwright" : ".cache/ms-playwright");
    const exe = existsSync(cache) && readdirSync(cache).filter((d) => /^chromium-\d+$/.test(d)).sort().reverse()
      .flatMap((d) => [join(cache, d, "chrome-linux64/chrome"), join(cache, d, "chrome-mac/Chromium.app/Contents/MacOS/Chromium")])
      .find(existsSync);
    if (!exe) throw new Error("Sin Chromium: npx -y playwright install chromium");
    return pw.chromium.launch({ executablePath: exe });
  }
}
async function dismissCookies(p) {
  for (const t of ["Aceptar", "Aceptar todo", "Aceptar todas", "Accept", "Accept all", "Rechazar", "Reject all"]) {
    const b = p.getByRole("button", { name: t, exact: true }).first();
    if (await b.isVisible().catch(() => false)) { await b.click().catch(() => {}); await p.waitForTimeout(300); return; }
  }
}
async function open(browser, url) {
  const p = await browser.newPage({ viewport: { width: 1366, height: 900 } });
  await p.goto(url, { waitUntil: "domcontentloaded", timeout: 25000 });
  await p.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
  await dismissCookies(p);
  return p;
}

const [mode, out, ...rest] = process.argv.slice(2);
if (!mode || !out) { console.error("Uso: estados.mjs pagina|hover|foco <carpeta> …"); process.exit(1); }
mkdirSync(out, { recursive: true });
const pw = findPlaywright();
if (!pw) { console.error("No encuentro Playwright: npx -y playwright install chromium"); process.exit(1); }
const browser = await launch(pw);

if (mode === "pagina") {
  for (const url of rest) {
    try {
      const p = await open(browser, url);
      for (let y = 0; y < 12000; y += 700) { await p.evaluate((v) => window.scrollTo(0, v), y); await p.waitForTimeout(120); }
      await p.evaluate(() => window.scrollTo(0, 0));
      const name = new URL(url).hostname.replace(/^www\./, "") + new URL(url).pathname.replace(/\/$/, "").replace(/\//g, "_");
      await p.screenshot({ path: join(out, `${name}.png`), fullPage: true });
      console.log("ok", name); await p.close();
    } catch (e) { console.log("fallo", url, e.message.split("\n")[0]); }
  }
} else {
  for (const [name, url, sel] of JSON.parse(rest[0])) {
    try {
      const p = await open(browser, url);
      const el = p.locator(sel).first();
      await el.scrollIntoViewIfNeeded({ timeout: 8000 }); await p.waitForTimeout(500);
      const box = await el.boundingBox();
      if (!box) throw new Error("elemento sin caja (oculto)");
      const vp = p.viewportSize();
      const clip = { x: Math.max(0, box.x - 12), y: Math.max(0, box.y - 12), width: Math.min(box.width + 24, vp.width), height: Math.min(box.height + 24, vp.height) };
      await p.mouse.move(2, 2); await p.waitForTimeout(250);
      await p.screenshot({ path: join(out, `${name}-0.png`), clip });
      if (mode === "hover") await el.hover({ timeout: 8000 }); else { await p.keyboard.press("Tab"); await el.focus(); }
      await p.waitForTimeout(450);
      await p.screenshot({ path: join(out, `${name}-1.png`), clip });
      console.log("ok", name); await p.close();
    } catch (e) { console.log("fallo", name, e.message.split("\n")[0]); }
  }
  console.log(`Montaje: magick ${out}/X-0.png ${out}/X-1.png -resize x260 +append …  (normal | ${mode})`);
}
await browser.close();
