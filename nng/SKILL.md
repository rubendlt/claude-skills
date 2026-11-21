---
name: nng
description: "Consulta de datos: índice local de los ~1.750 artículos de Nielsen Norman Group (título, descripción, fechas, temas, URL) y fichas de los ya leídos. USAR solo cuando haga falta evidencia de usabilidad: una valoración o decisión de UX, copy o conversión con alternativas reales o duda, una afirmación que haya que respaldar o comprobar con datos, cuando el usuario mencione NN/g o Nielsen, o cuando investigar, ux-craft o diseno-libre pidan investigación de usabilidad. Sustituye a buscar NN/g en internet. NO usar en edits mecánicos, ajustes menores (una palabra, un margen), dudas técnicas ni temas ya decididos o estudiados en el proyecto."
argument-hint: "[tema o pregunta]"
---

# NN/g (índice local)

Nielsen Norman Group publica investigación de usabilidad con usuarios reales desde 1998. Aquí está **su catálogo de artículos, no sus textos**: el índice dice qué artículo responde y dónde está; las fichas guardan lo ya leído. Nada de Google para NN/g: la búsqueda web mezcla informes de pago, el blog personal de Jakob Nielsen (UX Tigers, Substack), versiones viejas y copias de terceros.

## Cuándo sí y cuándo no

La pregunta para decidir: **¿cambiaría la respuesta con lo que ha medido NN/g?**

- **Sí:** elegir entre dos patrones (menú, filtros, formulario, orden de una página), valorar si algo se entiende o convierte, respaldar una regla que se va a imponer, comprobar una cifra que se atribuye a NN/g.
- **No:** aplicar algo ya decidido (`CLAUDE.md`, `DECISIONES.md`, memoria), retocar un margen o una palabra, una duda técnica, algo que ya cubre una ficha citada en el proyecto. En esos casos no se carga.
- Una consulta típica es corta: 1 `rg` a fichas, 1 al índice y, solo si no hay ficha, 1 artículo. Más de 3 artículos por pregunta solo en una investigación completa.

## Archivos

| Archivo | Qué es | Cómo se lee |
|---|---|---|
| `fichas/<slug>.md` | Resumen de un artículo ya leído: hallazgos, datos, fecha, URL | Entero; es corto |
| `index.tsv` | Todos los artículos: `slug`, `titulo`, `publicado`, `actualizado`, `temas`, `descripcion`, `lastmod` | **Nunca entero.** Solo con `rg` |
| `temas.md` | El mismo índice organizado como NN/g, por tema (Forms, Navigation, Search…), del más reciente al más antiguo | Lista de temas arriba; luego `rg -A` sobre el tema |
| `scripts/leer.py <slug>` | Descarga un artículo y lo imprime en texto limpio | Para hacer una ficha |
| `scripts/update.py` | Refresca el índice desde el sitemap (incremental) y avisa de fichas viejas | Si el índice tiene más de ~2 meses (`VERSION`) |

## Cómo consultar

1. **Fichas primero.** `rg -il "<término en inglés>" fichas/` (los títulos y fichas están en inglés o citan el inglés). Si una ficha responde, cítala y para aquí.
2. **Índice.** Busca con 2-3 sinónimos en inglés a la vez, sin mayúsculas:
   `rg -i "contact|get in touch" index.tsv | cut -f1-4,6 | head -30`
   o por tema: `rg -n "^## " temas.md` para ver los temas y `rg -A40 'id="navigation"' temas.md`.
   Usa `-w` con palabras cortas (`rg -iw "forms?"`) para no pescar *format*, *information*… La columna `etiquetas` trae palabras clave internas de NN/g y también se busca.
   NN/g no tiene tema «Forms» ni «Errors»: están en *Application Design* e *Interaction Design*; búscalos por palabra. Los de público concreto: `senior|older adults`, `b2b`, `low literacy`.
   **Descarta los `[APRIL FOOLS]`** (artículos de broma, hay una docena).
   Elige por título y descripción. Ante dos parecidos, **el más reciente** (`actualizado`) salvo que el antiguo sea el estudio original con los datos.
3. **Leer.** `python3 scripts/leer.py <slug>` (una descarga, sin buscar). Si el artículo es largo, lee entero igualmente: los datos suelen ir al final.
4. **Guardar la ficha** en `fichas/<slug>.md` con la plantilla de abajo, siempre que lo leído se haya usado. Así el tema no vuelve a costar una descarga.
5. **Responder** citando: `NN/g, «Título» (año) → hallazgo`. Separa lo que dice NN/g de tu criterio.

Si el índice no tiene nada, dilo («NN/g no tiene artículo sobre X») antes de pasar a otras fuentes. No inventes un artículo ni una cifra de NN/g que no hayas leído en esta sesión o en una ficha.

## Cómo leer a NN/g

- **Qué pesa más:** estudios con método y n (eyetracking, test cuantitativo, benchmark) > estudios cualitativos con varios participantes > guías y definiciones. Las 10 heurísticas son principios, no datos.
- **Fecha.** `publicado` es el estudio; `actualizado` puede ser solo un retoque. Si el hallazgo es de antes de 2015 y trata de móvil, iconos o patrones de interfaz, búscale versión más reciente.
- **Los informes (`/reports/`) son de pago:** no se citan cifras que solo estén en el informe; el artículo que lo resume sí.
- **Público.** Muchos estudios son de EE. UU. y con usuarios generales; si el proyecto tiene público específico (mayores, B2B, poco digital), busca también el artículo de ese público (`seniors`, `b2b`, `low literacy`).
- **Manda el proyecto:** si un hallazgo choca con una regla marcada «(user)» en el `CLAUDE.md`, dilo, pero no la cambies.

## Plantilla de ficha

```markdown
---
titulo: <título exacto>
url: https://www.nngroup.com/articles/<slug>/
publicado: AAAA-MM-DD
actualizado: AAAA-MM-DD
temas: <temas de NN/g>
leido: AAAA-MM-DD
---

**Método:** <tipo de estudio, n, año, público> (o «guía, sin estudio propio»)

**Hallazgos**
- <hallazgo concreto, con la cifra si la hay>
- …

**Para aplicar**
- <regla accionable en una línea>

**Cuidado:** <límites: antigüedad, público, lo que no dice> (opcional)
```

Escribe con tus palabras, en castellano; cita literal solo frases cortas. Las cifras, exactas y con su contexto (de qué, sobre cuántos).
