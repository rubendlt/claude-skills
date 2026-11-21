#!/usr/bin/env node
// Descarga Material Design 3 (m3.material.io) a markdown local.
// La web es una SPA Angular: el contenido de cada página está en
// /_dsm/content/m3/<carbonVersion>/<exportedCarbonFileId>, listado en el bundle main.*.js.
// Uso: node scripts/update.mjs   (desde cualquier sitio; escribe junto a SKILL.md)
import { mkdir, writeFile, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = "https://m3.material.io";
// Secciones que se guardan (XR, develop y blog fuera: no aplican a web/app y engordan).
const KEEP = /^(foundations|styles|components)\//;
const SKIP = /^foundations\/(xr|adaptive-design\/(foldables))/;

const get = async (url, as = "text") => {
  const r = await fetch(url, { headers: { "user-agent": "m3-skill-update" } });
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return as === "json" ? r.json() : r.text();
};

const decode = (s) =>
  s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n));

const inline = (h) =>
  decode(
    h
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, t) => (t.trim() ? `**${t.trim()}**` : ""))
      .replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, t) => (t.trim() ? `*${t.trim()}*` : ""))
      .replace(/<code\b[^>]*>([\s\S]*?)<\/code>/gi, "`$1`")
      .replace(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, t) => {
        const url = href.startsWith("/") ? BASE + href : href;
        return t.trim() ? `[${t.trim()}](${url})` : "";
      })
      .replace(/<[^>]+>/g, "")
  )
    .replace(/[ \t]+/g, " ")
    .trim();

function htmlToMd(html) {
  let h = html.replace(/\r?\n/g, " ");
  // Tablas → markdown
  h = h.replace(/<table\b[\s\S]*?<\/table>/gi, (t) => {
    const rows = [...t.matchAll(/<tr\b[\s\S]*?<\/tr>/gi)].map((r) =>
      [...r[0].matchAll(/<t[hd]\b[^>]*>([\s\S]*?)<\/t[hd]>/gi)].map((c) => inline(c[1]).replace(/\|/g, "\\|"))
    );
    if (!rows.length) return "";
    const n = Math.max(...rows.map((r) => r.length));
    const line = (r) => `| ${Array.from({ length: n }, (_, i) => r[i] ?? "").join(" | ")} |`;
    return `\n\n${line(rows[0])}\n|${" --- |".repeat(n)}\n${rows.slice(1).map(line).join("\n")}\n\n`;
  });
  // Listas: se convierten de la más interna a la más externa; las internas quedan
  // como líneas marcadas con \u0001 que la externa sangra.
  const INNER = /<(ul|ol)\b[^>]*>((?:(?!<(?:ul|ol)\b)[\s\S])*?)<\/\1>/i;
  while (INNER.test(h)) {
    h = h.replace(INNER, (_, tag, body) => {
      let i = 0;
      const items = [...body.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)].map((m) => {
        const [text, ...nested] = m[1].split("\u0001");
        const mark = tag.toLowerCase() === "ol" ? `${++i}.` : "-";
        const sub = nested.map((l) => l.trim()).filter(Boolean).map((l) => "\u0001  " + l.replace(/^\u0002/, ""));
        return [`${mark} ${inline(text)}`, ...sub].join("");
      });
      return "\u0001" + items.join("\u0001");
    });
  }
  h = h.replace(/((?:\u0001[^\u0001<]*)+)/g, (m) => "\n\n" + m.split("\u0001").filter(Boolean).join("\n") + "\n\n");
  h = h
    .replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_, n, t) => `\n\n${"#".repeat(Math.min(+n + 1, 6))} ${inline(t)}\n\n`)
    .replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, (_, t) => `\n\n${inline(t)}\n\n`)
    .replace(/<blockquote\b[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, t) => `\n\n> ${inline(t)}\n\n`);
  // Lo que quede suelto, como texto inline (sin tocar líneas ya en markdown)
  return h
    .split("\n")
    .map((l) => (/<[a-z/][^>]*>/i.test(l) ? inline(l) : decode(l)))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function pageToMd(page, route, version) {
  const out = [
    "---",
    `title: ${JSON.stringify(page.title)}`,
    `source: ${BASE}/${route.slug}`,
    `updated: ${page.updatedTimestamp ?? ""}`,
    `content_version: ${version}`,
    "---",
    "",
    `# ${page.title}`,
    "",
  ];
  if (page.description) out.push(inline(page.description), "");
  const multi = page.sections.filter((s) => s.isVisible !== false).length > 1;
  for (const s of page.sections) {
    if (s.isVisible === false) continue;
    if (multi) out.push(`## ${s.name}  (${BASE}/${route.slug}/${s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")})`, "");
    for (const b of s.contentBlocks ?? []) {
      if (b.isHidden) continue;
      if (b.title) out.push(`### ${inline(b.title)}`, "");
      if (b.description) out.push(htmlToMd(b.description), "");
      for (const c of b.contentChunks ?? []) {
        const t = c.contentChunkType;
        if (t === "TEXT" && c.htmlValue) out.push(htmlToMd(c.htmlValue), "");
        else if (t === "IMAGE" || t === "VIDEO") {
          const alt = (c.altText || "").trim();
          const cap = c.footer ? htmlToMd(c.footer).replace(/\s*\n+\s*/g, "; ") : "";
          const mod = c.captionModifier && c.captionModifier !== "NONE" ? `**${c.captionModifierCustomName || c.captionModifier}**` : "";
          const parts = [mod, cap].filter(Boolean).join(" ");
          if (alt || parts) out.push(`> [${t === "VIDEO" ? "vídeo" : "imagen"}]${alt ? " " + alt : ""}${parts ? (alt ? " — " : " ") + parts : ""}`, "");
        } else if (c.snippetCode) out.push("```" + (c.snippetLanguage || ""), c.snippetCode.trim(), "```", "");
        else if (t === "RESOURCE" && c.linkUrl) out.push(`- Recurso: [${inline(c.resourceName || c.linkUrl)}](${c.linkUrl})`, "");
      }
      if (b.tokenSets?.length) out.push(`*Tokens (ver specs en la web):* ${b.tokenSets.join(", ")}`, "");
    }
  }
  return out.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}

