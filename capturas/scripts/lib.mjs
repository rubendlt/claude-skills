// Piezas comunes de shots.mjs y variantes.mjs: buscar Playwright, abrir navegadores, arrancar el servidor
// del proyecto, quitar el banner de cookies y cargar las imágenes diferidas.
import { createRequire } from "node:module";
import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { homedir, platform } from "node:os";
import { execSync, spawn } from "node:child_process";

const H = homedir();
const MAC = platform() === "darwin";

export function die(m) { console.error(m); process.exit(1); }

export function findPlaywright(root) {
  const roots = [join(root, "node_modules")];
  try { roots.push(execSync("npm root -g", { encoding: "utf8" }).trim()); } catch {}
  try { roots.push(execSync("pnpm root -g", { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim()); } catch {}
  const npx = join(H, ".npm/_npx");
  if (existsSync(npx)) for (const s of readdirSync(npx)) roots.push(join(npx, s, "node_modules"));
  for (const r of roots) for (const pkg of ["playwright", "playwright-core"])
    if (existsSync(join(r, pkg))) return createRequire(join(r, "x.js"))(pkg);
  return null;
}

export function browserPool(pw) {
  const browsers = {};
  async function get(name) {
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
        browsers[name] = await get("chromium");
      }
    }
    return browsers[name];
  }
  const closeAll = () => Promise.all([...new Set(Object.values(browsers))].map((b) => b.close().catch(() => {})));
  return { get, closeAll };
}

/** Devuelve el proceso del servidor si hubo que arrancarlo (para matarlo al acabar), o undefined. */
export async function ensureServer(cfg, root) {
  const base = (cfg.baseUrl ?? "http://localhost:3000").replace(/\/$/, "");
  const up = async () => { try { const r = await fetch(base, { signal: AbortSignal.timeout(3000) }); return r.status < 500; } catch { return false; } };
  if (await up()) return { base };
  if (!cfg.start) die(`${base} no responde y shots.config.json no tiene "start". Arranca el servidor y repite.`);
  console.log(`Arrancando: ${cfg.start}`);
  const server = spawn(cfg.start, { cwd: root, shell: true, stdio: "ignore", detached: true });
  const t0 = Date.now();
  while (!(await up())) {
    if (Date.now() - t0 > 180000) { process.kill(-server.pid); die(`${base} no respondió en 3 min.`); }
    await new Promise((r) => setTimeout(r, 1000));
  }
  return { base, server };
}

export const hideCss = (cfg) => "nextjs-portal, [data-nextjs-toast], #vite-error-overlay, #__next-build-watcher { display: none !important; }"
  + (cfg.hideSelectors?.length ? `${cfg.hideSelectors.join(",")} { display: none !important; }` : "");

export async function dismissCookies(page) {
  for (const re of [/^(rechazar|reject|decline|deny|denegar)/i, /^(aceptar|accept|agree|allow|entendido|ok)$/i]) {
    const btn = page.getByRole("button", { name: re }).first();
    if (await btn.isVisible({ timeout: 800 }).catch(() => false)) { await btn.click({ timeout: 2000 }).catch(() => {}); return; }
  }
}

export async function loadLazy(page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight) {
      window.scrollTo({ top: y, behavior: "instant" }); await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo({ top: 0, behavior: "instant" }); await new Promise((r) => setTimeout(r, 200));
  }).catch(() => {});
  await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
  await page.evaluate(() => document.fonts?.ready).catch(() => {});
}

/** Espera a las imágenes que falten, con techo: una imagen diferida fuera de pantalla nunca dispara onload. */
export async function settleImages(page, ms = 3000) {
  await page.evaluate((ms) => Promise.race([
    new Promise((r) => setTimeout(r, ms)),
    Promise.all([...document.images].filter((i) => !i.complete).map((i) => new Promise((r) => { i.onload = i.onerror = r; }))),
  ]), ms).catch(() => {});
}
