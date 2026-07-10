---
name: patho-study-guide
description: 'Turn pathophysiology study materials into beautiful, interactive HTML learning guides with flowcharts, mnemonics, clinical pearls, and practice quizzes.'
argument-hint: Attach study material (PDF, notes, or topic description)
agent: agent
---

# Pathophysiology Interactive Study Guide Generator

## Purpose
Transform raw pathophysiology study materials (PDFs, lecture notes, textbook excerpts) into self-contained, mobile-friendly HTML learning guides optimized for nursing students. Each guide features stepwise pathophysiology explanations, SVG architectural flowcharts, mnemonic flip cards, clinical pearls, interactive scenarios, and a scored practice quiz.

## Design System
Follow the established design patterns from existing guides in this repository:
- **Font:** Inter (Google Fonts)
- **Layout:** Sticky header → tab navigation → hero banner → tabbed content sections → quiz
- **Max width:** 900px centered
- **Color palette:** Navy (#1e3a5f), Blue (#3b82f6), Purple (#8b5cf6), Green (#10b981), Amber (#f59e0b), Red (#ef4444), Teal (#14b8a6)
- **Cards:** White with 4px colored left borders, 10px border-radius, subtle box-shadow
- **All CSS/JS inline** — single self-contained HTML file, no external dependencies except Google Fonts

## Step-by-Step Workflow

### Step 1: Extract & Organize Content
1. Read the attached study material thoroughly
2. Identify all distinct disease processes / conditions
3. Group them into logical sections (e.g., Musculoskeletal, GI, Hepatobiliary)
4. For each condition, extract: definition, pathophysiology, risk factors, clinical presentation, diagnosis, management

### Step 2: Create Stepwise Pathophysiology
For EVERY disease process, break pathophysiology into a numbered chain that tells a story:
```
Step 1: [Trigger/Cause] →
Step 2: [What happens at cellular level] →
Step 3: [What the body does in response] →
Step 4: [What goes wrong / compensatory failure] →
Step 5: [Clinical manifestation the nurse sees]
```
Use simple, conversational language. Connect each step with "→ which leads to →" logic so students understand WHY things happen, not just WHAT happens.

### Step 3: Build Mnemonics & Memory Aids
For each section, create at least one mnemonic:
- Use acronyms (e.g., "ACID" for sickle cell triggers)
- Use visual associations and stories
- Implement as **flip cards** (3D CSS transform, click to reveal)
- Front: big letter + "Click to reveal"
- Back: meaning + brief clinical connection

### Step 4: Create SVG Flowcharts
For key pathways, create inline SVG flowcharts:
- Use `<svg viewBox="...">` with responsive width
- Navy (#1e3a5f) boxes with white text for main steps
- Colored accent boxes for outcomes (green=normal, red=abnormal, amber=warning)
- Arrow connectors with `<marker>` definitions
- Keep text at font-size 11-12px, boxes ~120×42px
- Wrap in `<div class="flow-chart">` with a `.flow-title`

### Step 5: Add Clinical Pearls
For each condition, include at least one clinical pearl:
```html
<div class="pearl">
  <div class="pearl-label">🔑 Clinical Pearl</div>
  <p>[Practical nursing insight that connects pathophysiology to bedside care]</p>
</div>
```
Focus on: what nurses should ASSESS, MONITOR, and REPORT. Include NCLEX-style thinking.

### Step 6: Create Interactive Elements
- **Accordions** for "Dig Deeper" content (detailed mechanisms, pharmacology)
- **Scenario Reveals** for clinical thinking practice (dark background, click-to-reveal answer)
- **Comparison Tables** for similar conditions (e.g., Crohn's vs UC, OA vs RA)

### Step 7: Build Practice Quiz
- 12-15 NCLEX-style questions covering all sections
- 4 answer choices per question
- Track score with progress bar
- Show rationale on answer selection (green=correct, red=wrong)
- Navigation (Previous/Next) and final score display

### Step 8: Assemble HTML
Structure:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta, title, Google Fonts (Inter), all CSS in <style> -->
</head>
<body>
  <header id="site-header">...</header>
  <nav id="tab-nav"><!-- One tab per section --></nav>
  <div id="hero"><!-- Module title with emoji --></div>
  <main id="main-content">
    <!-- For each section: -->
    <div class="section-wrap" id="sec-{id}">
      <div class="section-header"><h2>...</h2></div>
      <!-- Content cards with stepwise patho -->
      <!-- Mnemonic flip cards -->
      <!-- SVG flowcharts -->
      <!-- Clinical pearls -->
      <!-- Scenarios -->
      <!-- Accordions -->
    </div>
    <!-- Quiz section -->
    <div class="section-wrap" id="sec-quiz">...</div>
  </main>
  <script><!-- All JS: tabs, accordions, flip cards, scenarios, quiz --></script>
</body>
</html>
```

## Quality Checklist
- [ ] Every condition has stepwise pathophysiology (not just definitions)
- [ ] At least one mnemonic per section
- [ ] At least one SVG flowchart per section
- [ ] Clinical pearls connect pathophysiology to nursing practice
- [ ] All interactive elements work (test flip cards, accordions, scenarios, quiz)
- [ ] Mobile responsive (test at 375px width)
- [ ] Single self-contained HTML file (no external CSS/JS)
- [ ] Comparison tables for similar conditions
- [ ] Quiz covers all sections with rationales
- [ ] File saved to repository root as `{Topic}_Interactive_Guide.html`

## Naming Convention
`{Course}{Week}_Interactive_Guide.html`
Example: `Patho_Week4_5_Interactive_Guide.html`

## Example Prompts
- "Turn this PDF into an interactive study guide" (attach PDF)
- "Create a patho learning guide for cardiovascular disorders"
- "Make an interactive HTML guide for my endocrine exam"
