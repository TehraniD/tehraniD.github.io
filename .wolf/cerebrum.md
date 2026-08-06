# Cerebrum

> OpenWolf's learning memory. Updated automatically as the AI learns from interactions.
> Do not edit manually unless correcting an error.
> Last updated: 2026-08-06

## User Preferences

<!-- How the user likes things done. Code style, tools, patterns, communication. -->

## Key Learnings

- **Project:** tehraniD.github.io
- **Interactive study guides share one template.** `Patho_Week2_Interactive_Guide.html` is the canonical reference: sticky header + sticky tab nav, hero bar, `.section-wrap` tabs, and a fixed component vocabulary (`.content-card` with `border-*` accent variants, `.key-point`, `.mnemonic-box`, `.pearl`, `.nclex-focus`, `.quick-check`, `.scenario` tap-to-reveal, `.flip-card`, `.flow-chart` with inline SVG, `.acc-card` accordions, `.table-wrap`). The `<script>` block at the end (tabs, accordions, flip cards, scenario reveals, quiz engine, quick-check engine) is reusable verbatim. To build a new week's guide, copy the `<style>` head and the `<script>` tail unchanged and write only the body.
- **Quiz engine contract:** each `.quiz-q` needs `data-correct="<0-3>"` and exactly four `.quiz-choice` buttons with `data-idx="0..3"`; feedback text must open with `<strong>Correct!</strong>` because the wrong-answer path rewrites that prefix. Inline `.qc-question` blocks use letters instead (`data-answer="A"` matching a `data-val`).
- **Publishing:** this is a GitHub Pages site served from `main`, so content commits go directly to `main` — do not branch. The remote is frequently ahead from "Add files via upload" web-UI commits; `git rebase --autostash origin/main` before pushing.
- **Discoverability:** root `index.html` holds `.resource-card` blocks per course. A new study guide is not finished until a card linking it is added there — publishing the HTML alone leaves it unreachable.

## Do-Not-Repeat

<!-- Mistakes made and corrected. Each entry prevents the same mistake recurring. -->
<!-- Format: [YYYY-MM-DD] Description of what went wrong and what to do instead. -->

- [2026-08-06] Assembled an HTML guide by concatenating a head slice of an existing guide with new body files, but the head slice already ended with `</style>` while the new body opened with more CSS — the rules rendered as visible text at the top of the live page. When building a file by concatenation, always verify tag balance at every seam (`<style>`/`</style>`, `<head>`, `<body>` counts) before publishing, not just div balance.
- [2026-08-06] Pushed to `origin/main` without fetching first and the push was rejected (local branch 6 commits behind). Always `git fetch` + `git rebase --autostash origin/main` before pushing this repo — the user uploads files through the GitHub web UI between sessions.

## Decision Log

<!-- Significant technical decisions with rationale. Why X was chosen over Y. -->

- [2026-08-06] Week 6 patho guide was organized into 4 content tabs by body system (Vitals & Endocrine / Diabetes / Neurologic / Renal & Urinary) rather than following the lecture-notes PDF order. The PDF interleaves systems (nephrotic syndrome appears first, then endocrine, then neuro, then the rest of renal); grouping by system lets related conditions sit side by side for comparison. Added explicit "do not confuse" callouts where the source material invites collision — Cushing syndrome vs. Cushing's triad, and diabetes insipidus vs. diabetes mellitus.
