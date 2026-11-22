---
name: maya
description: "Principio MAYA (Most Advanced Yet Acceptable, Raymond Loewy): encuentra en una web o app dónde se puede ser más avanzado (más actual, más directo, más pulido) sin que el usuario deje de entenderlo, en tres capas: aspecto (estilo, color, tipografía, iconos, materiales, imagen), interacción y movimiento (hovers, foco, pulsación, transiciones, carga, scroll, microinteracciones) y función (tareas). Compara cada elemento con la norma del sector, con lo que el usuario ya ve a diario fuera del sector y con lo más avanzado, y propone el avance máximo con un ancla conocida. Casos de Apple, Google, Stripe, Spotify, Figma, Linear, Airbnb, Arc, Snapchat. USAR cuando el usuario pida dónde aplicar MAYA, cómo modernizar o adelantarse sin perder a los usuarios, si un diseño, una animación o un hover es demasiado atrevido o se ha quedado anticuado, cuánto innovar en el estilo, la interacción o una función, antes de un rediseño sobre usuarios actuales, cuando diseno-libre, ux-craft, movimiento o investigar tengan que medir cuánta novedad aguanta una propuesta, o cuando mencione MAYA o Loewy. NO usar en ajustes menores ni en decisiones ya tomadas."
argument-hint: "[web, app, función o propuesta]"
---

# MAYA: lo más avanzado que aún se acepta

## Qué es exactamente

Raymond Loewy, diseñador industrial (años 50), acuñó *Most Advanced Yet Acceptable*. Según lo resume Derek Thompson (*Hit Makers*), Loewy creía que el público está dividido entre la curiosidad por lo nuevo y el miedo a lo demasiado nuevo. De ahí la regla: **dar la solución más avanzada posible, pero parar justo antes del punto en que el usuario deja de reconocerla y la rechaza.**

Tres ideas que no hay que perder:

1. **El eje es el avance, no la diferencia.** «Avanzado» significa más actual y mejor resuelto que la norma, en cualquiera de las tres capas:
   - **Aspecto:** estilo, color, tipografía, iconos, materiales, imagen. Por ejemplo, Material 3 Expressive, Liquid Glass, los iconos en 3D de Airbnb en 2025 o el paso de iOS al diseño plano.
   - **Interacción y movimiento:** hover, foco, pulsación, transiciones, carga, scroll, gestos, microinteracciones. Por ejemplo, la animación de la Dynamic Island o la velocidad de Linear.
   - **Función:** cómo se resuelve una tarea. Por ejemplo, Stripe con tu clave en los ejemplos o Wrapped.

   Ser distinto sin ser más actual (otro color porque sí, una animación de plantilla, contenido propio) no es avanzar.
2. **«Aceptable» lo fija el usuario, no el diseñador.** Es lo que ya conoce y entiende, y eso incluye lo que ve y usa a diario fuera del sector: las apps de Apple y Google, su banco, Amazon, Instagram. Si un hover, una transición o un estilo ya es normal en esos productos, aquí resulta avanzado y aceptable a la vez. El umbral se mueve con el tiempo: iOS pudo dejar el esqueuomorfismo en 2013 porque la gente ya sabía usar una pantalla táctil.
3. **Se avanza al máximo y se retrocede hasta lo aceptable**, no al revés. Primero se imagina la versión más avanzada y luego se le añade un ancla conocida o se reparte en pasos, en lugar de partir de lo de siempre y retocarlo.

### Qué NO es MAYA

| Se confunde con | Por qué no es | Dónde va |
|---|---|---|
| Diferenciarse sin ser más actual (otro color, otra forma porque sí) | distinto no es avanzado | `ux-craft` (slop), `diseno-libre` |
| Poner contenido propio (fotos reales, cifras, casos) | mejora la confianza, pero no es más avanzado | `ux-craft`, conversión |
| Animación o efecto de plantilla (fade al hacer scroll, lift con spring) | es lo de todos, no un avance; ver `ux-craft/references/slop.md` | `movimiento`, `ux-craft` |
| Respetar las convenciones (ley de Jakob) | es solo la mitad «aceptable» | `ux-craft/references/claridad.md` § 6 |

Un hover, una transición o un estilo **sí** son MAYA cuando son más actuales o están mejor resueltos que la norma y se entienden al instante. Cómo construir la animación es cosa de la skill `movimiento`; MAYA decide si va, hasta dónde llega y qué la hace reconocible.

**Error típico (cometido en la primera versión de esta skill):** proponer «una foto de obra en la galería» o «un mapa de obras» como hueco MAYA. Eso es contenido. La pregunta MAYA es: **¿qué elemento (de aspecto, interacción o función) podría ser más avanzado, y cuánto avance aguanta este usuario?**

