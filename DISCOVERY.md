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
