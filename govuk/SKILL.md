---
disable-model-invocation: true
name: govuk
description: "Consulta de datos: copia local del GOV.UK Design System (componentes, patrones, estilos), guía con investigación de usuarios reales, también mayores y poco digitales. Usar para decidir cómo debe funcionar un formulario, un campo (nombre, email, teléfono, dirección, fecha), un mensaje de error o validación, una página de confirmación, de error 404/500, un banner de cookies, una navegación o un texto de interfaz claro. Datos y comportamiento, no estética."
context: fork
agent: Explore
---

# GOV.UK Design System (copia local)

Guía oficial del Government Digital Service británico (alphagov/govuk-design-system, MIT). Cada recomendación sale de pruebas con usuarios reales, incluidos mayores, con baja alfabetización digital y con discapacidad. Versión en `VERSION`; refrescar con `scripts/update.sh`.

## Cómo usarla

1. Busca en el índice de abajo la página que responde a la pregunta y léela entera; si no está clara, `grep -ril "<término>" components patterns styles`.
2. Devuelve la regla concreta, citando la página (p. ej. `patterns/validation.md` → «…»), y el porqué si la guía lo da.
3. **Datos y comportamiento, no estética.** El aspecto de GOV.UK (negro, amarillo de foco, tipografía propia, tamaños) es identidad del Gobierno británico: no lo traslades. Sí traslada qué hace cada pieza, cuándo usarla y cómo se redacta.
4. Si choca con una regla del `CLAUDE.md` del proyecto, manda el proyecto; dilo. Si choca con `hig` o `m3`, se decide con los criterios de la skill `normas`.
5. Los textos de ejemplo están en inglés: adáptalos al castellano, no los traduzcas literal.
6. Los enlaces internos (`/patterns/...`) son relativos a https://design-system.service.gov.uk.

## Índice: pregunta → archivo

**Formularios**
| Pregunta | Leer |
|---|---|
| Cómo validar, cuándo mostrar errores, qué decir | `patterns/validation.md`, `components/error-message.md`, `components/error-summary.md` |
| Una pregunta por página, estructura de un formulario | `patterns/question-pages.md` |
| Revisar antes de enviar | `patterns/check-answers.md` |
| Qué mostrar tras enviar | `patterns/confirmation-pages.md`, `components/panel.md` |
| Campo de texto, ancho del campo, autocompletado | `components/text-input.md` |
| Área de texto, contador de caracteres | `components/textarea.md`, `components/character-count.md` |
| Radios, casillas, desplegable | `components/radios.md`, `components/checkboxes.md`, `components/select.md` (y por qué evitar select) |
| Agrupar campos, leyendas | `components/fieldset.md` |
| Fechas | `patterns/dates.md`, `components/date-input.md` |
| Subir archivos | `components/file-upload.md` |
| Botones (principal, secundario, aviso, desactivado) | `components/button.md` |

**Datos personales**
| Pregunta | Leer |
|---|---|
| Nombre | `patterns/names.md` |
| Email / confirmar email | `patterns/email-addresses.md`, `patterns/confirm-an-email-address.md` |
| Teléfono / confirmar por SMS | `patterns/phone-numbers.md`, `patterns/confirm-a-phone-number.md` |
| Dirección | `patterns/addresses.md` |
| Contraseña, usuario, cuentas | `patterns/passwords.md`, `components/password-input.md`, `patterns/create-a-username.md`, `patterns/create-accounts.md` |
| Datos de tarjeta | `patterns/payment-card-details.md` |

**Páginas y estados**
| Pregunta | Leer |
|---|---|
| 404 | `patterns/page-not-found-pages.md` |
| Error del servidor (fallo nuestro) | `patterns/problem-with-the-service-pages.md` |
| Servicio caído / mantenimiento | `patterns/service-unavailable-pages.md` |
| Página de inicio de un trámite | `patterns/start-pages.md`, `patterns/start-using-a-service.md` |
| Avisos importantes, interrupciones | `components/notification-banner.md`, `components/warning-text.md`, `components/inset-text.md`, `patterns/interruption-pages.md` |
| Página o canal de contacto | `patterns/contact-a-department-or-service-team.md` |
| Cookies: banner y página | `components/cookie-banner.md`, `patterns/cookies-page.md` |
| Tareas en varios pasos | `patterns/complete-multiple-tasks.md`, `components/task-list.md`, `patterns/step-by-step-navigation.md` |

**Navegación y contenido**
| Pregunta | Leer |
|---|---|
| Cabecera, navegación, pie | `components/header.md`, `components/service-navigation.md`, `patterns/navigate-a-service.md`, `components/footer.md` |
| Migas, volver, paginación | `components/breadcrumbs.md`, `components/back-link.md`, `components/pagination.md` |
| Acordeón, detalles, pestañas (y cuándo NO) | `components/accordion.md`, `components/details.md`, `components/tabs.md` |
| Tablas, listas resumen, etiquetas | `components/table.md`, `components/summary-list.md`, `components/tag.md` |
| Saltar al contenido | `components/skip-link.md` |

**Estilos (solo los principios, no los valores)**
| Pregunta | Leer |
|---|---|
| Texto de enlaces, enlaces que abren pestaña nueva | `styles/links.md` |
| Titulares, párrafos, listas | `styles/headings.md`, `styles/paragraphs.md`, `styles/lists.md` |
| Contraste y uso del color | `styles/colour.md` |
| Ancho de línea, rejilla, espaciado | `styles/layout.md`, `styles/spacing.md` |
| Escala tipográfica (criterio responsive) | `styles/type-scale.md` |
| Imágenes y texto alternativo | `styles/images.md` |
| Accesibilidad | `accessibility/accessibility-strategy.md` |

Fuera de la copia, por ser trámites solo del Gobierno británico: NI number, etnia, igualdad, sexo/género, emergencias, salida rápida, datos bancarios UK.
