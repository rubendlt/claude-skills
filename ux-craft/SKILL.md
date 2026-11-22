---
name: ux-craft
description: Pasada de UI/UX para web y móvil (construir, revisar o limpiar pantallas) - claridad (jerarquía, legibilidad, intuición, revisión sobre capturas), técnica con fuente primaria (Apple, Linear, Stripe, GOV.UK...) y quitar el "AI slop", y reglas comunes (movimiento, velocidad percibida, feedback, medidas, tipo y color, accesibilidad). Incluye escáner; el criterio por tema lo pone la skill del tema (conversion, diseno-web, premium, tiendas, apps-moviles). USAR cuando haya que construir, revisar o pulir una pantalla, componente o flujo de UI (web o móvil), cuando algo «se vea a plantilla», cuando el usuario pregunte por jerarquía, legibilidad o claridad, o cuando la cargue diseno-libre.
argument-hint: "[web|movil] [rutas, pantalla o encargo] [--solo-revisar]"
---

# UX Craft: técnica que se gana su sitio, sin relleno de IA

Una buena interfaz tiene tres caras, y cada pasada mira las tres:

- **Claridad:** que se entienda sin pensar. Qué pregunta responde la pantalla, qué es lo principal, qué va junto y qué sobra; que se lea de un vistazo y que lo pulsable lo parezca. Se decide antes del código y se juzga sobre la pantalla renderizada, nunca leyendo el código.
- **Craft:** técnicas **con fuente primaria** (blogs de ingeniería o diseño, WWDC, guías oficiales) que casi nadie aplica. Lo que se demostró falso o sin base está en `references/mitos.md`, para no repetirlo.
- **Slop:** no es un patrón concreto, es **la ausencia de decisiones**. Un modelo sin restricciones produce la media de lo que ha visto: Inter, índigo de Tailwind, hero centrado, tres tarjetas, 01/02/03, fade-in al hacer scroll. Cada cosa por separado es aceptable; **lo que delata es el conjunto**: cuatro o cinco marcas juntas y cualquiera reconoce "esto lo hizo una IA".

Una pantalla no está terminada si no se entiende de un vistazo, si le falta técnica ni si le sobra relleno.

## Principios

1. **El proyecto manda.** Lee antes su design system (tokens, `CLAUDE.md`, componentes de UI, specs). Estas reglas se aplican *dentro* de él, nunca lo sustituyen: no metas colores, fuentes ni radios nuevos para aplicar una técnica. Si una regla del proyecto choca con una de aquí, gana la del proyecto; si te parece un error, dilo en el informe. Una marca que es decisión de marca documentada no es slop, pero se raciona: se usa en un nivel de jerarquía, no en todos.
2. **Todo se gana su sitio.** Esto no es una checklist para meterlo todo ni una lista negra para borrarlo todo. Un ⌘K, un skeleton o una animación puestos por inercia empeoran el producto. Un em dash como valor vacío en una tabla, emojis en las reacciones de un chat o el blur nativo de iOS (Liquid Glass) están justificados. La pregunta siempre es: ¿qué problema real de este usuario, en esta pantalla, resuelve esto?
3. **No cambies un cliché por otro.** Quitar el gradiente morado para poner fondo crema + serif itálica + filetes finos es cambiar el cliché de v0 por el de Claude. Cambiar `opacity-80` al hover por "lift -4px con spring" es el cliché del artículo "cómo no parecer IA". La salida buena sale del producto (su marca, su contenido, sus usuarios), no de otra lista de trucos. Si lo nuevo es resolver una tarea de forma más avanzada (no solo verse distinto), cuánto avanzar lo decide la skill `maya`.
4. **NN/g, por la skill `nng`.** Para ampliar o comprobar un hallazgo de NN/g citado aquí (`fuentes-claridad.md`), o buscar uno nuevo, usa sus fichas e índice local, no la web.
5. **Comprueba la API de la versión instalada** antes de usar algo de plataforma (Expo, React Native, iOS, navegador). Aquí se nombran APIs como referencia; la versión del proyecto manda.

## Referencias

