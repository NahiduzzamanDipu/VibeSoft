---
name: webapp-testing
description: Verify web application behavior and responsive UI in a real browser. Use when adding or changing user-facing flows, forms, navigation, or interactive components.
---

# Web App Testing

- Identify the user-visible behaviors changed and check the project's existing test and browser automation setup first.
- Verify the key path and relevant empty, loading, validation, and error states; avoid brittle checks tied only to implementation details.
- Check keyboard operation, focus behavior, labels, and accessible names for changed controls.
- Inspect the page at representative narrow and wide viewport sizes, including long text or realistic content where layout can break.
- Use the project's browser test tooling when available. If browser access is unavailable, state which checks were not observable rather than implying they passed.
- Keep tests scoped to the behavior being changed and follow existing conventions.

For Anthropic's maintained browser testing skill, see [Anthropic Skills](https://github.com/anthropics/skills/tree/main/skills/webapp-testing).
