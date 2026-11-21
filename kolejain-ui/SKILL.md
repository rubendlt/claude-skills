---
name: kolejain-ui
description: >-
  Tips de UI para web y producto sacados de los vídeos de Kole Jain (@kolejain): color y modo oscuro, tipografía,
  jerarquía, espaciado, iconos, sombras, layouts de landing y de dashboard, estados vacíos y «pulido» que distingue un
  diseño de principiante o de IA. Usar al construir, revisar o rediseñar una landing, una sección, un dashboard o una app,
  cuando algo «se ve a plantilla / a vibe coding», o al elegir paleta, escala tipográfica, sombras o layout de sección.
  No sustituye a las reglas del proyecto: si chocan, manda el proyecto.
---

# Kole Jain: UI práctica por problema

Tips de **20 de sus 54 vídeos** leídos por subtítulos (otros 21 descargados y sin leer; 13, los más recientes, sin bajar por límite de YouTube: ver «Pendiente»). Agrupados por problema, no por vídeo. Son **criterio de un diseñador**, no estudios: los números (85 % blanco, ×1,27…) son reglas de bolsillo suyas. Para evidencia de usabilidad, `nng`.

**Antes de aplicar nada: manda el proyecto.** Si el `CLAUDE.md` fija una regla (un solo radio, sin animaciones, una sola tinta de acento…), esa gana. Los tips de movimiento, ilustraciones lúdicas y «romper la caja» suelen chocar con webs corporativas sobrias: úsalos solo si el proyecto los admite.

## 1. Color

- **Menos color es casi siempre más.** Un color por función: acento para la acción, semánticos (rojo/verde/ámbar) para estado. Si cada tarjeta lleva un color distinto, compiten.
- **60-30-10 es para landing.** En producto la proporción real es ~90 % neutro, ~8 % otro neutro y ~2 % acento (Vercel). Un neutro dominante + un acento basta.
- **Fondos neutros y casi blancos**; el primer plano, blanco o más claro. Nunca fondos saturados ni degradados chillones. Para meter marca sin ruido: **neutro con un 2-5 % de tono** (gris con un toque del acento), o el 50 de la rampa Tailwind de tu acento como fondo.
- **Ni negro ni blanco puros para todo.** Títulos ~11 % de blanco (casi negro), texto ~15-20 %, texto secundario ~30-40 %. Con jerarquía, los grises hacen el trabajo.
- **Iconos sin color**, salvo para comunicar estado (pestaña activa, error).
- **Bordes**: usa gris claro (~85 % blanco), no negro fino. Si las tarjetas se ven lavadas sobre el fondo, mejor un borde que una sombra.
- **Rampa del acento** (50-950): 500/600 para el color principal, 700 para hover, 400/500 para enlaces. En modo oscuro: 300/400 como primario y 950 de fondo.
- **Botón más importante = más oscuro/lleno.** Los secundarios, fantasma o con borde.
- **Estados con color**: hover = un punto más claro; pulsado = un punto más oscuro; deshabilitado = desaturado/gris. En móvil, sin hover, oscurecer al pulsar da sensación de pulsar.
- **Marca que falla WCAG con texto blanco**: oscurecerla, o usar su complementario/análogo. No temer adaptar los colores de marca para accesibilidad.
- **Destructivo siempre rojo**, aunque la marca sea otra. Y la acción destructiva es la primaria del diálogo; «Cancelar» sin fondo.
- **Colores atenuados**: beige, azul bebé, lavanda, blancos rotos. Quien usa solo saturado + blanco/negro delata poca experiencia.
- **Paletas coherentes sin adivinar** (en HSB): para tonos más oscuros del mismo elemento, +20 saturación y −10 brillo, y desplazar el matiz hacia el azul (azules/violetas son los más oscuros; amarillos/rojos los más claros). En OKLCH: misma luminosidad y croma, matiz +25-30 por paso → colores de gráfico con el mismo peso visual.
- **Temas a partir de neutros**: en OKLCH, bajar L 0,03 y subir croma 0,02 y mover el matiz.

### Modo oscuro (si lo hay)
- No es invertir. Los oscuros se parecen más entre sí: **duplicar la distancia** entre capas (de ~2 % a 4-6 %).
- Las superficies **más elevadas son más claras** (sin sombras, la profundidad viene del fondo de la tarjeta). Subir ~4-6 de brillo y bajar 10-20 de saturación por capa.
- Texto en gris claro, no blanco puro (reservar el blanco a lo importante); bordes más brillantes; desaturar el acento.

## 2. Tipografía