| Archivo | Cuándo se lee |
|---|---|
| `references/web.md` | Web, panel de administración, SaaS de escritorio (React, Vite, Next, Tailwind, CSS) |
| `references/movil.md` | App móvil (React Native, Expo, SwiftUI, Kotlin/Compose) |
| `references/claridad.md` | Siempre que se construya o revise una pantalla: la pregunta de la pantalla antes del código, jerarquía, agrupación, escaneo, legibilidad, intuición y la revisión sobre capturas con un subagente nuevo |
| `references/slop.md` | Siempre: catálogo de marcas por categoría, plantillas de layout por tipo de pantalla, kit "premium SaaS", motion por defecto, estilo editorial de Claude |
| `references/copy.md` | Siempre que la pantalla tenga texto: vocabulario y estructuras de IA en español e inglés |
| `references/mitos.md` | Antes de citar una cifra o una "ley" de UX (Hick, 3 clics, patrón en F, 50 ms...): afirmaciones populares falsas o matizadas |
| `scripts/scan.py` | Escáner de candidatos a slop |

Si el trabajo toca web y móvil, lee las dos. Las reglas comunes están abajo, en este archivo.

**Criterio por tema** (opinión de diseñadores, no evidencia: por debajo del proyecto, de `normas`/`nng` y de este archivo). Esta skill es la pasada (claridad, medidas, craft y slop); el criterio de cada tipo de trabajo está en su skill. Carga **una**, la del problema, nunca todas:

| Si la pantalla o la duda es de… | Skill |
|---|---|
| que el visitante contacte, pida presupuesto o reserve; hero, CTA, prueba social, «no convierte» | `conversion` |
| layout de secciones, tipografía, color, espaciado, imágenes, estilo de una web | `diseno-web` |
| que parezca cara, cuidada, no de plantilla ni de IA | `premium` |
| ficha de producto, listados, filtros, precios, carrito | `tiendas` |
| app: onboarding, retención, paywalls, navegación inferior, dashboards | `apps-moviles` |
| cuánto avanzar una tarea frente a lo que el usuario ya conoce | `maya` |
| animación, transiciones, gestos | `movimiento` |

Las guías originales de cada autor (por si hay que comprobar de dónde sale un consejo) están en `~/.claude/skills/fuentes/`.

## Flujo de trabajo

### 1. Acotar y leer el contexto
- **Alcance:** lo que venga en los argumentos (plataforma, rutas, pantalla o encargo; `--solo-revisar` para no editar nada). Sin argumentos, empieza por lo tocado recientemente (`git diff`, `git status`).
- **Plataforma:** `web` o `movil` si viene en los argumentos; si no, dedúcela del código y carga su referencia.
- **Fuentes de verdad del diseño, antes de juzgar:** `CLAUDE.md`/`AGENTS.md`, tokens (`theme.ts`, `tailwind.config.*`, variables CSS), inventario de componentes, specs o mockups referenciados y memorias del proyecto. Anota qué es decisión explícita de marca: cambia el veredicto de muchas marcas.

### 2. Si el encargo es construir
Antes de escribir código, haz el paso previo de `claridad.md` § 1: escribe la pregunta que responde la pantalla y su acción principal, y una estructura en texto (qué lidera, qué apoya, qué va junto). Si no sabes cuál es la tarea principal, pregunta al usuario en vez de adivinar.

Construye aplicando las reglas comunes y las de la plataforma, y evita desde el principio las marcas de `slop.md` y `copy.md`. Antes de dar el trabajo por terminado, pasa los pasos 3 a 5 sobre lo que has escrito, incluida la revisión sobre capturas de `claridad.md` § 8, y corrige tú mismo lo que salga, sin informe intermedio. Después sigue con el paso 8. En el cierre di qué técnicas aplicaste, cuáles descartaste por no ganarse su sitio y qué queda pendiente de decisión del usuario.

### 3. Escanear
El escáner es un grep con criterio: encuentra candidatos a slop rápido, pero no decide nada.

```bash
python3 ~/.claude/skills/ux-craft/scripts/scan.py <rutas...>            # informe legible
python3 ~/.claude/skills/ux-craft/scripts/scan.py <rutas...> --json     # para procesar
python3 ~/.claude/skills/ux-craft/scripts/scan.py src --include-tests   # incluye tests
```

