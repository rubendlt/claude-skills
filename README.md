# claude-skills

Skills de Claude Code (user scope). Este repo es `~/.claude/skills`.

## Instalar en otra máquina

```sh
git clone git@github.com:rubendlt/claude-skills.git ~/.claude/skills
```

## Contenido

| Skill | Origen |
|---|---|
| ux-craft (con `references/expertos/`: kolejain, timgabe, uxpeak, selfmade propias; emil y apple de Emil Kowalski), diseno-libre, investigar, capturas, nng, m3 | Propias |
| movimiento (guías `animate`, `animate-expo`, `animation-performance`, `animation-vocabulary`, `find-animation-opportunities`, `improve-animations`, `review-animations`) | Emil Kowalski (sin licencia: no publicar), juntadas en una skill |
| break-ui, mobile-native, pick-ui-library, prototype | Emil Kowalski (sin licencia: no publicar) |
| hig | vabole/apple-skills (texto de las HIG de Apple: no publicar) |
| govuk | alphagov/govuk-design-system (MIT). Refrescar: `govuk/scripts/update.sh` |

Fuera del repo: `synced/` (sincronización de claude.ai) y `lazyweb*` (enlaces a `~/.lazyweb/repos`).
Desactivadas o ajustadas en `~/.claude/settings.json` → `skillOverrides`.
