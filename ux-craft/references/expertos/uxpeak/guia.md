---
name: uxpeak-agentic-ux
description: >-
  Expert UI/UX design heuristics, conversion rate optimization (CRO), and behavioral psychology principles
  extracted from UX Peak (@uxpeak). Use this skill when designing, reviewing, auditing, or generating user
  interfaces, frontend components (React, Tailwind, HTML/CSS), mobile layouts, onboarding flows, e-commerce product
  pages, pricing/paywalls, forms, dashboards, or empty states.
---

# UX Peak: heurísticas de UI, UX y conversión

Tips sacados de 13 vídeos de @uxpeak (rediseños, tests A/B y psicología de la decisión), **agrupados por el problema que resuelven**, no por vídeo.

## Cómo usar esta skill

1. **Lee el archivo entero**, todas las secciones, aunque la tarea parezca de una sola. Los tips se cruzan: una ficha de producto toca conversión, confianza, copy, fotos y jerarquía a la vez.
2. Después **quédate con las secciones que aplican** a la pantalla que tienes delante y pasa el diagnóstico (§ 1).
3. **Manda el proyecto.** Si un tip choca con una regla del `CLAUDE.md` del proyecto, su sistema de diseño u otra skill de mayor rango (p. ej. `ux-craft`), gana esa. Los valores de código de aquí (`font-bold`, `uppercase`, sombras, Tailwind) son ejemplos, no tokens: tradúcelos al sistema del proyecto.
4. **Las cifras son las que da el vídeo**, no datos comprobados por ti. Úsalas para entender el porqué; no las cites como hechos al usuario ni las pongas en la interfaz.
5. **Persuasión sí, trampas no.** Los tips marcados con ⚠️ rozan el patrón oscuro: aplícalos solo si lo que dicen es verdad (una urgencia real, una pérdida real) y nunca para retener a quien quiere irse.
6. **Nada se añade por defecto.** Skeleton, sombras, barras de progreso, halos o 3D solo si resuelven algo en esa pantalla.

---

## 1. Diagnóstico antes de dibujar

Antes de crear o revisar cualquier pantalla, responde:

1. **¿Qué decide el usuario aquí y qué necesita ver para decidir sin dudar?** No «¿cómo lo hago más limpio?».
2. **¿Qué modelo mental trae?** Compra por antojo, comparación analítica o tarea repetitiva. Cambia la densidad, el tamaño de foto y el tipo de control.
3. **¿Hay un coste de interacción oculto?** Clics para ver opciones que podrían estar a la vista, pantallas intermedias, banners que solo llevan a otra pantalla.
4. **¿Le hacemos escribir lo que podríamos ofrecer?** Valores por defecto, chips, recientes.
5. **¿Qué duda le frena justo antes de la acción?** Respóndela al lado del botón.
6. **¿Aguanta datos reales?** Fotos claras y oscuras, textos largos, listas vacías, imágenes rotas.
7. **¿Qué paso sobra?** Si un default o mostrar el contenido directamente lo elimina, elimínalo.

---

## 2. Conversión en ficha de producto y tienda

- **Fotos que despiertan el deseo, no que identifican.** Una foto pequeña dice qué es; una grande hace querer. El espacio para la foto se gana aunque quepan menos cosas sin scroll.
- **Cerrar la brecha de imaginación.** Si el producto en sí no comunica el resultado (un polvo en un bote, una pieza suelta), enséñalo en uso: el batido servido con hielo y fruta, el mueble montado en su espacio. Responde a «¿cómo será tenerlo?».
- **Enseñar el interior del producto.** En el test del libro de UX Peak: portada sola, conversión baja; portada + viñetas, 22 %; fotos de páginas interiores abiertas, 48 %. Mostrar lo de dentro quita el miedo a la baja calidad o al engaño.
- **Variantes a la vista, no en un desplegable.** Con pocas opciones (3 sabores, 4 acabados), chips visibles con icono o muestra; un `<select>` las esconde.
- **Resolver la objeción de cada variante.** Un tooltip o línea corta por opción («sabor suave, cítrico, poco dulce») contesta «¿y si no me gusta?».
- **Selector de cantidad pegado al botón** y pills de un toque para las cantidades habituales (500 g, 1 kg, 2 kg) en lugar de pulsar + diez veces.
- **El título no fija lo que el usuario puede cambiar.** Si hay selector de cantidad, el título no dice «Fresas 1 kg».
- **Opción recomendada en tarjeta, no en radio.** Dos radios iguales tratan como equivalentes la compra única y la suscripción, y el usuario elige la de menos riesgo. Tarjetas lado a lado, la recomendada preseleccionada, con «Más popular» y sus ventajas dentro («ahorra 15 %, cancela cuando quieras»).
- **Revelación progresiva de la alternativa.** Si elige la opción simple, entonces se despliega la oferta escalonada (1 mes; 2 meses −10 %; 3 meses −20 %), no antes.
- **Barra de compra fija abajo en móvil.** Mucha gente se convence leyendo al final (reseñas, detalles); el botón tiene que estar ahí cuando lo hace.
- **Cabecera fija contextual.** Cuando la foto sale de pantalla, el nombre del producto pasa a la barra superior.
- **Hoja superpuesta.** En móvil, el contenido sube como una tarjeta sobre la foto al hacer scroll.
- **Badge de estado sobre el título** («Más vendido») predispone a favor antes de leer la ficha (efecto halo). Solo si es cierto.