## Cuándo rinde y cuándo no

- **Rinde mucho** al diseñar o rediseñar (antes de fijar el estilo o la interacción), al valorar una propuesta atrevida y en productos que llevan tiempo sin tocarse, porque suelen estar «por detrás».
- **Rinde poco** en un producto ya muy pulido: lo normal es que casi todo salga «en MAYA» y que lo útil sean fallos de ejecución en los estados. Entonces haz la versión corta: estados de 4 a 6 elementos y las tareas principales, sin la tabla completa.
- **No la uses** para encontrar fallos generales de interfaz (eso es `ux-craft`, `break-ui`) ni para diferenciarse (`ux-craft`, `diseno-libre`).

## Archivos

| Archivo | Cuándo se lee |
|---|---|
| `references/donde-buscar.md` | **Siempre que se busquen huecos o se audite**: tareas típicas por tipo de producto, con su norma de sector, la norma fuera del sector, la idea avanzada, el ancla para que se acepte y la trampa |
| `references/casos.md` | Para citar un caso real: 13 avances aceptados y 6 que se pasaron, con lo que avanzó, el ancla que lo hizo aceptable y la fuente |
| `references/evidencia.md` | Para respaldar con estudios (Hekkert, Google 2012, Material 3 Expressive, Giora, Reinecke) |
| `scripts/estados.mjs` | Capturas: `pagina` (páginas enteras de referentes), `hover` y `foco` (estado normal frente a estado activo de un elemento). Busca Playwright y Chromium solo |

## Lo que dice la evidencia

1. Gusta lo más novedoso que sigue pareciendo típico de su categoría; lo novedoso y lo típico se frenan entre sí (Hekkert 2003).
2. En webs, la primera impresión premia lo simple y lo típico (Google, Tuch y otros 2012): **el aspecto general debe ser típico**, y el avance va en la tarea.
3. Lo más expresivo hizo encontrar las acciones clave hasta 4 veces más rápido, pero solo respetando los patrones; quitar etiquetas lo empeoró (Google, Material 3 Expressive 2025).
4. Los expertos y quienes usan algo a diario aguantan más novedad; lo práctico y lo que se usa de vez en cuando pide más tipicidad (Hekkert).
5. Pasarse cuesta caro y está documentado: Arc («too many new things to learn, for too little reward»), Snapchat, Windows 8.

## Anclas: cómo se hace aceptable un avance

Los casos de `casos.md` usan siete anclas. En todas, **la sorpresa es un avance real** y el ancla es lo que el usuario ya conoce. La lista sale de los casos y es criterio.

| Ancla | Qué conoce ya el usuario | Qué avanza | Casos |
|---|---|---|---|
| **A1 Forma heredada, función nueva** | un objeto o control que ya sabe usar | hace algo que antes no podía | Digital Crown, Material (papel y tinta) |
| **A2 Formato prestado** | un formato de otra app que usa a diario | aparece donde no existía y resuelve la tarea mejor | Wrapped ← historias, Figma ← Google Docs, Cursor ← editor de código |
| **A3 Formato de siempre, con los datos del usuario** | el formato estándar | viene hecho para él, listo para usar | Stripe (tu clave en los ejemplos), Wrapped (tu año) |
| **A4 Estructura de siempre, ejecución muy por encima** | dónde está y para qué sirve cada cosa | velocidad, claridad o respuesta muy superiores | Linear, Material 3 Expressive |
| **A5 Limitación convertida en función** | el sitio donde ya mira | lo que estorbaba pasa a ser útil | Dynamic Island |
| **A6 Simplificar sin perder lo reconocible** | lo que recuerda del producto | se quita lo demás | Instagram 2016 |
| **A7 Lo nuevo, opcional o por pasos** | la versión anterior sigue a mano | lo avanzado se ofrece sin imponerlo | Liquid Glass «Tintado», Windows 8.1 → 10 |

## Diagnóstico: los cuatro estados de una tarea

| Estado | Qué significa | Señal | Qué hacer |
|---|---|---|---|
| **Por detrás** | peor que lo que el usuario ya usa a diario fuera del sector | «en mi banco o en Amazon esto se hace en un paso» | el hueco MAYA más fácil: traer lo que ya conoce (A2, A3) |
| **En la norma del sector** | igual que todos los competidores | se resuelve como hace diez años | buscar el avance y retroceder hasta lo aceptable |
| **En MAYA** | más avanzado que el sector y se usa sin aprender | se usa sin pensar y se nota la diferencia | mantener; no añadir otra novedad en la misma pantalla |
| **Pasado** | hay que aprender antes de poder hacerlo | instrucciones, controles en sitios raros, sin etiquetas, rompe el navegador | retroceder: ancla (A1-A6) u opción (A7) |