Da hallazgos por categoría (`color`, `type`, `layout`, `motion`, `content`, `copy`) con `archivo:línea` y un recuento por categoría.

### 4. Leer las pantallas
El escáner no ve la composición ni el craft. Abre el JSX/markup de las pantallas afectadas y:
- compáralo con las plantillas de `slop.md` § 4 (hero centrado, tres tarjetas idénticas, dashboard o home de plantilla) y el kit de § 5;
- recorre la **revisión rápida** de `web.md` § 9 o `movil.md` § 10: respuesta al tocar, zonas táctiles, motion, navegación, estados de carga, vacío y error, texto grande, lector de pantalla;
- haz el inventario de medidas (§ Medidas): valores fuera de la escala y valores distintos para el mismo papel (márgenes, rellenos, radios, alturas);
- lee todo el texto visible con `copy.md`;
- recorre la **revisión de claridad** de `claridad.md` § 9 y, si la pantalla se puede renderizar, haz la revisión sobre capturas de § 8 con un subagente nuevo que no vea el código. Si no se puede renderizar, dilo en el informe: la claridad no se da por buena leyendo el código.

### 5. Clasificar

| Veredicto | Cuándo | Acción |
|---|---|---|
| **Mantener** | Uso funcional o decisión de marca usada con medida | Nada; si lo mencionas, di por qué se queda |
| **Racionar** | Decisión de marca, pero repetida hasta ser ruido (eyebrows en cada sección, `·` en cada línea) | Dejarla en el nivel de jerarquía donde aporta y quitarla del resto |
| **Quitar** | Decoración sin función (numeración redundante, glow, gradiente en texto, emoji como icono, borde izquierdo de color, texto que explica lo evidente) | Borrar, sin sustituto |
| **Sustituir** | Hace falta algo, pero el valor es genérico (Inter, índigo, `rounded-2xl` en todo, copy vacío) | Cambiar por el token, fuente o texto específico del producto |
| **Corregir** | Incumple una regla de craft o de claridad (zona táctil pequeña, sin estado pulsado, `ease-in`, medida fuera de la escala o distinta para el mismo papel, falta el estado de error, contraste bajo, texto que no escala, dos botones primarios, todo con el mismo peso, icono ambiguo sin etiqueta, texto gris claro) | Aplicar la regla y citarla |

Prioriza por impacto: lo que bloquea a alguien (accesibilidad, no encontrar la acción principal), lo que se ve en la primera pantalla y lo que se repite en muchas pantallas va antes que un caso aislado.

### 6. Informar
Antes de cambiar nada, muestra un resumen corto:

```
## UX craft: <alcance>
Slop: <N> (color X · tipografía X · layout X · motion X · contenido X · copy X), nivel bajo/medio/alto según cuántas categorías aparecen juntas
Claridad: <N> hallazgos (pregunta de la pantalla: «…» → acción principal: «…»; revisado sobre capturas: sí/no)
Craft: <N> hallazgos

| # | Qué falla | Dónde | Regla o marca | Veredicto | Cambio propuesto |
|---|-----------|-------|---------------|-----------|------------------|
| 1 | Eyebrow en mayúsculas espaciadas encima de cada H2 | src/app/home.tsx:88, :142 | Eyebrow (slop.md § 2) | Racionar | Dejarlo solo en la cabecera de sesión |
| 2 | Botón de icono de 32 pt sin área ampliada | src/ui/IconButton.tsx:14 | Zona táctil mínima (movil.md § 1) | Corregir | `hitSlop` de 6 pt por lado |
...

Se quedan (justificado): <lista breve con el porqué>
```

Con `--solo-revisar`, o si el encargo era solo revisar o auditar, para aquí y ofrece aplicar los cambios.

