# Slop: marcas de IA en UI

Organizado por categoría. Cada marca: **qué es**, **cómo detectarla** (en código) y **qué hacer**. Las secciones 1, 2, 3, 6 y 7 coinciden con las categorías del escáner (`color`, `type`, `layout`, `motion`, `content`). Las 4 y 5 son estructura que el escáner casi no ve: hay que leer el markup de la pantalla. El copy está en `copy.md`.

Contexto: según un análisis de 3,2M de posts en 47 subreddits (vibecoded-design-tells, 2026), las dos marcas más citadas son el aspecto por defecto de shadcn/Tailwind y el "morado IA". El glassmorphism (0,2% de las quejas), los bento grids (0,1%) y los fondos mesh/aurora apenas aparecen: no pierdas tiempo cazándolos si están bien usados.

## Índice
1. Color
2. Tipografía
3. Layout y componentes
4. Plantillas de layout por tipo de pantalla
5. El kit UX "premium SaaS"
6. Motion por defecto
7. Contenido e imágenes
8. El estilo "editorial" de Claude
9. Romper la plantilla sin caer en otra

---

## 1. Color

### Índigo/violeta como primario
- **Qué:** `indigo-500/600`, `violet-500`, `purple-600` como color de marca sin que nadie lo haya elegido. Viene del `bg-indigo-500` de Tailwind UI (Adam Wathan llegó a pedir perdón en broma).
- **Detectar:** `(bg|text|border|ring|from|to|via)-(indigo|violet|purple|fuchsia)-\d+`; hex `#6366f1 #4f46e5 #818cf8 #8b5cf6 #7c3aed #a855f7 #9333ea`.
- **Hacer:** sustituir por el token de marca. Si no hay marca, pregunta. No elijas "otro color bonito" por tu cuenta.

### Gradientes decorativos
- **Qué:** azul→morado, morado→rosa, morado→cian en heros, botones, fondos, bordes.
- **Detectar:** `bg-gradient-to-*`, `bg-linear-to-*`, `linear-gradient(`, `radial-gradient(`, `<LinearGradient`, `conic-gradient`.
- **Hacer:** color sólido. Como mucho un gradiente contenido con función: fundido de legibilidad sobre una foto, máscara de fade en un scroll horizontal. En React Native, un `LinearGradient` que difumina el contenido bajo una barra es funcional; uno detrás de un título es decoración.

### Texto con gradiente
- **Detectar:** `bg-clip-text` + `text-transparent`, `-webkit-background-clip: text`, `WebkitBackgroundClip`, `MaskedView` con gradiente.
- **Hacer:** quitar. El texto va en un color sólido de la jerarquía.

### Glow y sombras de color
- **Detectar:** `shadow-(indigo|purple|violet|blue|cyan|pink)-\d+`, `shadow-[0_0_...]`, `box-shadow: 0 0 20px rgba(...)` con color, `drop-shadow` de color; en RN `shadowColor` distinto de negro con `shadowRadius` grande.
- **Hacer:** quitar, o una sombra neutra única del sistema.

### Modo oscuro por defecto con texto gris medio
- **Qué:** oscuro sin que nadie lo pida y cuerpo en `gray-400`/`slate-400` sobre `gray-900`, que suele no pasar WCAG AA.
- **Hacer:** si el oscuro es de marca, se queda, pero sube el contraste del cuerpo (≥4.5:1). Si no, pregunta.

### Paleta por defecto de shadcn/Tailwind sin tocar
- **Qué:** `slate`/`zinc` + acento por defecto + `--radius: 0.5rem` tal cual vienen.
- **Detectar:** `tailwind.config` con solo `extend` y ningún color propio, `components.json` de shadcn con `baseColor` por defecto, CSS vars de shadcn sin cambiar.
- **Hacer:** sustituir los tokens en la fuente (`colors`, `--primary`, `--radius`), no clase a clase.

### Colorines sin significado
- **Qué:** cada tarjeta de stat con un icono en un círculo de color distinto (azul, verde, morado, naranja).
- **Hacer:** el color solo para significado fijo (estado, error, éxito, marca). Lo demás en neutro.

