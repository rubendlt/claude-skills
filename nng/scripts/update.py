#!/usr/bin/env python3
"""Construye o refresca el índice local de artículos de Nielsen Norman Group.

Solo guarda metadatos (título, descripción, fechas, temas, URL), nunca el texto.
Es incremental: solo vuelve a descargar los artículos cuyo `lastmod` del sitemap
ha cambiado. Al final avisa de las fichas cuyo artículo se ha actualizado.

Uso: python3 ~/.claude/skills/nng/scripts/update.py [--full]
"""
import concurrent.futures as cf
import csv
import html
import json
import re
import sys
import time
import urllib.request
from pathlib import Path

SKILL = Path(__file__).resolve().parent.parent
INDEX = SKILL / "index.tsv"
TOPICS = SKILL / "temas.md"
FICHAS = SKILL / "fichas"
BASE = "https://www.nngroup.com"
UA = {"User-Agent": "Mozilla/5.0 (local index builder)"}
FIELDS = ["slug", "titulo", "publicado", "actualizado", "temas", "etiquetas", "descripcion", "lastmod"]


def get(url, tries=3):
    for i in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30) as r:
                return r.read().decode("utf-8", "replace")
        except Exception:
            if i == tries - 1:
                raise
            time.sleep(2 * (i + 1))


def meta(slug):
    h = get(f"{BASE}/articles/{slug}/")
    t = re.search(r"<title>([^<]+)</title>", h)
    d = re.search(r'name="description" content="([^"]*)"', h)
    pub = re.search(r'"datePublished":\s*"([0-9-]{10})', h)
    mod = re.search(r'"dateModified":\s*"([0-9-]{10})', h)
    # Temas: los enlaces de «Related Topics» (barra lateral, después del cuerpo).
    topics = []
    for s, name in re.findall(r'class="ga-article-related-topic" href="/topic/([^/"]+)/"[^>]*>\s*([^<]+?)\s*<', h):
        if s not in [x[0] for x in topics]:
            topics.append((s, html.unescape(name)))
    # Etiquetas finas (temas + palabras clave internas de NN/g), buenas para buscar.
    tags = re.search(r'id="gaDataAllTopics"[^>]*>([^<]*)<', h)
    title = html.unescape(t.group(1)).removesuffix(" - NN/G").strip() if t else slug
    clean = lambda s: " ".join(html.unescape(s).split())
    return {
        "slug": slug,
        "titulo": clean(title),
        "publicado": pub.group(1) if pub else "",
        "actualizado": mod.group(1) if mod else "",
        "temas": json.dumps(topics, ensure_ascii=False),
        "etiquetas": clean(tags.group(1)) if tags else "",
        "descripcion": clean(d.group(1)) if d else "",
    }


def load():
    if not INDEX.exists():
        return {}
    with INDEX.open(newline="") as f:
        return {r["slug"]: r for r in csv.DictReader(f, delimiter="\t")}


def main():
    full = "--full" in sys.argv
    sm = get(f"{BASE}/sitemap.xml")
    live = dict(re.findall(r"<loc>https://www\.nngroup\.com/articles/([^/<]+)/</loc><lastmod>([^<]+)</lastmod>", sm))
    old = load()
    todo = [s for s, lm in live.items() if full or s not in old or old[s].get("lastmod") != lm]
    print(f"Sitemap: {len(live)} artículos · a descargar: {len(todo)}", flush=True)

    rows = {s: r for s, r in old.items() if s in live}
    fails = []
    with cf.ThreadPoolExecutor(max_workers=4) as ex:
        futs = {ex.submit(meta, s): s for s in todo}
        for n, fu in enumerate(cf.as_completed(futs), 1):
            s = futs[fu]
            try:
                r = fu.result()
                r["lastmod"] = live[s]
                rows[s] = r
            except Exception as e:
                fails.append(f"{s}: {e}")
            if n % 100 == 0:
                print(f"  {n}/{len(todo)}", flush=True)

    ordered = sorted(rows.values(), key=lambda r: r.get("actualizado") or r.get("publicado") or "", reverse=True)
    with INDEX.open("w", newline="") as f:
        w = csv.DictWriter(f, FIELDS, delimiter="\t", extrasaction="ignore", lineterminator="\n")
        w.writeheader()
        w.writerows(ordered)

    # temas.md: el índice organizado como NN/g, por tema, del más reciente al más antiguo.
    by = {}
    for r in ordered:
        for s, name in json.loads(r["temas"] or "[]"):
            by.setdefault((name, s), []).append(r)
    out = ["# NN/g por temas", "", f"{len(ordered)} artículos en {len(by)} temas. Cada línea: `slug` · título · actualizado.", ""]
    out += [f"- [{name}](#{s}) ({len(v)})" for (name, s), v in sorted(by.items())]
    for (name, s), v in sorted(by.items()):
        out += ["", f'## {name} <a id="{s}"></a>', ""]
        out += [f"- `{r['slug']}` · {r['titulo']} · {r['actualizado'] or r['publicado']}" for r in v]
    TOPICS.write_text("\n".join(out) + "\n")

    # Fichas cuyo artículo ha cambiado desde que se resumió.
    stale = []
    for p in sorted(FICHAS.glob("*.md")):
        m = re.search(r"^actualizado:\s*(\S+)", p.read_text(), re.M)
        r = rows.get(p.stem)
        if r is None:
            stale.append(f"{p.stem} (ya no está en NN/g)")
        elif m and r["actualizado"] and r["actualizado"] > m.group(1):
            stale.append(f"{p.stem} (NN/g lo actualizó el {r['actualizado']})")

    (SKILL / "VERSION").write_text(time.strftime("%Y-%m-%d") + f" · {len(ordered)} artículos\n")
    print(f"Índice: {len(ordered)} artículos, {len(by)} temas.")
    if ordered and not by:
        print("AVISO: ningún artículo trae temas; NN/g ha cambiado el marcado, revisar meta().")
    if fails:
        print(f"Fallos ({len(fails)}), se reintentan en la próxima pasada:\n  " + "\n  ".join(fails[:20]))
    if stale:
        print("Fichas a revisar:\n  " + "\n  ".join(stale))


if __name__ == "__main__":
    main()
