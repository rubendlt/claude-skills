# Verificación contra lo decidido

## Capturas

- **Web:** `node ~/.claude/skills/investigar/scripts/capture.mjs [--full] <carpeta>/verificacion "<url local o preview>|propia"` (1440 y 390). Para otras anchuras o estados concretos, la skill `capturas` o Playwright a mano.
- **Móvil:** simulador iOS `xcrun simctl io booted screenshot <ruta>.png`; Android `adb exec-out screencap -p > <ruta>.png`. En dispositivo físico, pide la captura al usuario.
- Con datos reales y en los estados que existan: normal, vacío, cargando y error.
- Lado a lado con el referente o la referencia del usuario, a la misma anchura:

```bash
python3 ~/.claude/skills/diseno-libre/scripts/refs.py lamina <carpeta>/verificacion/comparar.png --columnas 2 referencia.png resultado.png
```

## Revisión en frío

Hazla tú, mirando solo imágenes y textos, como si no hubieras visto el código. Si el usuario pide un revisor aparte, pásale este encargo tal cual (solo rutas, nunca código ni tu razonamiento):

> Eres un revisor de diseño que no ha visto cómo se hizo esto. Abre con Read: [capturas del resultado], [lamina.png de referentes], [comparar.png si hay referencia del usuario]. Lee [decision.md] y la pregunta de la pantalla: «[…]», acción principal: «[…]».
>
> Responde con hallazgos, cada uno con gravedad (bloquea la tarea | la entorpece | cosmético) y dónde se ve:
>
> 1. **Claridad** (pruebas de ~/.claude/skills/ux-craft/references/claridad.md § 8): qué se ve primero en 1 s y en 5 s; si con la vista desenfocada se distinguen lo principal y los grupos; dónde pulsarías para la acción principal; si sabes dónde estás y cómo salir; qué sobra y qué falta.
> 2. **Fidelidad**: para cada mecanismo de la lista de decision.md, ¿está, está suavizado hacia lo genérico o falta? Si hay referencia del usuario: diferencias de estructura, medidas, tipografía, color y densidad, de mayor a menor.
> 3. **¿Parece hecho por IA?**: busca las marcas de ~/.claude/skills/ux-craft/references/slop.md (léelo). Di cuáles ves juntas; una sola suelta no basta.
> 4. **Test del logo**: sin nombre ni logo, ¿se reconoce de qué producto es o podría ser cualquiera del sector?
>
> Termina con los 3 problemas más graves, en este orden de prioridad: jerarquía, agrupación y composición, fidelidad a la dirección, texto/color/detalle, motion.

## Después de la revisión

- Comprueba cada hallazgo en la captura antes de corregirlo.
- Corrige los 3 más graves, vuelve a capturar y repite. Como mucho 2–3 rondas; a veces la intermedia es la mejor.
- Escáner: `python3 ~/.claude/skills/ux-craft/scripts/scan.py <rutas tocadas>`.
- Web publicada o en preview: ofrece `jurado-hm`.

## informe.md

```markdown
# Verificación · <encargo>
Rondas: 2 · Revisores: 1
Mecanismos: 5/5 implementados (lista con ✓/✗ y captura donde se ve)
Claridad: <primer vistazo, primer clic>
Slop: <marcas encontradas y qué se hizo con ellas>
Descartado y por qué: …
Pendiente de decisión del usuario: …
```

`refs.py puerta <carpeta> cierre` exige que exista este archivo y al menos una captura.
