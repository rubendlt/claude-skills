---
name: maya
description: "Principio MAYA (Most Advanced Yet Acceptable, Raymond Loewy): encuentra en una web o app las tareas que podrían resolverse de forma más avanzada (más directa, más útil, más actual) y dice hasta dónde avanzar antes de que el usuario lo rechace por desconocido. Compara cada tarea con la norma del sector, con lo que el usuario ya usa a diario fuera del sector y con la solución ideal, y propone el avance máximo con un ancla conocida. Casos de Apple, Google, Stripe, Spotify, Figma, Linear, Arc, Snapchat. USAR cuando el usuario pida dónde aplicar MAYA, cómo modernizar o adelantarse sin perder a los usuarios, si algo es demasiado avanzado o se ha quedado anticuado, cuánto innovar en una función, antes de un rediseño sobre usuarios actuales, cuando diseno-libre, ux-craft o investigar tengan que medir cuánta novedad aguanta una propuesta, o cuando mencione MAYA o Loewy. NO usar para diferenciar una marca o decorar (eso es ux-craft/slop), en ajustes menores ni en decisiones ya tomadas."
argument-hint: "[web, app, función o propuesta]"
---

# MAYA: lo más avanzado que aún se acepta

## Qué es exactamente

Raymond Loewy, diseñador industrial (años 50), acuñó *Most Advanced Yet Acceptable*. Según lo resume Derek Thompson (*Hit Makers*), Loewy creía que el público está dividido entre la curiosidad por lo nuevo y el miedo a lo demasiado nuevo. De ahí la regla: **dar la solución más avanzada posible, pero parar justo antes del punto en que el usuario deja de reconocerla y la rechaza.**

Tres ideas que no hay que perder:

1. **El eje es el avance, no la diferencia.** «Avanzado» significa más cerca de la mejor solución posible para la tarea del usuario: más directa, más útil, con menos pasos, más actual. Ser distinto, decorar o poner contenido propio no es avanzar.
2. **«Aceptable» lo fija el usuario, no el diseñador.** Es lo que ya conoce y entiende, y eso incluye lo que usa a diario fuera del sector: su banco, Amazon, Google Maps, WhatsApp. Ese umbral se mueve con el tiempo (iOS pudo dejar el esqueuomorfismo en 2013 porque la gente ya sabía usar una pantalla táctil).
3. **Se avanza al máximo y se retrocede hasta lo aceptable**, no al revés. Primero se imagina la mejor solución y luego se le añade un ancla conocida o se reparte en pasos, en lugar de partir de lo de siempre y retocarlo.

### Qué NO es MAYA

| Se confunde con | Por qué no es | Dónde va |
|---|---|---|
| Diferenciarse de la competencia, que no parezca una plantilla | puede ser distinto sin ser más avanzado | `ux-craft` (slop), `diseno-libre` |
| Poner contenido propio (fotos reales, cifras, casos) | mejora la confianza, pero no resuelve la tarea de forma más avanzada | `ux-craft`, conversión |
| Decoración original, animaciones | no acerca la tarea a su mejor solución | `movimiento`, `ux-craft` |
| Respetar las convenciones (ley de Jakob) | es solo la mitad «aceptable» | `ux-craft/references/claridad.md` § 6 |

**Error típico (cometido en la primera versión de esta skill):** proponer «una foto de obra en la galería» o «un mapa de obras» como hueco MAYA. Eso es contenido. La pregunta MAYA es: **¿qué tarea podría resolverse de forma más avanzada, y cuánto avance aguanta este usuario?**

## Archivos

| Archivo | Cuándo se lee |
|---|---|
| `references/donde-buscar.md` | **Siempre que se busquen huecos o se audite**: tareas típicas por tipo de producto, con su norma de sector, la norma fuera del sector, la idea avanzada, el ancla para que se acepte y la trampa |
| `references/casos.md` | Para citar un caso real: 13 avances aceptados y 6 que se pasaron, con lo que avanzó, el ancla que lo hizo aceptable y la fuente |
| `references/evidencia.md` | Para respaldar con estudios (Hekkert, Google 2012, Material 3 Expressive, Giora, Reinecke) |

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

### 2. Listar las tareas

De 3 a 6 tareas que el usuario viene a hacer, no pantallas. Por ejemplo: pedir presupuesto, saber si algo le sirve o le cabe, comparar, decidir si fiarse, saber el plazo, contactar, volver a encontrar algo. Sácalas del `CLAUDE.md`, de las rutas y de las CTA. `donde-buscar.md` tiene las típicas por tipo de producto.

### 3. Tres niveles por tarea

Por cada tarea, en una tabla:

| Tarea | Norma del sector | Norma del usuario fuera del sector | Solución ideal | Producto actual | Estado |
|---|---|---|---|---|---|

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

1. **¿Resuelve la tarea mejor** (menos pasos, menos dudas, menos espera)? Si solo se ve distinto, no es MAYA.
2. **¿Se usa sin aprender?** Si hace falta una instrucción, se ha pasado.
3. **¿Es lo único nuevo de esa pantalla?**
4. **¿Lo puede sostener el proyecto** (datos reales, mantenimiento, tamaño del equipo)? En un negocio pequeño, el avance que requiere mantenimiento diario es sobreingeniería.
5. **¿Cabe en las reglas del proyecto** (`CLAUDE.md`)?

### 6. Entregar

1. La tabla del paso 3, resumida.
2. **Lo que ya está en MAYA** (para no tocarlo).
3. **Lo que se ha pasado**, si hay algo.
4. **De 1 a 3 avances**, con tu recomendación primero. De cada uno: tarea, estado actual, solución ideal, hasta dónde se retrocede y por qué, ancla, caso parecido de `casos.md`, evidencia o criterio (separados), riesgo y cómo probarlo.

Las propuestas visuales se enseñan con variantes renderizadas (`prototype`), no con esquemas. No se implementa nada hasta que el usuario elija.

## Reglas de dosis

1. **El aspecto general, típico; el avance, en la tarea.** *(Evidencia: Google 2012, Material 3 Expressive.)*
2. **Un solo avance por pantalla.** *(Criterio; coherente con Hekkert y Arc.)*
3. **Cuanto menos experto y menos frecuente sea el usuario, más corto el avance**, y más anclado en lo que ya usa fuera. Los usuarios diarios y los expertos aguantan más. *(Evidencia: Hekkert, Arc.)*
4. **Lo práctico pide más tipicidad**: formularios, pagos, contacto, datos legales. *(Evidencia: Hekkert; Google cita la banca.)*
5. **Nunca forma nueva y función nueva a la vez.** *(Criterio: Loewy, Giora.)*
6. **Con usuarios actuales, por pasos y con vuelta atrás** (A7). Separa el rechazo al cambio (pasa con el tiempo) del empeoramiento real (no pasa). *(Evidencia: Snapchat, Windows 8, Liquid Glass, Spool.)*
7. **El ancla se suelta cuando el usuario ya ha aprendido.** *(Comentario: esqueuomorfismo → iOS 7.)*

## Cómo encaja con las demás skills

- `diseno-libre`: cuando una idea propone algo nuevo en una tarea, pásala por los pasos 3-5 y di su estado, su ancla y hasta dónde retrocede.
- `ux-craft`: claridad § 6 es la mitad aceptable; diferenciarse y quitar el slop también son cosa suya, no de MAYA.
- `investigar`: capturas del sector y evidencia nueva.
- `nng`: `mental-models`, heurística 4 (consistencia y estándares).
- `prototype`: para enseñar los avances renderizados.
- El `CLAUDE.md` del proyecto manda.