---

## 2. Tipografía

### Inter (o Geist, Roboto, system-ui) como única fuente
- **Detectar:** `Inter`, `Geist`, `font-sans` sin configurar, `@fontsource/inter`, `next/font/google` con Inter.
- **Hacer:** si es decisión documentada (herramienta interna densa), se queda. Si no, propón una pareja display/cuerpo con carácter acorde a la marca. Es un cambio global: pregunta.

### Combos repetidos
- **Qué:** Space Grotesk + Instrument Serif + Geist; Playfair Display en el hero; DM Sans; Plus Jakarta Sans.
- **Hacer:** igual que arriba. Que la elección salga de la marca, no de "fuentes que no parecen IA".

### Palabra en serif itálica dentro de un titular sans
- **Qué:** "Build something *beautiful*", con la palabra destacada en Instrument Serif itálica y a veces en color de acento.
- **Detectar:** `font-serif italic`, `<em>` o `<span className="italic ...">` dentro de `h1/h2`.
- **Hacer:** quitar el truco. La jerarquía la da el tamaño/peso del titular entero.

### Eyebrow: etiqueta pequeña en mayúsculas espaciadas sobre cada titular
- **Qué:** `FEATURES` / `HOW IT WORKS` / `PRICING` en texto de 12px, `uppercase tracking-widest`, a menudo en color de acento o dentro de una pastilla, encima de cada H2.
- **Detectar:** `uppercase` + `tracking-(wide|wider|widest|[...])` en la misma línea; en RN `textTransform: 'uppercase'` + `letterSpacing`. Cuenta cuántas hay: si hay una por sección, es slop aunque la marca use mayúsculas.
- **Hacer:** racionar. Un solo nivel de jerarquía (p. ej. la cabecera de la pantalla o las etiquetas de datos) y el resto en sentence case. Si el eyebrow repite el titular ("PRICING" encima de "Simple pricing"), quítalo.

### Badge/pastilla encima del H1
- **Qué:** `✨ New: AI-powered X →` en una pastilla redondeada sobre el hero.
- **Hacer:** quitar, o integrar la novedad en el propio contenido si es real.

### Punto de color delante del texto en pills y badges
- **Qué:** `● Activo`, `● New`, `● Disponible`, `● Abierto ahora`: un punto (a menudo verde o del color de acento, a veces con `animate-pulse`) dentro de cada pill, antes de la etiqueta.
- **Detectar:** un elemento redondo diminuto junto al texto (`h-1.5 w-1.5 rounded-full`, `size-2 rounded-full`, `width: 6, height: 6, borderRadius: 3`) o un `●`/`•` al principio de la cadena.
- **Hacer:** quitarlo; la etiqueta ya dice el estado. Solo se queda si hay un motivo excepcional: el punto da información que el texto no da (un estado en vivo que cambia mientras se mira, o un color que distingue estados en una lista con muchos) y aparece igual en todas las pills del mismo tipo. "Queda más bonito" o "da sensación de vivo" no cuentan.

### Números con ceros delante como adorno
- **Qué:** `01 / 02 / 03` en pasos, secciones o tabs; `04 clases` en vez de `4 clases`.
- **Detectar:** literales `'01'`..`'09'`, `padStart(2, '0')` aplicado a contadores o índices mostrados.
- **Hacer:** quitar la numeración si el orden ya es evidente o la sección ya dice "3 pasos". Mantener si el número es información de verdad (paso 2 de 5 en un wizard, dorsal, código de sesión real). Los contadores van sin cero delante.

---

## 3. Layout y componentes

### La tarjeta universal
- **Qué:** `rounded-2xl shadow-lg p-6` (o `rounded-xl bg-white shadow-md`) en todo. En RN: `borderRadius: 16, padding: 24, shadowOpacity: 0.1` en cada `View`.
- **Detectar:** `rounded-(2xl|3xl)`, `shadow-(lg|xl|2xl)`, repetición de la misma combinación en muchos archivos; radios dispares (12, 14, 16, 20) sin escala.
- **Hacer:** una escala de radios del sistema (p. ej. 0/4/8, ver `SKILL.md` § Medidas) y usar borde o contraste de fondo antes que sombra. Menos contenedores: no todo tiene que ir en una tarjeta.

