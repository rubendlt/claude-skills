---
name: maya
description: "Principio MAYA (Most Advanced Yet Acceptable, Raymond Loewy): detecta en una web o app dónde se puede ser distinto sin que el usuario deje de reconocer lo que ve, y cuánto. Mide la convención del sector sobre capturas, separa lo intocable de lo libre, reconoce los 7 patrones con los que lo hacen Apple, Google, Stripe, Spotify, Figma o Linear, y avisa de los fallos de Arc, Snapchat, Windows 8 o Tropicana. Propone 1-3 huecos con su ancla conocida. USAR cuando el usuario pida dónde destacar, dónde diferenciarse o dónde aplicar MAYA; cuando haya que decidir entre algo convencional y algo distintivo en UI, una web, una marca o un producto; cuando un diseño parezca «demasiado raro», «a plantilla» o «igual que todos»; para auditar si una web o app se pasa o se queda corta; antes de un rediseño sobre usuarios que ya usan el producto; cuando diseno-libre, ux-craft o investigar tengan que medir la dosis de novedad; o cuando el usuario mencione MAYA o Loewy. NO usar en ajustes menores (un margen, una palabra), dudas técnicas ni decisiones ya tomadas en el proyecto."
argument-hint: "[web, app, pantalla o propuesta]"
---

# MAYA: lo más avanzado que aún se acepta

Raymond Loewy (años 50): la gente quiere lo nuevo, pero rechaza lo que no reconoce. Derek Thompson: «para vender algo sorprendente, hazlo familiar; para vender algo familiar, hazlo sorprendente». Josh Miller (The Browser Company, 2025): «New interfaces start from familiar ones».

Esta skill sirve para dos cosas: **encontrar huecos** (dónde puede ser distinta una web o app) y **auditar** (si lo que hay se pasa o se queda corto). No da el aspecto, que sale del proyecto (`ux-craft` principio 1). La ley de Jakob de `ux-craft/references/claridad.md` § 6 es la mitad «aceptable» de MAYA; aquí está el principio entero.

| Archivo | Cuándo se lee |
|---|---|
| `references/casos.md` | Para citar o comparar con un caso real: 13 aciertos y 6 fallos con lo que se quedó típico, lo que cambió y la fuente |
| `references/evidencia.md` | Para respaldar una recomendación con estudios (Hekkert, Google 2012, Material 3 Expressive, Giora, Reinecke) o marcos (activos distintivos, códigos, ERRC) |

## Lo que dice la evidencia, en cinco líneas

1. Gusta lo más novedoso que sigue pareciendo típico; lo típico y lo novedoso se frenan entre sí (Hekkert 2003).
2. En webs, la primera impresión premia lo simple y lo típico desde los primeros 50 ms (Google, Tuch y otros 2012).
3. Lo expresivo acelera encontrar las acciones clave, pero solo si se respetan los patrones; quitar etiquetas o estructura lo rompe (Google, Material 3 Expressive 2025).
4. Los expertos premian más la novedad; lo típico pesa más en lo práctico y en lo que se usa sin pensar (Hekkert).
5. Lo que cuenta como típico cambia según el público (Reinecke y Gajos 2014): se mide para el público concreto.

## Los 7 patrones

Así lo hacen las empresas de `casos.md`. Cada patrón tiene un **ancla** (lo que el usuario ya reconoce) y una **sorpresa** (lo nuevo). Los patrones salen de los casos y son criterio; la evidencia respalda el equilibrio, no la lista.

| Patrón | Ancla | Sorpresa | Casos |
|---|---|---|---|
| **P1 Forma heredada, función nueva** | un objeto o control que ya se sabe usar | hace algo que antes no hacía | Digital Crown, Material (papel y tinta), Nike Fit dentro de la app |
| **P2 Formato prestado** | un formato que el usuario usa en otro producto | aparece donde nadie lo usaba | Wrapped ← historias de Instagram, Figma ← Google Docs, Cursor ← editor de código, Liquid Death ← cerveza |
| **P3 Contenido propio en formato estándar** | el formato típico del sector | dentro va algo que solo tiene este producto o este usuario | Stripe (tu clave en los ejemplos), Wrapped (tus datos) |
| **P4 Estructura típica, ejecución extrema** | el sitio y el papel de cada cosa, sin tocar | velocidad, tamaño, color o movimiento muy por encima de lo normal | Linear, Material 3 Expressive |
| **P5 Restricción convertida en interfaz** | el sitio donde el usuario ya mira | un límite técnico pasa a ser una pieza útil | Dynamic Island |
| **P6 Simplificar sin perder los códigos** | lo que la gente recuerda de la marca | se quita todo lo demás | Instagram 2016 (iris, visor, arcoíris) |
| **P7 Lo nuevo, opcional o por pasos** | la versión anterior sigue a mano | la nueva se ofrece sin imponerla | Liquid Glass «Tintado», Windows 8.1 → 10 |

