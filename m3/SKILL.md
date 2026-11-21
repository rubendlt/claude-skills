---
name: m3
user-invocable: true
description: "Consulta de datos: copia local de Material Design 3 de Google (m3.material.io: fundamentos, estilos, componentes), en markdown buscable. Usar para mínimos de accesibilidad y ergonomía (objetivos táctiles de 48dp, contraste, estados, foco), anatomía y medidas de componentes (botones, campos de texto, diálogos, menús, navegación, listas, chips, snackbar), cuándo usar cada componente, breakpoints y layout adaptable, tipos de movimiento y duraciones, roles de color y redacción de interfaz. Contrapunto Android/web a la skill hig (Apple). Datos y comportamiento, no estética."
context: fork
agent: Explore
---

# Material Design 3 (copia local)

Guía oficial de Google para Material 3, descargada del contenido que sirve m3.material.io. Versión en `VERSION`; para refrescarla, `node scripts/update.mjs` (≈1 min, sin dependencias). Índice completo con tamaños en `INDEX.md`.

## Cómo usarla

1. Busca abajo la página que responde a la pregunta y lee **solo la sección** pertinente. Cada página tiene pestañas como `## Overview / Specs / Guidelines / Accessibility`; usa `grep -n "^## " <archivo>` para saltar. Si no está clara, `grep -ril "<término>" foundations styles components`.
2. Devuelve la regla o la medida concreta citando archivo y sección (p. ej. `components/text-fields.md` › Guidelines → «…»), con la URL `source` si hace falta.
3. **Datos y comportamiento, no estética.** Formas redondeadas, color dinámico, M3 Expressive y la escala tipográfica son la identidad de Google. No los traslades. Sí traslada los mínimos (tamaños táctiles, contraste, estados), cuándo usar cada componente, la anatomía y la redacción.
4. Si choca con el `CLAUDE.md` del proyecto, manda el proyecto, y dilo. Si choca con `hig` o `govuk`: en web para público general manda `govuk` en formularios y textos; M3 y HIG son guías de plataforma.
5. Las imágenes van como `> [imagen] alt — pie`: el pie suele ser una regla («Do/Don't», medidas). Las tablas de tokens no se descargan; donde salen, la página lo indica con *Tokens (ver specs en la web)*.
6. Unidades en `dp`. En web, 1dp ≈ 1px CSS.

## Índice: pregunta → archivo

**Accesibilidad y ergonomía**
| Pregunta | Leer |
|---|---|
| Tamaño táctil mínimo (48×48dp), separación, contraste, foco, orden de lectura | `foundations/designing.md` |
| Usabilidad general, carga cognitiva | `foundations/usability.md`, `foundations/building-for-all.md` |
| Estados (hover, foco, pulsado, arrastrado, desactivado) y sus capas | `foundations/interaction/states.md` |
| Teclado, ratón, entradas, selección, gestos | `foundations/interaction/inputs.md`, `selection.md`, `gestures.md` |
| Texto alternativo | `foundations/content-design/alt-text.md` |
| RTL / bidireccionalidad | `foundations/layout/bidirectionality-rtl.md` |

**Redacción de interfaz**
| Pregunta | Leer |
|---|---|
| Tono, mayúsculas (sentence case), botones, errores | `foundations/content-design/style-guide.md`, `foundations/writing.md` |
| Notificaciones | `foundations/content-design/notifications.md` |
| Escribir para traducir | `foundations/content-design/global-writing.md` |

**Layout**
| Pregunta | Leer |
|---|---|
| Breakpoints / window size classes (compact, medium, expanded…) | `foundations/layout/breakpoints.md` |
| Rejilla, márgenes, espaciado, paneles | `foundations/layout/grids-spacing.md`, `layout-overview.md`, `scaffold.md`, `styles/spacing.md` |
| Ejemplos canónicos (lista-detalle, feed, panel de apoyo) | `foundations/layout/canonical-examples.md` |
| Escritorio y relojes | `foundations/desktop.md`, `foundations/watches.md` |

**Estilos**
| Pregunta | Leer |
|---|---|
| Roles de color, contraste entre pares | `styles/color/roles.md`, `styles/color/system.md`, `styles/color/advanced.md` |
| Escala tipográfica, tamaños mínimos de texto | `styles/typography.md` |
| Movimiento: duraciones, easing, transiciones | `styles/motion/easing-and-duration.md`, `styles/motion/transitions.md`, `styles/motion/overview.md` |
| Iconos (Material Symbols, tamaños, peso) | `styles/icons.md` |
| Forma, elevación | `styles/shape.md`, `styles/elevation.md` |
| Tokens de diseño | `foundations/design-tokens.md` |

**Componentes** (`components/<nombre>.md`)
| Necesidad | Archivos |
|---|---|
| Acciones | `buttons`, `all-buttons` (cuál elegir), `icon-buttons`, `button-groups`, `segmented-buttons`, `split-button`, `floating-action-button`, `extended-fab`, `fab-menu` |
| Formularios | `text-fields`, `checkbox`, `radio-button`, `switch`, `sliders`, `chips`, `date-pickers`, `time-pickers`, `menus`, `scroll-fields` |
| Navegación | `navigation-bar`, `navigation-rail`, `navigation-drawer`, `tabs`, `app-bars`, `toolbars`, `search` |
| Contenido | `cards`, `lists`, `carousel`, `divider`, `badges` |
| Superposiciones | `dialogs`, `bottom-sheets`, `side-sheets`, `tooltips`, `snackbar` |
| Progreso | `progress-indicators`, `loading-indicator` |

## Si no está aquí

No se descargan XR, «develop» (código Compose/Flutter/Web) ni el blog. Para eso, la web directamente: es una SPA, así que hay que renderizarla con Playwright, o pedir el JSON con la técnica de `scripts/update.mjs`.
