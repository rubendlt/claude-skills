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

Tips de **31 de sus 54 vídeos** leídos por subtítulos (los otros 23 están descargados y sin leer: ver «Pendiente»). Agrupados por problema, no por vídeo. Son **criterio de un diseñador**, no estudios: los números (85 % blanco, ×1,27…) son reglas de bolsillo suyas. Para evidencia de usabilidad, `nng`.

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

## 9. Se nota que lo hizo una IA (y cómo evitarlo)

- **La IA copia la apariencia, no la razón.** Un elemento sin motivo se nota: flecha que apunta abajo en un menú que se abre arriba, el email repetido en un popover donde ya sale el nombre, ayuda en el menú cuando ya hay botón de ayuda. Para cada elemento: ¿qué espera el usuario aquí?
- **Ley de Tesler**: la complejidad no desaparece, se mueve. Mejor que la absorba el sistema (calendario con fecha escrita, no tres desplegables) que el usuario.
- **Onboarding de diapositivas en un modal no ayuda** (él cita un test de NN/g: 91 % de éxito con intro y 94 % sin ella; sin verificar). Mejor preguntar qué va a hacer el usuario y adaptarle el producto, y llevarle a crear lo primero.
- **Navegación como Wikipedia**: cada sustantivo es enlace (proyecto, responsable), con vista previa al pasar el ratón. Una IA convierte cada petición en una página suelta solo enlazada desde el menú lateral.
- **Antes de pedir nada a una IA**: ¿por qué enseñar esto?, ¿cómo lo usan de verdad?, ¿qué querrán ver después?, ¿qué dejo fuera? Sin criterio propio, la IA pone el suyo (el promedio).
- **Diseñar con Claude/IA**: indicar qué es, para qué sirve, qué elementos concretos lleva, que use una librería de iconos (si no, emojis), y subir una captura de referencia **de una web real y limpia** (no de Dribbble: la IA no ve los detalles finos y los omite).

## 10. Interacción y confianza

- **No confirmar con modal lo que el usuario ya iba a hacer**: borrar y mostrar aviso con «Deshacer», o mover a «Eliminados recientemente» (30 días). El modal solo para lo irreversible de verdad (envío masivo, pagos).
- **Guardado automático e historial** en vez de botón «Guardar», cuando se pueda deshacer.
- **Retardo para distinguir acciones** (clic / doble clic): solo si compiten; si el primer clic vale igual, sin retardo.
- **Submenús tolerantes**: el triángulo invisible hacia el submenú evita que se cierre al moverse en diagonal.
- **Mostrar la intención adivinada** (en arrastrar y soltar, marcar dónde caerá y acelerar el scroll cerca del borde).
- **Acción al soltar, no al pulsar**, en botones que se pueden cancelar arrastrando fuera.
- **Cada botón, 4 estados** (normal, hover, pulsado, deshabilitado) y campos con foco, error y aviso; indicador de carga y mensaje de éxito; un microfeedback que confirme (p. ej. «Copiado»).
- **Más opciones → peor decisión.** Quitar botones y decisiones (TikTok: un único gesto).
- **Ley de Fitts**: objetivos grandes y cerca del pulgar; en móvil, lo importante a mano (derecha para los diestros).

## 11. Hacer la pantalla fácil de escanear

- **Nadie lee la pantalla entera**: llega con una pregunta y busca la respuesta. Todo lo siguiente sirve a eso.
- **Alinear a bordes**: texto a la izquierda, cifras a la derecha, como un ticket. Los bordes sostienen el diseño sin separadores. Una línea a ancho completo rompe esos bordes.
- **Diferenciar el contenido homogéneo**: agrupar (por fecha, por tipo), avatares, iconos, viñetas, enlaces azules. Una lista de texto uniforme cansa; por eso la IA mete listas y tablas.
- **Símbolo antes que explicación**: cuando algo no se entiende, el reflejo es añadir texto, y eso lo hace más difícil de leer. Usar iconos y diagramas universales.
- **El acento es diferencia, no propiedad**: si todo está azul, nada destaca. Lo que cambia respecto a lo de al lado es lo que llama la atención. Un checkbox apagado no lleva color.
- **Cuando una tarjeta basta, quitar la tarjeta**: una línea de columna cumple la función del borde.

## 12. Hero y landing: anatomía y proceso