## 3. Precios, planes, pagos y paywalls

- **El total dentro del botón.** «Añadir al carrito · 14,50 €», «Reservar · 445 € en total», «Confirmar transferencia de 50,00 €». Nunca un «Confirmar» o «Pagar» a ciegas.
- **Precio exacto, no rango.** «13–17 €» parece honesto, pero el usuario se ancla en el peor caso. Un precio fijo decide antes.
- **Traducir el coste a conveniencia.** «Llega a las 12:53 (en 2 min)» y una etiqueta «Más económico» hacen el trabajo de comparar por el usuario (facilidad evaluativa).
- **Explicar cómo funciona la prueba, no vender características.** En el paywall que ganó el test: «Cómo funciona tu prueba gratuita» con línea de tiempo: *Hoy*, acceso total; *Día 5*, te avisamos de que termina; *Día 7*, primer cobro, cancela cuando quieras. Prometer el aviso quita el miedo a la trampa de cobro.
- **Precio de referencia tachado** (129 € → 89 €, −31 %) solo si el precio anterior existió.
- **Contraste y anclaje.** Un coste secundario se juzga en relación con lo que acompaña: un seguro de 50 € junto a un portátil de 1.900 € («solo un 2,6 %») pesa menos que presentado solo. ⚠️ No esconder costes con este truco.
- **Sin etiquetas redundantes.** Nada de «Precio:» delante de «14,00 €»: el símbolo ya lo dice.
- **Tiers de suscripción o SaaS:** tarjetas con la recomendada destacada, mensual/anual con revelación progresiva y límites de uso concretos, no jerga.

## 4. Confianza y quitar el miedo

- **Responder a la objeción principal justo bajo la acción:** «Cancelación gratuita antes del 26 de marzo», «Sin compromiso», «Te llamamos antes de cobrar».
- **Garantías específicas del sector, no sellos genéricos.** «Testado por terceros contra metales pesados, 60 días de garantía» en vez de «Calidad garantizada».
- **Señales de confianza pegadas al nombre.** Nombre + valoración + nº de reseñas juntos contestan «¿qué es y me puedo fiar?».
- **Cifras específicas, no redondas.** «4,9 (221 reseñas verificadas)» suena real; «100+» o «500 reseñas» suena a marketing. Prueba social de movimiento («más de 500 vendidos esta semana») solo si es un dato real.
- **Proyectar el estado futuro antes de confirmar.** «Saldo actual 1.200 € → tras el envío 950 €». Quita el miedo a equivocarse. Vale para cualquier acción con consecuencias: qué cambia, qué pasa después, cómo se deshace.
- **Reconocer antes que leer.** Foto o avatar del destinatario, logo del remitente o proveedor: se verifica una cara, no un número de cuenta.
- **Evitar la acción equivocada:** selector visible de cuenta de origen (personal / empresa) en pagos.

## 5. Copy y microcopia

