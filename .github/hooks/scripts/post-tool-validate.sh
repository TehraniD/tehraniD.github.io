#!/usr/bin/env bash
set -u

input="$(cat || true)"

# Run only after edit-like tool operations to keep this hook lightweight.
if ! printf '%s' "$input" | grep -Eiq 'apply_patch|edit|write|create_file|rename'; then
  exit 0
fi

# JavaScript/TypeScript repos: lint/test when scripts exist.
if [ -f package.json ] && command -v npm >/dev/null 2>&1; then
  npm run -s lint --if-present >/dev/null 2>&1 || true
  npm run -s test --if-present >/dev/null 2>&1 || true
fi

# HTML-heavy repos: validate changed HTML files when xmllint is available.
if command -v xmllint >/dev/null 2>&1; then
  changed_html="$(git diff --name-only -- '*.html' 2>/dev/null || true)"
  untracked_html="$(git ls-files --others --exclude-standard -- '*.html' 2>/dev/null || true)"
  html_files="$(printf '%s\n%s\n' "$changed_html" "$untracked_html" | awk 'NF' | sort -u)"

  if [ -n "$html_files" ]; then
    while IFS= read -r file; do
      [ -f "$file" ] || continue
      xmllint --html --noout "$file" >/dev/null 2>&1 || true
    done <<EOF
$html_files
EOF
  fi
fi

# Python repos with local virtualenv: run tests if present.
if [ -f .venv/bin/python ] && [ -d tests ]; then
  .venv/bin/python -m pytest -q >/dev/null 2>&1 || true
fi

exit 0
