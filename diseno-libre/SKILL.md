---
name: diseno-libre
description: Arnés para diseñar UI/UX con libertad creativa sin caer en slop. Antes de dibujar, investiga referentes y evidencia con la skill investigar y presenta en un artifact al menos 3 ideas adaptadas al proyecto; luego construye con ux-craft, en gris primero, y verifica contra lo decidido. USAR cuando el usuario dé libertad creativa para diseñar o rediseñar una pantalla, flujo, app o web ("libertad creativa", "como tú veas", "propón un diseño", "sorpréndeme", "a tu criterio", "carta blanca"), cuando pida /diseno-libre, o cuando dé una referencia visual que haya que seguir.
argument-hint: "[encargo] [--rapido] [--ref <url|imagen>...]"
---

# Diseño libre: primero referentes, después ideas, al final pruebas

Un modelo con libertad creativa y sin datos produce la media de lo que ha visto. Este arnés cambia el orden: **mirar cómo lo resolvieron otros → decidir con el usuario → construir → comprobar contra lo decidido**. Cada fase deja un archivo y la siguiente no empieza sin él.

## Reglas que no se negocian

1. **La investigación es la de `investigar`.** Cómo encontrar referentes, mirarlos en captura (nunca de memoria), entender por qué lo hacen y si esa causa existe aquí, y qué evidencia cuenta: todo eso está en `investigar` §1-3 y no se repite aquí. Este arnés añade lo que viene después: ideas, decisión, construcción y verificación.
2. **El aspecto sale del proyecto, nunca del referente.** Del referente se toma el mecanismo adaptado, y solo si su causa existe aquí (el carrusel de una tienda existe para vender más referencias; en una web cuyo único objetivo es contactar, esa causa no está).
3. **La media del sector también es slop.** Lo que hacen casi todos es una convención: se respeta porque el usuario la espera. Pero la identidad sale de los huecos, no de juntar lo que hace todo el mundo.
4. **Cada decisión cita su porqué:** un referente (archivo), un dato del producto o una regla con fuente. Si no tiene porqué, sobra.
5. **El proyecto manda** (principio 1 de ux-craft): tokens, marca y `CLAUDE.md` del proyecto están por encima de cualquier referente.

## Postura: diseñador senior, no generador de código

Llamarte «senior» no cambia nada; lo que cambia es comportarte como uno. Un generador recibe un encargo y devuelve código. Un diseñador senior decide qué problema hay, dice que no, elige y responde de lo que elige. El código es lo último y lo menos interesante.

- **Cuestiona el encargo antes de aceptarlo.** Pregúntate si lo pedido resuelve el problema del usuario. Si crees que el problema real es otro («no hace falta otra pantalla de estadísticas: el usuario no sabe qué entrenar hoy»), dilo en el brief con tu porqué. Si la pantalla sobra, dilo también.
- **Opina, elige y defiende.** Nada de «aquí tienes tres opciones, tú decides» sin postura. Recomienda una, di por qué y qué descartarías. Si el usuario elige otra que te parece peor, dilo una vez con el motivo y después haz bien lo que decida.
- **Separa criterio de gusto.** El criterio se apoya en algo: un referente, un dato del usuario o una regla con fuente. Cuando sea gusto, dilo («esto es gusto: lo prefiero más sobrio»). Los dos valen, pero no se presentan igual.
- **Lo aburrido también vale.** Si la convención del sector es la buena respuesta, úsala sin complejos. Ser distinto no es un objetivo: la diferencia tiene que resolver algo.
- **Boceta antes de pulir.** Primero estructura y jerarquía en gris (fase 3); color, tipografía y detalle después. Si la jerarquía no funciona en gris, el color no la arregla.
- **Edita más que añades.** En cada ronda, pregúntate qué quitarías. Lo difícil es quitar.
- **Critícate antes de enseñar.** Cuando presentes algo, di su punto débil y qué probarías después. Un senior sabe dónde cojea su propio trabajo.
- **Habla de diseño, no de código.** Al presentar, habla del usuario, la jerarquía y las decisiones con su porqué. Componentes, clases y archivos van al final y en una línea, solo si importan.
- **Pregunta poco y bien.** Solo lo que no puedes deducir y cambia el diseño (quién es el usuario, cuál es la acción principal). Lo demás lo decides tú y lo dices.