### Tarjetas dentro de tarjetas
- **Hacer:** aplanar. El contenedor interior pasa a separador, a espaciado o a nada.

### Tres (o cuatro) tarjetas idénticas
- **Qué:** grid de 3 con icono arriba, título y dos frases de longitud casi idéntica.
- **Detectar:** `grid-cols-3`/`md:grid-cols-3`/`lg:grid-cols-4` con `.map` sobre un array de features con `icon`/`title`/`description`.
- **Hacer:** si el contenido no tiene tres cosas de verdad, no las inventes. Jerarquía: una principal y el resto secundarias, o una lista, o una tabla. Varía el tratamiento según el contenido.

### Borde izquierdo de color
- **Qué:** tarjeta o callout con franja de 3-4px de color a la izquierda. Hay quien lo considera tan fiable como el em dash.
- **Detectar:** `border-l-(2|4|[3px])` + `border-(color)`; en RN `borderLeftWidth: 3/4` + `borderLeftColor`.
- **Hacer:** quitar. Si comunica un estado, usa un icono o texto de estado.

### Fila de stats
- **Qué:** 3-4 números grandes en fila ("10k+ usuarios · 99,9% uptime · 4,9★") o stat cards con icono en círculo + número + delta verde.
- **Hacer:** en una landing, quitar si los datos no son reales y verificables. En un dashboard es legítimo, pero con los KPIs que el usuario necesita, no cuatro por rellenar, y sin icono decorativo en cada uno.

### Hero centrado + CTA doble
- Ver § 4 (Landing).

### Todo dentro de una columna centrada de 1280 px
- **Qué:** `max-w-7xl mx-auto px-4` (o `container mx-auto`) envolviendo la app entera, también paneles, tablas y tableros. Viene de las plantillas de landing y a 1280 px, el ancho con el que se suele probar, no se nota.
- **Detectar:** `max-w-(5xl|6xl|7xl|screen-*)` junto a `mx-auto`, `container mx-auto`, o un `max-width` de 960–1600 px en el layout raíz.
- **Hacer:** quitarlo del layout y poner el límite solo en el bloque que lo necesita (texto, formulario). Ver `web.md` § 3.

### Pastillas en todo
- **Qué:** `rounded-full` en todos los botones, inputs, tags y badges.
- **Hacer:** `rounded-full` solo donde la forma tiene sentido (avatares, chips de filtro, toggles). Botones con el radio del sistema.

### Iconos Lucide intercambiables en todo
- **Qué:** un icono de línea delante de cada título, cada item de lista, cada stat.
- **Hacer:** iconos donde ayudan a reconocer (navegación, acciones). Quitar los puramente decorativos.

---

## 4. Plantillas de layout por tipo de pantalla

Las marcas visuales (color, fuente) se arreglan cambiando tokens. Estas son más profundas: son la **estructura** que el modelo elige por defecto. El escáner detecta pocas, así que hay que leer el markup de la pantalla y compararlo con estas plantillas.

### Landing / marketing
La secuencia fija que sale de casi cualquier generador y de casi cualquier prompt de "landing page":

1. Navbar: logo a la izquierda, 3-4 enlaces centrados (Features, Pricing, About), CTA a la derecha. Normalmente sticky con `backdrop-blur`.
2. Hero **centrado**: pastilla/badge ("✨ New"), H1 de 2 líneas con una palabra en gradiente o serif itálica, subtítulo gris de ~20 palabras, **dos botones** (primario sólido + secundario outline/ghost) y debajo un screenshot en un marco con glow.
3. Logo cloud: "Trusted by teams at..." con 5-6 logos en gris.
4. Features: grid de 3 (o 6) tarjetas con icono Lucide en un cuadrado de color, título y dos frases.
5. "How it works": 3 pasos numerados 01/02/03.
6. Bento grid o sección alterna imagen-texto zigzag.
7. Testimonios: 3 tarjetas o carrusel, avatar redondo, nombre, cargo, 5 estrellas.
8. Stats: fila de 4 cifras.
9. Pricing: 3 planes (Free / Pro / Team), el del medio destacado con "Most popular" y borde de acento, toggle mensual/anual con "-20%".
10. FAQ en acordeón, 5-6 preguntas.
11. CTA final en un bloque con gradiente: "Ready to get started?".
12. Footer de 4 columnas + newsletter + iconos sociales.