- **Certeza numérica.** «Empieza en 2 toques» vence a «Registro rápido».
- **Primera persona y beneficio en el botón.** «Iniciar mi prueba gratuita» mejor que «Suscribirse» (que suena a cobro recurrente). «Añadir al carrito — empezar mi cambio» como botón transformacional.
- **Lenguaje concreto y sensorial donde se vende experiencia** («a pasos de la arena») y frío y exacto donde se hace una tarea.
- **Fechas legibles por personas.** «Viernes 28 mar – miércoles 2 abr · 5 noches», no «28/03–02/04».
- **Badges cortos.** «20 % dto.» en lugar de «20 % de descuento» + icono.
- **Tono humano en registros personales.** «¿Cuántas horas dormiste anoche?» en vez de un formulario impersonal, y feedback inmediato con contexto («2 horas más que ayer»).
- **Botones que dicen qué pasa.** Verbo + objeto + importe o cantidad cuando lo hay.

## 6. Jerarquía visual y tipografía

- **El dato manda sobre la etiqueta.** En métricas y tarjetas de datos, la cifra grande y fuerte; la etiqueta pequeña y atenuada. El error típico es el título «Ingresos» enorme y el número en tamaño normal. Lo mismo en registros: las horas dormidas son lo heroico, la valoración es secundaria.
- **Diferenciar con varias variables a la vez.** Si todos los datos tienen el mismo tamaño y gris, no se escanea. Combina tamaño, peso, color e icono de forma coordinada.
- **Una sola familia tipográfica** neutra y legible; la jerarquía con tamaño, peso, espaciado e interlineado.
- **Párrafos con `line-height` 1,5–1,6** y gris muy oscuro, no negro puro sobre blanco puro.
- **Etiquetas pequeñas en mayúsculas** con algo más de `letter-spacing` (si el proyecto usa mayúsculas; si no, ignóralo).
- **Alinear a la izquierda** controles y textos para seguir el escaneo en F.
- **Tipografía monumental** como elemento gráfico principal en landings, a veces en lugar de foto. Tendencia: solo si encaja con la marca.

## 7. Layout, color, sombras y separadores

- **Una rejilla y márgenes constantes.** Márgenes de 16 px aquí y 22 px allá transmiten descuido aunque nadie sepa por qué. Ajusta todo a la misma malla (p. ej. 8 pt, 24 px laterales).
- **Paleta según el contenido.** Colores saturados cansan y diluyen la jerarquía. Si lo protagonista es la foto (comida, producto), marco desaturado y tranquilo.
- **Separadores suaves** (bordes al 5–10 % de opacidad) o solo espacio en blanco; las líneas negras y gruesas trocean la pantalla.
- **Separar capas fijas del contenido** (cabeceras, barras inferiores) con un borde de 1 px, un fondo distinto o una sombra suave.
- **Sombras grandes y tenues.** Mucho desenfoque y opacidad del 4–8 %; nunca `rgba(0,0,0,.5)` con poco blur.
- **Sombras teñidas sobre fondos de color.** Sobre azul o lavanda, sombra con matiz de ese color, no gris (que ensucia). Ejemplo: `box-shadow: 0 10px 25px -5px rgb(79 70 229 / .08), 0 8px 10px -6px rgb(79 70 229 / .04)`.
- **Halos difuminados detrás del CTA** (tendencia «neon mist») crean un punto focal. Solo si encaja con la estética; en webs sobrias, no.
- **Minimalismo funcional:** quitar lo decorativo que no explica nada acelera carga y lectura.

## 8. Imágenes, iconos y texto sobre foto

- **No poner texto sobre fotos que no controlas.** El contenido real trae fotos claras, brillos y fondos imprevisibles. Foto arriba y datos en un bloque neutro debajo; si el texto tiene que ir encima, velo o degradado oscuro y contraste medido.
- **Iconos sobre foto, siempre con contenedor** (círculo con fondo, desenfoque y borde de 1 px): un icono blanco desaparece sobre una foto clara. Diseña para el sistema, no para la foto del mockup.
- **Fotos de catálogo homogéneas:** recortadas sobre fondo neutro, para que la rejilla se vea ordenada.
- **Foto del resultado, no el logo.** En listados de restaurantes, el plato; el logo dice quién vende, la foto dice qué vas a recibir.
- **No apilar dos niveles de fotos.** Si la lista ya va llena de fotos, la barra de categorías con iconos vectoriales limpios, no con más fotos en círculos.
- **Iconos de una misma familia:** mismo grosor de trazo, mismo estilo (todos de línea o todos rellenos), color neutro.
- **Tarjetas de categoría con ritmo:** ni lista de solo texto ni fotos de stock con velo oscuro; fondos suaves con un objeto recortado y coherente entre tarjetas.

