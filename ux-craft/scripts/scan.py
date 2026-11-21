#!/usr/bin/env python3
"""Escáner de marcas de IA ("AI slop") en código de UI.

Busca candidatos con expresiones regulares en archivos de frontend (JSX/TSX,
Vue, Svelte, HTML, CSS, Tailwind config, React Native StyleSheet). No decide
nada: da una lista de sitios que hay que mirar con criterio.

Uso:
    python3 scan.py [rutas...] [--json] [--include-tests] [--max-per-rule N]
"""

import argparse
import json
import os
import re
import sys
from collections import Counter, defaultdict

EXTENSIONS = {
    ".tsx", ".jsx", ".ts", ".js", ".mjs", ".cjs", ".vue", ".svelte", ".astro",
    ".html", ".css", ".scss", ".sass", ".less", ".mdx",
}
SKIP_DIRS = {
    "node_modules", ".git", "dist", "build", ".next", ".expo", ".turbo", "out",
    "coverage", ".vercel", ".output", "ios", "android", "Pods", "vendor",
    "__pycache__", ".cache", "storybook-static",
}
TEST_HINTS = re.compile(r"(/__tests__/|/tests?/|\.test\.|\.spec\.|\.stories\.)")

# Emojis habituales como icono (excluye flechas y símbolos tipográficos).
EMOJI = re.compile(
    "[\U0001F300-\U0001F5FF\U0001F600-\U0001F64F\U0001F680-\U0001F6FF"
    "\U0001F900-\U0001F9FF\U0001FA70-\U0001FAFF☀-⛿✨✅❌⭐]"
)
STRING_OR_JSX_TEXT = re.compile(r"""(['"`])(?:(?!\1).)*\1|>[^<>{}]+<""")