**Síntoma:** si puedes tachar 7 u 8 de los 12 puntos, la página es la plantilla.
**Qué hacer:** que el orden y las secciones salgan de lo que el producto necesita contar. Quitar secciones sin contenido real (logos que no existen, testimonios inventados, FAQ de relleno). Hero no centrado cuando hay imagen o producto que enseñar. Un solo CTA si solo hay una acción.

### Dashboard / panel de administración
1. Sidebar izquierdo con logo arriba, lista de iconos Lucide + etiqueta, sección inferior con avatar del usuario y "Settings". Colapsable.
2. Topbar con buscador "Search... ⌘K", campana con punto rojo y avatar.
3. Título "Dashboard" + subtítulo "Welcome back, John 👋".
4. Fila de 4 stat cards: icono en círculo de color, cifra, etiqueta, delta verde "+12.5% from last month".
5. Gráfico de área/línea grande (recharts con gradiente de relleno) + un donut al lado.
6. Tabla "Recent activity" / "Recent orders" con avatares, badges de estado de colores y un menú `...` por fila.
7. Todo dentro de `max-w-7xl mx-auto`: en un monitor grande, tabla y gráficos quedan en el centro con márgenes vacíos a los lados.

**Síntoma:** las cifras y los gráficos están porque "un dashboard lleva eso", no porque respondan a una pregunta del usuario.
**Qué hacer:** que la primera pantalla responda a "¿qué tengo que hacer hoy?" con datos del dominio (p. ej. "3 socios en riesgo de abandono", "clase de las 18:00 llena, 4 en espera"). Menos KPIs, pero accionables. Quitar saludos con emoji y deltas que nadie usa.

### App móvil
1. Header con "Good morning, Alex 👋" + avatar redondo a la derecha.
2. Tarjeta hero con gradiente (a menudo morado) con la métrica principal.
3. Fila de "quick actions": 4 iconos en círculos de color con etiqueta.
4. Sección "Recent" / "Upcoming" con tarjetas `rounded-2xl` con sombra.
5. Tab bar de 4-5 pestañas con iconos de línea.
6. Todo en tarjetas, todo con el mismo radio y margen 16.

**Qué hacer:** que la pantalla principal muestre la acción más frecuente del usuario sin tener que buscarla. Menos contenedores: usar listas nativas, separadores y tipografía. Respetar las convenciones de la plataforma (iOS/Android) antes que el "look Dribbble".

### Auth (login/registro)
- Split-screen: formulario a la izquierda, panel a la derecha con gradiente/malla + testimonio o frase inspiradora. O una tarjeta centrada sobre fondo con gradiente difuminado. "Welcome back" + "Continue with Google" + separador "or" + email/contraseña.
- **Qué hacer:** el panel decorativo solo si lleva algo real (marca, foto del sitio). El testimonio inventado fuera.

### Onboarding
- Carrusel de 3 pantallas con ilustración genérica, título de 3 palabras, puntos de paginación y "Skip". Después, formulario con barra de progreso "Step 1 of 3".
- **Qué hacer:** preguntar solo lo necesario, cuanto antes al valor. Si hay carrusel, que enseñe el producto de verdad.

### Pricing
- Tres columnas, el del medio escalado o con borde de acento y "Most popular", lista de checks verdes, toggle anual "Save 20%".
- **Qué hacer:** si solo hay un plan o el precio lo fija un comercial, no fabriques tres tiers.

