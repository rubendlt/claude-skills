#!/usr/bin/env node
// Captura referentes en escritorio (1440×900) y móvil (390×844).
// Uso: node capture.mjs <carpeta_salida> <url> [url...]
// Busca Playwright en node_modules del cwd o en la caché de npx, y Chromium en ~/.cache/ms-playwright.
import { createRequire } from "node:module";
import { readdirSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { homedir } from "node:os";

const H = homedir();
const roots = [join(process.cwd(), "node_modules")];
const npx = join(H, ".npm/_npx");
if (existsSync(npx)) for (const d of readdirSync(npx)) roots.push(join(npx, d, "node_modules"));
const root = roots.find((r) => existsSync(join(r, "playwright")) || existsSync(join(r, "playwright-core")));
if (!root) { console.error("No encuentro Playwright: npx -y playwright --version"); process.exit(1); }
const req = createRequire(join(root, "x.js"));
const { chromium } = existsSync(join(root, "playwright")) ? req("playwright") : req("playwright-core");

const cache = join(H, ".cache/ms-playwright");
const chrome = readdirSync(cache).filter((d) => /^chromium-\d+$/.test(d)).sort().reverse()
  .map((d) => join(cache, d, "chrome-linux64/chrome")).find(existsSync);

const [out, ...urls] = process.argv.slice(2);
if (!out || !urls.length) { console.error("Uso: node capture.mjs <salida> <url>..."); process.exit(1); }
mkdirSync(out, { recursive: true });

const browser = await chromium.launch(chrome ? { executablePath: chrome } : {});
const views = { desk: { width: 1440, height: 900 }, movil: { width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 } };
for (const url of urls) {
  const slug = new URL(url).hostname.replace(/^www\./, "") + new URL(url).pathname.replace(/\/$/, "").replace(/\W+/g, "-");
  for (const [name, vp] of Object.entries(views)) {
    const { isMobile, deviceScaleFactor, ...viewport } = vp;
    const ctx = await browser.newContext({ viewport, isMobile, deviceScaleFactor, locale: "es-ES" });
    const page = await ctx.newPage();
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 30000 }).catch(() => page.waitForLoadState("load"));
      const file = join(out, `${slug}-${name}.png`);
      await page.screenshot({ path: file, fullPage: false });
      console.log(file);
    } catch (e) { console.error(`✗ ${url} (${name}): ${e.message.split("\n")[0]}`); }
    await ctx.close();
  }
}
await browser.close();