Señales de «pasado», sacadas de los casos: muchas cosas nuevas a la vez para poca recompensa (Arc); lo que se usa a diario cambia de sitio (Snapchat, Windows 8); desaparece lo que hacía reconocible el producto (Tropicana, Gap); la novedad de ejecución toca la legibilidad o quita etiquetas (Liquid Glass, Material 3 Expressive); se rompe el navegador: enlaces, botón atrás, zoom, pegar (Vercel Web Interface Guidelines).

## Procedimiento

### 1. Acotar el usuario

En tres líneas: quién es, si sabe del tema y **con qué frecuencia** usa el producto. Eso fija cuánto avance aguanta (reglas de dosis). Lee el `CLAUDE.md` del proyecto, `DECISIONES.md` y la memoria: lo decidido no se reabre.

### 2. Listar qué se va a evaluar, en tres capas

- **Función:** de 3 a 6 tareas que el usuario viene a hacer (pedir presupuesto, saber si le cabe, comparar, fiarse, contactar, volver a encontrar algo). Sácalas del `CLAUDE.md`, de las rutas y de las CTA.
- **Interacción y movimiento:** hover de enlaces, botones y tarjetas; foco; pulsación; apertura de menús y desplegables; transiciones entre estados; carga; scroll; galerías; formularios mientras se rellenan. Inventario rápido en el código:
  ```bash
  rg -o "(group-)?hover:[a-z0-9\[\]\.\-/:]+" src -g '*.tsx' | sd '^[^:]+:' '' | sort | uniq -c | sort -rn | head -30
  rg -n "transition|@keyframes|animation-timeline|:active|focus-visible|prefers-reduced" src -g '*.css'
  ```
  Busca también los componentes con estado propio (galerías, fotos al pasar el ratón, menús) y lee su comentario: suele decir por qué se hizo así.
- **Aspecto:** estilo general, color, tipografía, iconos, materiales (sombras, desenfoques, profundidad), tratamiento de imagen y composición.

`donde-buscar.md` tiene, para cada capa, la norma habitual, la norma fuera del sector, una idea avanzada, el ancla y la trampa.

### 3. Tres niveles por elemento

Por cada tarea o elemento, en una tabla:

| Capa | Elemento | Norma del sector | Norma del usuario fuera del sector | Lo más avanzado | Producto actual | Estado |
|---|---|---|---|---|---|---|

Para la interacción y el movimiento, las capturas fijas no bastan. Captura los estados con `scripts/estados.mjs hover|foco` en la web propia (de 4 a 6 elementos: botón principal, enlace, tarjeta de listado, tarjeta con foto, menú) y en 2 o 3 referentes, y júntalos en un montaje (normal | hover) para verlos en una sola imagen. En webs de terceros los selectores fallan a menudo (banners, elementos ocultos): usa selectores concretos y, si fallan, describe su conducta como criterio, no como medida.

**Norma fuera del sector para la interacción, sin capturar:** las webs de Apple o Stripe suelen fallar al capturar sus estados. Usa la documentación local: `m3/foundations/interaction/states.md` (hover, foco, pulsado y arrastre, con sus opacidades: +8 %, +10 %, +10 % y +16 %) y la skill `hig` para foco, puntero y respuesta al toque. Eso cuenta como evidencia de la norma; tu recuerdo de cómo lo hace Apple, solo como criterio.

Mira también **qué aparece** en el estado activo, no solo cómo se mueve: un hover bien animado que enseña algo peor (una imagen técnica, un texto cortado) es un fallo de aspecto.

- **Norma del sector:** sobre capturas de 5 a 8 competidores (cómo hacerlas: `investigar` §2; la web propia: `capturas`). Si capturas fuera del proyecto con Playwright y no lo encuentra, cárgalo desde `~/.npm/_npx/*/node_modules/playwright` con `createRequire` y pásale `executablePath` del Chromium de `~/.cache/ms-playwright`.
- **Norma fuera del sector:** cómo resuelve el usuario una tarea parecida en productos que usa a diario. Nombra productos concretos y conocidos, no supuestos.
- **Solución ideal:** cómo se resolvería si no hubiera costumbres. Sin límite todavía.
- **Estado:** uno de los cuatro del diagnóstico.

### 4. Del ideal a lo aceptable