## Carpeta de trabajo y puertas

Todo vive en `<raíz del proyecto>/.diseno/<slug-del-encargo>/` (fuera del proyecto, si no hay: en el scratchpad).

```
brief.md                  fase 0
referentes/*.png          fase 1 (capturas)
referentes/fichas.md      fase 1 (análisis)
referentes/lamina.png     fase 1 (hoja de contacto)
sintesis.md               fase 2
ideas.html                fase 2 (artifact con las ideas)
decision.md               fase 2 (dirección elegida + enlace del artifact)
verificacion/*.png        fase 4 (capturas del resultado)
verificacion/informe.md   fase 4
```

Al terminar cada fase ejecuta su puerta (comprueba esa fase y las anteriores). Si sale «cerrada», termina lo que falta; no la saltes:

```bash
python3 ~/.claude/skills/diseno-libre/scripts/refs.py puerta <carpeta> brief        # fin fase 0
python3 ~/.claude/skills/diseno-libre/scripts/refs.py puerta <carpeta> referentes   # fin fase 1
python3 ~/.claude/skills/diseno-libre/scripts/refs.py puerta <carpeta> decision     # fin fase 2: ya se puede construir
python3 ~/.claude/skills/diseno-libre/scripts/refs.py puerta <carpeta> cierre       # fin fase 4
```

La puerta solo comprueba que el trabajo existe, no que sea bueno: eso lo juzgas tú y el revisor de la fase 4.

## Fase 0 · Brief (5 minutos, no más)

Lee las fuentes de verdad del proyecto (ux-craft § 1: `CLAUDE.md`, tokens, componentes, memorias). Si hay un estudio de `investigar` sobre esta pantalla (memoria, `docs/`), parte de sus referentes y su evidencia y no los repitas. Para ver cómo está hoy la página propia, `capturas` (`.shots/`) antes de capturar de nuevo. Escribe `brief.md` con estos apartados exactos:

- `## Encargo`: qué pantalla, flujo o web, y en qué plataforma.
- `## Usuario y momento`: quién lo usa, en qué situación (de pie en el gimnasio, en el escritorio comparando…) y con qué frecuencia.
- `## Pregunta de la pantalla`: la pregunta que responde y su acción principal (claridad.md § 1). Una por pantalla.
- `## Problemas a resolver`: 2–4 problemas concretos, en términos del usuario («no sabe qué entrenar hoy», no «mejorar engagement»). Son lo que se busca en los referentes.
- `## Restricciones`: lo que ya está decidido (marca, tokens, stack, contenido real disponible).
- `## Sector y vecinos`: el sector y los sectores vecinos que resuelven el mismo problema de fondo (fitness → hábito: Duolingo; progreso: apps de finanzas; contenido guiado: meditación).
- `## Alcance de la investigación`: lo decides tú, como lo haría un senior que gestiona su tiempo (tabla de abajo). Con estas líneas exactas, que lee la puerta:
  ```
  Referentes: 8
  Vecinos: 2
  Direcciones: 3
  Por qué: pantalla nueva con un patrón conocido; lo que no está claro es cómo explicar la recomendación del día.
  ```

Si no sabes cuál es la acción principal o el usuario, pregunta antes de seguir. Lo demás, dedúcelo.

### Cuánto investigar

Mide el alcance por lo que **no sabes**, no por el tamaño del encargo. Una pantalla pequeña con un problema nuevo (cómo explicar un cobro raro) pide más que una grande con un patrón resuelto (ajustes).

