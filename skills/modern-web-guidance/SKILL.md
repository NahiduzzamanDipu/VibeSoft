---
name: modern-web-guidance
description: Choose current HTML, CSS, and browser platform APIs for web UI work, and check support and fallbacks for features with uneven browser availability. Use for client-side behavior, layout, forms, accessibility, or browser APIs.
---

# Modern Web Guidance

- Prefer semantic HTML and built-in browser behavior when it fits the interaction; this often provides keyboard and accessibility behavior with less custom code.
- Before relying on a newer API or CSS feature, check current primary documentation and browser support for the project's target browsers.
- If support is uneven, provide a practical fallback or progressive enhancement that preserves the core task.
- Consider keyboard, touch, assistive technology, localization, reduced motion, and low-end devices when choosing an interaction pattern.
- For performance-sensitive changes, consider Core Web Vitals and validate the effect with measurements rather than assuming a modern API is faster.
- Do not add a dependency when the platform already provides a suitable, supported solution.

For searchable, maintained web platform guidance, see [Google Chrome Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance).
