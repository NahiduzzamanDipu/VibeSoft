---
name: design-systems
description: Define, document, or extend a product's design system, including design tokens, typography, color, spacing, component states, and usage rules. Use when multiple screens need consistency or when building a reusable UI foundation.
---

# Design Systems

Ground the system in the product and existing interface. Inspect current styles, component APIs, themes, and accessibility needs before adding tokens or replacing conventions.

## Establish the system

- Define semantic color roles with contrast suitable for their actual text and surfaces; include states and themes in use.
- Define type roles and a scale that works with chosen fonts, language needs, and real content.
- Define spacing, sizing, border, elevation, and responsive tokens only where repeated use justifies them.
- Specify component variants, states, keyboard behavior, and when a component should be used.
- Preserve framework and naming conventions. Avoid arbitrary duplicate tokens and one-off component forks.
- Document the decisions and examples in the project's existing format (for example tokens, theme files, component docs, or `DESIGN.md`). Do not create or overwrite a context file without checking it first.

Validate tokens against representative screens, long content, themes, zoom, and narrow widths. A token sheet alone is not proof that the system works in product UI.
