# Investigación de referentes

## Qué es un buen referente

- **Real y en producción**: apps y webs publicadas. Nada de shots de Dribbble o Behance hechos para lucirse: no han pasado por usuarios reales y son la fuente del slop.
- **Resuelve uno de los «Problemas a resolver» del brief.** No basta con que sea del sector ni con que sea bonito.
- **Variado**: como mucho 2 capturas por producto, salvo que estudies un flujo completo.
- **Con porqué, si se puede**: un caso de estudio, un post de su equipo o un experimento A/B vale más que diez capturas.

Cuántos: los de `## Alcance de la investigación` del brief (tabla «Cuánto investigar» de SKILL.md). Para pronto si ya tienes un buen referente por problema y los nuevos repiten patrones; sigue si un problema sigue sin resolver. Si cambias el alcance, actualiza el brief con su porqué.

## Fuentes

### 1. Lazyweb (MCP): la principal

Capturas reales de apps móviles y webs de escritorio, flujos completos y experimentos A/B. Uso:

1. `mcp__lazyweb__lazyweb_discover_tools` con la consulta (`search screens`, `search flows`, `experiments`) para ver el esquema vigente. No lo copies a ningún sitio: puede cambiar.
2. `mcp__lazyweb__lazyweb_execute` con JS. Devuelve el resultado MCP original: el JSON va en `r.content[0].text`. Devuelve solo lo necesario:

```js
const r = await tools.lazyweb_search_screens({query: 'workout plan today screen', platform: 'mobile', limit: 12});
const j = JSON.parse(r.content[0].text);
return { id: j.agentic_search_id, items: j.results.map(x => ({
  app: x.companyName, cat: x.category, ref: x.result_ref,
  desc: (x.visionDescription || '').slice(0, 160), url: x.imageUrl })) };
```

- **Consultas de 2–6 palabras que nombren un patrón concreto** («workout summary», «habit streak», «class booking calendar»), no el sector a secas. Una consulta por problema del brief.
- Las búsquedas amplias en móvil devuelven `flavors` (subtipos de pantalla): úsalos con `flavor` para afinar.
- Resultados deterministas: no repitas una consulta, usa `offset` para ver más.
- `lazyweb_search_flows` para recorridos (onboarding, primer entrenamiento, checkout). `lazyweb_search_experiments` / `lazyweb_search_ab_tests` para paywalls, onboarding y conversión: dan control contra variante, lo más parecido a evidencia que hay.
- Pasa el `agentic_search_id` de la primera llamada a las siguientes. Si la investigación sirve, `lazyweb_agentic_search_finalize` con las referencias elegidas y da al usuario la `url` (nunca imprimas `open_url`).
- Las `imageUrl` firmadas valen un año: van directas al manifiesto de descarga.
- Hasta 16 llamadas por ejecución: agrupa con `Promise.all`.

### 2. Captura directa de webs reales

Para webs y SaaS, y para lo que Lazyweb no tenga:

```bash
python3 ~/.claude/skills/diseno-libre/scripts/refs.py capturar https://ejemplo.com <carpeta>/referentes/ejemplo [--alto]
```

Saca `ejemplo-escritorio.png` (1440) y `ejemplo-movil.png` (390); con `--alto`, la página entera. Encuentra las webs del sector con WebSearch (los líderes, pero también los que la crítica pone de ejemplo).

### 3. Búsqueda web: el porqué

WebSearch de `"<producto> redesign case study"`, `"<producto> design blog"`, `"how <producto> designed <función>"` o charlas del equipo. Sirve para la columna «Por qué funciona» de la ficha. Si no encuentras nada, la columna dice «inferencia» y se trata como hipótesis.

### 4. App Store y Google Play

Las capturas de la ficha de la tienda son marketing, no la app: úsalas solo si no hay otra fuente, y márcalas así.

## Descarga

Escribe un manifiesto y descarga:

```json
[{"nombre": "peloton-home", "url": "https://…", "fuente": "lazyweb", "sector": "directo"},
 {"nombre": "duolingo-racha", "url": "https://…", "fuente": "lazyweb", "sector": "vecino"}]
```

```bash
python3 ~/.claude/skills/diseno-libre/scripts/refs.py bajar manifiesto.json <carpeta>/referentes
python3 ~/.claude/skills/diseno-libre/scripts/refs.py lamina <carpeta>/referentes/lamina.png <carpeta>/referentes/*.png
```

**Abre cada captura con Read antes de escribir su ficha.** La `visionDescription` de Lazyweb ayuda a elegir, pero no sustituye mirarla. Lazyweb mezcla resultados: una app de juegos mentales etiquetada como fitness, una pantalla de onboarding cuando buscabas la home, un paywall. Descarta (borra el archivo) lo que no resuelve el problema buscado y busca otro; no lo fiches para cubrir el cupo.

Para ahorrar tokens, pide más resultados de los que necesitas (`limit` 10–12), elige mirando `desc` y escribe en el manifiesto solo las URLs de los elegidos.

## Ficha (una por referente, en `fichas.md`)

```markdown
### peloton-home.png · Peloton · sector directo
- **Problema del brief que toca:** «no sabe qué entrenar hoy»
- **Mecanismo:** la semana en fila (L–D) y el reto en curso (9/10 paseos) arriba; debajo, categorías y una sola «primera clase» destacada.
- **Por qué funciona:** el progreso semanal convierte «qué hago hoy» en «me falta 1». (inferencia | fuente: <url>)
- **Tomar:** progreso de la semana como primer bloque, en una sola línea.
- **No tomar:** la cuadrícula de categorías con foto: es catálogo, no decisión, y empuja a navegar.
- **Convención o diferencia:** convención (lo hacen 4 de 6 del sector).
```

Se puede escribir «No tomar: nada»; lo que no vale es dejarlo en blanco.

## Referencia del usuario (`--ref`)

Cuando el usuario trae una referencia, se sigue de verdad. Además de la ficha, anota lo que hay que reproducir:

- **Estructura**: bloques en orden, qué lidera, columnas y alineaciones.
- **Medidas aproximadas** en la escala del proyecto: márgenes laterales, separación entre bloques y dentro de ellos, alturas de controles, radios.
- **Tipografía**: número de tamaños y pesos, proporción titular/cuerpo, mayúsculas, tracking.
- **Color**: cuántos colores hay y qué papel tiene cada uno (fondo, superficie, texto, acento), no los hex del referente si el proyecto tiene tokens.
- **Densidad y ritmo**: aire o compacto, y cuántos elementos caben sin scroll.
- **Qué se adapta y por qué**: lo que no se reproduce por choque con el proyecto, explicado.

En la fase 4 se compara lado a lado con la misma anchura (`verificacion.md`).

## Encargo para el subagente

Copia esto, rellenando los corchetes:

> Busca referentes de diseño para este encargo. Brief: [pega brief.md]. Tu frente: [sector directo | sectores vecinos: X, Y | webs del sector]. Carpeta: [ruta]/referentes.
>
> Lee primero ~/.claude/skills/diseno-libre/references/investigacion.md y síguelo. Haz una búsqueda por cada «Problema a resolver». Elige [N] referentes reales en producción, descarga sus capturas con refs.py y **abre cada una con Read antes de analizarla**. Escribe tus fichas en [ruta]/referentes/fichas-[frente].md con la plantilla del archivo. Si buscas el porqué en la web, cita la URL; si no lo encuentras, escribe «inferencia».
>
> No propongas diseño ni direcciones: solo referentes y análisis. Devuelve: lista de archivos, una línea por referente y los problemas del brief sin buenos referentes.

Al recibir los resultados, junta las fichas en `fichas.md` y revisa al menos la mitad contra su captura.