### 7. Aplicar
- Aplica **Quitar**, **Sustituir** y **Corregir** directamente cuando el cambio es local: clases, estilos, strings, props de accesibilidad, un componente.
- Los cambios **estructurales** se proponen con un boceto concreto y esperan un sí: rehacer la composición de una pantalla, eliminar una sección entera, cambiar la fuente global o la paleta, o añadir una técnica que no estaba (⌘K, hápticos, interfaz optimista, transición de elemento compartido). Tocan la identidad o el comportamiento del producto, así que la decisión es del usuario.
- Sustituye con los tokens existentes del proyecto. Si falta un token (p. ej. una escala de espaciado o de radios), créalo en el archivo de tokens en vez de meter valores sueltos.
- El copy nuevo sale de datos del producto (ver `copy.md`). Si no los tienes, un texto sobrio y descriptivo, nunca otro eslogan.
- No rompas comportamiento: si quitas un skeleton, que siga habiendo estado de carga; si quitas un toast, que el feedback siga llegando por otro lado.

### 8. Verificar
- Vuelve a pasar el escáner sobre lo tocado y compara los recuentos.
- Repite las pruebas de `claridad.md` § 8 sobre las capturas de lo cambiado (como mucho 2–3 rondas en total).
- Ejecuta lint, typecheck y tests del proyecto (mira los scripts en `package.json`). Si alguno falla, dilo con el error.
- Si hay forma de ver la UI (servidor de desarrollo, simulador, capturas), úsala, también con el texto grande y el tema oscuro si el proyecto lo tiene. En web, mírala también a 1920 px de ancho y no solo a 1280: Playwright abre a 1280 × 720 por defecto, justo el ancho de `max-w-7xl`, y a ese tamaño una pantalla encajonada parece correcta. Si no hay forma de verla, dilo en vez de dar por buena la parte visual.
- Cierra con: qué se quitó, qué se sustituyó, qué se corrigió, qué se dejó a propósito y qué queda pendiente de decisión del usuario.

## Reglas comunes a web y móvil

### Movimiento
- **Motion solo cuando comunica:** un cambio de estado, de dónde viene o a dónde va un elemento, el feedback de una acción. Una entrada coordinada por pantalla como mucho, no una por bloque.
- **Frecuencia de uso manda.** Lo que se hace cientos de veces al día (abrir menú, cambiar de pestaña, acciones de teclado) va **sin animación**. Lo ocasional lleva una animación breve. Solo lo raro, como celebrar un hito, se gana un momento vistoso. (Emil Kowalski, "You don't need animations"; Rauno Freiberg, Vercel)
- **Nunca `ease-in` en la interfaz**: empieza lento justo cuando el usuario mira. Usa `ease-out` para entrar, por ejemplo `cubic-bezier(0.23, 1, 0.32, 1)`.
- **Duración:** 100–200 ms en feedback, 150–250 ms en menús y popovers, hasta ~300 ms en entradas; nada por encima de 300 ms en la interfaz. La **salida es más rápida que la entrada** (Material: entrada 225 ms, salida 195 ms).
- **Animar desde el origen:** lo que se abre crece desde el elemento que lo abrió, nunca desde `scale(0)`; se empieza en torno a 0.95 con opacidad 0.
- **Interrumpible:** una animación debe poder redirigirse a mitad de camino y heredar la velocidad del gesto. Los keyframes cerrados no sirven para eso; los muelles (springs) y las transiciones sí.
- **Solo `transform` y `opacity`**, nunca `transition: all`, y respeta siempre la opción de **reducir movimiento**: *sustituye* la animación por un fundido, no la elimines si comunica algo.
- **Gestos destructivos se confirman al soltar**, no al cruzar un umbral.

### Velocidad percibida
- **Límites de respuesta** (Miller 1968, Card 1991, NN/g): hasta 0,1 s se siente instantáneo, hasta 1 s no rompe el hilo, a partir de 10 s pide barra de progreso. Superhuman apunta a menos de 100 ms por acción y lo mide como *porcentaje de eventos bajo 100 ms*, no con percentiles.
- **Interfaz optimista:** pinta el resultado al instante y revierte si falla (el like de Instagram). **Excepción:** recursos escasos que el servidor puede rechazar (una plaza, un pago, stock). Ahí se muestra estado pendiente o se reserva el recurso en el servidor.
- **Trabajo anticipado:** Instagram subía la foto mientras el usuario escribía el pie de foto (Mike Krieger, 2011). Precarga lo probable.
- **Indicadores de carga anti-parpadeo:** no los muestres antes de ~150–300 ms y, una vez visibles, mantenlos al menos ~300–500 ms.
- **Skeleton solo si la carga es perceptible y reproduce el contenido final exacto** (evita saltos de layout). No acorta la espera percibida: en el test de Viget quedó peor que el spinner. Con datos locales que cargan al instante, sobra.

