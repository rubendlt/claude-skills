---
name: investigar
description: "Responde con referencias y evidencia, no de memoria ni por gusto. USAR cuando la respuesta cambiaría con evidencia o referentes (decisión con alternativas reales, impacto en conversión o usuarios, tema no estudiado antes) y el usuario pida una valoración o un juicio (¿qué te parece?, ¿está bien?, ¿es buena idea?, ¿cuál es mejor?, ¿qué harías?, ¿qué recomiendas?, ¿cómo lo mejorarías?, ¿cómo maximizo la conversión?, ¿qué hacen los mejores?) o un encargo de investigar (investiga, mira cómo lo hacen, busca qué se hace), en diseño, UX, conversión, copy, SEO, arquitectura, librerías, rendimiento o seguridad. Mira cómo lo resuelven los mejores (capturas reales) y qué dice la investigación con datos, y recomienda separando evidencia de criterio."
argument-hint: "[pregunta o encargo] [--rapido]"
---

# Investigar antes de valorar

Una opinión sin respaldo no vale. Ante una pregunta que pide juicio, la respuesta se apoya en **cómo lo hacen los mejores** y en **qué dice la investigación**, y después en el criterio propio, dicho como criterio.

## 0. Calibrar

| Tipo | Ejemplo | Qué hacer |
|---|---|---|
| **Completa** (por defecto) | «¿qué harías para que convierta más?», «¿cómo mejorarías esta página?», «investiga cómo…» | Pasos 1-6 |
| **Menor** (o `--rapido`) | una palabra, un margen, un nombre, un color | Paso 1 + una búsqueda si hace falta; sin capturas ni paso 6 |
| **No aplica** | edits mecánicos, bug con causa clara, un hecho conocido con certeza, algo ya decidido, algo ya estudiado **en sus dos mitades** (paso 1), el usuario pide rapidez | Responder directo y, si era una valoración relevante, decir en una línea por qué no se investigó. Lo que salga de memoria y no de algo visto o leído, marcado como criterio |

La pregunta clave para elegir: **¿cambiaría la respuesta si mirase referentes o estudios?** Si no, no hay que investigar. En la duda, versión menor.

Lo que ya deciden las instrucciones del proyecto (`CLAUDE.md`, documentos de decisiones) no se reabre con un artículo: si la evidencia lo contradice, se dice y se argumenta, pero no se cambia sin preguntar.

## 1. Lo que ya hay

Antes de salir fuera, gratis:
- **Proyecto:** `CLAUDE.md`, documentos de decisiones o de errores si existen (`docs/`, `.agent/`, ADRs), el código y la página real.
- **Skills instaladas**, según el tema (cargar una o dos que cambien la respuesta, nunca todas por defecto; si no está instalada, seguir sin ella):

  | Skill | Cuándo | Cuenta como |
  |---|---|---|
  | `govuk` | formularios, campos, errores, textos de interfaz, cookies, páginas de estado | **evidencia** (probado con usuarios reales) |
  | `hig` | accesibilidad, tamaños de toque, tipografía dinámica, ergonomía móvil | **evidencia** (norma de plataforma) |
  | `capturas` | ver la página propia: consultar `.shots/` antes de capturarla con `capture.mjs` | la página real |
  | `maya` | decidir cuánto avanzar una tarea o función frente a lo que el usuario ya acepta, o valorar un rediseño sobre usuarios actuales | **evidencia** donde cita estudio o caso; **criterio** donde lo marca |
  | `ux-craft` (y sus `references/expertos/`: Kole Jain, Tim Gabe, UX Peak, Self-Made Web Designer, Emil, Apple) | contrastar una idea con la opinión de un experto | **criterio**, nunca evidencia: no van en «Qué dice la evidencia» |

  Si el encargo no es valorar sino **diseñar o rediseñar con libertad creativa**, la skill es `diseno-libre`: usa estos pasos 1-3 como su fase de referentes y sigue con ideas, construcción y verificación.
- **Memoria y documentos:** estudios ya hechos para este proyecto o tema. Un estudio tiene dos mitades, **referentes** (paso 2) y **evidencia** (paso 3), y solo cuenta como hecho si cubrió las dos. Si cubrió una, partir de ella y hacer **solo la que falta**; no repetir la cubierta ni saltarse la otra.

**Proporción:** las capturas y búsquedas sirven a la pregunta principal. Un dato suelto de apoyo (p. ej. «los líderes ponen los logos en gris») se comprueba con una búsqueda o se marca como criterio; no abre otra tanda de capturas.

## 2. Cómo lo hacen los mejores

**Encontrarlos** (no tirar de los famosos de siempre):
1. Definir el problema concreto: «formulario de presupuesto B2B», no «web bonita».
2. **Del sector:** buscar competidores reales (`<servicio> <ciudad/país>`, los que posicionan arriba, los que cita el usuario) y quedarse con los 2-3 mejor resueltos.
3. **De fuera:** quien resolvió el mismo patrón con más recursos. Galerías curadas por patrón (Mobbin, Page Flows, Land-book, Godly, Awwwards para estética), design systems públicos y productos líderes del patrón (p. ej., formularios: GOV.UK, Stripe, Typeform).
4. Descartar los que no resuelven el mismo problema o tienen otro público. Si los del sector local son flojos (fichas de directorio, webs abandonadas), subir a nacional o internacional y decirlo.
5. **Preseleccionar 5-6 para quedarse con 3-5**: algunos bloquean bots o han cambiado de URL.
6. **URLs sacadas de una búsqueda o navegando la web del referente, nunca adivinadas**, aunque la marca sea famosa y la ruta parezca obvia (`/contact/sales`, `/es/contacto/`: de memoria suelen dar 404). El script exige el origen de cada URL (`"<url>|búsqueda: <consulta>"`, `"<url>|enlace en <página>"`, `"<url>|propia"`) y rechaza las que no lo traen: si no tienes qué poner, busca la URL primero.