### Estados vacíos
- Ilustración genérica (unDraw) + "No items yet" + botón "Create your first X".
- **Qué hacer:** el texto dice qué pasa y cuál es el siguiente paso concreto, con palabras del dominio. La ilustración solo si es de la marca.

---

## 5. El kit UX "premium SaaS"

La IA añade estas técnicas por inercia cuando se le pide algo "premium" o "estilo Linear/Stripe/Vercel". No son malas: el problema es ponerlas todas, siempre, sin que el producto lo pida. Para cada una, la pregunta es la misma: **¿quién la usa y cuándo?**

| Técnica | Cuándo se gana su sitio | Cuándo es inercia |
|---|---|---|
| **Paleta de comandos ⌘K** | Herramienta de uso diario con muchas entidades y usuarios avanzados | App con 5 pantallas, usuarios ocasionales o móvil |
| **Atajos de teclado (G+tecla, `[`, `?`)** | Mismo caso; y con descubribilidad (ayuda con `?`) | Nadie los va a descubrir ni usar |
| **Skeletons** | La carga es perceptible (>300 ms) y la forma del contenido es estable | Datos mock/locales que cargan al instante; skeleton que no se parece al contenido final |
| **Toasts** | Confirmación de una acción que no cambia la vista (guardado en segundo plano, deshacer) | Errores de validación (van junto al campo); confirmaciones redundantes con un cambio ya visible |
| **Botón con estados loading → éxito ✓** | Acciones lentas con resultado incierto | Acciones instantáneas; animación de "éxito" en cada clic |
| **Tablas ordenables + filtros + búsqueda** | Tablas con decenas o cientos de filas | Listas de 6 elementos |
| **Sidebar colapsable** | Mucho contenido horizontal (tablas anchas, calendarios) | Pocas secciones; se colapsa sin motivo |
| **Modales para todo** | Acciones cortas y enfocadas | Formularios largos o detalle que merece su URL |
| **Tooltips en cada icono** | Iconos sin etiqueta en barras densas | Suplir etiquetas que deberían estar visibles |
| **Dark/light toggle** | Hay usuarios que lo piden, y ambos temas están cuidados | Se añade porque "queda pro", con uno de los temas descuidado |
| **Glassmorphism / backdrop-blur** | Material nativo de la plataforma (iOS) o contenido debajo que da contexto | Blur sobre fondo liso que no se nota; navbars de landing por costumbre |
| **Microinteracciones (hover-lift, press-scale)** | Feedback de pulsación en elementos interactivos | En tarjetas no clicables; en cada elemento |
| **Onboarding tours / tooltips guiados** | Flujo complejo que no se puede simplificar | Tapar una UI confusa en vez de arreglarla |

**En la limpieza:** no quites funcionalidad que los usuarios usen. Si una técnica es inercia, propón quitarla o simplificarla y explica por qué. La decisión es del usuario.

---

## 6. Motion por defecto

### Lo que la IA hace por defecto
- `transition-all duration-300 ease-in-out` en todo (anima propiedades que no deberían: layout, color, sombra a la vez).
- Todo entra con fade-up de 20px **a la vez** al cargar la página, incluso lo que está bajo el pliegue.
- `whileInView` / `data-aos` en cada bloque: el "efecto palomitas" al hacer scroll.
- `hover:scale-105` en tarjetas y botones, `hover:-translate-y-1` + sombra más grande.
- `animate-bounce` en la flecha "scroll down", `animate-pulse` en badges "New", `animate-spin` en iconos decorativos.
- Easing elástico o con rebote en todo. Contadores que suben de 0 al valor al entrar en viewport.
- Parallax en el hero. Gradientes animados en el fondo o en el texto.
- Nada de `prefers-reduced-motion`.

### Qué hacer
- Aplicar las reglas de **Movimiento** de `SKILL.md`: motion solo cuando comunica, propiedades concretas en vez de `all`, duraciones cortas, una entrada coordinada por pantalla como mucho y movimiento reducido respetado siempre.
- Ojo con los "arreglos" de artículos anti-IA (stagger 0.1/0.2/0.35, expo-out, lift -4px con spring, subrayado que crece desde la izquierda): también se han vuelto plantilla. Úsalos solo si encajan con la marca.

