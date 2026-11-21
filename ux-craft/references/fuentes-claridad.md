# Fuentes de claridad.md

Rastro de verificación de cada regla (contrastadas el 22 oct 2026 contra la fuente original). No hace falta leerlo para aplicar la skill; sirve para comprobar o actualizar una regla.

## Introducción

- **Por qué la IA falla en claridad**: [Anthropic, frontend](https://www.claude.com/blog/improving-frontend-design-through-skills), [Anthropic, harness](https://www.anthropic.com/engineering/harness-design-long-running-apps)
- **¿Dónde estoy?, ¿qué puedo hacer?, ¿a dónde puedo ir?**: [WWDC17 802](https://developer.apple.com/videos/play/wwdc2017/802/?time=554), [WWDC25 359](https://developer.apple.com/videos/play/wwdc2025/359/?time=105)

## 1. Antes del código: la pregunta de la pantalla

- **Contexto mínimo antes de diseñar**: [Impeccable `distill`](https://github.com/pbakaus/impeccable/blob/main/.claude/skills/impeccable/reference/distill.md), [v0](https://vercel.com/blog/how-to-prompt-v0)
- **Escribe en una línea la pregunta que responde la pantalla y su acción principal**: [Taste](https://github.com/leonxlnx/taste-skill/blob/main/skills/taste-skill/references/app-screens.md), [UX Tigers](https://jakobnielsenphd.substack.com/p/ux-roundup-20261002)
- **Si es un flujo, primero el mapa en palabras**: [Shape Up, *breadboarding*](https://basecamp.com/shapeup/1.3-chapter-04)
- **Estructura en texto antes del código**: [frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md), [Impeccable `layout`](https://github.com/pbakaus/impeccable/blob/main/.claude/skills/impeccable/reference/layout.md)
- **Se construye desde el centro hacia fuera**: [Getting Real, *epicenter design*](https://basecamp.com/gettingreal/09.2-epicenter-design), [Erik Kennedy](https://learnui.design/blog/7-rules-for-creating-gorgeous-ui-part-1.html), [Linear](https://linear.app/now/how-we-redesigned-the-linear-ui)
- **Contenido real, también en su peor caso, y los tres estados**: [Getting Real](https://basecamp.com/gettingreal/09.3-three-state-solution)
- **En flujos y formularios, una cosa por pantalla**: [GOV.UK](https://design-system.service.gov.uk/patterns/question-pages/)

## 2. Jerarquía visual

- **Un elemento principal, 2–3 secundarios y el resto atenuado**: [Linear](https://linear.app/now/behind-the-latest-design-refresh), [Impeccable `critique`](https://github.com/pbakaus/impeccable/blob/main/.claude/skills/impeccable/reference/critique.md)
- **Tamaño, peso y color juntos, no solo tamaño**: [WWDC25 359](https://developer.apple.com/videos/play/wwdc2025/359/?time=859), [Refactoring UI](https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886), [Kennedy](https://learnui.design/blog/7-rules-for-creating-gorgeous-ui-part-2.html)
- **Pocos estilos de texto**: [NN/g](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/)
- **Para destacar algo, atenúa lo que compite con ello**: [M3](https://m3.material.io/styles/color/roles)
- **El espacio también marca importancia, no solo agrupa**: [Fluent](https://fluent2.microsoft.design/layout), [M3](https://m3.material.io/foundations/layout/understanding-layout/spacing)
- **Acciones en pirámide**: [M3](https://m3.material.io/components/buttons/guidelines), [Android](https://developer.android.com/develop/ui/compose/components/button)
- **Un solo primario por vista o sección**: [GOV.UK](https://design-system.service.gov.uk/components/button/), [Atlassian](https://atlassian.design/components/button/usage), [Polaris](https://shopify.dev/docs/api/product-subscription-extensions/components/button), [Material](https://material.io/go/design-buttons), [Carbon](https://carbondesignsystem.com/components/button/usage/), [HIG](https://developer.apple.com/design/human-interface-guidelines/buttons)
- **Si hay más de dos acciones con la misma prioridad, ninguna es primaria**: [Fluent](https://fluent2.microsoft.design/components/web/react/core/button/usage)
- **Si sobran botones, las acciones menores van a un menú de desbordamiento**: [M3](https://m3.material.io/components/buttons/guidelines)
- **Un botón activo nunca se parece al desactivado de otro**: [M2](https://web.archive.org/web/2018/https://material.io/design/components/buttons.html)
- **Dónde va el primario lo marca la plataforma**: [M3](https://m3.material.io/foundations/layout/understanding-layout/spacing)
- **La acción principal se ve sin hacer scroll**: [NN/g](https://www.nngroup.com/articles/scrolling-and-attention/)
- **Pocos bordes de alineación**: [Taste](https://github.com/leonxlnx/taste-skill/blob/main/skills/taste-skill/references/critique.md)
- **Lo que orienta se queda en segundo plano**: [Linear](https://linear.app/now/behind-the-latest-design-refresh)
- **El título de la pantalla la nombra**: [WWDC25 359](https://developer.apple.com/videos/play/wwdc2025/359/?time=169)
- **"The most minimal user interfaces might not be usable" (WWDC21 10126)**: [WWDC21 10126](https://developer.apple.com/videos/play/wwdc2021/10126/?time=318)
- **"Too much progressive disclosure can make work flows inefficient" (WWD**: [WWDC17 802](https://developer.apple.com/videos/play/wwdc2017/802/?time=3424)
- **"Mystery ≠ minimalism" (Impeccable)**: [Impeccable](https://github.com/pbakaus/impeccable/blob/main/.claude/skills/impeccable/reference/distill.md)
- **En las pruebas a ciegas de Taste, las pantallas sobrias pero pobres (s**: [Taste](https://github.com/leonxlnx/taste-skill/blob/main/skills/taste-skill/references/app-screens.md)

## 3. Agrupación

- **La jerarquía la dan la composición y la agrupación, no la decoración**: [WWDC25 356](https://developer.apple.com/videos/play/wwdc2025/356/?time=535)
- **Proximidad primero**: [NN/g](https://www.nngroup.com/articles/gestalt-proximity/), [M3 "implicit grouping"](https://m3.material.io/foundations/layout/understanding-layout/spacing)
- **Fondo o borde solo si el espacio no basta**: [NN/g](https://www.nngroup.com/articles/common-region/), [Tufte](https://www.edwardtufte.com/notebook/sparkline-theory-and-practice-edward-tufte/)
- **La sangría indica subordinación**: [HIG Layout](https://developer.apple.com/design/human-interface-guidelines/layout)
- **Un símbolo y un texto no comparten contenedor**: [WWDC25 356](https://developer.apple.com/videos/play/wwdc2025/356/?time=565)
- **Lo que hace lo mismo se ve y se comporta igual; lo distinto, distinto**: [NN/g](https://www.nngroup.com/articles/gestalt-similarity/), [Getting Real](https://basecamp.com/gettingreal/09.6-context-over-consistency)
- **Se agrupa por la tarea del usuario, no por la tecnología**: [Intercom](https://intercomonproduct.substack.com/p/designing-for-clarity)

## 4. Escaneo y texto

- **El texto es interfaz: "Copywriting is interface design" (Getting Real)**: [Getting Real](https://basecamp.com/gettingreal/09.7-copywriting-is-interface-design), [iA](https://ia.net/topics/the-web-is-all-about-typography-period)
- **La gente escanea**: [NN/g 2008](https://www.nngroup.com/articles/how-little-do-users-read/), [NN/g 2020](https://www.nngroup.com/articles/how-people-read-online/)
- **Nadie lee en orden, así que cada cabecera, etiqueta y botón se entiende solo**: [WWDC22 10037](https://developer.apple.com/videos/play/wwdc2022/10037/?time=218)
- **Diseña para la "tarta de capas"**: [NN/g](https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/), [NN/g 2017](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)
- **Las 2 primeras palabras deciden**: [NN/g](https://www.nngroup.com/articles/first-2-words-a-signal-for-scanning/), [Microsoft](https://learn.microsoft.com/en-us/style-guide/top-10-tips-style-voice)
- **Lo importante, primero (pirámide invertida)**: [NN/g](https://www.nngroup.com/articles/inverted-pyramid/), [GOV.UK](https://www.gov.uk/service-manual/design/writing-for-user-interfaces), [M2](https://web.archive.org/web/2019/https://material.io/design/communication/writing.html)
- **La etiqueta dice la consecuencia**: [WWDC21 10126](https://developer.apple.com/videos/play/wwdc2021/10126/?time=1574)
- **Etiquetas de botón de 1 a 3 palabras**: [M3](https://m3.material.io/components/buttons/guidelines), [Carbon](https://carbondesignsystem.com/components/button/usage/), [HIG Writing](https://developer.apple.com/design/human-interface-guidelines/writing)
- **Cifras en número**: [NN/g](https://www.nngroup.com/articles/web-writing-show-numbers-as-numerals/)
- **Frases cortas**: [GOV.UK](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/), [Microsoft](https://learn.microsoft.com/en-us/style-guide/top-10-tips-style-voice)
- **Énfasis escaso**: [Butterick](https://practicaltypography.com/bold-or-italic.html), [Butterick](https://practicaltypography.com/all-caps.html), [Windows](https://learn.microsoft.com/en-us/windows/apps/design/signature-experiences/typography)
- **Prueba de voz alta**: [WWDC22 10037](https://developer.apple.com/videos/play/wwdc2022/10037/?time=1357)

## 5. Legibilidad

- **Material, GOV.UK, GOV.UK tablas, Carbon, Windows, HIG**: [Material](https://github.com/material-components/material-web/blob/main/tokens/versions/latest/sass/_md-sys-typescale.scss), [GOV.UK](https://design-system.service.gov.uk/styles/type-scale/), [GOV.UK tablas](https://design-system.service.gov.uk/components/table/), [Carbon](https://carbondesignsystem.com/elements/typography/type-sets/), [Windows](https://learn.microsoft.com/en-us/windows/apps/design/signature-experiences/typography), [HIG](https://developer.apple.com/design/human-interface-guidelines/typography)
- **Filas de lista**: [WWDC20 10175](https://developer.apple.com/videos/play/wwdc2020/10175/?time=1103)
- **Butterick, M3, WCAG**: [Butterick](https://practicaltypography.com/line-spacing.html), [M3](https://m3.material.io/styles/typography/applying-type), [WCAG](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
- **Párrafos de unos 50–75 caracteres**: [Dyson y Kipping](https://journals.uc.edu/index.php/vl/article/view/5671)
- **Contraste con margen**: [WCAG](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html), [Stripe](https://stripe.com/blog/accessible-color-systems)
- **Nada de gris claro en texto que hay que leer**: [NN/g](https://www.nngroup.com/articles/low-contrast/)
- **Sin pesos finos (100–300) en texto de interfaz**: [HIG](https://developer.apple.com/design/human-interface-guidelines/typography), [Carbon](https://carbondesignsystem.com/elements/typography/type-sets/)
- **Texto sobre imagen, con un degradado o un desenfoque detrás**: [WWDC25 359](https://developer.apple.com/videos/play/wwdc2025/359/?time=922)
- **Con el texto muy grande, la pantalla se reorganiza**: [HIG](https://developer.apple.com/design/human-interface-guidelines/typography), [WWDC20 10020](https://developer.apple.com/videos/play/wwdc2020/10020/?time=567)

## 6. Intuición: que se entienda sin pensar

- **Una interfaz parece intuitiva en dos casos: cuando el usuario ya sabe **: [Jared Spool](https://articles.centercentre.com/design_intuitive/)
- **Lo pulsable parece pulsable, y lo demás no**: [NN/g](https://www.nngroup.com/articles/flat-ui-less-attention-cause-uncertainty/), [NN/g](https://www.nngroup.com/articles/clickable-elements/)
- **Se ponen a propósito las señales que lo físico daba gratis**: [Don Norman](https://jnd.org/signifiers-not-affordances/)
- **Los controles imitan lo que controlan**: [WWDC17 802](https://developer.apple.com/videos/play/wwdc2017/802/?time=2413)
- **Casi universales: casa, lupa, impresora (NN/g 2014) y carrito (Nielsen**: [NN/g 2014](https://www.nngroup.com/articles/icon-usability/), [Nielsen 2026](https://jakobnielsenphd.substack.com/p/ux-roundup-20261019)
- **La hamburguesa ya se reconoce, pero va arriba a la izquierda y mejor c**: [NN/g 2025](https://www.nngroup.com/articles/hamburger-menu-icon-recognizability/)
- **En las barras de herramientas de iOS 26 se usan símbolos estándar sin **: [WWDC25 356](https://developer.apple.com/videos/play/wwdc2025/356/?time=904)
- **Palabras del usuario, no del sistema**: [Nielsen, heurística 2](https://www.nngroup.com/articles/ten-usability-heuristics/), [NN/g](https://www.nngroup.com/articles/information-scent/)
- **Convenciones antes que originalidad**: [NN/g](https://www.nngroup.com/articles/mental-models/), [Google Research](https://research.google/blog/users-love-simple-and-familiar-designs-why-websites-need-to-make-a-great-first-impression/)
- **Cerrar o cancelar, según si hay datos**: [WWDC22 10001](https://developer.apple.com/videos/play/wwdc2022/10001/?time=1336)
- **Reconocer mejor que recordar**: [NN/g](https://www.nngroup.com/articles/recognition-and-recall/)
- **Lo que se usa a diario no se esconde, aunque la pantalla quede menos limpia**: [Nielsen](https://jakobnielsenphd.substack.com/p/ux-roundup-20261002), [Wroblewski, *Obvious always wins*](https://www.lukew.com/ff/entry.asp?1945), [NN/g](https://www.nngroup.com/articles/hamburger-menus/), [Wroblewski, *Mobile First*](https://lukew.com/mobilefirst/06-chapter-4/index.html)
- **Clics sin pensar antes que pocos clics**: [Krug](https://www.ciscopress.com/content/images/9780321965516/samplepages/0321965515.pdf)
- **Divulgación progresiva, como mucho 2 niveles**: [NN/g](https://www.nngroup.com/articles/progressive-disclosure/), [Carbon](https://carbondesignsystem.com/patterns/disclosures-pattern/)
- **Nada en blanco sin pista**: [WWDC21 10126](https://developer.apple.com/videos/play/wwdc2021/10126/?time=652), [Nielsen](https://jakobnielsenphd.substack.com/p/ux-slogans), [Getting Real](https://basecamp.com/gettingreal/09.4-the-blank-slate)
- **El gesto es un atajo, nunca la única vía**: [WWDC21 10126](https://developer.apple.com/videos/play/wwdc2021/10126/?time=899)
- **La ayuda se da en contexto, breve y en el momento**: [Krug](https://www.ciscopress.com/content/images/9780321965516/samplepages/0321965515.pdf)
- **Nunca es promoción (WWDC23 10229)**: [WWDC23 10229](https://developer.apple.com/videos/play/wwdc2023/10229/?time=127)
- **Un tutorial que se salta no vuelve a salir, pero queda accesible en Ay**: [HIG Onboarding](https://developer.apple.com/design/human-interface-guidelines/onboarding)
- **Valores por defecto con el caso más probable**: [NN/g](https://www.nngroup.com/articles/the-power-of-defaults/)
- **Respuesta proporcional a lo que importa**: [HIG Feedback](https://developer.apple.com/design/human-interface-guidelines/feedback)

## 7. Densidad, listas, tablas y formularios

- **El problema no es la cantidad de información, es el ruido**: [NN/g](https://www.nngroup.com/articles/utilize-available-screen-space/)
- **nunca por debajo de 48×48 de área táctil (M3)**: [M3](https://m3.material.io/foundations/layout/understanding-layout/density)
- **Cuanto más densos los componentes, más amplios los márgenes (M2)**: [M2](https://web.archive.org/web/2018/https://material.io/design/layout/applying-density.html)
- **Para comparar, lista o tabla, no tarjetas**: [NN/g](https://www.nngroup.com/articles/cards-component/), [WWDC25 359](https://developer.apple.com/videos/play/wwdc2025/359/?time=607)
- **Primera columna y orden**: [NN/g](https://www.nngroup.com/articles/data-tables/)
- **Filas**: [Carbon](https://carbondesignsystem.com/components/data-table/usage/)
- **Números**: [GOV.UK](https://design-system.service.gov.uk/components/table/)
- **Una columna**: [Baymard](https://baymard.com/blog/avoid-multi-column-forms)
- **Etiqueta encima del campo por defecto,**: [Wroblewski](https://www.lukew.com/ff/entry.asp?504)
- **Etiquetas de 1 a 3 palabras, sin dos puntos**: [Carbon](https://carbondesignsystem.com/patterns/forms-pattern/)
- **Se marca la minoría**: [GOV.UK](https://design-system.service.gov.uk/patterns/question-pages/)

## 8. Revisar sobre la pantalla, no sobre el código

- **Quien escribió el código lee en él sus intenciones. La claridad se juz**: [Anthropic](https://www.anthropic.com/engineering/harness-design-long-running-apps), [Sansford et al. 2026](https://arxiv.org/abs/2604.05839), [ReLook 2025](https://huggingface.co/papers/2510.11498)
- **En 2023, GPT-4 analizando capturas solo dio un 19 % de consejos buenos**: [Nielsen](https://jakobnielsenphd.substack.com/p/ai-ux-evaluation)
- **En 2025, los modelos encontraban más problemas que los expertos, pero **: [Nielsen](https://jakobnielsenphd.substack.com/p/ux-roundup-20251027)
- **Capturas**: [Linear](https://linear.app/now/how-we-redesigned-the-linear-ui)
- **Revisión por un subagente nuevo, sin el historial de la conversación**: [Impeccable](https://github.com/pbakaus/impeccable/blob/main/.claude/skills/impeccable/reference/new-work.md)
- **1 segundo**: [Taste](https://github.com/leonxlnx/taste-skill/blob/main/skills/taste-skill/references/critique.md)
- **5 segundos**: [Perfetti](https://articles.centercentre.com/?p=85)
- **Desenfoque**: [NN/g](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/), [WWDC25 359](https://developer.apple.com/videos/play/wwdc2025/359/?time=828)
- **Primer clic**: [MeasuringU](https://measuringu.com/first-choice/)
- **¿Dónde estoy, qué puedo hacer, a dónde puedo ir, cómo salgo?**: [WWDC17 802](https://developer.apple.com/videos/play/wwdc2017/802/?time=554)
- **Explicarla en voz alta**: [WWDC17 802](https://developer.apple.com/videos/play/wwdc2017/802/?time=1162)
- **Corregir los 3 problemas más graves en cada ronda**: [Anthropic](https://www.anthropic.com/engineering/harness-design-long-running-apps)