# (id, categoría, descripción, regex, flags)
RULES = [
    # --- color ---
    ("purple-tailwind", "color", "Índigo/violeta/morado de Tailwind como color",
     r"\b(?:bg|text|border|ring|from|via|to|fill|stroke|outline|decoration|shadow|divide|accent|caret)-(?:indigo|violet|purple|fuchsia)-\d{2,3}\b", 0),
    ("purple-hex", "color", "Hex de índigo/violeta por defecto de Tailwind",
     r"#(?:6366f1|4f46e5|4338ca|818cf8|a5b4fc|8b5cf6|7c3aed|6d28d9|a78bfa|a855f7|9333ea|c084fc|d946ef)\b", re.I),
    ("gradient", "color", "Gradiente (¿decorativo o funcional?)",
     r"bg-gradient-to-|bg-linear-to-|bg-radial|linear-gradient\(|radial-gradient\(|conic-gradient\(|<LinearGradient\b", 0),
    ("gradient-text", "color", "Texto con gradiente",
     r"bg-clip-text|background-clip:\s*text|WebkitBackgroundClip|-webkit-background-clip:\s*text", 0),
    ("glow", "color", "Glow / sombra de color",
     r"shadow-(?:indigo|violet|purple|fuchsia|blue|cyan|sky|pink|emerald)-\d{2,3}|shadow-\[0_0_|box-shadow:\s*0\s+0\s+\d{2,}px|drop-shadow-\[0_0_", 0),
    ("glass", "color", "Blur / glassmorphism (¿nativo o por costumbre?)",
     r"backdrop-blur|backdrop-filter|<BlurView\b", 0),
    # --- tipografía ---
    ("font-default", "type", "Fuente por defecto de IA (Inter, Geist, Space Grotesk, Instrument Serif, Playfair, DM Sans, Plus Jakarta)",
     r"\b(?:Inter|Geist|Space[ _]Grotesk|Instrument[ _]Serif|Playfair[ _]Display|DM[ _]Sans|Plus[ _]Jakarta(?:[ _]Sans)?)\b", 0),
    ("serif-italic", "type", "Serif itálica de acento",
     r"font-serif[^\n\"'`]*\bitalic\b|\bitalic\b[^\n\"'`]*font-serif", 0),
    ("eyebrow", "type", "Eyebrow: mayúsculas + letter-spacing",
     r"\buppercase\b[^\n\"'`]*\btracking-(?:wide|wider|widest|\[)|\btracking-(?:wide|wider|widest|\[)[^\n\"'`]*\buppercase\b", 0),
    ("rn-uppercase", "type", "textTransform uppercase (RN/CSS); revisar si va con letterSpacing en cada sección",
     r"textTransform:\s*['\"]uppercase['\"]|text-transform:\s*uppercase", 0),
    ("thin-weight", "type", "Peso fino (100-300) en interfaz: legibilidad (claridad.md § 5)",
     r"\bfont-(?:thin|extralight|light)\b|fontWeight:\s*['\"]?[123]00\b|font-weight:\s*[123]00\b", 0),
    ("light-gray-text", "type", "Texto gris claro (300/400): ¿se tiene que leer? ¿contraste? (claridad.md § 5)",
     r"(?<!dark:)(?<![\w-])text-(?:gray|slate|zinc|neutral|stone)-(?:300|400)\b", 0),
    ("zero-padded", "type", "Número con cero delante como adorno (01, 02...)",
     r"""(?<![\w.:/#-])(['"`])0[1-9]\1|>\s*0[1-9]\s*[<.·/—-]|padStart\(\s*2\s*,\s*['"]0['"]\s*\)""", 0),
    # --- layout ---
    ("big-radius", "layout", "Radio grande por defecto (rounded-2xl/3xl)",
     r"\brounded-(?:2xl|3xl)\b", 0),
    ("big-shadow", "layout", "Sombra grande por defecto (shadow-lg/xl/2xl)",
     r"\bshadow-(?:lg|xl|2xl)\b", 0),
    ("left-border", "layout", "Borde izquierdo de color",
     r"\bborder-l-(?:2|4|8|\[\d+px\])\b|borderLeftWidth:\s*[2-6]\b|border-left:\s*[2-6]px\s+solid", 0),
    ("three-grid", "layout", "Grid de 3-4 columnas (¿tarjetas idénticas?)",
     r"\b(?:sm:|md:|lg:)?grid-cols-[34]\b", 0),
    ("page-container", "layout", "Contenedor centrado de ancho fijo (¿envuelve una pantalla de app?)",
     r"\bmx-auto\b[^\n\"'`]*\bmax-w-(?:5xl|6xl|7xl|screen-(?:lg|xl|2xl)|\[(?:9\d\d|1[0-5]\d\d)px\])"
     r"|\bmax-w-(?:5xl|6xl|7xl|screen-(?:lg|xl|2xl)|\[(?:9\d\d|1[0-5]\d\d)px\])[^\n\"'`]*\bmx-auto\b"
     r"|\bcontainer\b[^\n\"'`]*\bmx-auto\b|\bmx-auto\b[^\n\"'`]*\bcontainer\b"
     r"|(?<![(\w-])max-?[wW]idth:\s*['\"]?(?:9[6-9]\d|1[0-5]\d\d)(?:px)?\b", 0),
    ("pill-button", "layout", "Botón en pastilla (rounded-full con padding horizontal)",
     r"\brounded-full\b[^\n\"'`]*\bpx-(?:[4-9]|1\d)\b|\bpx-(?:[4-9]|1\d)\b[^\n\"'`]*\brounded-full\b", 0),
    ("pill-dot", "layout", "Punto de color diminuto (¿delante del texto de una pill/badge? slop.md § 2)",
     r"\brounded-full\b[^\n\"'`]*\b(?:size|h|w)-(?:1|1\.5|2|2\.5|\[[3-9]px\])(?![\w.\[])"
     r"|\b(?:size|h|w)-(?:1|1\.5|2|2\.5|\[[3-9]px\])(?![\w.\[])[^\n\"'`]*\brounded-full\b"
     r"|\bwidth:\s*[3-9]\s*,\s*height:\s*[3-9]\s*,\s*borderRadius:", 0),
    # --- motion ---
    ("transition-all", "motion", "transition-all (anima todo)",
     r"\btransition-all\b|transition:\s*all\b", 0),
    ("hover-lift", "motion", "Hover lift / scale por defecto",
     r"hover:-translate-y-|hover:scale-1(?:0[2-9]|10)|group-hover:scale-1", 0),
    ("decor-anim", "motion", "Animación decorativa (bounce/ping/pulse/spin)",
     r"\banimate-(?:bounce|ping|pulse|spin)\b", 0),
    ("in-view", "motion", "Animación al entrar en viewport",
     r"\bwhileInView\b|data-aos=|useInView\(|ScrollTrigger", 0),
    ("bouncy-ease", "motion", "Easing elástico / spring con rebote",
     r"cubic-bezier\(\s*0?\.\d+\s*,\s*1\.\d+|type:\s*['\"]spring['\"]|ease-elastic|easeOutBack|Easing\.(?:bounce|elastic|back)", 0),
    # --- contenido ---
    ("fake-stat", "content", "Cifra de marketing sospechosa (10k+, 99.9%, 4.9/5)",
     r"""(['"`>])[^'"`<]*\b(?:\d+(?:[.,]\d+)?[kKmM]\+|99[.,]9+\s?%|4[.,][89]\s?/\s?5)""", 0),
    ("placeholder-name", "content", "Nombre/empresa placeholder",
     r"\b(?:John Doe|Jane Doe|Acme(?: Corp| Inc)?|Lorem ipsum|Juan Pérez|Fulano)\b", re.I),
]

