---
name: capturas
description: "Capturas de las pantallas clave del proyecto guardadas en .shots/ con caché por firma del código: se consultan antes de sacar capturas nuevas y solo se rehacen las viejas. USAR siempre que haya que VER la web o la app para responder o verificar (¿cómo se ve…?, ¿qué te parece la home?, revisa el móvil, comprueba el cambio, compara…), al cerrar una tarea con cambios visuales, para enseñar propuestas con antes y después reales sin tocar el código o capturar estados (menú abierto, página bajada, error de formulario) con variantes.mjs, y para preparar un proyecto con «/capturas init». Sirve para Next.js, Vite, Astro, HTML estático, Expo (vía web) y temas de Shopify."
argument-hint: "[init | status | pagina... | --all | --vp movil,desk | --force | variantes <archivo.mjs>]"
---

# Capturas con caché

Script: `node ~/.claude/skills/capturas/scripts/shots.mjs` (siempre desde la raíz del proyecto).

## Antes de mirar la web

1. Si existe `.shots/index.md`, **mirarlo primero**. Ejecutar `shots.mjs --status <pagina>` para saber si la que interesa está al día.
2. **Al día** → leer la captura guardada. **Leer el trozo que interesa** (`<pagina>-<vp>-N.png`, una pantalla cada uno), no la página entera: cuesta menos y se ve mejor. La entera (`<pagina>-<vp>.png`) solo para juzgar el ritmo o el orden de toda la página.
3. **Vieja o falta** → `shots.mjs <pagina> [--vp …]`: rehace solo esas. Nunca la matriz entera para una pregunta concreta.
4. **No está en el config** (otra ruta, un estado como menú abierto o error de formulario, otro viewport) → `variantes.mjs` con `only: true` (abajo), sin escribir otro script de Playwright. Si se va a mirar a menudo, añadirla a `shots.config.json`.
5. Si la pregunta se responde leyendo el código (un texto, el orden de los bloques, qué componente sale), no hace falta captura.

Al responder, decir de qué captura sale y si estaba al día.

## Variantes: antes y después reales, y estados

Para enseñar una propuesta sin tocar el código: abre la página, captura una zona, aplica el cambio en el navegador y vuelve a capturar la misma zona. Script: `node ~/.claude/skills/capturas/scripts/variantes.mjs <archivo.mjs> [--only a,b] [--out dir]` (salida por defecto en `.shots/variantes/`; el archivo de variantes, en el scratchpad).

```js
export default [
  // css o apply (función que corre en la página); region: { selector, pad, height } | { y, height } | nada (la pantalla)
  { name: "listado-blanco", path: "/productos/oficina", region: { selector: "main section:nth-of-type(2)", height: 700 },
    css: "#listado { background: #fff !important }" },
  { name: "sin-nota", path: "/producto/silla-x", apply: () => document.querySelector("#nota")?.remove() },
  // prepare corre en Node con la página de Playwright: estados (menú abierto, página bajada, formulario con error)
  { name: "menu-movil", path: "/", vp: "movil", only: true,
    prepare: async (page) => { await page.locator("summary:visible", { hasText: /menú/i }).first().click(); } },
];
```

- Mismas condiciones que `shots.mjs`: viewports de `shots.config.json` (`vp`, por defecto el de escritorio), movimiento reducido, banner de cookies rechazado, imágenes diferidas cargadas (con techo de espera).
- La zona se recalcula después del cambio: si el cambio mueve el selector, las dos capturas siguen encuadradas.
- Selectores: mirar antes el JSX (un menú puede ser `<details>` y no `<button>`). Si falla, `DEBUG=1` da el error completo.
- Para elegir entre propuestas, montar las parejas en un artifact con una casilla por cambio y «Copiar selección» (el user marca y pega).
- Es un boceto en el navegador, no el cambio: al aplicarlo de verdad, capturar otra vez con `shots.mjs`.

## Al cerrar una tarea visual

Ejecutar `shots.mjs` (sin argumentos: páginas y viewports clave) para dejar `.shots/` al día. Solo rehace lo viejo. Si una falla, decirlo.

## Límites (decirlos cuando importen)

- La firma es de todo el repo (commit + cambios + archivos nuevos): cualquier cambio deja vieja cualquier captura. Es a propósito, porque no se puede saber qué pantallas afecta un estilo global.
- No ve contenido que llega de fuera del repo (CMS, Firestore, Shopify admin, API): si eso cambió, `--force`.
- Captura con `prefers-reduced-motion: reduce`, rechazando el banner de cookies y tras bajar por la página para que carguen las imágenes diferidas. Una animación de entrada no se ve: para juzgarla, capturar aparte.
- Expo: es la versión web (`expo start --web`). Para algo nativo (barra de estado, notch, gestos), avisar de que puede no coincidir con el dispositivo.

## Preparar el proyecto (`init`)

1. Detectar el stack por `package.json` y los archivos, y escribir `shots.config.json` en la raíz:

| Stack | `baseUrl` | `start` |
|---|---|---|
| Next.js | `http://localhost:3000` | `pnpm dev` (o el gestor del lockfile) |
| Vite | `http://localhost:5173` | `pnpm dev` |
| Astro | `http://localhost:4321` | `pnpm dev` |
| HTML estático | `http://localhost:4173` | `npx -y serve -l 4173 .` |
| Expo | `http://localhost:8081` | `npx expo start --web --port 8081` |
| Shopify (Liquid) | `http://127.0.0.1:9292` | sin `start`: `shopify theme dev` pide login, que lo arranque el usuario (`! shopify theme dev`) |

2. **Páginas clave**: de 6 a 10, las que más se preguntan y las que llevan al objetivo (home, listados, una ficha o detalle de cada tipo, contacto o conversión). Sacar las rutas y los slugs reales del código, nunca inventados. Las marcadas `"key": true` se capturan por defecto; el resto, bajo demanda.
3. **Viewports**: dos clave (móvil y escritorio). Si el `CLAUDE.md` del proyecto define una matriz, usar sus medidas y añadir el resto sin `key`.
4. Añadir `.shots/` al `.gitignore`. Nunca subir capturas al repo.
5. Añadir al `CLAUDE.md` del proyecto, en Pruebas: «Para ver la web, skill `capturas`: consultar `.shots/` antes de capturar; al cerrar una tarea visual, `shots.mjs`».
6. Primera pasada: `shots.mjs`, y comprobar en `.shots/index.md` que no hay fallos.

Ejemplo:

```json
{
  "baseUrl": "http://localhost:3000",
  "start": "pnpm dev",
  "pages": [
    { "name": "home", "path": "/", "key": true },
    { "name": "contacto", "path": "/contacto", "key": true },
    { "name": "legal", "path": "/aviso-legal" }
  ],
  "viewports": {
    "movil": { "width": 375, "height": 812, "mobile": true, "browser": "webkit", "key": true },
    "desk": { "width": 1366, "height": 768, "key": true },
    "tablet": { "width": 820, "height": 1180, "mobile": true }
  },
  "hideSelectors": []
}
```

`hideSelectors`: elementos que ensucian la captura (chat flotante, distintivo de entorno). `browser`: `chromium` (por defecto) o `webkit`, que es Safari de iPhone; sin WebKit instalado se usa Chromium.
