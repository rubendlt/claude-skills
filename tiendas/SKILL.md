---
name: tiendas
description: >-
  Criterio para tiendas online y catálogos de producto (e-commerce y también catálogo B2B sin precios): ficha de producto
  (fotos que venden, producto en uso, variantes a la vista, objeciones, barra de compra fija), precios y total en el botón,
  ofertas y suscripción, catálogo, listados, filtros con recuentos y búsqueda, fotos de catálogo homogéneas, confianza
  (reseñas, garantías), carrito vacío y post-compra, y catálogo grande ordenado para comprador profesional. Junta los
  consejos de UX Peak, Sam Crawford, Kole Jain y Tim Gabe. USAR al diseñar o revisar una ficha de producto, un listado o
  categoría, filtros, buscador de catálogo, carrito, checkout o precios. Para el contacto o presupuesto de una web de
  servicios, conversion; para que parezca de lujo, premium; formularios y errores del checkout, normas. También para preguntas cortas (leer solo la sección pertinente). NO usar en cambios de código triviales (un margen, una palabra) ni en lo ya decidido.
argument-hint: "[ficha, listado, filtros, carrito…]"
---

# Tiendas y catálogos: que se entienda, se compare y se decida

Criterio de diseñadores, **no evidencia**. Manda el proyecto (si es un catálogo sin precios ni carrito, ignorar lo de compra y quedarse con ficha, listado y confianza). Cada consejo lleva su autor; guías completas en `~/.claude/skills/fuentes/<autor>/guia.md`. La evidencia medida (Baymard, NN/g) va en su propio apartado y manda sobre el criterio; para ampliarla, `nng` o `investigar`.

## Evidencia (mide, no opina)

Por encima del criterio de los demás apartados cuando choquen.

**Baymard** (baymard.com/lists/cart-abandonment-rate, actualizada el 28/10/2026):
- Abandono medio de carrito: **70,22 %** (media de 50 estudios, 2006-2025; rango 55-84 %). El 42 % «solo miraba».
- Por qué abandonan en el pago, quitando a los que solo miraban: **costes extra demasiado altos 40 %** (envío, impuestos, tasas) · entrega lenta 20 % · no se fiaba con la tarjeta 19 % · **obligaba a crear cuenta 18 %** · proceso largo o complicado 17 % · errores o caídas 17 % · devoluciones poco claras 13 % · **no veía el total desde el principio 12 %** · tarjeta rechazada 10 % · pocos métodos de pago 9 %.
- Un pago ideal cabe en **12-14 elementos (7-8 campos)**; la media de EE. UU. enseña 23,48 (14,88 campos). Casi todos pueden recortar un 20-60 %.
- Arreglando la usabilidad del pago, un comercio grande puede ganar de media un **35,26 % de conversión** (estimación de Baymard; ellos mismos dicen que no es fácil).

**NN/g:**
- **Comprar sin registrarse:** no obligar a crear cuenta; ofrecerla dentro del pago (una contraseña opcional) y decir antes de empezar que será opcional (*optional-registration*).
- **Costes:** tasas poco habituales y envíos anormalmente caros, **al principio**, no al final; impuestos y envío estándar pueden esperar al pago si es lo que el comprador espera (*ecommerce-taxes-fees*, estudio en EE. UU.: en Europa el precio se muestra con IVA).
- **Carrito:** página con el carrito completo, foto y detalles de cada artículo, enlace a su ficha y quitar fácil, también poniendo la cantidad a 0 (*shopping-cart*).
- **Pago en móvil:** total claro sin subidas inesperadas, campos con el teclado adecuado y autocompletado, pagos rápidos (monedero) para no teclear la tarjeta (*mobile-checkout-ux*).
- **Ficha:** responder de antemano las preguntas del producto, permitir comparar con la misma información en cada artículo, y enseñar opiniones, también las malas (*ecommerce-product-pages*).
- **Filtros:** categorías relevantes, predecibles, sin jerga y ordenadas por prioridad (*filter-categories-values*).

## 1. Antes de diseñar

- **¿Qué modelo mental trae?** Compra por impulso, comparación analítica o tarea repetida: cambia densidad, tamaño de foto y controles (UX Peak § 1).
- **¿Qué duda le frena justo antes de la acción?** Responderla al lado del botón (UX Peak § 1).
- **¿Le hacemos escribir o pulsar lo que podríamos ofrecer?** Defaults, chips, recientes (UX Peak § 1).

## 2. Ficha de producto