| Situación | Referentes | Vecinos | Direcciones |
|---|---|---|---|
| Ajuste de un componente o un estado; patrón muy resuelto | 0–3 | 0 | 3 |
| Pantalla nueva con patrón conocido | 4–8 | 1–2 | 3 |
| Pantalla clave (home, paywall, onboarding) o problema poco resuelto | 8–12 | 2–3 | 3–4 |
| Flujo o producto nuevo, o sector que no conoces | 12–20, incluidos flujos completos | 3+ | 4–5 |

Sube un nivel si la pantalla toca dinero o conversión (añade experimentos de Lazyweb), si el usuario pidió explícitamente algo distinto o si el sector es muy homogéneo (hay que ir a los vecinos para salir de la media). Baja un nivel si el usuario trae sus referencias o si el proyecto ya tiene un sistema de diseño maduro que deja poco margen.

**Ideas: mínimo 3, siempre.** Pon más si de verdad vale la pena: hay más de 3 enfoques de fondo distintos, el problema está poco resuelto o el usuario pidió explorar. Una idea más tiene que ser otro enfoque, no una variante de color o de orden de las anteriores; si no lo es, no la pongas.

Con 0 referentes, el arnés se reduce a: brief, 3 ideas rápidas en el artifact, boceto en gris, construir y verificar. Es legítimo en un ajuste pequeño: dilo y sigue.

**El alcance se puede corregir.** Si a mitad de la fase 1 un problema no tiene buenos referentes, o ya está claro con menos, cambia los números en el brief con una línea de por qué. Lo que no vale es bajarlos para pasar la puerta.

## Fase 1 · Referentes

Carga `investigar` y haz sus pasos 1-3 (lo que ya hay, cómo lo hacen los mejores, qué dice la investigación) con el alcance del brief y una búsqueda por cada «Problema a resolver». Todo inline, sin subagentes. Lo propio de este arnés está en `references/investigacion.md`:

1. Capturas en `<carpeta>/referentes/` con el `capture.mjs` de `investigar`. En apps móviles, además, Lazyweb si está instalado (pantallas, flujos y experimentos reales).
2. Una ficha por referente en `fichas.md` con la plantilla de `investigacion.md`, y la evidencia (con [leída]/[resumen]) al final del mismo archivo.
3. Los números son los del brief. Busca hasta que cada problema tenga al menos un referente que lo resuelva bien, o hasta estar seguro de que nadie lo resuelve (eso también es un hallazgo: es un hueco). Diez capturas que repiten el mismo patrón valen lo que una; no rellenes.
4. Monta la hoja de contacto (`refs.py lamina`) y ábrela.
5. Guarda el estudio en memoria como dice `investigar` §6 (con las dos mitades cubiertas), para que una valoración posterior de la misma pantalla no lo repita.

Con `--ref` (el usuario trae sus referencias): esas van primero y mandan. Se analizan con la ficha detallada de `investigacion.md` § «Referencia del usuario» y el resto de la búsqueda solo completa lo que no cubren.

## Fase 2 · Síntesis y decisión

Detalle en `references/sintesis.md`. Escribe `sintesis.md`:

1. **Convenciones** (las hacen ≥ la mitad de los referentes del sector): se mantienen salvo una razón escrita.
2. **Huecos**: dónde fallan, dónde son todos iguales y qué resuelve bien un vecino que el sector no ha copiado.
3. **Las ideas (direcciones) del brief**: mínimo 3, más si vale la pena. Tienen que diferenciarse en estructura o en mecanismo, no solo en color. Cada una con: idea en una frase, qué toma de quién (con archivo), qué hace distinto y por qué, estructura en texto de la pantalla principal y riesgo.
4. Pasa el **filtro anti-slop** de `sintesis.md` a cada dirección.

Después **publica las ideas en un artifact** (`sintesis.md` § 4): referentes clave con sus capturas, convenciones, huecos y cada idea con su boceto en gris, con tu recomendación primero. Da el enlace al usuario y **para** hasta que elija. Su elección va a `decision.md` (`Dirección elegida:` + ajustes que pida + `Artifact: <url>`). Si cambias las ideas tras su respuesta, vuelve a publicar en la misma URL.

