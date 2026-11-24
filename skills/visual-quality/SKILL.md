---
name: visual-quality
description: Verify the rendered visual quality of a web interface and fix visible layout defects. Use after implementing or changing UI, especially when a real browser or screenshot workflow is available.
---

# Visual Quality and Browser QA

Inspect the actual rendered application, not only its source. Use an already available project command and browser tool. Do not install a browser or run third-party setup scripts without approval.

## Capture and inspect

1. Launch the app using its documented development command and confirm the intended route loads.
2. Capture representative desktop, tablet, and mobile widths (or the product's actual breakpoints). Keep viewport dimensions with the evidence.
3. Inspect hierarchy, typography, spacing, color, component consistency, content wrapping, overflow, imagery, interaction feedback, and empty/error states.
4. Exercise primary navigation and actions with pointer and keyboard. Check visible focus and reduced-motion behavior where relevant.
5. Write findings by severity and location. Fix issues, then recapture and compare.

## Pass criteria

A check passes only with observable evidence: route renders at target widths; primary content and actions remain visible; no unintended overflow/clipping; text and controls retain hierarchy/readability; visuals follow project tokens; key interactions work; focus is visible; motion respects settings. Mark a criterion **not checked** when runtime, screenshot, or interaction evidence is absent. A screenshot does not prove all interaction states or accessibility.

Finish with evidence (capture files or route and viewport), defects fixed, checks passed, and checks not run. Never claim full visual verification from code review alone.
