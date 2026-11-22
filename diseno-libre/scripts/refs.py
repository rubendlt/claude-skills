#!/usr/bin/env python3
"""Utilidades del arnés diseno-libre (solo biblioteca estándar + Playwright vía npx).

  refs.py bajar <manifiesto.json> <carpeta>
  refs.py lamina <salida.png> [--columnas N] <imagen>...
  refs.py puerta <carpeta-encargo> <brief|referentes|decision|cierre>
"""
import html
import json
import pathlib
import re
import shutil
import subprocess
import sys
import tempfile
import urllib.request

IMG = {".png", ".jpg", ".jpeg", ".webp"}


def die(msg, code=1):
    print(msg, file=sys.stderr)
    sys.exit(code)


def playwright_cmd():
    for cmd in (["npx", "--no-install", "playwright"], ["npx", "--yes", "playwright@1.65.1"]):
        try:
            r = subprocess.run(cmd + ["--version"], capture_output=True, text=True, timeout=120)
            if r.returncode == 0:
                return cmd
        except (OSError, subprocess.TimeoutExpired):
            pass
    die("No encuentro Playwright. Instálalo con: npx playwright install chromium")


def shot(pw, url, out, ancho, alto, pagina_entera):
    args = pw + ["screenshot", f"--viewport-size={ancho},{alto}", "--wait-for-timeout=1500"]
    if pagina_entera:
        args.append("--full-page")
    r = subprocess.run(args + [url, str(out)], capture_output=True, text=True, timeout=180)
    if r.returncode != 0:
        die(f"Falló la captura de {url} a {ancho}px:\n{r.stderr[-800:]}")
    print(out)


def slug(s):
    s = re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")
    return s or "ref"


# ---------------------------------------------------------------- bajar
def bajar(manifiesto, carpeta):
    items = json.loads(pathlib.Path(manifiesto).read_text())
    dest = pathlib.Path(carpeta)
    dest.mkdir(parents=True, exist_ok=True)
    fuentes = {}
    fallos = 0
    for it in items:
        nombre = slug(it["nombre"])
        req = urllib.request.Request(it["url"], headers={"User-Agent": "Mozilla/5.0 diseno-libre"})
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                data = r.read()
                tipo = r.headers.get("Content-Type", "")
        except Exception as e:  # noqa: BLE001
            print(f"✗ {nombre}: {e}", file=sys.stderr)
            fallos += 1
            continue
        ext = ".jpg" if "jpeg" in tipo else ".webp" if "webp" in tipo else ".png"
        out = dest / f"{nombre}{ext}"
        out.write_bytes(data)
        fuentes[out.name] = {k: v for k, v in it.items() if k != "url"}
        print(f"✓ {out}")
    meta = dest / "fuentes.json"
    previo = json.loads(meta.read_text()) if meta.exists() else {}
    previo.update(fuentes)
    meta.write_text(json.dumps(previo, ensure_ascii=False, indent=2))
    if fallos:
        die(f"{fallos} descargas fallaron", 2)


# ---------------------------------------------------------------- lamina
def lamina(salida, imagenes, columnas):
    imgs = [pathlib.Path(i).resolve() for i in imagenes]
    imgs = [i for i in imgs if i.suffix.lower() in IMG and i.name != pathlib.Path(salida).name]
    if not imgs:
        die("No hay imágenes para la lámina")
    meta = {}
    for carpeta in {i.parent for i in imgs}:
        f = carpeta / "fuentes.json"
        if f.exists():
            meta.update(json.loads(f.read_text()))
    celdas = []
    for i in imgs:
        m = meta.get(i.name, {})
        extra = " · ".join(x for x in (m.get("sector"), m.get("fuente")) if x)
        celdas.append(
            f'<figure><img src="{i.as_uri()}"><figcaption><b>{html.escape(i.name)}</b>'
            f'{" · " + html.escape(extra) if extra else ""}</figcaption></figure>'
        )
    ancho_col = 340
    doc = f"""<!doctype html><meta charset="utf-8"><style>
body{{margin:0;padding:24px;background:#f2f2f0;font:13px/1.35 -apple-system,system-ui,sans-serif;color:#222}}
main{{display:grid;grid-template-columns:repeat({columnas},{ancho_col}px);gap:20px;align-items:start}}
figure{{margin:0}} img{{width:100%;display:block;border-radius:6px;box-shadow:0 0 0 1px #0002}}
figcaption{{margin-top:6px;word-break:break-all}}</style><main>{''.join(celdas)}</main>"""
    tmp = pathlib.Path(tempfile.mkdtemp()) / "lamina.html"
    tmp.write_text(doc)
    pw = playwright_cmd()
    shot(pw, tmp.as_uri(), pathlib.Path(salida).resolve(), columnas * (ancho_col + 20) + 28, 900, True)
    shutil.rmtree(tmp.parent, ignore_errors=True)


# ---------------------------------------------------------------- puerta
APARTADOS_BRIEF = ["Encargo", "Usuario y momento", "Pregunta de la pantalla",
                   "Problemas a resolver", "Restricciones", "Sector y vecinos",
                   "Alcance de la investigación"]


