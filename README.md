# claude-skills

Skills de Claude Code (user scope). Este repo es `~/.claude/skills`.

## Instalar en otra máquina

```sh
git clone git@github.com:rubendlt/claude-skills.git ~/.claude/skills
```

## Cómo están ordenadas

Por **para qué sirven**, no por de dónde salen. Claude Code solo lee skills en carpeta plana (`<nombre>/SKILL.md`), así que el orden está en esta tabla y en el «Flujo de skills» de `~/.claude/CLAUDE.md`.

| Capa | Skill | Para qué |
|---|---|---|
| **Proceso** | `spec` | Spec (PRD) antes de una feature no trivial |
| | `investigar` | Valorar con referentes y evidencia |
| | `diseno-libre` | Diseñar con libertad creativa: referentes → ideas → construir → verificar |
| | `ux-craft` | Pasada de construir o revisar: claridad, medidas, craft, anti-slop, escáner |
| | `prototype` | Variantes renderizadas de una pieza, sin subagentes |
| | `best-of-n` | Variantes de secciones grandes con subagentes y worktrees (solo cuentas con subagentes; apagada aquí en `settings.json`) |
| **Criterio por tema** | `conversion` | Que el visitante contacte: hero, CTA, prueba social, formulario, medir |
| | `diseno-web` | Layout, tipografía, color, espaciado, imágenes, estilo, proceso |
| | `premium` | Que parezca caro y cuidado; no plantilla ni IA |
| | `tiendas` | Ficha de producto, listados, filtros, precios, carrito, catálogo B2B (con datos de Baymard y NN/g) |
| | `apps-moviles` | Apps de consumo: onboarding, retención, gamificación, paywalls, navegación |
| | `paneles` | SaaS, /admin, tablas de datos, dashboards, esperas largas (NN/g + criterio) |
| | `maya` | Cuánto avanzar una tarea frente a lo que el usuario ya conoce |
| | `movimiento` | Animación, transiciones, gestos (web y Expo) |
| | `mobile-native` | Web que se sienta nativa en el móvil |
| **Evidencia** | `normas` | Consulta Apple, Material y GOV.UK a la vez y decide con criterios escritos (ninguna manda por defecto) |
| | `hig`, `m3`, `govuk` | Copias locales que lee `normas`; no se activan solas (`disable-model-invocation`), se pueden llamar a mano |
| | `nng` | Índice y fichas de Nielsen Norman Group |
| **Herramientas** | `capturas` | Capturas en `.shots/` con caché; antes y después reales y estados con `variantes.mjs` |
| | `break-ui` | Probar una UI con datos extremos |
| | `pick-ui-library` | Elegir librería de frontend |

## Fuentes (`fuentes/`, no son skills)

Guías originales de cada autor, de las que salen las skills de tema. Sirven para comprobar de dónde viene un consejo; no se cargan solas.

| Carpeta | Autor | Alimenta a |
|---|---|---|
| `crawford/` | Sam Crawford (@bycrawford) | conversion, premium, diseno-web, tiendas |
| `kolejain/` | Kole Jain | diseno-web, premium, apps-moviles |
| `timgabe/` | Tim Gabe | conversion, apps-moviles, diseno-web, premium |
| `uxpeak/` | UX Peak | tiendas, conversion, apps-moviles |
| `selfmade/` | Self-Made Web Designer | diseno-web (layouts, estilos, proceso), conversion |
| `emil/`, `apple/` | Emil Kowalski / Apple | premium, apps-moviles, movimiento |

Movidas a su skill: casos de Crawford → `conversion/references/casos-crawford.md`; layouts, estilos y proceso de Self-Made → `diseno-web/references/`.

**Consejo nuevo de un autor:** se añade en su guía de `fuentes/` y, resumido con su autor entre paréntesis, en la skill del tema. Un autor nuevo no crea una skill: se reparte por temas.

## Origen y licencias

| Contenido | Origen |
|---|---|
| ux-craft, diseno-libre, investigar, capturas, nng, m3, maya, normas, paneles, conversion, diseno-web, premium, tiendas, apps-moviles, spec, best-of-n; resúmenes de `fuentes/` (crawford, kolejain, timgabe, uxpeak, selfmade) | Propias |
| movimiento, break-ui, mobile-native, pick-ui-library, prototype, `fuentes/emil`, `fuentes/apple` | Emil Kowalski (sin licencia: no publicar) |
| hig | vabole/apple-skills (texto de las HIG de Apple: no publicar) |
| govuk | alphagov/govuk-design-system (MIT). Refrescar: `govuk/scripts/update.sh` |

Fuera del repo: `synced/` (sincronización de claude.ai). Desactivadas o ajustadas en `~/.claude/settings.json` → `skillOverrides`.