### Feedback, copy y errores
- **Deshacer mejor que confirmar:** los diálogos se aceptan por costumbre y no protegen (Aza Raskin, 2007; Gmail). Deja el diálogo solo para lo irreversible y grave.
- **Toast solo para lo que no se ve en la vista** (guardado en segundo plano, deshacer). Los errores de validación van junto al campo, y confirmar un cambio que ya se ve sobra.
- **Botones con verbo y objeto:** "Cancelar reserva", "Eliminar socio"; nunca "OK", "Sí" ni "Confirmar". Etiquetas y títulos en voz activa y cortos. Monzo pone un máximo de 3 palabras en botones.
- **Mínimo texto en la UI, solo lo estrictamente necesario.** Cada palabra tiene que ganarse su sitio: si quitarla no cambia lo que el usuario entiende o puede hacer, se quita. No escribas por tu cuenta:
  - Títulos de pantalla que repiten la pestaña o la ruta ("Inicio", "Perfil", "Ajustes" encima de la pantalla "Inicio", "Perfil", "Ajustes"). La barra de navegación ya dice dónde estás.
  - Numeración decorativa ("01", "02", "03") en secciones, tarjetas, pasos o listas. Solo se numera si el orden importa al usuario (pasos de un proceso).
  - Subtítulos, eyebrows, descripciones o frases de ayuda que explican lo evidente.
  - Etiquetas junto a un icono que ya se entiende, ni saludos, eslóganes o relleno.
  Ante la duda, no lo escribas; si ya existe, bórralo en vez de reformularlo. Si el usuario no lo ha pedido o el diseño de referencia no lo trae, no se inventa texto.
  Si una pantalla necesita ese texto para entenderse, el fallo está en la estructura (orden, agrupación, jerarquía o el nombre del control): se arregla eso y después se quita el texto. Se queda solo el que da información que el diseño no puede mostrar: el formato de un campo, la consecuencia de una acción, por qué falló algo o la etiqueta de un icono que no es estándar.
- **Los errores dicen qué pasó y cómo arreglarlo**, y si se puede ofrecen el botón que lo arregla (Shopify Polaris, Vercel).
- **Estados vacíos que enseñan:** explican qué va a haber ahí y llevan directos a la acción que lo llena (NN/g). Nunca ocultes una sección por estar vacía.
- Marcas de IA en el texto (vocabulario, tríadas, em dashes, saludos con emoji): `copy.md`.