## 9. Listados, catálogos, filtros y búsqueda

- **Menos UI ≠ mejor UX.** Un filtro por pantalla parece limpio pero cuesta 7 toques para 2 filtros y obliga a recordar lo elegido. Filtros juntos en un panel o hoja inferior, viendo todos a la vez.
- **Número de resultados en cada opción antes de pulsar:** «3+ hab. (459)» / «4+ hab. (229)», y en el botón final («Ver 18 resultados»), nunca un «Ver resultados» a ciegas. El recuento se actualiza en vivo.
- **Histograma detrás del slider de rango** (precio, medida): enseña dónde está la oferta y si estirar un poco desbloquea mucho.
- **Filtrar por lo que el usuario sabe**, no por variables abstractas: ahorros y cuota mensual en lugar de «precio máximo», y la interfaz hace la cuenta.
- **Selector de vista cuando no hay un default claro:** tarjetas grandes para descubrir, lista compacta para comparar.
- **Buscador sin pantalla en blanco:** al enfocarlo, búsquedas recientes, populares y sugerencias.
- **Tarjetas seleccionables en vez de listas planas** cuando hay que elegir: icono, color sutil y un dato que ayude a decidir.
- **Mostrar el contenido, no un banner hacia él.** «Descubre nuestras 100 recetas» obliga a pulsar para saber si interesa; mejor las 10 mejores a la vista.

## 10. Formularios y controles de entrada

- **Valores por defecto inteligentes.** Preselecciona lo más habitual: según el vídeo, el 70–90 % no lo cambia y lo lee como recomendación. El usuario pasa de rellenar a revisar y confirmar.
- **Pocas opciones a la vez.** Estudio de la mermelada: 24 sabores, 3 % compra; 6 sabores, 30 %. El exceso de opciones paraliza.
- **Chips en lugar de texto libre** para respuestas previsibles (cargo: Founder, Diseño, Desarrollo, Marketing + «Otro» que abre el campo). Menos esfuerzo, menos erratas, datos limpios.
- **Recientes y buscador en línea** (destinatarios recientes arriba + búsqueda) ahorran una pantalla entera.
- **Control según el momento:** slider o rueda para un valor aproximado que se da una vez (edad, peso en el onboarding); campo numérico directo para lo exacto o repetido (gramos cada día, importes, puertos).
- **Unidad integrada en el campo:** el selector de divisa como botón dentro del campo de importe, no un campo aparte.

## 11. Navegación móvil y ergonomía

- **Barra inferior: 3 a 5 destinos** (máx. 6), solo estructurales: inicio, buscar, crear, mensajes, perfil. Nunca ayuda, legales, cerrar sesión, atrás ni logo. Si piden 7+, recomendar mover lo secundario a ajustes o menú.
- **Medidas:** iconos 24 × 24 px, etiquetas de 10–12 px en una línea, zona táctil mínima 44 × 44 px.
- **Zona segura inferior** (~34 px del indicador de inicio): `pb-[env(safe-area-inset-bottom)]`. Lo pegado al borde provoca toques accidentales.
- **Estado activo con dos cambios a la vez** (icono de línea a relleno + color + peso), no solo color. Iconos inactivos con contraste ≥ 3:1.
- **Badges** arriba a la derecha del icono, con un borde de 1–2 px del color del fondo; solo para lo importante, o se ignoran.
- **Separar la barra del contenido** (borde, fondo o sombra suave).
- **Zona del pulgar:** acciones críticas en la parte baja, no en las esquinas superiores.
- **Microinteracción al pulsar** (leve escala, indicador que se desliza entre pestañas) si el proyecto admite movimiento.

## 12. Onboarding, retención y personalización

- **Nunca empezar en 0 %.** Tarjeta de lavados: 8 sellos vacíos frente a 10 con 2 ya puestos; la segunda se completó el doble de rápido con el mismo esfuerzo. Cuenta el registro como primer paso hecho. ⚠️ Que el progreso sea real.
- **Dar antes de pedir (reciprocidad).** No secuestrar el resultado tras un email: entrega el informe útil (puntuación, 3 fallos, lo que está bien) y al final ofrece guardarlo o ampliarlo con el correo.
- **Efecto IKEA:** dejar personalizar o completar algo antes del registro (rol, avatar, primera lección, estilo Duolingo). Lo construido se valora más.
- **Aversión a la pérdida:** perder pesa más que ganar. En avisos de límite, enseñar qué se pierde en concreto (qué archivos) mejor que vender «más espacio». ⚠️ Sin cuentas atrás falsas ni botones que avergüenzan («Asumiré el riesgo»).
- **Interfaz según la madurez del usuario:** nuevo, mínima y un solo objetivo; intermedio, plan del día accionable; experto, panel denso con métricas y atajos.

