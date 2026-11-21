# WEB: escritorio, SaaS, paneles de administración

Aplica además las reglas comunes de `SKILL.md`. Cada regla indica quién la usa y la fuente primaria.

## Índice
1. Puntero, menús y tooltips
2. Teclado
3. Layout, navegación y arquitectura
4. Datos, carga y velocidad
5. Formularios, botones y errores
6. Motion en CSS
7. Tipografía, color y geometría en CSS
8. Accesibilidad web
9. Revisión rápida

---

## 1. Puntero, menús y tooltips

- **Zona de tolerancia en submenús (safe triangle).** Un triángulo entre el cursor y el submenú. Mientras el ratón va en diagonal dentro de él, el submenú no se cierra ni cambia. Mac desde los 80, Amazon, Linear. Implementación de Linear: un div absoluto con `clip-path: polygon()` calculado con `getBoundingClientRect()` y la posición del ratón. [linear.app/now/invisible-details](https://linear.app/now/invisible-details)
- **Menús que se abren en `pointerdown`, no en `click`.** Ahorran ~100 ms y permiten pulsar, arrastrar hasta la opción y soltar, como en macOS. [raunofreiberg/interfaces](https://github.com/raunofreiberg/interfaces)
- **Parpadeo de confirmación**: la opción elegida destella con el color de acento antes de que el menú se cierre (macOS).
- **Menús, paleta de comandos y menú contextual aparecen sin animación.** Como mucho, un fundido corto al cerrar (Raycast, macOS).
- **Tooltips con calentamiento:** el primero tiene retardo (~400–700 ms); mientras hay uno abierto, los vecinos aparecen al instante y sin animación (Radix `skipDelayDuration`, Base UI `data-instant`).
- **Tooltips solo para información extra.** También aparecen con el foco de teclado y se cierran con Escape. Nunca sobre `div`, `span` o `p`. En un botón que solo tiene icono, el tooltip hace de etiqueta (`aria-labelledby`); si ya hay texto visible, hace de descripción (`aria-describedby`). [Primer](https://primer.style/product/components/tooltip/guidelines/)
- **Área de clic mayor que lo visible:** mínimo 24×24 px (WCAG 2.5.8), ampliada con un pseudo-elemento:
  ```css
  .icon-btn { position: relative; }
  .icon-btn::after { content: ""; position: absolute; inset: -8px; }
  ```
- **Sin zonas muertas:** etiqueta y checkbox comparten el área de clic, y entre las filas de una lista no quedan huecos sin clic. Si algo parece interactivo, lo es (Vercel).
- **Arrastres que no se pierden:** `setPointerCapture` al empezar. Durante el arrastre se desactiva la selección de texto y se aplica `inert` al resto. Si se arrastra en una dirección no permitida, resistencia progresiva (Sonner).
- **Hover solo con ratón**, para evitar que se quede "pegado" en táctil:
  ```css
  @media (hover: hover) and (pointer: fine) { .row:hover { background: var(--gray-3); } }
  ```
- **Toasts** que pausan el temporizador con hover y con la pestaña oculta (`document.hidden`), se cierran arrastrando por distancia o por velocidad, y se anuncian con `aria-live="polite"` (Sonner). [emilkowal.ski/ui/building-a-toast-component](https://emilkowal.ski/ui/building-a-toast-component)

## 2. Teclado

- **Paleta de comandos (⌘K), solo si el producto tiene usuarios que repiten tareas a diario:** [Superhuman](https://blog.superhuman.com/how-to-build-a-remarkable-command-palette/)
  - Un único atajo desde cualquier pantalla, y todas las acciones dentro.
  - Búsqueda que tolera erratas (`command-score` / `cmdk`).
  - **Sinónimos** (Superhuman usa "Mark Done (Archive)"; en un producto que sustituye a otro, usa el vocabulario del producto anterior).
  - Resultados que dependen del contexto.
  - **El atajo a la derecha de cada comando**, para que se aprenda.
- **Acciones sobre lo seleccionado:** Enter es la acción principal y ⌘Enter la secundaria. Las peligrosas van en una sección aparte. Los submenús *sustituyen* el panel en lugar de abrirse en cascada (Raycast).
- **Atajos de dos teclas seguidas** (`G` luego `I`) en lugar de combinaciones: funcionan igual en Mac y Windows y no chocan con el navegador. `?` abre la lista de atajos con buscador (Linear, GitHub).
- **Los atajos de una sola tecla deben poder desactivarse** (WCAG 2.1.4). El control por voz los dispara sin querer. GitHub lo tiene en Ajustes → Accesibilidad. [GitHub](https://github.blog/changelog/2021-11-16-managing-keyboard-shortcuts-using-accessibility-settings/)
- **Vista previa con la barra espaciadora** del elemento enfocado, estilo Quick Look. Las flechas pasan al siguiente; mantenerla pulsada muestra la vista previa solo mientras se pulsa. [Linear Peek](https://linear.app/docs/peek)
- **F6 / Shift+F6 recorre las regiones**: barra lateral, contenido y cabecera. [Slack](https://slack.com/help/articles/115003340723-Keyboard-accessibility-in-Slack-)
- **Textarea:** Enter salta de línea y ⌘/Ctrl+Enter envía. Input único: Enter envía.
- **Símbolos del atajo según la plataforma** (⌘ o Ctrl) y espacio que no se parte entre las teclas.
- **Nada de animación en lo que se lanza con teclado.**

## 3. Layout, navegación y arquitectura

- **La pantalla ocupa todo el ancho de la ventana; el límite lo pone cada bloque, no un contenedor global.** Un `max-w-7xl mx-auto` (o `container mx-auto`) alrededor de toda la app viene de las plantillas de landing: a 1920 px deja más de 600 px vacíos mientras la tabla esconde columnas. Cabecera, barra lateral y contenido van de borde a borde, con un margen lateral que crece con la ventana (`padding-inline: clamp(1rem, 3vw, 3rem)`).
- **El ancho que sobra se convierte en más información, no en elementos más anchos:** tablas con más columnas visibles, tarjetas en un grid que añade columnas (`repeat(auto-fill, minmax(280px, 1fr))`) en vez de tres tarjetas estiradas, y paneles cuando caben (lista + detalle, panel de apoyo). Android define ventanas "large" (1200–1599 dp) y "extra-large" (≥1600 dp) para esto: en escritorio, un cliente de correo pasa a tres o cuatro paneles, y en lista + detalle la lista tiene ancho fijo y crece el detalle. [Android](https://developer.android.com/develop/ui/views/layout/window-size-classes)
- **Lo que se lee o se rellena sí lleva límite, en su propio elemento:** párrafos a ~65ch (§ 7), formularios y páginas de ajustes en una columna de ~640–720 px, cada campo al ancho de su dato (§ 5). Un formulario estirado a 1800 px es tan malo como una tabla encajonada en 1280.
- **Cuándo se justifica una columna estrecha para toda la pantalla:** lectura larga (documentación, artículo, texto legal), flujos de un solo paso (login, checkout, confirmación) o un ancho máximo fijado por el design system del proyecto. En una landing, las secciones (fondos, imágenes, producto) van de borde a borde y lo que se limita es el texto.
- **Barra lateral vertical como navegación principal.** La búsqueda visual en vertical es más eficiente (NN/g). Así lo hicieron Atlassian, Vercel, Linear y Mindbody. [Atlassian](https://www.atlassian.com/blog/design/designing-atlassians-new-navigation)
- **Barra superior mínima:** solo Buscar y Crear. **Un único botón "Crear"** para todo lo que se puede crear (Atlassian, Slack).
- **Barra lateral personalizable:** reordenar, esconder lo poco usado dentro de "Más" y elegir si los no leídos se ven como número o como punto. Secciones "Fijados" y "Recientes". [Linear](https://linear.app/changelog/2024-12-18-personalized-sidebar)
- **La barra lateral se atenúa unos puntos** para que mande el contenido. [Linear](https://linear.app/now/behind-the-latest-design-refresh)
- **Paneles fijos redimensionables, no flotantes que tapen contenido.** Figma retiró los flotantes de UI3 porque hacían más lenta a la gente. [Figma](https://www.figma.com/blog/our-approach-to-designing-ui3/)
- **Filtro en lugar de páginas duplicadas:** Vercel pasa de la vista del equipo a la del proyecto *dentro de la misma página*. Un breadcrumb puede servir también como selector. [Vercel](https://vercel.com/changelog/new-dashboard-navigation-available)
- **Todo el estado en la URL:** filtros, orden, pestañas, paginación y **paneles de detalle** (`?member=123`). Atrás y Adelante restauran estado y scroll, y cualquier vista se puede compartir con un enlace. [Vercel](https://vercel.com/design/guidelines)
- **Detalle en panel lateral en lugar de navegar a otra página**, con flechas para pasar al siguiente elemento.
- **Lo que tapa la vista de la que se viene lleva la flecha de volver arriba a la izquierda**, junto al titular y pegada al hacer scroll (`position: sticky`), con Escape como atajo. Es para las subpantallas de verdad: un formulario de edición o creación a pantalla completa, o el detalle cuando en una ventana estrecha ocupa el sitio de la lista. Un panel de detalle junto a su lista no la lleva: la lista sigue a la vista y es la forma de volver.
  - **Es un enlace al padre (`<a href>`) con su estado en la URL, no `history.back()`.** Quien llega desde un enlace pegado no tiene nada detrás y el atrás del navegador lo sacaría de la aplicación; con un enlace funcionan además abrir en otra pestaña y la vista previa de la dirección. Con el estado en la URL, ir al padre devuelve la misma vista de antes, con sus filtros: GOV.UK pide volver "a la página anterior, en el estado en que se vio por última vez" y que el enlace funcione sin JavaScript.
  - **Con cambios sin guardar, pregunta** antes de salir, igual que al cerrar la pestaña (`beforeunload`).
  - **Nunca junto a unas migas de pan**, que ya dicen dónde se está y cómo subir. [GOV.UK Back link](https://design-system.service.gov.uk/components/back-link/)
- **La pestaña del navegador dice el estado:** título y favicon reflejan lo que importa, como "3 pagos fallidos" o un deploy compilando. [Vercel](https://vercel.com/blog/dashboard-redesign)
- **Tras una búsqueda, el foco va al encabezado con el número de resultados.** [GitHub](https://github.blog/engineering/user-experience/accessibility-considerations-behind-code-search-and-code-view/)

## 4. Datos, carga y velocidad

- **Precarga por intención:** Next.js precarga los enlaces visibles solo en producción. Para precargar al pasar el ratón hay que hacerlo explícitamente (`router.prefetch`, TanStack `preload: 'intent'`). instant.page espera 65 ms de hover.
- **Local-first cuando el dominio lo permite:** Linear lee de IndexedDB y un pool en memoria, escribe en local y sincroniza en segundo plano, así que nunca muestra "cargando". Es un cambio de arquitectura, no un truco de UI.
- **Indicadores anti-parpadeo** (ver reglas comunes). React 19 ya no revela límites de Suspense más de una vez cada 300 ms.
- **Botón en carga:** mantiene el texto y añade el spinner, sin cambiar de ancho.
- **Doble envío imposible:** el botón se bloquea cuando la petición *ya salió*, y el servidor recibe una clave que evita duplicados.
- **Reservar el espacio de imágenes y contenido asíncrono** para que no haya saltos de layout.

## 5. Formularios, botones y errores

- **No desactivar botones de envío.** Deja que se pulsen y explica qué falta. Si hace falta bloquear, `aria-disabled="true"`, que sigue siendo enfocable, en vez de `disabled`. [GOV.UK](https://design-system.service.gov.uk/components/button/), [Primer](https://primer.style/product/components/button/accessibility/)
- **Validar al enviar, no al salir de cada campo.** [GOV.UK](https://design-system.service.gov.uk/patterns/validation/)
- **Resumen de errores arriba del formulario**, con el foco al aparecer, un enlace a cada campo y el mismo texto que el error junto al campo. Añade "Error: " delante del `<title>`. [GOV.UK](https://design-system.service.gov.uk/components/error-summary/)
- **Etiqueta siempre visible**; el placeholder solo da ejemplos.
- **`inputmode="numeric"` en lugar de `type="number"`**: `number` cambia importes sin querer con la rueda del ratón o las flechas. Además `autocomplete` correcto (WCAG 1.3.5), `spellcheck="false"` en datos y ancho del campo proporcional al dato.
- **Contraseña:** `autocomplete="current-password"` o `"new-password"`, pegar permitido, sin `maxlength`, `autocapitalize="none"` y botón de mostrar que anuncia su estado. [GOV.UK](https://design-system.service.gov.uk/components/password-input/)
- **Enlaces repetidos con texto oculto:** en una tabla con "Editar" en cada fila, escribe `Editar <span class="sr-only">Ana López</span>`. [GOV.UK](https://design-system.service.gov.uk/components/summary-list/)
- **Autofocus solo en escritorio y solo si hay un input principal.**

## 6. Motion en CSS

```css
:root {
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
}
.popover {
  transform-origin: var(--radix-popover-content-transform-origin); /* crece desde su trigger */
  animation: pop-in 180ms var(--ease-out);
}
@keyframes pop-in { from { opacity: 0; transform: scale(0.95); } }
.btn:active { transform: scale(0.97); }
@media (prefers-reduced-motion: reduce) { .popover { animation: fade 120ms linear; } }
```

- Nunca `transition: all`: lista las propiedades.
- Cambiar de tema (claro u oscuro) no debe disparar transiciones.
- Un desenfoque de ~2 px en los crossfades disimula el salto entre estados.
- Menú de navegación que cambia de forma: al pasar de un apartado a otro, el mismo fondo se redimensiona en lugar de cerrarse y reabrirse (Stripe.com; *probable*).

## 7. Tipografía, color y geometría en CSS

```css
.num { font-variant-numeric: tabular-nums; }
h1, h2 { text-wrap: balance; }
p { text-wrap: pretty; }
html { color-scheme: light dark; }
```
- Caracteres correctos: "…" en lugar de "...", comillas tipográficas, y `&nbsp;` entre número y unidad (`10&nbsp;MB`). `translate="no"` en nombres de marca.
- **No cambiar el peso de la fuente en hover**, porque mueve el layout.
- **Sombras en al menos 2 capas** (ambiente + luz directa), teñidas del tono del fondo en vez de negro con alpha. [Josh Comeau](https://www.joshwcomeau.com/css/designing-shadows/)
- **Bordes semitransparentes**, para que funcionen sobre cualquier superficie.
- **Hover, activo y foco con más contraste** que el estado en reposo.
- **Ajuste óptico de ±1 px** en iconos y etiquetas cuando la geometría no coincide con la percepción.
- `<meta name="theme-color">` y fondo y color explícitos en `<select>` (arregla el modo oscuro de Windows).
- Párrafos de unos 50–75 caracteres (`max-width: 65ch`). Es preferencia de lectura, no un límite probado; ver `claridad.md` § 5.

## 8. Accesibilidad web

- **Enlace "Saltar al contenido"** como primer elemento enfocable, después del banner de cookies si lo hay. [GOV.UK](https://design-system.service.gov.uk/components/skip-link/)
- **Foco visible con `outline`, no con `box-shadow`:** el modo de alto contraste de Windows (`forced-colors`) elimina las sombras, así que el `ring-*` de Tailwind desaparece. [Microsoft Edge](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
  ```css
  :focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }
  @media (forced-colors: active) { .icon { fill: currentColor; } }
  ```
- **El foco no puede quedar tapado por una cabecera o un pie fijos** (WCAG 2.4.11): usa `scroll-padding-top`.
- **Arrastrar y soltar con alternativa:** botón para teclado y diálogo "Mover a…" para control por voz, además de anunciar la posición mientras se arrastra (WCAG 2.5.7). [GitHub](https://github.blog/engineering/user-experience/exploring-the-challenges-in-creating-an-accessible-sortable-list-drag-and-drop/)
- **Listas y árboles con foco itinerante** (`tabindex` 0 en el elemento activo y -1 en el resto), búsqueda escribiendo las primeras letras y anuncio de las cargas asíncronas. [GitHub](https://github.blog/engineering/user-experience/considerations-for-making-a-tree-view-component-accessible/)
- **Ajustes de usuario que funcionan:** subrayar enlaces, pausar GIFs animados y alto contraste (GitHub).
- **HTML nativo antes que ARIA.** `aria-label` sustituye al texto visible y en `div`/`span` genéricos está mal soportado.
- **Texto en `rem` para que escale al 200 %.** Airbnb resolvió más del 80 % de sus problemas de zoom de texto usando `rem` solo en la tipografía.
- **Modales:** foco atrapado, Escape cierra, el foco vuelve al elemento que abrió el modal, `overscroll-behavior: contain`.

## 9. Revisión rápida (web)

- [ ] A 1920 px de ancho, ¿la pantalla aprovecha el espacio o hay un `max-w-*` + `mx-auto` dejando márgenes vacíos? ¿Algún párrafo pasa de ~75 caracteres o algún formulario se estira a todo el ancho?
- [ ] ¿Hay acciones muy frecuentes animadas? → quitar la animación.
- [ ] ¿Algún `ease-in`, `transition: all` o animación que nace desde `scale(0)`?
- [ ] ¿Filtros, pestañas y paneles de detalle están en la URL? ¿Atrás funciona?
- [ ] ¿Las pantallas que tapan la lista tienen la flecha de volver arriba a la izquierda, pegada, como enlace al padre y con Escape? ¿Ningún panel junto a su lista la lleva?
- [ ] ¿Algún spinner parpadea en cargas rápidas? ¿Los skeletons coinciden con el layout final?
- [ ] ¿Números en tablas con `tabular-nums`?
- [ ] ¿Rellenos, márgenes, radios y alturas salen de la escala? ¿El mismo papel lleva el mismo valor en todas las pantallas? (`SKILL.md` § Medidas)
- [ ] ¿Diálogos de confirmación que podrían ser "Deshacer"? ¿Botones con verbo y objeto?
- [ ] ¿Botones `disabled` sin explicación? ¿Valida al salir de cada campo en vez de al enviar?
- [ ] ¿Foco visible con `outline`? ¿Enlace para saltar al contenido? ¿Cabecera fija tapando el foco?
- [ ] ¿Los atajos de una sola tecla se pueden desactivar?
- [ ] ¿Áreas de clic de al menos 24 px y sin huecos muertos?
