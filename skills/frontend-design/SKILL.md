---
name: frontend-design
description: Design or substantially change a web interface with a product-specific visual direction, intentional typography and layout, responsive behavior, and accessible interactions. Use for new pages, product UI, and redesigns; the design-intelligence skill routes specialist review when needed.
---

# Frontend Design Builder

Build an interface that fits this product and its users. Treat anti-patterns as prompts to examine intent, not rules that forbid a form. Follow a clear user brief and an established brand even when it intentionally uses a familiar pattern.

## Before implementation

1. Understand the product, audience, primary user task, content, constraints, and success criteria.
2. Inspect the existing UI, framework, design tokens, components, responsive rules, and interaction states. Preserve the system when extending it; describe why a redesign is warranted when replacing it.
3. State a visual direction in concrete terms: visual reference or product world, type roles, palette roles, spacing scale, layout rhythm, image treatment, and one distinctive element. Avoid generic defaults unless the brief supports them.
4. Plan key states: loading, empty, error, success, hover, focus, disabled, and narrow viewport where applicable.

## Build

- Use real content and the user's task flow to determine hierarchy and layout. Reuse existing components and tokens where they fit.
- Use semantic HTML and native controls where possible. Give controls useful names, visible focus, and keyboard behavior.
- Make the layout reflow at realistic widths. Prevent clipped content, horizontal overflow, and unreachable actions.
- Use images and decoration to explain the product or create a deliberate focal point. Avoid filler visuals and meaningless motion.
- Respect reduced-motion settings. Motion should communicate state, relation, or hierarchy.

## Review

Run the design director and relevant specialist checks from `design-intelligence` for substantial UI work. When a browser is available, launch the actual application and inspect desktop, tablet, and mobile captures. Correct visible defects, then capture again. A code-only review is not browser verification; label missing evidence clearly.

Finish with a concise summary of the chosen direction, changes, checks actually performed, and unresolved visual checks.
