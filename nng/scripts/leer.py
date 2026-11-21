#!/usr/bin/env python3
"""Imprime un artículo de NN/g en texto limpio (títulos, párrafos, listas), para hacer su ficha.

Uso: python3 ~/.claude/skills/nng/scripts/leer.py <slug o URL>
"""
import html
import re
import sys
import urllib.request
from html.parser import HTMLParser

UA = {"User-Agent": "Mozilla/5.0 (local reader)"}


class Body(HTMLParser):
    BLOCK = {"p", "li", "h2", "h3", "h4", "tr", "blockquote", "figcaption"}
    SKIP = {"script", "style", "noscript", "svg"}

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.depth = 0  # profundidad de <div> dentro de .article-body (0 = fuera)
        self.skip = 0
        self.out, self.buf = [], []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if self.depth == 0:
            if tag == "div" and "article-body" in (a.get("class") or "").split():
                self.depth = 1
            return
        if tag == "div":
            self.depth += 1
        if tag in self.SKIP:
            self.skip += 1
        if tag in self.BLOCK:
            self.flush()
            self.buf.append({"h2": "## ", "h3": "### ", "h4": "#### ", "li": "- ", "blockquote": "> "}.get(tag, ""))
        if tag in ("td", "th"):
            self.buf.append(" | ")

    def handle_endtag(self, tag):
        if self.depth == 0:
            return
        if tag in self.SKIP:
            self.skip -= 1
        if tag in self.BLOCK:
            self.flush()
        if tag == "div":
            self.depth -= 1
            if self.depth == 0:
                self.flush()

    def handle_data(self, d):
        if self.depth and not self.skip:
            self.buf.append(d)

    def flush(self):
        t = " ".join("".join(self.buf).split())
        if t and t not in ("-", ">", "|"):
            self.out.append(t)
        self.buf = []


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    arg = sys.argv[1]
    slug = re.sub(r"^https?://www\.nngroup\.com/articles/|/$", "", arg)
    url = f"https://www.nngroup.com/articles/{slug}/"
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30) as r:
        h = r.read().decode("utf-8", "replace")
    title = re.search(r"<title>([^<]+)</title>", h)
    pub = re.search(r'"datePublished":\s*"([0-9-]{10})', h)
    mod = re.search(r'"dateModified":\s*"([0-9-]{10})', h)
    p = Body()
    p.feed(h)
    print(f"# {html.unescape(title.group(1)).removesuffix(' - NN/G') if title else slug}")
    print(f"{url} · publicado {pub.group(1) if pub else '?'} · actualizado {mod.group(1) if mod else '?'}\n")
    if not p.out:
        sys.exit("No se encontró el cuerpo del artículo (¿ha cambiado el marcado de NN/g?)")
    print("\n\n".join(p.out))


if __name__ == "__main__":
    main()