## 13. Estados: vacío, carga, error y post-compra

- **Ningún estado vacío muerto.** «No hay proyectos» es un callejón. Lleva: icono o ilustración suave, frase de valor, pista del primer paso y botón principal («Crear proyecto»). Aplica a tablas vacías, búsquedas sin resultados y carritos vacíos.
- **Aguantar datos reales:** textos largos (`truncate`, `line-clamp`), imágenes rotas con alternativa, cargas que respetan el hueco final (sin saltos).
- **Post-compra:** el tramo entre pagar y recibir es el de más incertidumbre. Confirmación rotunda, persona de contacto (foto, nombre, llamar o escribir en un toque) y línea de tiempo con estados.

## 14. Web interactiva, 3D y movimiento

- **3D para explicar, no para adornar:** rotar un producto industrial, ver uniones o el despiece interno justifica el precio y quita dudas sobre detalles ocultos.
- **Scroll narrativo:** el scroll como eje para explicar una transformación paso a paso, no para hacer aparecer cosas.
- **Cursor contextual** (lupa sobre fotos ampliables, play sobre vídeo, «arrastrar» en galerías).
- **Movimiento con física natural** (inercia, suavizado).
- Siempre con carga diferida para librerías pesadas y respeto a `prefers-reduced-motion`. Si el proyecto prohíbe el movimiento automático, manda el proyecto.

## 15. Proceso

- **Definir el problema con precisión:** «Creadores independientes necesitan distribuir archivos y cobrar en el extranjero sin líos técnicos», no «la gente necesita vender». Pregunta guía: «¿Cómo podríamos…?».
- **Fidelidad por fases:** baja (jerarquía y distribución), media (componentes y flujo), alta (estados hover/activo, datos verosímiles).
- **Tokens para el traspaso:** espaciados, colores semánticos, breakpoints y curvas definidos, para que el código coincida con el diseño.
- UX sin UI no se entiende y UI sin UX no funciona: se revisan las dos.

---

## Antipatrones rápidos (para auditar)

| Antipatrón | Arreglo | § |
|---|---|---|
| Botón «Confirmar» / «Pagar» sin importe | Verbo + objeto + total | 3 |
| Rango de precio | Precio exacto | 3 |
| Texto o iconos sueltos sobre foto variable | Datos fuera de la foto o contenedor | 8 |
| Un filtro por pantalla, «Ver resultados» ciego | Panel único con recuentos | 9 |
| Variantes cortas en `<select>` | Chips visibles | 2 |
| Campo vacío con respuesta previsible | Default o chips | 10 |
| «No hay datos» | Estado vacío con acción | 13 |
| Etiqueta grande, cifra pequeña | Cifra domina | 6 |
| Banner «Descubre…» que lleva a otra pantalla | Contenido a la vista | 9 |
| Sombra negra dura, separadores gruesos | Sombra tenue / borde suave | 7 |
| Márgenes distintos en la misma pantalla | Una rejilla | 7 |
| Barra inferior con 7 destinos o pegada al borde | 3–5 destinos, zona segura | 11 |

## Fuentes

Vídeos de @uxpeak (youtube.com/watch?v=ID): `U7jTCgIWS4w` (niveles junior→staff, delivery y filtros), `GGg61sdEjeI` (rediseño de ficha de producto), `2TlIg3VokY8` (psicología), `zr37ibqXl1U` (3 tests A/B), `oYskl2ZBoBc` (ficha al 3,5×), `Xzh8xjimmp8`, `gG4urkinFQI`, `8pMUkEbAM7g` (tips 1-3), `wLJ40GV2XEc` (barra inferior), `YlN28RNChl0` (junior→senior), `Dn8vQGO4RoE` (webs premiadas), `03Xw8UyC6uo` (curso corto), `BZ0QER_0ZWI` (tendencias). Se excluyeron los 9 tutoriales de Figma, Dora y Midjourney.
