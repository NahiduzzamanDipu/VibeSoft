---
name: design-review
description: Critique a UI, mockup, screenshot, or implemented feature and rank actionable design improvements. Use before shipping, when feedback is requested, or after a substantial design change.
---

# Design Critic

Judge the interface against its brief, users, content, and system. Do not grade personal taste as universal fact. Separate observed defects from opportunities and preserve choices that are intentional and effective.

## Evidence-based review dimensions

For each row, mark **pass**, **fail**, or **not checked**. Attach route/component, viewport/state, and evidence. A subjective preference without a brief or user impact is not a failure.

| Dimension | Pass evidence | Fail example |
| --- | --- | --- |
| Visual identity | Direction ties to product, audience, brand, or supplied reference. | Generic treatment conflicts with brief or lacks product rationale. |
| Typography | Real copy shows readable type roles, useful hierarchy, line length, and wrapping. | Roles blur, text clips, or font choice harms legibility/language support. |
| Layout | Primary task and content order are clear at target widths. | Important action is buried or layout hides needed content. |
| Spacing | Related elements group consistently and separation reflects hierarchy. | Rhythm obscures grouping or creates crowding/waste. |
| Color and contrast | Text, controls, and states remain distinguishable in relevant themes. | Contrast/state difference is insufficient or color alone conveys meaning. |
| Component consistency | Repeated controls behave consistently with project tokens. | Same role has conflicting styles/states without a product reason. |
| Interaction | Primary flow and relevant loading/empty/error/success states are usable. | Action lacks feedback, recovery, or a predictable keyboard path. |
| Motion | Motion clarifies change/relation and reduced-motion is addressed. | Decorative/repeating motion distracts, delays, or ignores reduced motion. |
| Accessibility | Semantics, keyboard/focus, zoom, contrast, and form feedback were checked. | A critical action cannot be reached/understood or focus/labels are missing. |
| Responsive behavior | Captures show primary content/actions at target mobile/tablet/desktop widths. | Clipping, overflow, illegible shrinking, or hidden actions are visible. |
| Content hierarchy | Realistic content makes purpose, priority, and next action apparent. | Placeholder copy or equal emphasis obscures the next step. |
| Product coherence | Choices fit the product and remain consistent across states. | A choice contradicts the brief/system without an approved redesign. |

For each failure give location, evidence, user impact, severity, and a concrete fix. After a fix, re-render and recheck the affected row.

## Quality gate

- **Pass:** evidence supports the criterion at relevant viewports or interaction states.
- **Fail:** identify a specific defect and block completion of the affected UI until corrected and rechecked.
- **Not checked:** required runtime, browser, input, or accessibility evidence was unavailable. Never convert this to a pass.

Look for generic patterns (repetitive centered heroes, same-size card grids, gratuitous gradients/glows/glass, default fonts, emoji icons, filler decoration, repetitive motion, weak hierarchy, cramped or wasteful spacing, and generic dashboards). Treat them as questions, not bans; retain any pattern whose use is justified by the brief.

Rank findings as blocker, major, minor, or optional. After fixes, inspect the updated artifact again. Report positive choices briefly, then the highest-impact remaining issues and checks not run.
