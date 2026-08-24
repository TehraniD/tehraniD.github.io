# Cerebrum

> OpenWolf's learning memory. Updated automatically as the AI learns from interactions.
> Do not edit manually unless correcting an error.
> Last updated: 2026-08-06

## User Preferences

<!-- How the user likes things done. Code style, tools, patterns, communication. -->

- **Teach the concrete rule, not the abstract one.** For unit conversion the user rejected "flip the factor so the unwanted unit cancels diagonally" as confusing, and supplied a textbook diagram instead: *the unit you are converting TO goes on top, the unit you are converting FROM goes on the bottom.* Lead with that phrasing. Generally: prefer a rule a student can execute over a description of why it works.
- **Mnemonics must match the source document.** A "King Henry" prefix mnemonic was replaced because it teaches hecto/deka, which are not in the CHM125 prefix table. Build memory devices from the prefixes/values the course actually lists (CHM125 uses M, k, d, c, m, mc, n).
- **Use the course document's own constants**, not more precise textbook ones — CHM125 Workshop 1 specifies 454 g = 1.00 lb, 29.5 mL = 1.00 fl oz, 2.54 cm = 1.00 in. Using 453.6 produces answers that disagree with the instructor's key.
- **The user likes formula triangles** (cover-the-unknown) and asked for them across every three-quantity relationship, drawn large and precisely aligned.
- **Verify every numeric answer by computation before publishing**, and state significant figures explicitly.

## Key Learnings

- **Never claim a source was read when access failed.** `~/Downloads` on this machine intermittently returns `EPERM` (macOS TCC) even for files the user just attached, and even with a sandbox override — `.docx` and `.pdf` alike. When a source cannot be opened, say so plainly and build only from what is actually available; do not infer document contents from the filename.
- **CHM125 Workshop 1 answer key (verified):** 1) 1.67×10⁴ g 2) 2.11 lb 3) 4.60×10³ mL 4) 12.1 fl oz 5) 6.38 in 6) 2.50×10³ cm 7) 3.19 lb 8) 2.348 L 9) 0.556 m 10) 0.895 kg 11) 56 mcg 12) 29.6 mL 13) 28.8 kg 14) 0.944 L 15) 2.62×10⁴ mm³ 16) 0.568 mg 17) 265 g 18) 1.47 cm³ 19) 0.328 mol 20) 0.423 mol 21) 41.1 g 22) 5.10×10³ g 23) 1.51×10²³ 24) 5.07×10⁻⁴ mol 25) 8.67×10²³.
- **Sig figs: exact vs. measured factors.** Metric prefix conversions are definitions and never limit sig figs (2348 mL → 2.348 L keeps 4). Metric↔English factors as printed in Workshop 1 are 3-sig-fig measured values and do limit (36.8 lb → 1.67×10⁴ g). A blanket "round to 3" rule silently produces wrong answers.
- **Artifact HTML is not a deployable page.** Files authored for the claude.ai Artifact host omit `<!doctype>`, `<html>`, `<head>`, `<body>` because the host injects them. Before committing such a file to this Pages site, wrap it into a complete document and re-verify tag balance.

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
- [2026-08-23] Published a guide whose hero used a `.fade` entrance animation (`opacity:0` + keyframe). It looked correct on screen but printed/exported to PDF completely blank, because print rendering snapshots the page before animations run. Any animated-in content needs `@media print{.fade{opacity:1!important;animation:none!important}}`. Also: verifying a rendered PDF is only meaningful if page 1 is actually inspected — the bug survived three earlier renders because only interior pages were checked.
- [2026-08-23] Explained unit conversion with an abstract "cancel diagonally" framing; the user called it confusing and supplied the standard TO-on-top/FROM-on-bottom diagram. When a course document or textbook already has a canonical explanation, adopt its exact framing and vocabulary instead of inventing one.

## Decision Log

<!-- Significant technical decisions with rationale. Why X was chosen over Y. -->

- [2026-08-06] Week 6 patho guide was organized into 4 content tabs by body system (Vitals & Endocrine / Diabetes / Neurologic / Renal & Urinary) rather than following the lecture-notes PDF order. The PDF interleaves systems (nephrotic syndrome appears first, then endocrine, then neuro, then the rest of renal); grouping by system lets related conditions sit side by side for comparison. Added explicit "do not confuse" callouts where the source material invites collision — Cushing syndrome vs. Cushing's triad, and diabetes insipidus vs. diabetes mellitus.
