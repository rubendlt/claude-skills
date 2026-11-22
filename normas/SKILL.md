---
name: normas
description: >-
  Normas oficiales de interfaz en una sola consulta: busca la pregunta en Apple (HIG), Material 3 de Google y GOV.UK
  Design System (copias locales), compara lo que dice cada una y decide con criterios escritos, sin que una fuente mande
  sobre las otras por defecto. Para medidas y mínimos (zona táctil, contraste, texto escalable, foco), anatomía y
  comportamiento de componentes (botones, campos, diálogos, hojas, menús, navegación, pestañas, listas, snackbar),
  formularios y sus campos (nombre, email, teléfono, dirección, fecha, contraseña), errores y validación, páginas de
  confirmación, 404/500, cookies, breakpoints y layout, tipografía, movimiento (duraciones, easing) y redacción de
  interfaz. USAR al construir o revisar UI web o móvil (iOS, Android, Expo) cuando haga falta una regla, una medida o
  cómo se comporta algo, o para respaldar una decisión con norma; también en preguntas cortas y aunque la medida parezca conocida (se
  cita de la fuente, no de memoria). Es evidencia y comportamiento, no estética. NO usar para el aspecto visual,
  para cambios de código triviales (un margen, una palabra) ni en lo ya decidido.
argument-hint: "[pregunta, componente o pantalla] [ios|android|web]"
---

# Normas: Apple, Material y GOV.UK juntas

Tres copias locales, cada una con su fuerza:

| Fuente | Carpeta | En qué es fuerte |
|---|---|---|
| **Apple HIG** | `~/.claude/skills/hig/` | iOS: convenciones que el usuario de iPhone espera, ergonomía, Dynamic Type, hápticos, materiales |
| **Material 3** | `~/.claude/skills/m3/` (índice propio en `m3/SKILL.md`) | Medidas y anatomía de componentes, estados, breakpoints, duraciones de movimiento; Android y web |
| **GOV.UK** | `~/.claude/skills/govuk/` | Formularios, campos, errores, páginas de estado y textos, probados con usuarios reales (también mayores y poco digitales) |

Las tres son **datos y comportamiento, no estética**: formas, color dinámico y tipografías de cada sistema son su identidad y no se trasladan.

## Cómo consultar

1. **Busca la fila** de la pregunta en el índice de abajo (o `rg` en las tres carpetas si no está).
2. **Lee solo la sección pertinente** de cada fuente que tenga algo (dos o tres archivos, no páginas enteras). En esta cuenta, inline; en cuentas con subagentes, si la consulta abarca muchas páginas, se puede delegar la lectura a un agente Explore.
3. **Compara.** A menudo no se contradicen sino que se completan (Material da la medida, GOV.UK el comportamiento, Apple la convención): entonces se suman.
4. **Si chocan, decide con los criterios** de abajo, en orden, y cita cuál decidió.
5. **Responde** con el formato de salida.

## Criterios para decidir (en orden)

1. **El proyecto.** Si su `CLAUDE.md` o sus decisiones ya lo fijan, se aplica y se dice si la norma discrepa.
2. **Mínimos de accesibilidad y legales: el más estricto.** Zona táctil, contraste, texto escalable, foco visible, alternativa a gestos. Aquí no se elige; referencia legal WCAG 2.2 AA.
3. **Lo que el usuario ya conoce.** En app nativa pesa mucho la convención de su plataforma (iOS → patrón de Apple; Android → de Material), porque es lo que usa a diario. Argumento fuerte, no automático: si la convención perjudica la tarea, se dice.
4. **Lo que mejor sirve a este usuario en esta tarea.** Público general, poco frecuente o poco experto → pesa la fuente probada con ese público (GOV.UK en formularios y textos). Producto denso de uso diario → pesa la que lo contempla (Material, Apple).
5. **Empate:** la opción más sencilla de construir y mantener dentro del sistema del proyecto.

No vale elegir primero y buscar el criterio después: si una fuente contradice lo que ibas a hacer, se dice.

## Formato de salida

Una línea por decisión, con las fuentes delante y el criterio al final:

