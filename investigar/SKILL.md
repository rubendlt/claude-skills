---
name: investigar
description: "Responder con referencias y evidencia, no de memoria ni por gusto. USAR siempre que el usuario pida una valoración o un juicio (¿qué te parece?, ¿está bien?, ¿es buena idea?, ¿cuál es mejor?, ¿qué harías?, ¿qué recomiendas?, ¿cómo lo mejorarías?, ¿cómo maximizo la conversión?, ¿qué hacen los mejores?) o un encargo de investigar (investiga, mira cómo lo hacen, busca qué se hace), en diseño, UX, conversión, copy, SEO, arquitectura, librerías, rendimiento o seguridad. Mira cómo lo resuelven los mejores (capturas reales) y qué dice la investigación con datos, y recomienda separando evidencia de criterio."
argument-hint: "[pregunta o encargo] [--rapido]"
---

# Investigar antes de valorar

Mi opinión sin respaldo no vale. Ante una pregunta que pide juicio, la respuesta se apoya en **cómo lo hacen los mejores** y en **qué dice la investigación**, y después en mi criterio, dicho como criterio.

## 0. Calibrar

| Tipo | Ejemplo | Qué hacer |
|---|---|---|
| **Completa** (por defecto) | «¿qué harías para que convierta más?», «¿cómo mejorarías esta página?», «investiga cómo…» | Pasos 1-5 enteros |
| **Menor** (o `--rapido`) | una palabra, un margen, un nombre, un color | Paso 1 + una búsqueda si hace falta; sin capturas |
| **No aplica** | edits mecánicos, bug con causa clara, un hecho que sé con certeza | Responder directo |

Lo que ya decide el `CLAUDE.md` o `docs/DECISIONES.md` del proyecto no se reabre con un artículo: si la evidencia lo contradice, se dice y se argumenta, pero no se cambia sin preguntar. Lo marcado «(user)» es del usuario.

## 1. Lo que ya hay (gratis)

- Proyecto: `CLAUDE.md`, `docs/DECISIONES.md`, `.agent/wiki/error_library.md`, el código y la página real.
- Skills locales: `hig` (Apple), `govuk` (formularios, errores, textos), `ux-craft`, `uxpeak-agentic-ux`, `emil-design-eng`.
- Memoria: estudios de referentes ya hechos (no repetirlos).

## 2. Cómo lo hacen los mejores

- **3-5 referentes reales**: del sector (competidores bien hechos) y de fuera que resolvieron el mismo problema (p. ej., para un formulario de presupuesto: un buen B2B del sector + Stripe/GOV.UK/Linear en su formulario).
- Elegirlos por cómo resuelven el problema concreto, no por fama.
- **Mirarlos en captura, nunca de memoria**:
  ```sh
  node ~/.claude/skills/investigar/scripts/capture.mjs <scratchpad>/refs <url1> <url2> ...
  ```
  Saca escritorio (1440×900) y móvil (390×844). Leer las PNG con Read. Si tapa un banner de cookies, decirlo y valorar lo visible.
- Lazyweb (MCP) sirve para pantallas de SaaS y producto; para sectores físicos o locales casi no tiene nada: capturar en directo.
- Anotar por referente: qué hace, en concreto (texto del CTA, posición, número de campos, prueba social, orden).

## 3. Qué dice la investigación

- Fuentes con datos, por orden: documentación oficial y normas (WCAG, MDN, web.dev, GOV.UK, HIG) → investigación de usabilidad (NN/g, Baymard) → experimentos publicados (CXL, casos A/B con cifras, papers) → nada más.
- **Un blog de opinión, un hilo o un «10 tips» no es evidencia.** Fecha visible; si el tema cambia (SEO, precios, APIs), reciente.
- Búsqueda `standard`, hasta 5 consultas en la misma tanda; `extended` solo si sale pobre. Para leer una página: el agente `web-fetch`.
- Si no hay evidencia sólida, decirlo: no rellenar con suposiciones.

## 4. Responder

Estructura, corta:

1. **Qué hacen los mejores**: patrones que se repiten en los referentes (con cuáles), y la excepción interesante si la hay.
2. **Qué dice la evidencia**: cada regla con su fuente al lado (enlace).
3. **Qué haría aquí**: recomendaciones **priorizadas por impacto**, cada una con su porqué (referente o estudio) y lo que cuesta.
4. **Mi criterio**: lo que es opinión mía, marcado como tal.
5. **Choques**: qué contradice una decisión del proyecto y por qué merece (o no) reabrirse.

Fuentes al final como enlaces. Propuestas visuales: con capturas reales de la web del proyecto, no esquemas.

## 5. No hacer

- Implementar: una pregunta pide opinión; se implementa tras «hazlo».
- Copiar la estética de un referente: se trasladan técnicas y por qués, no el look.
- Inventar cifras («aumenta la conversión un 30 %») sin el estudio que las da.