def alcance(brief):
    """Lee los números que el agente declaró en el brief."""
    out = {}
    for clave in ("Referentes", "Vecinos", "Direcciones"):
        m = re.search(rf"^\s*{clave}:\s*(\d+)", brief or "", re.M)
        out[clave] = int(m.group(1)) if m else None
    return out


def puerta(carpeta, fase):
    c = pathlib.Path(carpeta)
    orden = ["brief", "referentes", "decision", "cierre"]
    if fase not in orden:
        die(f"Fase desconocida: {fase}. Usa una de: {', '.join(orden)}")
    fallos = []

    def leer(rel):
        p = c / rel
        return p.read_text() if p.exists() else None

    # brief
    b = leer("brief.md")
    if b is None:
        fallos.append("falta brief.md")
    else:
        for a in APARTADOS_BRIEF:
            m = re.search(rf"^##\s*{re.escape(a)}\s*\n(.*?)(?=^##\s|\Z)", b, re.M | re.S)
            if not m or len(m.group(1).strip()) < 10:
                fallos.append(f"brief.md: apartado «{a}» ausente o vacío")
    al = alcance(b)
    for k, v in al.items():
        if v is None and b is not None:
            fallos.append(f"brief.md: falta la línea «{k}: N» en el alcance")
    n_ref, n_vec, n_dir = al["Referentes"] or 0, al["Vecinos"] or 0, max(al["Direcciones"] or 3, 3)
    if al["Direcciones"] is not None and al["Direcciones"] < 3:
        fallos.append(f"brief.md: Direcciones: {al['Direcciones']}; el mínimo son 3 ideas")
    if b is not None and not re.search(r"^\s*Por qu[eé]:\s*\S", b, re.M):
        fallos.append("brief.md: el alcance no dice «Por qué: …»")

    if orden.index(fase) >= 1 and n_ref > 0:  # referentes
        r = c / "referentes"
        imgs = sorted(p for p in r.glob("*") if p.suffix.lower() in IMG and p.name != "lamina.png") if r.exists() else []
        if len(imgs) < n_ref:
            fallos.append(f"referentes/: {len(imgs)} capturas, el brief declara {n_ref} (cumple o corrige el alcance con su porqué)")
        if not (r / "lamina.png").exists():
            fallos.append("falta referentes/lamina.png (refs.py lamina)")
        f = leer("referentes/fichas.md")
        if f is None:
            fallos.append("falta referentes/fichas.md")
        else:
            sin = [p.name for p in imgs if p.name not in f]
            if sin:
                fallos.append(f"fichas.md no analiza: {', '.join(sin)}")
            vec = len(re.findall(r"^###.*vecin", f, re.M | re.I))
            if vec < n_vec:
                fallos.append(f"fichas.md: {vec} referentes vecinos, el brief declara {n_vec} (márcalos «sector vecino» en el título)")
            for campo in ("Mecanismo", "Tomar", "No tomar"):
                if len(re.findall(rf"\*\*{campo}:\*\*\s*\S", f)) < len(imgs):
                    fallos.append(f"fichas.md: alguna ficha sin «{campo}»")

    if orden.index(fase) >= 2:  # decision
        s = leer("sintesis.md")
        if s is None:
            fallos.append("falta sintesis.md")
        elif len(re.findall(r"^##\s*Direcci[oó]n", s, re.M)) < n_dir:
            fallos.append(f"sintesis.md: menos de {n_dir} direcciones («## Dirección …»), las que declara el brief")
        if leer("ideas.html") is None:
            fallos.append("falta ideas.html (la página de ideas que se publica como artifact)")
        d = leer("decision.md")
        if d is None:
            fallos.append("falta decision.md")
        else:
            if not re.search(r"Direcci[oó]n elegida:\s*\S", d):
                fallos.append("decision.md: falta «Dirección elegida: …»")
            if not re.search(r"^Artifact:\s*\S", d, re.M):
                fallos.append("decision.md: falta «Artifact: <url>» (o «Artifact: no disponible (motivo)»)")
            if not re.search(r"^- \[[ x]\]", d, re.M):
                fallos.append("decision.md: falta la lista de mecanismos a implementar (- [ ] …)")

    if orden.index(fase) >= 3:  # cierre
        v = c / "verificacion"
        if not v.exists() or not any(p.suffix.lower() in IMG for p in v.glob("*")):
            fallos.append("verificacion/: no hay capturas del resultado")
        if leer("verificacion/informe.md") is None:
            fallos.append("falta verificacion/informe.md")

    if fallos:
        print(f"✗ Puerta «{fase}» cerrada:")
        for x in fallos:
            print(f"  - {x}")
        sys.exit(1)
    print(f"✓ Puerta «{fase}» abierta")


# ---------------------------------------------------------------- main
def main(a):
    if not a or a[0] in ("-h", "--help"):
        print(__doc__)
        return
    cmd, rest = a[0], a[1:]
    if cmd == "bajar" and len(rest) == 2:
        bajar(*rest)
    elif cmd == "lamina" and len(rest) >= 2:
        cols = 4
        if "--columnas" in rest:
            i = rest.index("--columnas")
            cols = int(rest[i + 1])
            del rest[i:i + 2]
        lamina(rest[0], rest[1:], cols)
    elif cmd == "puerta" and len(rest) == 2:
        puerta(*rest)
    else:
        die(__doc__)


if __name__ == "__main__":
    main(sys.argv[1:])
