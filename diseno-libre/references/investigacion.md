# Referentes: lo propio de diseno-libre

Cómo encontrar referentes, capturarlos (`capture.mjs`), entender su porqué y buscar evidencia está en `investigar` §1-3. Aquí solo lo que añade el arnés.

## Qué es un buen referente para diseñar

- **Real y en producción**: nada de shots de Dribbble o Behance hechos para lucirse.
- **Resuelve uno de los «Problemas a resolver» del brief.** No basta con que sea del sector ni con que sea bonito.
- **Variado**: como mucho 2 capturas por producto, salvo que estudies un flujo completo.

Cuántos: los de `## Alcance de la investigación` del brief. Para pronto si ya tienes un buen referente por problema y los nuevos repiten patrones. Si cambias el alcance, actualiza el brief con su porqué.

## Apps móviles: Lazyweb (si está instalado)

Para webs de sectores poco digitales no suele tener nada: ahí, captura directa. Para apps sí:

1. `mcp__lazyweb__lazyweb_discover_tools` para ver el esquema vigente.
2. `mcp__lazyweb__lazyweb_execute` con JS; el JSON va en `r.content[0].text`. Devuelve solo lo necesario:

```js
const r = await tools.lazyweb_search_screens({query: 'workout plan today screen', platform: 'mobile', limit: 12});
const j = JSON.parse(r.content[0].text);
return { id: j.agentic_search_id, items: j.results.map(x => ({
  app: x.companyName, ref: x.result_ref, desc: (x.visionDescription || '').slice(0, 160), url: x.imageUrl })) };
```

- Consultas de 2–6 palabras que nombren un patrón («habit streak»), una por problema del brief. Resultados deterministas: usa `offset`, no repitas.
- `lazyweb_search_flows` para recorridos; `lazyweb_search_experiments` para paywalls y conversión (control contra variante: cuenta como evidencia).
- Las capturas de App Store / Google Play son marketing: solo si no hay otra fuente, y marcadas así.

Descarga las elegidas con un manifiesto:

```json
[{"nombre": "peloton-home", "url": "https://…", "fuente": "lazyweb", "sector": "directo"}]
```

```bash
python3 ~/.claude/skills/diseno-libre/scripts/refs.py bajar manifiesto.json <carpeta>/referentes
```

**Abre cada captura con Read antes de ficharla**: Lazyweb mezcla resultados. Lo que no resuelve el problema se borra, no se ficha para cubrir el cupo.

## Lámina

```bash
python3 ~/.claude/skills/diseno-libre/scripts/refs.py lamina <carpeta>/referentes/lamina.png <carpeta>/referentes/*.png
```

## Ficha (una por referente, en `fichas.md`)

```markdown
### peloton-home.png · Peloton · sector directo
- **Problema del brief que toca:** «no sabe qué entrenar hoy»
- **Mecanismo:** la semana en fila (L–D) y el reto en curso (9/10 paseos) arriba; debajo, categorías y una sola «primera clase» destacada.
- **Por qué lo hicieron así:** Peloton vive de que vuelvas cada día; la racha semanal sirve a eso. (inferencia | fuente: <url>)
- **¿Esa causa existe aquí?:** sí: nuestro usuario también abre la app sin plan.
- **Tomar:** progreso de la semana como primer bloque, en una sola línea.
- **No tomar:** la cuadrícula de categorías con foto: es catálogo, no decisión.
- **Convención o diferencia:** convención (lo hacen 4 de 6 del sector).
```

«No tomar: nada» vale; dejarlo en blanco, no. Tampoco «Tomar» sin haber respondido «¿Esa causa existe aquí?».

## Referencia del usuario (`--ref`)

Cuando el usuario trae una referencia, se sigue de verdad. Además de la ficha, anota lo que hay que reproducir:

- **Estructura**: bloques en orden, qué lidera, columnas y alineaciones.
- **Medidas aproximadas** en la escala del proyecto: márgenes, separaciones, alturas de controles, radios.
- **Tipografía**: número de tamaños y pesos, proporción titular/cuerpo, mayúsculas, tracking.
- **Color**: cuántos colores y qué papel tiene cada uno, no los hex del referente si el proyecto tiene tokens.
- **Densidad y ritmo**: aire o compacto, y cuántos elementos caben sin scroll.
- **Por qué está así**: si un rasgo responde a algo que aquí no existe, dilo al usuario en vez de reproducirlo a ciegas.
- **Qué se adapta y por qué**: lo que no se reproduce por choque con el proyecto, explicado.

En la fase 4 se compara lado a lado con la misma anchura (`verificacion.md`).