## Señales para detectar MAYA en una web o app

Se miran sobre capturas reales, nunca sobre el código.

**Lo hace bien** (un hueco bien usado):
- Un elemento se reconoce al instante por su forma y su sitio, pero lleva algo que solo tiene este producto (P3).
- Un gesto o control conocido hace más de lo esperado, sin instrucciones (P1).
- Un formato que el usuario conoce de otra app aparece aquí y se usa sin pensar (P2).
- La estructura es la de cualquiera del sector, pero la ejecución se nota en un solo eje (P4).

**Se ha pasado** (los fallos de `casos.md`):
- Hay que aprender antes de poder hacer nada, o hay muchas cosas nuevas a la vez para poca recompensa (Arc).
- Lo que se usa a diario no está donde el usuario lo busca (Snapchat, Windows 8).
- Faltan los códigos con los que se reconoce la marca, o han quedado como un detalle (Tropicana, Gap).
- La novedad de ejecución toca la legibilidad, las etiquetas o el contraste (Liquid Glass, Material 3 Expressive sin etiquetas).
- Se rompe una conducta del navegador o la plataforma: enlaces que no son enlaces, el botón atrás, el zoom, pegar, el scroll (Vercel Web Interface Guidelines).

**Se ha quedado corto:**
- Con otro logo, la pantalla sería la de cualquier competidor o la de una plantilla (`ux-craft/references/slop.md`).
- Todo lo distintivo es decoración (gradientes, ilustraciones genéricas) y nada es contenido propio.
- Repite los códigos residuales del sector, los que ya están pasados.

## Buscar huecos

### 1. Acotar

En tres líneas: qué pantalla o producto es, qué tiene que conseguir (su acción principal) y quién lo usa (si sabe del tema y si lo usa a menudo o de tarde en tarde). Eso fija la dosis (reglas de abajo). Lee el `CLAUDE.md` del proyecto, `DECISIONES.md` y la memoria: lo decidido no es hueco.

### 2. Medir la convención

Captura de 5 a 8 referentes del sector y de 2 a 3 de fuera que resuelvan la misma tarea para el mismo tipo de usuario (cómo: `investigar` §2; la web propia: `capturas`). Haz un inventario por elemento:

| Elemento | Lo que hacen | Cuántos | Código |
|---|---|---|---|
| p. ej. primer pantallazo | foto de ambiente + titular genérico | 7/8 | dominante |

- **Dominante** (casi todos igual): el usuario lo espera.
- **Residual** (lo hacen los antiguos; los nuevos ya no): pasado; se puede dejar sin pagar nada.
- **Emergente** (lo hacen pocos y de los mejores): margen con poco riesgo.
- **Sin convención** (cada uno a su manera): margen libre.

### 3. Encontrar los códigos propios

Lo que identifica a esta marca o producto sin leer su nombre (activos distintivos, `evidencia.md`). Prueba de Instagram adaptada: describe de memoria, en una frase, lo que recordaría alguien que haya visto la web una vez. Lo que salga es intocable. Si no sale nada, no hay códigos todavía, y crearlos es un hueco en sí mismo.

### 4. Repartir cada elemento en tres zonas

- **Intocable**: lo que el usuario usa para orientarse o actuar (navegación, CTA, formularios, teléfono, buscador, iconos estándar, conductas del navegador) y los códigos propios del paso 3.
- **Libre**: lo que el usuario mira pero no usa para hacer nada (fotos, escala, tipografía, ritmo, cómo se cuenta la prueba, tono). Aquí están los huecos.
- **Inercia del sector**: códigos residuales o convenciones sin función (carrusel automático, foto de banco de imágenes, «soluciones integrales»). Se sustituyen manteniendo el sitio y el papel que el usuario espera.