- **Una fuente es suficiente; dos, como mucho tres.** Display + sans, o sans + serif. Nunca display ni manuscrita en párrafos pequeños.
- **Jerarquía con tres palancas: tamaño, peso y color.** Máximo **2 pesos** (separados al menos por uno intermedio, nada de ultrafinos/ultranegros) y **2 colores** (el texto y ese mismo con 45-70 % de opacidad). Si el título ya es grande, no hace falta además ponerlo en negrita.
- **Lista la jerarquía antes de estilar**: debe poderse decir «esto es 1º, esto 2º, esto 3º».
- **Interletrado en texto grande** (>70-80 px): cerrarlo un poco; si no, se ve desunido. En texto pequeño, más abierto.
- **Escala**: partir de 16 px; multiplicar por **1,27** (raíz del número áureo) en vez de 1,62, que se dispara; **1,17** para interfaces densas o móvil.
- **Fluido sin breakpoints**: `clamp(min, calc(min + (max−min) × (100vw − 320px)/(1920−320)), max)` (o equivalente con `clamp()`).
- **Interlineado**: ~150 % en párrafo; 110-130 % en títulos; baja cuanto más grande. Línea larga → más interlineado.
- El texto grande puede ser **elemento visual** (display), pero una o dos veces por página.
- **Ver el diseño en la pantalla real**: en Figma con zoom salen tamaños y espacios exagerados.

## 3. Espaciado, orden y «menos cosas»

- **Rejilla de 4/8 px.** Para tamaños grandes, redondear a 5/10 está bien.
- **Más espacio, menos contenedores, menos líneas.** La distancia agrupa (proximidad). Quitar tarjetas y filetes de listas; separar con aire. Si hay que juntar filas, fondo alterno suave antes que líneas.
- **Esquinas anidadas**: radio interior = radio exterior − distancia entre ambos. En píldora no hace falta.
- **Radios consistentes**: un mismo radio para componentes parecidos; el botón «Atrás» y «Saltar» deben ser idénticos en tamaño, radio y estilo.
- **Agrupar y ordenar por importancia**: en una tarjeta, quitar etiquetas que la UI ya implica; nombre+lugar juntos, precio+valoración juntos, lo menos importante al final. Iconos para dar contexto.
- **Elementos redundantes fuera**: flechas que ya implica el gesto, bordes innecesarios, 3 veces los mismos KPIs.
- **Un solo CTA principal por cabecera.** El segundo botón: sin fondo o fuera.
- **Menos es más** para usabilidad: Google y Apple, una sola acción. No usar toda la pantalla solo porque se puede.
- **Contenido real, no «perfecto»**: probar nombres largos, textos que se truncan, iconos sobre fotos claras (poner un círculo para garantizar contraste).

## 4. Iconos, sombras y efectos

- **Una sola librería de iconos** (Lucide, Phosphor, Feather): mismo trazo, relleno y esquinas. Cuanto mayor el icono, más detalle; pequeño, simple. Cada icono sin etiqueta conocido (casa, marcador, usuario) vale; los raros llevan tooltip.
- **Estilos distintos de icono solo si están en zonas visualmente separadas** (barra de navegación vs. ilustraciones).
- **Fuera emojis** como iconos.
- **Sombras**: x ≤ y; blur de 1,3 a 2 × y; bajar opacidad del preset (15-20 %, algo más en fondos oscuros) y mejor **gris claro con más blur** que negro. Si no funciona, quitarla.
- **Degradados**: o variación del mismo color o ninguno. «Cualquier web buena con degradado lo es sin él.»
- **Tablas/listas**: alinear números a la derecha, chips para valores finitos, truncar texto largo, atenuar filas inactivas.

## 5. Landings: estructura y presentación

- **Cuatro niveles de landing (SaaS)**: (1) plantilla: texto-imagen alternando, fotos de stock, azul en todo, menú plano; (2) hero apilado, producto real en lugar de stock, titular corto, menú con jerarquía, CTA con la misma etiqueta arriba y abajo; (3) zoom a lo importante del producto, rejilla/bento, selector interactivo, insignias y logos, jerarquía fuerte; (4) cuidado del detalle: copy de **«qué hace» a «cómo te ayuda»**, color repartido con criterio, CTA que aparece solo donde hace falta, transiciones finas. Distancia entre el 6 y el 10 = detalle, no ilustraciones 3D.
- **Estructura estándar de hero que funciona**: titular grande + imagen/producto grande + mucho espacio. Si todos lo hacen, diferenciarse con la ejecución (tipografía, un diagrama integrado, el propio producto).
- **Logos de clientes** casi siempre (41 de 50 sitios), sencillos y de empresas reconocibles.
- **Cada sección con su ritmo**: variar columnas/tamaños (a pantalla completa, tarjetas de 3 columnas, texto solo) en vez de repetir imagen izquierda/texto derecha.
- **Fotos**: una foto con un solo objeto → recorte sin fondo; foto de producto → recortar y acercar; paisaje → velo + texto; con texto sobre foto, **degradado detrás para legibilidad**. Elegir bien: se recortará mucho.
- **Secciones útiles**: banda fina de foto con texto como separador; selector con pestañas (diseñar *todas* las pestañas); carrusel de 3-10 tarjetas; «bento simple» (rejilla sencilla para que el dev no sufra); texto a solas con aire (3+ líneas, si no queda vacío).
- **Menú con imágenes** en el desplegable: da contexto antes de hacer clic.
- **Buscar referentes antes de dibujar** (moodboard, Mobbin, Dribbble): no saltar a la primera idea.
- **Una página con una sola misión** necesita, si no hay CTA en cabecera, uno claro en el cuerpo (p. ej. buscador de distribuidores).
- **«Mostrar más» mejor que scroll infinito**: deja llegar al pie.
- **Scrolljacking: casi nunca.** Botones: casi siempre una pequeña animación.
- **Presentar UI**: la presentación importa tanto como la UI; capturas del producto real, ligeramente editadas, convierten más que iconos.