- **Fotos que despiertan el deseo, no que solo identifican:** el espacio para la foto se gana aunque quepa menos sin scroll (UX Peak § 2).
- **Producto en uso:** cerrar la brecha de imaginación, el mueble montado en su espacio (UX Peak § 2).
- **Enseñar el interior o el detalle** quita el miedo a la baja calidad (UX Peak § 2: test del libro, 22 % → 48 %, dato del autor).
- **Variantes a la vista** (chips con muestra), no en un desplegable; una línea por variante que resuelva su objeción (UX Peak § 2).
- **El título no fija lo que el usuario puede cambiar** (UX Peak § 2).
- **Señales de confianza pegadas al nombre:** nombre + valoración + nº de reseñas (UX Peak § 4).
- **Badge de estado** («Más vendido») solo si es cierto (UX Peak § 2).
- **Barra de compra fija abajo en móvil** y cabecera contextual con el nombre cuando la foto sale de pantalla (UX Peak § 2).
- **Hoja superpuesta en móvil:** el contenido sube como tarjeta sobre la foto al hacer scroll (UX Peak § 2).
- **Badges cortos:** «20 % dto.» mejor que «20 % de descuento» + icono (UX Peak § 5).
- **Todas las fichas en el mismo orden** (especificaciones, aplicaciones, pedir presupuesto): aprendes a leer una y sabes leer todas (Crawford, caso Flowcorp).
- **3D o despiece solo para explicar** uniones o detalles ocultos que justifican el precio (UX Peak § 14).

## 3. Precios, ofertas y botón

- **El total dentro del botón** («Añadir · 14,50 €»), nunca «Pagar» a ciegas (UX Peak § 3).
- **Precio exacto, no rango;** certeza mejor que intervalo (UX Peak § 3, Gabe: Uber).
- **Tachado solo si el precio anterior existió**; anclaje sin esconder costes (UX Peak § 3).
- **Sin etiquetas redundantes** («Precio:» delante de «14 €») (UX Peak § 3).
- **Compra única frente a suscripción:** tarjetas con la recomendada preseleccionada y sus ventajas, revelación progresiva de la oferta escalonada (UX Peak § 2).
- **Selector de cantidad pegado al botón** con pills de cantidades habituales (UX Peak § 2).
- **Unidad integrada en el campo** (divisa como botón dentro del importe) (UX Peak § 10).
- **Persuasión sí, trampas no:** urgencia, stock bajo o «X personas mirando» solo si son reales (UX Peak).
- **Decir qué pasa después y cuándo** (envío, cobro) junto al botón (Gabe).

## 4. Catálogo, listados y filtros

- **Filtros juntos en un panel u hoja**, viendo todos a la vez; un filtro por pantalla cuesta toques y memoria (UX Peak § 9).
- **Recuento en cada opción y en el botón final** («Ver 18 resultados»), actualizado en vivo (UX Peak § 9).
- **Histograma tras el slider de rango** (precio, medida) (UX Peak § 9).
- **Filtrar por lo que el usuario sabe**, no por variables abstractas (UX Peak § 9).
- **Selector de vista** cuando no hay un default claro: tarjetas para descubrir, lista para comparar (UX Peak § 9).
- **Buscador sin pantalla en blanco:** recientes, populares y sugerencias al enfocarlo (UX Peak § 9).
- **Fotos de catálogo homogéneas**, recortadas sobre fondo neutro (UX Peak § 8). Foto del producto, no el logo de la marca.
- **No apilar dos niveles de fotos:** si el listado va lleno de fotos, categorías con iconos limpios (UX Peak § 8).
- **Tarjetas de categoría con ritmo:** fondo suave con un objeto recortado coherente entre tarjetas (UX Peak § 8).
- **La tarjeta entera enlaza** (Jain § 13). Listados de 4 columnas: diseñar para el nombre más largo y el más corto (Self-Made, `diseno-web/references/layouts.md`).
- **«Mostrar más» mejor que scroll infinito:** deja llegar al pie (Jain § 5).

## 5. Catálogo grande B2B (sin carrito)

- **La home no es un muro de referencias:** dice quiénes son, a quién sirven y su experiencia; **el catálogo se queda entero** porque el técnico necesita las especificaciones, pero ordenado (Crawford, caso Flowcorp).
- **Cada visitante, su ruta:** el comprador nuevo necesita presentación; el técnico va directo a la ficha (Crawford).
- **Estética de índice o archivo** (rejilla limpia, etiquetas claras) encaja con catálogos grandes (Crawford, tendencia).
- La conversión de una web de presupuesto (CTA, prueba, formulario): skill `conversion`.

## 6. Confianza, carrito y post-compra

- **Garantías específicas del sector**, no «calidad garantizada» (UX Peak § 4).
- **Cifras específicas y reales** en reseñas y ventas (UX Peak § 4).
- **Carrito vacío que enseña** qué hacer y lleva a la acción (UX Peak § 13).
- **Post-compra:** confirmación rotunda, contacto en un toque y línea de tiempo de estados; es el tramo de más incertidumbre (UX Peak § 13).
- Campos, errores y confirmación del checkout: skill `normas`.

## Antipatrones rápidos (UX Peak)

| Antipatrón | Arreglo |
|---|---|
| «Pagar» o «Confirmar» sin importe | Verbo + objeto + total |
| Rango de precio | Precio exacto |
| Variantes cortas en `<select>` | Chips visibles con muestra |
| Un filtro por pantalla, «Ver resultados» a ciegas | Panel único con recuentos |
| Banner «Descubre…» hacia otra pantalla | El contenido a la vista |
| Texto o iconos sueltos sobre foto variable | Datos fuera de la foto o con contenedor |
| «No hay productos» | Estado vacío con acción |