Con la matriz ERRC (`evidencia.md`), decide qué **eliminar** (inercia), **reducir**, **subir** (zona libre, P4) y **crear** (P1, P2, P3, P5).

### 5. Recorrer los 7 patrones

Para cada elemento de la zona libre, pregúntate si encaja algún patrón: ¿hay una forma conocida que pueda hacer más (P1)?, ¿un formato de otra app que este usuario ya use (P2)?, ¿contenido que solo tiene este cliente (P3)?, ¿un eje de ejecución donde ir muy por encima del sector (P4)?, ¿un límite que pueda ser útil (P5)? Para la marca, P6; para un rediseño, P7.

### 6. Filtrar cada candidato

Pasa solo si responde que sí a todo:

1. ¿Ayuda al usuario (confianza, comprensión, decisión) o solo diferencia? Lo segundo no vale.
2. ¿Se entiende sin explicarlo? Si hace falta una leyenda, se ha pasado.
3. ¿Es lo único nuevo de esa pantalla?
4. ¿Cabe en el proyecto (marca, tokens, reglas del `CLAUDE.md`)?
5. ¿Hay contenido real para sostenerlo? Un P3 sin datos de verdad es humo.
6. ¿Evita todas las señales de «se ha pasado»?

### 7. Entregar

Primero el mapa de convención resumido. Después de **1 a 3 huecos**, con tu recomendación primero. De cada uno: **dónde** (página y elemento), **patrón**, **ancla y sorpresa**, el **caso parecido** de `casos.md`, el **porqué** (evidencia o criterio, separados), el **riesgo** y **cómo probarlo**. Las propuestas visuales van con capturas o variantes renderizadas (`prototype`), no con esquemas. No se implementa nada hasta que el usuario elija.

**En modo auditoría** (si la web o app ya existe): pasa las señales de arriba y entrega lo que se ha pasado, lo que se ha quedado corto y lo que está bien, cada punto con su captura y su caso parecido.

## Reglas de dosis

1. **Estructura e interacción, típicas; lo distintivo, en la ejecución o el contenido.** *(Evidencia: Google 2012, Material 3 Expressive.)*
2. **Un solo eje nuevo por pantalla.** *(Criterio; coherente con el freno mutuo de Hekkert y con Arc.)*
3. **Cuanto menos experto en el tema y menos a menudo lo use, más típico.** Expertos y usuarios diarios aguantan y premian más novedad. *(Evidencia: Hekkert.)*
4. **Lo práctico y lo que se usa sin pensar pide más tipicidad** (formularios, banca, contacto). *(Evidencia: Hekkert por categoría; Google cita la banca.)*
5. **Nunca forma nueva y función nueva a la vez.** *(Criterio: Loewy, Thompson, Giora.)*
6. **Con usuarios que ya usan el producto, por pasos y con vuelta atrás** (P7). Mide antes y después, y separa el rechazo al cambio (pasa con el tiempo) del empeoramiento real (no pasa). Para tácticas de rediseño: `ux-craft/references/expertos/timgabe`. *(Evidencia: Snapchat, Windows 8, Liquid Glass, Spool.)*
7. **El ancla se puede soltar cuando el usuario ya ha aprendido** (esqueuomorfismo → iOS 7). *(Comentario, no estudio.)*

## Cómo encaja con las demás skills

- `diseno-libre`: cada idea sale de un hueco de los pasos 2-6 y dice su patrón, su ancla y su sorpresa.
- `ux-craft`: claridad § 6 cubre la mitad aceptable; esta skill decide cuánto salirse.
- `investigar`: hace las capturas del paso 2 y busca evidencia nueva; la de `evidencia.md` ya está recogida.
- `nng`: `mental-models`, `aesthetic-usability-effect` y la heurística 4 (consistencia y estándares) para respaldar la parte típica.
- `prototype`: para enseñar los huecos como variantes renderizadas.
- El `CLAUDE.md` del proyecto manda: si fija una convención o una marca, no se reabre con MAYA.
