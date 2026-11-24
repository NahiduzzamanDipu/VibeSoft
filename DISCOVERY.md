# Discovery, ranking, and approval

The weekly job is a discovery aid, not an automatic trust or installation pipeline.

## Lifecycle

`discovered → analyzed → security-review → compatibility-review → approved → published`

`scripts/catalog.mjs discover` searches public GitHub metadata and writes new results to `pending/`. The automated workflow opens a pull request for the new queue and refreshed metrics. It does not clone candidates, inspect/run their code, update the approved skill manifest, or install anything. A reviewer should inspect the source commit, README/docs, license, scripts/dependencies, maintenance, security and prompt-injection risks, duplication, and the intended agent’s official format before changing lifecycle state.

## Ranking model

Current automated triage score is deliberately limited to metadata that the public repository API provides consistently:

| Signal | Weight | Proxy |
| --- | ---: | --- |
| Stars | 35% | Log-scaled popularity so the largest repositories do not dominate without bound |
| Forks | 15% | Log-scaled independent adoption |
| Recent maintenance | 30% | Exponential decay from last push, with a 180-day half-life scale |
| Declared license | 20% | MIT/Apache/BSD score highest; GPL-family and unknown/no declaration are treated more cautiously |

This is a preliminary triage score, not the final quality rank. Stars/forks do not show README quality, contributor breadth, compatibility correctness, security, or usefulness. Reviewers must assess those separately and can reject a highly ranked source. `open_issues` and `updated_at` are refreshed for context but are not treated as positive quality signals by themselves.

## Pending review

Each generated record includes owner, repository URL, description, stars/forks, issue count, update/push dates, branch, license metadata when available, preliminary score, and review checklist. The queue is intended for an issue/PR review. A candidate is not installable unless a human approves a particular skill folder, pins its source commit/release, verifies the license/attribution, and adds it to `manifest/skills.json` with `review_status: "approved"` and `installable: true`.

Flag an approved item for review if its source becomes archived, deleted, compromised, unmaintained, incompatible, or license status changes. Never let popularity updates change approval state.

## Frontend design discovery and review

The weekly metadata-only search also covers anti-AI-slop design, frontend art direction, design engineering, UI critique, design-system generation, typography, interaction and motion design, visual regression, browser UI inspection, accessibility auditing, and design review. New results remain pending in the review queue; discovery never downloads or executes candidate content.

The 14 design candidates supplied for VibeSoft have an additional static scorecard in `manifest/design-evaluations.json`, rendered to `DESIGN-SKILLS.md`. It evaluates distinctive visual direction, anti-slop guidance, typography, layout, color/contrast, spacing, hierarchy, responsive behavior, component quality, interaction, animation, accessibility, browser verification capability, and maintainability. Evidence comes from README/docs, selected `SKILL.md` files, repository trees, license metadata, and inspected code paths at recorded commit pins. It is not a substitute for running candidates on the same task and comparing rendered output. No candidate installers were executed and no comparative performance improvement is claimed.

Before adding any candidate to the installable bundle, inspect every skill/script being vendored, verify the exact applicable license and attribution, pin a source commit, check dependencies and hooks, confirm agent format, review prompt-injection and external-network behavior, and compare it against existing VibeSoft skills. Maintain a single-lead routing policy for overlapping design instructions.
