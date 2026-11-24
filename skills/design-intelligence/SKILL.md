---
name: design-intelligence
description: Route substantial frontend design work through one lead approach and only the needed specialist checks. Use before a major UI build, redesign, polish, critique, design-system change, motion work, or visual QA when several design skills are available.
---

# Design Director and Orchestrator

Choose a lead based on the task and installed tools. Do not load every design skill at once. Select one lead approach and at most two specialist skills for the current phase. Keep this router authoritative when skill advice overlaps.

## Intake and role selection

First inspect the product brief, audience, task, existing interface, framework, brand, tokens, components, available browser, and user constraints. Then classify:

| Need | Lead | Specialists as needed |
| --- | --- | --- |
| New page needs a distinct product-specific direction | `frontend-design` | `typography`, `responsive-design` |
| Existing UI feels generic or needs a change in visual character | `anti-slop` | `design-review`, `visual-quality` |
| Existing design should be refined without changing its direction | `design-review` | `typography`, `accessibility` |
| Tokens, reusable components, or a design language are missing | `design-systems` | `accessibility`, `responsive-design` |
| Layout or type is the primary problem | `typography` | `design-review` |
| Interaction states or motion are central | `interaction-design` or `animation` | `accessibility`, `visual-quality` |
| Only a screenshot, running app, or rendered interface needs checking | `visual-quality` | `accessibility` |
| A mockup needs critique before implementation | `design-review` | `accessibility` |

Use specialist guidance only for the relevant phase. For example, call `anti-slop` when the existing interface shows generic patterns; call `design-review` to rank findings; call `visual-quality` to verify the running output. Do not combine two competing transformation playbooks for one pass.

## External candidate routing

External candidates are not bundled or installed by this repository. If a user already has one available, route by observed capability:

- **Unslop** or **Hallmark** can lead distinct redesign/new-page transformations; choose one according to existing UI vs. new page.
- **Impeccable** is a strong existing-interface polish, critique, and audit option. Its CLI and project context files are optional tools, not prerequisites for VibeSoft's instruction-only skills.
- **Taste** can lead art direction when its browser/checker dependencies are available and the product/site scope fits.
- **UI/UX Pro Max** is a searchable design-system and implementation reference, not a substitute for product-specific judgment.
- **Emil Kowalski skills** specialize in animation, interaction, and learning from corrections; select one focused skill only.
- **Playwright CLI** is browser automation for visual QA, not a design skill.
- **Anthropic frontend-design** is a general design builder. Do not load it alongside VibeSoft `frontend-design` for the same pass.
- **Collections and atlases** are discovery references, not runtime skills.

## Conflict precedence

1. Explicit user brief, user-provided reference, product constraints, and brand.
2. Existing project design system and technical constraints, unless the task is to replace them.
3. Accessibility, usable interaction, content clarity, and responsive behavior.
4. The single selected lead skill's direction.
5. Specialist polish guidance.
6. Generic taste heuristics and automated detectors.

Warnings about gradients, centered heroes, rounded cards, color palettes, whitespace, and motion are diagnostic prompts, not automatic failures. Preserve a pattern when it serves the brief; state the reason in the review.

## Required phase gates

For a major UI task: product and codebase intake → design-system audit → visual direction and design tokens → interaction and responsive state plan → implementation → design critique → launch application → inspect desktop/tablet/mobile rendering when browser support exists → fix and recheck defects → keyboard/accessibility pass → final evidence report.

Do not claim rendering, browser, accessibility, or responsive verification unless it was performed. If a local app or browser is unavailable, record the check as not run and state what is still unverified.
