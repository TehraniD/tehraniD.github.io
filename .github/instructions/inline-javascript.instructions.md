---
description: "Use when modifying inline JavaScript in HTML files for calculators, quizzes, or interactive lab components. Covers safe DOM changes, validation, and defensive logic for student input."
applyTo: "**/*.html"
---
# Inline JavaScript Guidelines for Lab Interactives

- Query DOM elements once and reuse references where practical.
- Validate user input before numeric operations (`Number.isFinite`, bounds checks).
- Handle empty or malformed input with clear feedback near the relevant control.
- Avoid introducing global variables unless required by existing page structure.
- Keep event handler logic deterministic and side-effect aware.
- When updating formulas, add one short comment for non-obvious chemistry/math logic.
- Preserve existing function names when they are referenced by inline HTML attributes.