```
Zona táctil: HIG 44 pt · M3 48 dp → 48 dp (criterio 2, la más estricta). [hig/accessibility.md · m3/foundations/designing.md]
Error de campo: GOV.UK mensaje bajo la etiqueta con «Error:» y resumen arriba · M3 texto de ayuda en rojo → GOV.UK (criterio 4, público general); de M3, el estado visual. [govuk/patterns/validation.md · m3/components/text-fields.md › Guidelines]
```

Si solo una fuente cubre la pregunta, se dice («solo GOV.UK lo trata»). Si ninguna, se dice y no se inventa.

## Índice: pregunta → archivo de cada fuente

Rutas relativas a `~/.claude/skills/`. «—» = esa fuente no lo trata.

**Accesibilidad y ergonomía**
| Pregunta | Apple | Material | GOV.UK |
|---|---|---|---|
| Zona táctil, separación | `hig/accessibility.md`, `hig/layout.md` | `m3/foundations/designing.md` | — |
| Contraste y uso del color | `hig/color.md`, `hig/accessibility.md` | `m3/styles/color/roles.md`, `m3/foundations/designing.md` | `govuk/styles/colour.md` |
| Texto escalable, tamaño mínimo | `hig/typography.md` (Dynamic Type) | `m3/styles/typography.md` | `govuk/styles/type-scale.md` |
| Foco, teclado, estados (hover, pulsado, desactivado) | `hig/accessibility.md` | `m3/foundations/interaction/states.md`, `inputs.md` | `govuk/styles/links.md` |
| Gestos y su alternativa | `hig/accessibility.md` | `m3/foundations/interaction/gestures.md` | — |
| Reducir movimiento | `hig/motion.md`, `hig/accessibility.md` | `m3/styles/motion/overview.md` | — |
| Estrategia y auditoría de accesibilidad | `hig/accessibility.md` | `m3/foundations/building-for-all.md` | `govuk/accessibility/` |

**Formularios**
| Pregunta | Apple | Material | GOV.UK |
|---|---|---|---|
| Campo de texto, área de texto | `hig/text-fields.md` | `m3/components/text-fields.md` | `govuk/components/text-input.md`, `textarea.md`, `character-count.md` |
| Nombre, email, teléfono, dirección, fecha | — | — | `govuk/patterns/names.md`, `email-addresses.md`, `phone-numbers.md`, `addresses.md`, `dates.md` |
| Contraseña, cuenta, tarjeta | — | — | `govuk/patterns/passwords.md`, `create-accounts.md`, `payment-card-details.md`, `govuk/components/password-input.md` |
| Elegir entre opciones | `hig/toggles.md`, `pickers.md`, `segmented-controls.md`, `menus.md` | `m3/components/checkbox.md`, `radio-button.md`, `switch.md`, `chips.md`, `menus.md`, `segmented-buttons.md` | `govuk/components/checkboxes.md`, `radios.md`, `select.md` |
| Fechas y horas | `hig/pickers.md` | `m3/components/date-pickers.md`, `time-pickers.md` | `govuk/components/date-input.md`, `govuk/patterns/dates.md` |
| Errores y validación | `hig/alerts.md`, `hig/feedback.md` | `m3/components/text-fields.md` (error), `m3/foundations/content-design/style-guide.md` | `govuk/patterns/validation.md`, `govuk/components/error-message.md`, `error-summary.md` |
| Una pregunta por página, revisar respuestas, confirmación | — | — | `govuk/patterns/question-pages.md`, `check-answers.md`, `confirmation-pages.md` |
| Subir archivos | — | — | `govuk/components/file-upload.md` |

**Acciones y feedback**
| Pregunta | Apple | Material | GOV.UK |
|---|---|---|---|
| Botones (tipos, jerarquía, cuál usar) | `hig/buttons.md` | `m3/components/all-buttons.md`, `buttons.md`, `icon-buttons.md`, `floating-action-button.md` | `govuk/components/button.md` |
| Diálogos, alertas, hojas, popovers | `hig/alerts.md`, `sheets.md`, `action-sheets.md`, `modality.md`, `popovers.md` | `m3/components/dialogs.md`, `bottom-sheets.md`, `side-sheets.md` | `govuk/patterns/interruption-pages.md` |
| Avisos breves, banners, progreso, carga | `hig/feedback.md`, `progress-indicators.md` | `m3/components/snackbar.md`, `progress-indicators.md`, `loading-indicator.md` | `govuk/components/notification-banner.md`, `warning-text.md` |
| Hápticos | `hig/playing-haptics.md` | — | — |
| Tooltips, badges, etiquetas de estado | — | `m3/components/tooltips.md`, `badges.md` | `govuk/components/tag.md` |