## 6. Producto y dashboards

- **Los datos mandan sobre la forma**: lo que es una línea de tiempo se muestra como línea de tiempo, no como tabla.
- **Divulgación progresiva**: lo no frecuente, en popover/hover (p. ej. «quitar», «compartir»); lo principal, siempre visible. Hay un «espectro de explicitness».
- **UI invisible**: tooltips, estados vacíos, carga, error, éxito, confirmaciones. Lo que echa en falta un dashboard de principiante.
- **Estados vacíos con siguiente paso claro**; **cargas con feedback** (gris al pulsar, rueda si tarda); **error/éxito visibles**.
- **Pensar en flujos y secuencias, no en secciones**: tras crear algo, ¿qué necesita el usuario ahora? (crear espacio → «añadir miembros», con opción a saltar).
- **Planificar el flujo antes de dibujar** (cajas en papel): faltan búsquedas, «saltar», estados ocultos, navegación.
- **Intención del usuario primero**: empezar por lo que viene a hacer (buscar), ampliar funcionalidad cuando amplíe la intención.
- **Respetar convenciones** (información de arriba abajo, navegación arriba, CTA visible): se integran mejor las secciones nuevas y es más fácil de hacerlo responsive.
- **Design system = decisiones a las que atenerse**, no cientos de componentes; consistencia entre pantallas.
- **Pricing**: cinco planes son demasiados (quitar al menos uno); el precio al mes grande, el nombre pequeño; mostrar el descuento y qué incluye el siguiente plan.
- **Gráficos**: sencillos, con eje, sin barras redondeadas ni más barras que días.
- **Si lo generó una IA** (señales de «vibe coding»): emojis, colores vivos sin criterio, círculos de avatar con degradado, KPIs repetidos, tarjetas que no hacen nada, formularios con poco contenido en flyout (mejor modal), demasiadas acciones en cada tarjeta (agruparlas en un menú). **No dejar que la IA elija colores ni layout**; sí la lógica.

## 7. Movimiento (solo si el proyecto lo admite)

- **El movimiento aclara, no decora.** Animar para guiar la atención al producto o explicar. Efectos «porque sí» estorban.
- Hover sutil de todos los interactivos; fotos con zoom suave; marquesinas con degradado y desenfoque en los bordes; mostrar CTA solo al pasar.
- **Entradas con intención**: elementos que llegan de fuera y se asientan; escalonadas; con easing natural (no lineal).
- Si el sitio es de conversión, quedarse en simple; los efectos 3D pesados son para notoriedad, no para vender. Si cargan lento o dificultan la navegación, no compensan.
- Respetar `prefers-reduced-motion`.

## 8. Cómo pensar (diseño que vende)

- **Resolver el problema del cliente, no solo «hacer bonito».** Quien paga pide más clientes; piensa en marketing (UX) más que en estética (UI). Si hay mucho tráfico, CRO antes que SEO.
- **Efecto estética-usabilidad**: lo que se ve bien se percibe más usable; ambos suman.
- **Primeros diseños malos es normal.** Calidad sale de cantidad; si te atascas, cambia y vuelve.
- **Probar 5 segundos**: ¿se entiende la idea haciendo scroll rápido?
- **Casos de estudio con números** (antes/después) venden más que mostrar la web sola.
- **Lenguaje cercano, sin jerga** (Basecamp: «cuidamos los detalles», no «orgullosos de nuestra atención al detalle»).
- **Páginas 404 y de error**: ocasión para tono propio.

## Pendiente

- 13 vídeos sin leer (descarga limitada por YouTube con 429): «Why everyone can tell you're a vibe coder», «Why the best software must LIE to you», «The secret behind weirdly perfect UI designs», «The one thing vibe coding CAN'T fix about your website», «The stupid simple way to learn UI/UX design in exactly 10 minutes», «Every UI/UX Concept Explained in Under 10 Minutes», «Vibe Coding a Pro UI in SECONDS With AI», «7 ui design trends…», «I spent a week gamifying apps», «TikTok's UX…», «Upgrading 9 CRUCIAL UI Elements», «Create A Portfolio With No Experience», «Prototyping Professional Load Animations in Figma: Part 1».
- 21 vídeos con subtítulos descargados y sin leer (Figma paso a paso, macOS, móvil, dashboards básicos, micro-animaciones, recursos, precios freelance, portfolio, rediseños de Spotify/Google/finanzas/skincare). Repetir la lectura si hace falta más detalle.