COPY_WORDS_EN = r"unlock|unleash|empower|elevate|supercharge|seamless(?:ly)?|effortless(?:ly)?|revolutioni[sz]e|game[- ]changer|next[- ]level|cutting[- ]edge|state[- ]of[- ]the[- ]art|streamline|all[- ]in[- ]one|say goodbye to|look no further"
COPY_WORDS_ES = r"potencia(?:r)? tu|impulsa(?:r)? tu|desbloquea|transforma(?:r)? tu|revoluciona|eleva(?:r)? tu|al siguiente nivel|a otro nivel|sin esfuerzo|de forma (?:sencilla|intuitiva|eficiente)|todo en un (?:solo|único) lugar|la mejor experiencia|diseñad[oa] para ti|olvídate de|experiencia única|de manera fácil y rápida"
COPY_RE = re.compile(rf"\b(?:{COPY_WORDS_EN}|{COPY_WORDS_ES})\b", re.I)

COMPILED = [(rid, cat, desc, re.compile(rx, fl)) for rid, cat, desc, rx, fl in RULES]
# padStart(2, '0') para horas/fechas (HH:MM, DD/MM) es formato, no adorno.
TIME_FORMAT = re.compile(r"get(?:Hours|Minutes|Seconds|Date|Month)|\b(?:hours?|minutes?|seconds?|hh|mm|ss)\b|[:/]\$\{|\}[:/]", re.I)
COMMENT_LINE = re.compile(r"^\s*(?://|/\*|\*|<!--|#)")


def iter_files(paths, include_tests):
    for root in paths:
        if os.path.isfile(root):
            yield root
            continue
        for dirpath, dirnames, filenames in os.walk(root):
            dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS and not d.startswith(".")]
            for name in filenames:
                path = os.path.join(dirpath, name)
                if os.path.splitext(name)[1] not in EXTENSIONS:
                    continue
                if name.endswith((".d.ts", ".min.js", ".min.css")):
                    continue
                if not include_tests and TEST_HINTS.search(path.replace(os.sep, "/")):
                    continue
                yield path