**Navegación**
| Pregunta | Apple | Material | GOV.UK |
|---|---|---|---|
| Barra inferior, pestañas | `hig/tab-bars.md` | `m3/components/navigation-bar.md`, `tabs.md` | `govuk/components/tabs.md` |
| Barra superior, menú lateral, cabecera | `hig/navigation-bars.md`, `toolbars.md`, `sidebars.md` | `m3/components/app-bars.md`, `toolbars.md`, `navigation-drawer.md`, `navigation-rail.md` | `govuk/components/header.md`, `service-navigation.md` |
| Migas, volver, paginación, saltar al contenido | — | — | `govuk/components/breadcrumbs.md`, `back-link.md`, `pagination.md`, `skip-link.md` |
| Búsqueda | `hig/searching.md` | `m3/components/search.md` | — |
| Pasos de un proceso, lista de tareas | — | — | `govuk/patterns/step-by-step-navigation.md`, `task-list-pages.md` |
| Pie de página | — | — | `govuk/components/footer.md` |

**Contenido, layout y estilo**
| Pregunta | Apple | Material | GOV.UK |
|---|---|---|---|
| Listas, tablas, tarjetas | `hig/lists-and-tables.md` | `m3/components/lists.md`, `cards.md`, `divider.md` | `govuk/components/table.md`, `summary-list.md` |
| Desplegables de contenido | — | — | `govuk/components/accordion.md`, `details.md` |
| Layout, márgenes, breakpoints, zona segura | `hig/layout.md` | `m3/foundations/layout/breakpoints.md`, `grids-spacing.md`, `canonical-examples.md` | `govuk/styles/layout.md`, `spacing.md` |
| Tipografía, títulos, párrafos | `hig/typography.md` | `m3/styles/typography.md` | `govuk/styles/type-scale.md`, `headings.md`, `paragraphs.md` |
| Iconos | `hig/sf-symbols.md` | `m3/styles/icons.md` | — |
| Imágenes y texto alternativo | — | `m3/foundations/content-design/alt-text.md` | `govuk/styles/images.md` |
| Movimiento: duraciones, easing, transiciones | `hig/motion.md` | `m3/styles/motion/easing-and-duration.md`, `transitions.md` | — |
| Materiales, elevación, forma | `hig/materials.md` | `m3/styles/elevation.md`, `shape.md` | — |
| Enlaces | — | — | `govuk/styles/links.md` |

**Textos y páginas**
| Pregunta | Apple | Material | GOV.UK |
|---|---|---|---|
| Redacción de interfaz (tono, mayúsculas, botones, errores) | sección de cada componente | `m3/foundations/content-design/style-guide.md`, `m3/foundations/writing.md` | `govuk/patterns/question-pages.md`, `govuk/components/button.md`, `error-message.md` |
| Páginas 404, error del servicio, no disponible | — | — | `govuk/patterns/page-not-found-pages.md`, `problem-with-the-service-pages.md`, `service-unavailable-pages.md` |
| Cookies | — | — | `govuk/components/cookie-banner.md`, `govuk/patterns/cookies-page.md` |
| Contacto | — | — | `govuk/patterns/contact-a-department-or-service-team.md` |
| Inicio de un servicio, onboarding, arranque | `hig/onboarding.md`, `launching.md` | — | `govuk/patterns/start-pages.md`, `start-using-a-service.md` |
| Ajustes | `hig/settings.md` | — | — |
| Notificaciones | — | `m3/foundations/content-design/notifications.md` | — |

## Mantenimiento

- Refrescar Material: `node ~/.claude/skills/m3/scripts/update.mjs`; GOV.UK: `~/.claude/skills/govuk/scripts/update.sh`. HIG no tiene script (copia de vabole/apple-skills).
- Página nueva tras refrescar → añadir su fila aquí.
- `hig`, `m3` y `govuk` siguen siendo skills, pero no se activan solas: se entra por aquí, o el usuario las llama por su nombre.
