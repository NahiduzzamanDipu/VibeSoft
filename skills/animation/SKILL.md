---
name: animation
description: Design, implement, or review interface animation and motion. Use when motion should communicate state, hierarchy, continuity, or a product-specific moment, or when animation feels excessive or unclear.
---

# Interface Motion

Motion should explain what changed, where attention should go, or how elements relate. Start by asking what the movement helps the user understand. If there is no clear answer, omit it.

- Reuse existing animation tools and tokens; avoid adding a motion library without a concrete need.
- Keep feedback responsive and transitions short enough not to delay a task.
- Use consistent easing and duration for related components.
- Respect `prefers-reduced-motion`; offer equivalent state feedback without movement.
- Avoid scroll effects, parallax, looping, and stagger as decoration. Use them only when the product direction supports them and they remain usable.
- Check interruption, repeated actions, low-power/mobile behavior, and keyboard/touch interactions.

Inspect the running result when possible. Report the behavior checked and confirm reduced-motion handling from code or runtime; do not infer it from appearance alone.