---

## 7. Contenido e imágenes

### Emojis como iconos
- **Qué:** ✨🚀⚡🎯💡🔥 en títulos, features, navegación, botones.
- **Detectar:** rangos Unicode de emoji en JSX/strings.
- **Hacer:** quitar o sustituir por el set de iconos del proyecto. **Mantener** emojis que son contenido del usuario o función (reacciones de chat, "📷 Foto" en la vista previa de un mensaje con adjunto).

### Em dash (—) por todas partes
- **Qué:** en titulares, botones, testimonios, separando precios. En una web auditada contaron 31.
- **Detectar:** `—` dentro de strings/JSX (no en comentarios).
- **Hacer:** punto, coma o dos puntos. **Mantener** el `—` como marcador de valor vacío en tablas y datos.

### Punto medio (·) uniendo todo
- **Qué:** `SESIÓN · HIIT · 18:00 · SALA 2`, un `·` en cada línea de metadatos.
- **Hacer:** racionar. Donde hay dos datos cortos relacionados, vale. Si hay `·` en casi todas las pantallas, reparte: saltos de línea, jerarquía tipográfica, etiquetas.

### Sin imágenes reales
- **Qué:** cuadrados con iniciales, placeholders grises, ilustraciones genéricas, avatares de letra en testimonios de "María G."
- **Hacer:** marcar dónde hacen falta fotos reales (del producto, del equipo, del sitio) y pedírselas al usuario. No inventes testimonios ni personas.

### Datos y nombres falsos
- **Qué:** `10k+`, `99.9%`, `4.9/5`, "Acme Corp", "John Doe", logos de "empresas que confían en nosotros" inventadas.
- **Hacer:** quitar o marcar como pendiente de datos reales. Nunca dejar cifras inventadas en producción.

### Solo el camino feliz
- **Qué:** la IA construye el estado con datos y se salta vacío, cargando y error, o los hace con una ilustración genérica y "Nothing here yet!".
- **Hacer:** revisar que existan los tres y que el texto diga qué hacer ("Aún no tienes reservas. Mira las clases de esta semana →").

---

## 8. El estilo "editorial" de Claude

Claude tiene su propio estilo, distinto del morado de v0/Lovable. Si el código lo ha escrito Claude, busca esto primero:

- Fondo crema cálido (~`#F4F1EA`, `#FAF7F2`) con serif display de alto contraste y acento terracota/naranja quemado.
- Maquetación tipo periódico: filetes finos (`border-t border-black/10`, `hairline`), radio 0, columnas.
- Eyebrows en MAYÚSCULAS espaciadas encima de todo.
- Metadatos unidos con `·` y etiquetas tipo `PALABRA — fragmento` con em dash espaciado.
- Monoespaciada para etiquetas pequeñas de datos ("telemetría").
- Numeración `01 / 02 / 03` en secciones, pasos y tabs.
- Serif itálica para destacar palabras sueltas.

Cada elemento puede ser una decisión de marca legítima (una estética de "telemetría racing" justifica la mono y los códigos). El problema es la **acumulación**: si aparecen 4 o más a la vez, se reconoce enseguida. Mantén el que mejor exprese la marca y raciona el resto.

---

## 9. Romper la plantilla sin caer en otra

La salida no es otra plantilla, sino decidir: parte de la pregunta de la pantalla y su contenido real, con un protagonista y menos contenedores (`claridad.md` § 1–3). Además:

1. **Las secciones "porque toca" se van** si no hay material real (logos, stats, testimonios, FAQ).
2. **Una idea de layout repetida con coherencia** es mejor que cada sección con un truco distinto (zigzag, bento, carrusel y acordeón en la misma página).
3. **Asimetría con motivo:** alinear a la izquierda cuando hay lectura, o dejar que una imagen real rompa la retícula. No asimetría decorativa.
4. **Imágenes reales del producto o del sitio** diferencian más que cualquier ajuste tipográfico. Si faltan, dilo; no pongas placeholders bonitos.
