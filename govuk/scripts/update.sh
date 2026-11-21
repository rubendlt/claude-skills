#!/usr/bin/env bash
# Refresca la copia local del GOV.UK Design System (alphagov/govuk-design-system, MIT).
# Uso: ~/.claude/skills/govuk/scripts/update.sh
set -euo pipefail
SKILL="$(cd "$(dirname "$0")/.." && pwd)"
TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT

git clone -q --depth 1 --filter=blob:none --sparse https://github.com/alphagov/govuk-design-system.git "$TMP/repo"
git -C "$TMP/repo" sparse-checkout set --no-cone '/src/components/*/index.md' '/src/patterns/*/index.md' '/src/styles/*/index.md' '/src/accessibility/*/index.md'

# Patrones atados a trámites del Gobierno británico: no aplican fuera de UK.
SKIP='^(national-insurance-numbers|ethnic-group|equality-information|gender-or-sex|understand-the-impact-of-an-emergency|exit-a-page-quickly|bank-details)$'

for section in components patterns styles accessibility; do
  rm -rf "$SKILL/$section"; mkdir -p "$SKILL/$section"
  for f in "$TMP"/repo/src/$section/*/index.md; do
    name="$(basename "$(dirname "$f")")"
    [[ "$name" =~ $SKIP ]] && continue
    # Fuera: macros Nunjucks, campos de maquetación y el aviso de «guía para equipos del Gobierno».
    awk '
      /^(layout|discussionId|backlogIssueId|show[A-Za-z]*|stylesheets|ignoreInSitemap):/ { next }
      /^\{%.*%\}$/ || /^\{\{.*\}\}$/ { next }
      /^This guidance is for government teams/ { next }
      { print }
    ' "$f" | cat -s > "$SKILL/$section/$name.md"
  done
done
echo "$(git -C "$TMP/repo" log -1 --format='%h %cs')" > "$SKILL/VERSION"
echo "GOV.UK actualizado: $(cat "$SKILL/VERSION") · $(ls "$SKILL"/{components,patterns,styles,accessibility}/*.md | wc -l) páginas"
