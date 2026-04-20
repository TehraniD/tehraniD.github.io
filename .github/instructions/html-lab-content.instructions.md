---
description: "Use when editing educational HTML lab pages, interactive chemistry worksheets, or course content. Covers safe content updates, accessibility, and preserving existing classroom behavior."
applyTo: "**/*.html"
---
# Educational HTML Lab Page Guidelines

- Keep existing IDs, anchor targets, and class names stable unless explicitly asked to change them.
- Preserve grading keys and student-facing variants as separate files when both exist.
- Prefer small, localized edits over whole-file rewrites to reduce regression risk.
- Maintain semantic headings (`h1` to `h3`) and clear section labels for readability.
- Ensure interactive controls have accessible labels and keyboard-friendly behavior.
- If changing calculations or scientific constants, verify units and significant figures in UI text.
- For answer keys, avoid leaking key-only hints into student templates.