Para las tareas «por detrás» o «en la norma del sector», parte de la solución ideal y retrocede:

1. Quita lo que obligue a aprender algo.
2. Busca el ancla (A1-A7) que lo hace reconocible. La primera que hay que probar es la norma de fuera del sector: si el usuario ya lo hace en otra app, es avanzado aquí y aceptable a la vez.
3. Si sigue siendo demasiado, repártelo en pasos o hazlo opcional (A7).
4. Para cuando se use sin instrucciones. Ese es el punto MAYA.

### 5. Filtrar

Un avance pasa solo si responde que sí a todo:

1. **¿Es más avanzado de verdad?** En función: menos pasos, dudas o espera. En interacción: responde mejor, más rápido o con más sentido (dice qué es pulsable, qué ha pasado, de dónde viene). En aspecto: más actual y mejor acabado que la norma, no solo distinto.
2. **¿Se usa sin aprender?** Si hace falta una instrucción, se ha pasado.
3. **¿Es lo único nuevo de esa pantalla?**
4. **¿Lo puede sostener el proyecto** (datos reales, mantenimiento, tamaño del equipo)? En un negocio pequeño, el avance que requiere mantenimiento diario es sobreingeniería.
5. **¿Cabe en las reglas del proyecto** (`CLAUDE.md`)?

### 6. Entregar

Plantilla:

```markdown
## MAYA: <producto>
Usuario: <quién, si sabe del tema, frecuencia> → dosis: <corta | media | amplia>
Medido: <referentes capturados, estados capturados, lo que quedó como criterio>

| Capa | Elemento | Sector | Fuera del sector | Producto | Estado |
(una fila por elemento evaluado; Estado = por detrás | en la norma | en MAYA | pasado)

### Ya en MAYA (no tocar)
- <elemento> — <ancla> — <caso parecido>

### Fallos
- <se ha pasado / ejecución que empeora>, con captura y caso parecido

### Tensiones con las reglas del proyecto
- <algo que choca con una regla del CLAUDE.md o con lo decidido>: se señala, no se decide

### Avances propuestos (recomendación primero, 1-3)
1. <capa · elemento> — estado actual → ideal → hasta dónde se retrocede y por qué
   Ancla: <A1-A7> · Caso: <casos.md> · Evidencia / criterio · Riesgo · Cómo probarlo
```

Si casi todo está «en MAYA», dilo sin inventar avances: un informe con un solo avance bueno vale más que tres de relleno.

Las propuestas visuales se enseñan con variantes renderizadas (`prototype`), no con esquemas. No se implementa nada hasta que el usuario elija.

## Reglas de dosis

1. **La estructura, típica; el avance, en el estilo, la interacción o la tarea.** El sitio y el papel de cada cosa no se tocan. *(Evidencia: Google 2012, Material 3 Expressive.)*
2. **Un solo avance protagonista por pantalla.** Los detalles de interacción pulidos y coherentes en toda la web (hover, foco, pulsación) cuentan como un solo avance de ejecución (A4), no como muchos. *(Criterio; coherente con Hekkert y Arc.)*
3. **Cuanto menos experto y menos frecuente sea el usuario, más corto el avance**, y más anclado en lo que ya usa fuera. Los usuarios diarios y los expertos aguantan más. *(Evidencia: Hekkert, Arc.)*
4. **Lo práctico pide más tipicidad**: formularios, pagos, contacto, datos legales. *(Evidencia: Hekkert; Google cita la banca.)*
5. **Nunca forma nueva y función nueva a la vez.** *(Criterio: Loewy, Giora.)*
6. **Con usuarios actuales, por pasos y con vuelta atrás** (A7). Separa el rechazo al cambio (pasa con el tiempo) del empeoramiento real (no pasa). *(Evidencia: Snapchat, Windows 8, Liquid Glass, Spool.)*
7. **El ancla se suelta cuando el usuario ya ha aprendido.** *(Comentario: esqueuomorfismo → iOS 7.)*

## Cómo encaja con las demás skills

- `diseno-libre`: cuando una idea propone algo nuevo en una tarea, pásala por los pasos 3-5 y di su estado, su ancla y hasta dónde retrocede.
- `ux-craft`: claridad § 6 es la mitad aceptable; quitar el slop también es cosa suya.
- `movimiento`: construye la animación o el hover que MAYA decide; MAYA dice hasta dónde llega.
- `investigar`: capturas del sector y evidencia nueva.
- `nng`: `mental-models`, heurística 4 (consistencia y estándares).
- `prototype`: para enseñar los avances renderizados.
- El `CLAUDE.md` del proyecto manda.