def scan_file(path):
    findings = []
    try:
        with open(path, encoding="utf-8") as fh:
            lines = fh.readlines()
    except (UnicodeDecodeError, OSError):
        return findings

    def add(rid, cat, desc, lineno, text):
        findings.append({"rule": rid, "category": cat, "description": desc,
                         "file": path, "line": lineno, "text": text.strip()[:160]})

    for i, line in enumerate(lines, 1):
        is_comment = bool(COMMENT_LINE.match(line))
        for rid, cat, desc, rx in COMPILED:
            if rid in ("font-default", "placeholder-name", "fake-stat") and is_comment:
                continue
            if rx.search(line):
                if rid == "zero-padded" and "padStart" in line and TIME_FORMAT.search(line):
                    continue
                add(rid, cat, desc, i, line)
        if is_comment:
            continue
        literals = [m.group(0) for m in STRING_OR_JSX_TEXT.finditer(line)]
        joined = " ".join(literals)
        if not joined:
            continue
        if EMOJI.search(joined):
            add("emoji", "content", "Emoji en texto de UI (¿icono decorativo o contenido/función?)", i, line)
        # Un '—' suelto es el marcador de valor vacío: no cuenta.
        if "—" in re.sub(r"""(['"`])\s*—\s*\1|>\s*—\s*<""", "", joined):
            add("em-dash", "content", "Em dash en texto de UI", i, line)
        if re.search(r"""(?:^|['"`>])\s*[●•]\s*\w""", joined):
            add("pill-dot-char", "content", "Punto (●/•) delante del texto de una etiqueta (slop.md § 2)", i, line)
        if "·" in joined:
            add("middle-dot", "content", "Punto medio uniendo metadatos (revisar cuántos hay en total)", i, line)
        # Solo en textos de varias palabras: 'unlock' suelto suele ser un nombre de icono.
        if any(" " in lit and COPY_RE.search(lit) for lit in literals):
            add("copy-cliche", "copy", "Copy genérico de IA", i, line)
    return findings


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("paths", nargs="*", default=["."])
    ap.add_argument("--json", action="store_true", help="salida JSON")
    ap.add_argument("--include-tests", action="store_true", help="incluir tests y stories")
    ap.add_argument("--max-per-rule", type=int, default=12, help="ejemplos por regla en el informe (0 = todos)")
    args = ap.parse_args()

    findings = []
    files = 0
    for path in iter_files(args.paths, args.include_tests):
        files += 1
        findings.extend(scan_file(path))

    by_cat = Counter(f["category"] for f in findings)
    by_rule = defaultdict(list)
    for f in findings:
        by_rule[(f["category"], f["rule"], f["description"])].append(f)

    if args.json:
        json.dump({"files_scanned": files, "total": len(findings),
                   "by_category": by_cat, "findings": findings}, sys.stdout, ensure_ascii=False, indent=2)
        print()
        return

    cats = ["color", "type", "layout", "motion", "content", "copy"]
    active = [c for c in cats if by_cat.get(c)]
    level = "bajo" if len(active) <= 2 else "medio" if len(active) <= 4 else "alto"
    print(f"AI slop scan: {files} archivos, {len(findings)} candidatos")
    print("Por categoría: " + " · ".join(f"{c} {by_cat.get(c, 0)}" for c in cats))
    print(f"Categorías presentes: {len(active)}/6, acumulación {level} (orientativo, revisar a mano)\n")

    order = {c: i for i, c in enumerate(cats)}
    for (cat, rid, desc), items in sorted(by_rule.items(), key=lambda kv: (order[kv[0][0]], -len(kv[1]))):
        files_hit = len({f["file"] for f in items})
        print(f"[{cat}] {desc}: {len(items)} en {files_hit} archivo(s)  ({rid})")
        shown = items if args.max_per_rule == 0 else items[: args.max_per_rule]
        for f in shown:
            print(f"    {f['file']}:{f['line']}  {f['text']}")
        if len(shown) < len(items):
            print(f"    … y {len(items) - len(shown)} más (usa --max-per-rule 0)")
        print()


if __name__ == "__main__":
    main()