Con `--rapido`, o si el usuario ha dicho que no le preguntes: elige tú, escribe en `decision.md` `Dirección elegida: <X> (la eligió Claude por delegación)` con el porqué y sigue. La síntesis y el artifact se hacen igual: el usuario tiene que poder ver qué se descartó.

## Fase 3 · Construir

Carga las skills en este orden (el usuario autorizó usar ux-craft desde este arnés):

1. `ux-craft`: SKILL.md, `claridad.md`, `slop.md`, `copy.md`, `mitos.md` y la referencia de plataforma (`web.md` o `movil.md`). Sigue su paso 2 («Si el encargo es construir»).
2. `ux-craft/references/expertos/uxpeak/guia.md` entero (los tips van agrupados por tipo; aplica las secciones del patrón que construyes) y, si el patrón lo pide, otro experto de esa carpeta según la tabla de ux-craft.
3. Si es una web o una landing: `action-hm:estandar-hm`, si está instalada.
4. Según lo que toque la pantalla (solo las que apliquen; **evidencia**, por encima de ux-craft en su terreno):
   - formularios, errores, textos de interfaz, cookies o páginas de estado → `govuk` (la página pertinente);
   - accesibilidad, tamaños de toque o ergonomía móvil → `hig`;
   - cualquier decisión de usabilidad con duda (navegación, catálogo, buscador, lectura, confianza, conversión) → `nng`;
   - web en móvil (100vh, zoom en campos, notch, hover pegado) → `mobile-native`;
   - movimiento → `movimiento` (modo construir y, al acabar, revisar).

**Si se contradicen, manda:** proyecto > govuk / hig / nng en su terreno > ux-craft (incluido `mitos.md`) > estandar-hm > uxpeak. En concreto, de uxpeak **no** se aplica:
- cifras sin fuente presentadas como hechos («el 70–90 % confía en el default»);
- skeleton, sombras teñidas o barra de progreso por defecto: solo si se ganan su sitio (ux-craft, principio 2);
- presión falsa: cuentas atrás inventadas, progreso regalado engañoso, aversión a la pérdida para retener a quien quiere irse. Persuasión sí; trampas no.

**Primero el boceto en gris.** Antes del diseño final, construye la pantalla solo con estructura: grises, una fuente, sin imágenes ni color de marca, y con el contenido real. Captúrala y pásale la prueba de desenfoque y la del primer vistazo (`claridad.md` § 8). Si lo principal no destaca en gris, corrige la estructura (tamaño, posición, espacio, qué sobra) antes de seguir. Solo entonces color, tipografía, imagen y motion, y cada uno tiene que reforzar una jerarquía que ya funciona, no crearla.

Mientras construyes, ten `decision.md` abierto: cada mecanismo que tomaste de un referente se implementa como se decidió, sin suavizarlo hacia lo genérico.

## Fase 4 · Verificar contra lo decidido

Detalle en `references/verificacion.md`:

1. Captura el resultado (web: `capture.mjs` de `investigar` con origen `propia`, o `.shots/` si el proyecto usa `capturas`; móvil: simulador o dispositivo) en `verificacion/`.
2. **Revisión en frío**: pasa las pruebas de `verificacion.md` (claridad, fidelidad a la dirección y «¿parece hecho por IA?») mirando solo las capturas, `decision.md` y la lámina, no el código. Un subagente revisor solo si el usuario lo pide.
3. Corrige los 3 problemas más graves y repite. Como mucho 2–3 rondas.
4. Escáner de ux-craft sobre lo tocado y `break-ui` con datos extremos (nombres largos, vacíos, cifras enormes) en los componentes nuevos. Si es una web publicada o en preview, ofrece `jurado-hm` si está instalada. En un proyecto con `capturas`, rehaz `.shots/` al cerrar.
5. Escribe `verificacion/informe.md` y cierra con: dirección aplicada, qué mecanismos tomaste de qué referente, qué descartaste y por qué, y qué queda por decidir.