- **Esqueleto común**: bloque de texto, navegación, cifras y la imagen. Texto con **distancias de agrupación** (subtítulo 8 px, etiqueta superior 12 px, botones 32 px). Titular de ~7 palabras y subtítulo de ~14.
- **Imagen**: no tapar el centro; fondo no cargado (si no, el texto se pierde); texto sobre foto → degradado lineal, o degradado + desenfoque gradual, no un velo uniforme.
- **Cifras con jerarquía por opacidad** (mismo tamaño, la segunda línea al 55 %).
- **Que el diseño parezca hecho para su público**: un sitio «de restaurantes» sin una foto de restaurante parece robot. Imágenes atmosféricas, paleta sacada de las propias fotos, textura/ruido, una serif para dar personalidad (carta impresa).
- **Método «Frankenstein»**: montar el wireframe mezclando secciones de varios referentes, adaptadas a lo propio (cinta de logos, pasos con imágenes grandes, pestañas de color a pantalla completa con un 90 % menos de texto). Después se prueba otro estilo sobre el mismo layout.
- **Cambiar la sensación con el mismo layout**: amistoso (fondo cálido, esquinas muy redondas, botones grandes) vs. profesional (esquinas menos redondas, imágenes más sobrias, ruido de fondo).
- **Aprender**: coleccionar ~20 heros, anotar proximidad, contraste y jerarquía; copiar al píxel uno (distancias, altura de la barra); rehacer el mismo layout en dos «sabores». **Copiar para entender, no «rediseñar» a ojo.**
- **Escala de tamaños**: máximo ~6 en una web, y en dashboards nada de más de 24 px.
- **Interletrado −2/−3 % e interlineado 110-120 %** en títulos grandes, y ya se ve profesional.
- **Botón fantasma**: ancho ≈ el doble del alto; los enlaces del lateral son botones sin fondo hasta el hover.
- **Iconos del tamaño del interlineado** (p. ej. 24 px) y el texto alineado.

## 13. Componentes concretos

- **Barra de pestañas móvil**: sin botón central «+» salientes (es la pestaña que menos se usa); iconos alineados, estado activo claro (relleno + color de marca), foto de perfil si la hay, etiquetas legibles si los iconos no son obvios.
- **Gráfico de línea**: líneas de cuadrícula y marcadores; sin curvas suavizadas (no se ve dónde acaba) ni degradado que desvanezca el último dato; leyenda; periodo anterior en gris.
- **Tarjetas repetidas**: la tarjeta entera es el enlace, con flecha que aparece al pasar el ratón; CTA propio solo si la acción es concreta. Tarjeta con foto: degradado suave de abajo arriba.
- **Pricing**: botón con borde (no relleno) si baja la jerarquía; marcas ✓ en vez de viñetas; incluir una prestación que ese plan no tiene; nombre y descripción de cada plan; aviso del precio real; separar precio y prestaciones con un fondo tenue.
- **Modal de registro**: etiquetas **encima** del campo, no solo como placeholder; ejemplo en el placeholder; subtítulo «Crear cuenta»; enlace a iniciar sesión; campos con fondo blanco roto y borde al 40 %.
- **Pie de página**: con 3-5 enlaces, centrado (logo, enlaces, redes, copyright a un lado); las columnas de 23 enlaces son para webs que tienen 23.
- **Chips**: no confundir con botones: más finos, sin color de CTA; relleno vertical = la mitad o un cuarto del horizontal.
- **Carrusel**: indicador de posición, flechas junto a él, contraste sobre cualquier foto.
- **Pegatinas** (estrella de 12 puntas, tipografía display, sombra sin desenfoque): solo en estilos lúdicos.

## Pendiente

- Los 12 vídeos antes bloqueados ya están leídos, salvo «Create A Portfolio With No Experience», «Prototyping Professional Load Animations in Figma: Part 1» e «I spent a week gamifying apps» (no aplican a webs corporativas).
- 21 vídeos con subtítulos descargados y sin leer (Figma paso a paso, macOS, móvil, dashboards básicos, micro-animaciones, recursos, precios freelance, rediseños de Spotify/Google/finanzas/skincare). Repetir la lectura si hace falta más detalle.
- Descarga de subtítulos: `yt-dlp` reciente en un venv + `--cookies-from-browser firefox --ignore-no-formats-error`. Sin cookies, YouTube devuelve 429.