// --- main
const html = await get(BASE + "/");
const mainJs = html.match(/\/static\/angular\/main\.[a-f0-9]+\.js/)?.[0];
if (!mainJs) throw new Error("No encuentro main.*.js en la home de m3.material.io");
const js = await get(BASE + mainJs);
const version = js.match(/carbonVersion:"([^"]+)"/)?.[1];
const manifestRaw = [...js.matchAll(/JSON\.parse\('(\{"v":\[[\s\S]*?\]\})'\)/g)].map((m) => m[1]).find((m) => m.includes("exportedCarbonFileId"));
if (!version || !manifestRaw) throw new Error("No encuentro carbonVersion o el manifiesto de páginas");
const routes = JSON.parse(manifestRaw.replace(/\\'/g, "'")).v.filter((r) => r.exportedCarbonFileId && KEEP.test(r.slug) && !SKIP.test(r.slug));

for (const d of ["foundations", "styles", "components"]) await rm(join(ROOT, d), { recursive: true, force: true });
const index = [];
let ok = 0;
const queue = [...routes];
await Promise.all(
  Array.from({ length: 6 }, async () => {
    for (let r; (r = queue.shift()); ) {
      try {
        const page = await get(`${BASE}/_dsm/content/m3/${version}/${r.exportedCarbonFileId}`, "json");
        const file = join(ROOT, `${r.slug}.md`);
        await mkdir(dirname(file), { recursive: true });
        const md = pageToMd(page, r, version);
        await writeFile(file, md);
        index.push({ slug: r.slug, title: page.title, kb: Math.round(md.length / 1024) });
        ok++;
      } catch (e) {
        console.error(`FALLO ${r.slug}: ${e.message}`);
      }
    }
  })
);
index.sort((a, b) => a.slug.localeCompare(b.slug));
await writeFile(
  join(ROOT, "INDEX.md"),
  `# Índice de páginas (${ok})\n\nGenerado por scripts/update.mjs. Ruta del archivo = slug + .md\n\n| Archivo | Título | KB |\n|---|---|---|\n` +
    index.map((p) => `| \`${p.slug}.md\` | ${p.title} | ${p.kb} |`).join("\n") +
    "\n"
);
await writeFile(join(ROOT, "VERSION"), `${version} (descargado ${new Date().toISOString().slice(0, 10)})\n`);
console.error(`OK ${ok}/${routes.length} páginas · versión ${version}`);