**Mirarlos en captura, nunca de memoria:**
```sh
node <dir_de_esta_skill>/scripts/capture.mjs [--full] <carpeta_temporal>/refs "<url1>|búsqueda: <consulta>" "<url2>|enlace en <página>" ...
```
- Escritorio (1440×900) y móvil (390×844). Cierra el banner de cookies, baja por la página para que carguen imágenes y mapas diferidos, y oculta los distintivos de desarrollo (Next.js, Vite).
- **Primera pantalla por defecto; `--full` solo cuando lo importante está más abajo** (la página propia, un formulario largo). Cada captura entera cuesta mucho al leerla.
- Las páginas bloqueadas (Cloudflare, captcha) o con 404 salen como `✗` y no se guardan: sustituirlas por otro candidato, no leerlas.
- Página propia: mejor la preview desplegada que el servidor de desarrollo.
- Requiere Playwright y Chromium (`npx -y playwright install chromium`). Si no hay forma de capturar, decirlo y no sustituirlo por lo que se recuerda de esa web.
- Leer las imágenes y anotar por referente **qué hace, en concreto**: texto del CTA, posición, número de campos, prueba social, orden, qué pide y qué no.
- Y después **por qué lo hace**: qué lo causa (una necesidad del usuario, un objetivo de su negocio como vender más referencias o captar emails, una limitación técnica o heredada, su marca, o inercia del sector) y **si esa causa existe en este proyecto**. Lo que no se encuentre escrito por el propio referente o un estudio es inferencia y se marca así.

## 3. Qué dice la investigación

- **Si hace falta NN/g, por la skill `nng`** (fichas → índice local → leer el artículo exacto), nunca buscándolo en la web. Cuenta como una de las fuentes clave leídas enteras.
- Fuentes con datos, por orden: documentación oficial y normas (WCAG, MDN, web.dev, guías de plataforma) → investigación de usabilidad (NN/g vía `nng`, Baymard) → experimentos publicados (CXL, casos A/B con cifras, papers) → nada más.
- **Un blog de opinión, un hilo o un «10 tips» no es evidencia.** Fecha visible; si el tema cambia (SEO, precios, APIs), reciente.
- 3-5 búsquedas, lanzadas a la vez.
- **El buscador devuelve un resumen, no la página.** Las 2-3 fuentes clave se leen enteras con WebFetch (o con el agente `web-fetch` donde no haya WebFetch: es la herramienta de leer páginas, no un subagente que haya que justificar). Si una no se puede leer (bloqueo, de pago), se usa otra o se dice.
- Una cifra o una regla que solo se ha visto en el resumen del buscador no se presenta como dato de la fuente: se marca «(según el resumen del buscador)» o se descarta.
- Si no hay evidencia sólida, decirlo: no rellenar con suposiciones.

## 4. Responder

Corto y en este orden:

1. **Qué hacen los mejores:** patrones que se repiten (con cuáles) y la excepción interesante, si la hay.
2. **Qué dice la evidencia:** cada regla con su fuente al lado.
3. **Qué haría aquí:** recomendaciones **priorizadas por impacto**, cada una con su porqué (referente o estudio) y lo que cuesta. Un referente solo respalda una recomendación si la causa que lo explica existe aquí; si funciona allí por un motivo que aquí no está, va a lo descartado con ese motivo, aunque lo hagan todos los grandes.
4. **Criterio propio:** lo que es opinión, marcado como tal.
5. **Choques:** antes de escribir este punto, repasar **cada recomendación** del punto 3 contra las reglas del `CLAUDE.md` del proyecto (voz, «una idea una vez», color, movimiento, lo marcado «user») y los documentos de decisiones. Lo que choque se dice aquí y se marca en su recomendación; no se descubre al implementar.

Si una recomendación es visual y el usuario la quiere ver, `prototype` la enseña renderizada en la página real antes de tocar el código definitivo.

Fuentes al final como enlaces, cada una marcada **[leída]** o **[resumen]**; antes de responder, comprobar que las fuentes que sostienen las recomendaciones principales están [leídas]. Propuestas visuales con capturas reales de la web del proyecto, no esquemas.

## 5. No hacer

- Implementar: una pregunta pide opinión; se implementa cuando el usuario lo pide.
- Copiar la estética de un referente: se trasladan técnicas y porqués, no el aspecto.
- Inventar cifras («aumenta la conversión un 30 %») sin el estudio que las da.
- Presentar como visto algo que no se ha capturado o leído.

## 6. Guardar (solo investigación completa)

Para no repetirla dentro de un mes:
- **Siempre, en la memoria persistente** (barato): tema, fecha, **mitades cubiertas** (referentes / evidencia / las dos), referentes válidos y descartados (y por qué), fuentes clave y conclusión en 3-5 líneas.
- **Solo si el usuario lo pide o la conclusión es muy visual:** capturas y conclusiones en una página que pueda abrir (un artifact si el entorno lo permite; si no, un `.md` en `docs/` con las imágenes al lado). Si no se hace, ofrecerlo en una línea.
