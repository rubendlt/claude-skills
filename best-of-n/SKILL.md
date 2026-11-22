---
name: best-of-n
description: Genera N variantes de diseño en paralelo con subagentes (un worktree por variante), las captura en navegador y eliges la mejor. Para secciones o animaciones grandes y ambiguas (hero, layout de página, secuencia de scroll). Solo en cuentas que usan subagentes; si no, o si es una pieza pequeña (un botón, una tarjeta, un toast), usar prototype.
argument-hint: "<componente o sección> [— direcciones opcionales separadas por ;]"
---

# Best-of-N de diseño

Objetivo: cuando una decisión de diseño es ambigua (un hero, una secuencia GSAP, un layout, un empty state), generar **3-4 variantes distintas en paralelo** y dejar que el user elija viéndolas de verdad — en vez de iterar una sola a ciegas. El código generado es barato; el gusto es el cuello de botella.

Target: **$ARGUMENTS**

## Antes de empezar

- **¿Se pueden usar subagentes en esta cuenta?** Si el `CLAUDE.md` global o la memoria dicen que no, no sigas: usa la skill `prototype` (variantes en el mismo árbol, sin subagentes) y dilo en una línea.
- **¿Pieza pequeña?** Un componente suelto va con `prototype`; esta skill es para secciones o páginas donde las variantes necesitan su propio servidor.

## Protocolo

1. **Acotar antes de generar.** Si el target o las direcciones no están claras al 1000%, para y pregunta: ¿qué elemento exacto?, ¿qué referencia/tono?, ¿qué debe variar (composición, tipografía, motion, color) y qué debe quedar fijo (contenido, marca)? No generes variantes sobre un brief borroso — desperdicia worktrees.

2. **Definir N direcciones DISTINTAS** (no N intentos del mismo enfoque). Para trabajo editorial/landing, ejes típicos: tipográfico-colosal vs minimal-hairline; estático vs scroll-driven; denso vs aireado. Cada variante = una tesis de diseño nombrada. Aplica el criterio anti-slop del proyecto (sin Inter genérica, sin glassmorphism, sin cards calcadas).

3. **Aislar con worktrees.** Una rama + worktree por variante (`design/<slug>-v1…vN`). Cada variante corre en su **propio puerto** de dev para poder verlas a la vez. Tope **3-4 variantes** — más allá te conviertes tú en el cuello de botella de review.

4. **Generar en paralelo.** Un subagente por variante, cada uno implementa SOLO su dirección en su worktree. Modelo: variantes en **Sonnet** (trabajo acotado), tú reservas Opus para la síntesis final. Cada subagente debe dejar la variante renderizable (`dev` levantado o screenshot generado), no solo el diff.

5. **Capturar y comparar.** Screenshot de cada variante en el mismo viewport y mismo estado de datos (Playwright MCP / preview del proyecto). Preséntalas al user lado a lado con su nombre de tesis y 1 línea de qué la distingue. NO elijas tú por defecto — es decisión de gusto del user.

6. **Mergear y limpiar.** Integra solo la elegida en la rama de trabajo. Opcional: injertar el mejor detalle de las descartadas si el user lo pide. Elimina worktrees + ramas de las demás. Sin residuos.

## Guardarraíles

- Verificación real en navegador antes de declarar una variante "lista" — sin falsos positivos (mismo principio que `dev-loop`).
- Respeta `prefers-reduced-motion` en toda variante con animación.
- Si solo hay una dirección sensata, dilo y NO fuerces N variantes artificiales — el patrón es para ambigüedad genuina.
- Accesibilidad y contraste WCAG AA aplican a todas las variantes, no solo a la ganadora.