### Medidas: una escala y el mismo valor para el mismo papel
- **Ninguna medida suelta.** Espaciados (padding, margin, gap), radios, alturas de control, tamaños de icono y de letra, grosores de borde y sombras salen de la escala del proyecto, nunca de un valor a ojo (13, 14, 18, 22 px). Si el proyecto no tiene escala, base 4: 4, 8, 12, 16, 24, 32, 48, 64. Material alinea los componentes a 8 dp y los iconos y el texto a 4 dp; Atlassian usa base 8 px y pide tokens en lugar de píxeles; Carbon: salirse de la escala "should be avoided whenever possible".
- **Pasos que se distinguen:** dos valores contiguos de la escala se separan al menos un 25 % (Refactoring UI). 14 y 16 no son dos decisiones distintas; uno de los dos está mal.
- **El mismo papel, el mismo valor, en toda la app:** el margen lateral de las pantallas, el relleno de las tarjetas, la separación entre secciones, entre campos y entre etiqueta y campo son siempre los mismos. Si una tarjeta lleva 16 de relleno y otra del mismo tipo 20, hay que igualarlas.
- **Igual no es uniforme:** la diferencia de espacio es lo que agrupa (más entre grupos que dentro, `claridad.md` § 3). Lo que se fija es el valor de cada nivel (dentro de un grupo, entre grupos, entre secciones), y ese valor se repite en todas las pantallas.
- **Radios: pocos y por tipo de elemento.** Dos o tres valores más la cápsula. Todos los botones con el mismo radio, todos los inputs con el mismo, todas las tarjetas con el mismo; un botón y un input que van juntos comparten radio y altura. Material 3 asigna a cada componente un nivel de su escala de radios y Radix Themes deriva todos de un solo ajuste. Cápsula o círculo solo donde la forma significa algo (avatar, chip, toggle; `slop.md` § 3).
- **Esquinas concéntricas:** radio interior = radio exterior − relleno. El hijo nunca tiene más radio que el padre (Apple WWDC25, Vercel).
- **Alturas e iconos en tamaños fijos:** los controles que comparten fila (botón, input, select) miden lo mismo, y los iconos van en 2–3 tamaños (p. ej. 16, 20, 24) según el texto al que acompañan.
- **La única excepción es el ajuste óptico** de ±1 px cuando la geometría no coincide con lo que se percibe (`web.md` § 7). Es una corrección puntual, no un paso nuevo de la escala.
- **Se comprueba con inventario, no a ojo:** lista los valores distintos de cada propiedad en lo que se revisa (`p-*`, `gap-*`, `rounded-*` y valores arbitrarios `[13px]` en Tailwind; `padding`, `margin`, `gap`, `borderRadius`, `height` en estilos). Cada valor fuera de la escala, o distinto para el mismo papel, es un **Corregir**. Si la escala no existe, se crea en el archivo de tokens (paso 7) en vez de arreglar valor a valor.

### Tipografía y color
- **Cifras tabulares** en números que cambian o se comparan (precios, contadores, tablas, cronómetros), para que no bailen.
- **Espaciado de letras que se estrecha al crecer el tamaño** (tracking negativo en titulares grandes; Apple e Inter lo hacen por tabla o fórmula).
- **Color perceptual (OKLCH/LCH), no HSL:** la "L" de HSL miente. Linear genera cada tema desde 3 variables (base, acento, contraste) y Stripe garantiza contraste por distancia entre niveles de su escala.
- **Escala de 12 pasos con un uso fijo por paso:** 1–2 fondos, 3–5 fondo de componente (reposo, hover, activo), 6–8 bordes, 9–10 sólido, 11–12 texto (Radix Colors).
- **Modo oscuro no es invertir:** cuanto más elevada la superficie, más clara; acentos menos saturados; fondo base oscuro, no negro puro (salvo tema OLED explícito).
- **Color con significado fijo:** cada color comunica siempre lo mismo, y nunca es el único portador de la información.

### Accesibilidad base (WCAG 2.2 AA es la referencia legal)
- Contraste 4.5:1 en texto y 3:1 en iconos, bordes de controles y anillo de foco.
- Todo lo que se hace con un gesto o arrastre tiene alternativa con un toque o clic (WCAG 2.5.7).
- Se puede pegar en todos los campos, incluidos contraseña y códigos de verificación (WCAG 3.3.8).
- El placeholder nunca sustituye a la etiqueta.
- **Espectro de personas** (Microsoft): una misma limitación puede ser permanente, temporal o de la situación. Diseñar para una mano sirve a quien tiene un brazo, a quien lleva un yeso y a quien sujeta algo.

## Qué no hacer

- No borres a ciegas todo lo que marque el escáner. Un `rounded-full` en un avatar o un `grid-cols-3` en un calendario no son slop.
- No metas una técnica solo porque aparece aquí. Si no resuelve un problema de este usuario en esta pantalla, sobra.
- No impongas una estética nueva que el proyecto no ha pedido. Esta skill aplica técnica y quita ruido dentro de las decisiones del producto; no es un rediseño.
- No sustituyas un cliché por el "anti-cliché" de moda (crema + serif, brutalismo, bento, grano/noise, lift con spring) salvo que encaje con la marca.
- No reescribas copy de negocio (precios, textos legales, nombres de planes) sin preguntar.
