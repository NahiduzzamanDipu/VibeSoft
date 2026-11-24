# Elite Design Skills Review

Static review dated **2026-11-24**. Static review of GitHub repository metadata, README/docs, selected SKILL.md and code paths. Scores measure documented capability and evidence, not proof of output quality. No candidate install script or scanner was executed; no candidate output was independently reproduced.

## Evaluation method

0 = no evidence; 1 = minimal; 2 = partial; 3 = explicit guidance; 4 = detailed and task-specific; 5 = detailed with repeatable verification evidence. Browser scores measure provided verification capability, not a run performed by VibeSoft.

The vector order is: `1` distinctive visual direction; `2` anti slop; `3` typography; `4` layout originality; `5` color and contrast; `6` spacing consistency; `7` visual hierarchy; `8` responsive behavior; `9` component quality; `10` interaction design; `11` animation quality; `12` accessibility; `13` browser verification; `14` maintainability. The scores are evidence tags for capability, not a universal quality rank and not user study results. A low or zero score on a browser tool's design dimensions means that design judgment is outside its purpose.

| Class | What it means |
| --- | --- |
| A · Transformation | Changes art direction or meaningfully redesigns a screen/page. |
| B · Polish | Improves detail, motion, or an existing direction; may not redefine it. |
| C · Design system | Supplies tokens, components, rules, or searchable system guidance. |
| D · Visual verification | Inspects rendered output or automates browser evidence. |
| Catalog/router | Collects sources or routes skills; not an individual design implementation skill. |

## [heydamir/unslop](https://github.com/heydamir/unslop) · [@heydamir](https://github.com/heydamir) — A-transformation

- Snapshot: **20,920 stars**, **1,287 forks**, last push **2026-11-15**; inspected source commit [`620163eedb35`](https://github.com/heydamir/unslop/tree/620163eedb3529d9cd23a3994ed8d287d06f760d).
- License: **CC-BY-4.0**. Evidence: [README/docs](https://github.com/heydamir/unslop/tree/620163eedb3529d9cd23a3994ed8d287d06f760d/README.md), [`SKILL.md`](https://github.com/heydamir/unslop/tree/620163eedb3529d9cd23a3994ed8d287d06f760d/skills/unslop/SKILL.md), [license](https://github.com/heydamir/unslop/tree/620163eedb3529d9cd23a3994ed8d287d06f760d/LICENSE).
- Compatibility: Codex and other Agent Skills hosts.
- Installation/dependencies and code risk: Requires attribution; optional snapshot helper requires Playwright and can navigate a supplied URL.
- Scores, in rubric order: `5 · 5 · 4 · 4 · 4 · 4 · 4 · 3 · 3 · 3 · 4 · 2 · 4 · 3`.
- Evidence: SKILL.md prescribes an audit, a product-derived visual direction, and ordered passes for spacing, color, icons, copy, type, layout, visuals, and motion; README documents screenshots and before/after examples.
- Limits: CC-BY-4.0 attribution required. Optional snapshot/story scripts need Playwright/Chromium and ffmpeg; image generation may use paid external services. Accessibility and responsive checks are less rigorous than visual direction.
- VibeSoft decision: **reference-only, not approved or installable**.

## [pbakaus/impeccable](https://github.com/pbakaus/impeccable) · [@pbakaus](https://github.com/pbakaus) — B-polish + A-transformation + D-visual-verification

- Snapshot: **115,742 stars**, **6,897 forks**, last push **2026-11-23**; inspected source commit [`b49177d32788`](https://github.com/pbakaus/impeccable/tree/b49177d32788f2dc585c42831d845dacf1ebed2c).
- License: **Apache-2.0**. Evidence: [README/docs](https://github.com/pbakaus/impeccable/tree/b49177d32788f2dc585c42831d845dacf1ebed2c/README.md), [`SKILL.md`](https://github.com/pbakaus/impeccable/tree/b49177d32788f2dc585c42831d845dacf1ebed2c/.agents/skills/impeccable/SKILL.md), [license](https://github.com/pbakaus/impeccable/tree/b49177d32788f2dc585c42831d845dacf1ebed2c/LICENSE).
- Compatibility: Codex CLI and other agent integrations.
- Installation/dependencies and code risk: Installer/hooks can change project configuration. README documents a live Apply fallback that launches Codex or Claude with approval and sandbox bypass flags; avoid this path unless explicitly reviewed and authorized.
- Scores, in rubric order: `5 · 5 · 4 · 4 · 4 · 5 · 5 · 4 · 4 · 4 · 4 · 4 · 5 · 4`.
- Evidence: README distinguishes new-work, 24 focused commands, scored critique, technical audit, and 62 deterministic slop rules. SKILL.md requires inspecting rendered output and project context; scripts include screenshots/live-browser support.
- Limits: Apache-2.0. Installer/CLI can write PRODUCT.md, DESIGN.md, plugins/hooks, or download platform binary. README documents a live Apply fallback using Codex/Claude permission and sandbox bypass flags. Do not use that path without explicit review. Detector rules are signals, not design judgment.
- VibeSoft decision: **reference-only, not approved or installable**.

## [Nutlope/hallmark](https://github.com/Nutlope/hallmark) · [@Nutlope](https://github.com/Nutlope) — A-transformation + D-visual-verification

- Snapshot: **60,173 stars**, **3,285 forks**, last push **2026-11-11**; inspected source commit [`04977e15f3df`](https://github.com/Nutlope/hallmark/tree/04977e15f3dfd6ee4b74c887dac3eb52665d6c92).
- License: **MIT**. Evidence: [README/docs](https://github.com/Nutlope/hallmark/tree/04977e15f3dfd6ee4b74c887dac3eb52665d6c92/README.md), [`SKILL.md`](https://github.com/Nutlope/hallmark/tree/04977e15f3dfd6ee4b74c887dac3eb52665d6c92/skills/hallmark/SKILL.md), [license](https://github.com/Nutlope/hallmark/tree/04977e15f3dfd6ee4b74c887dac3eb52665d6c92/LICENSE).
- Compatibility: Codex skill; browser/photo tooling integration.
- Installation/dependencies and code risk: Installer removes an existing target directory before copying; --remove deletes known copies. Hook installer writes Claude settings at project or user scope. Review backups and settings changes before any run.
- Scores, in rubric order: `5 · 5 · 4 · 4 · 3 · 4 · 4 · 4 · 4 · 3 · 4 · 2 · 5 · 4`.
- Evidence: SKILL.md targets new-page art direction with a bounded flow and style picks; repository has slop lint, capture tooling, fixtures, and tests for visual rules. Code review of install.mjs found it removes the old destination before copying; hook source writes Claude settings at user or project scope and advises without blocking.
- Limits: MIT. Node and the pup/browser dependencies need review. `--remove` deletes known installed copies; `--force` bypasses preflight warnings. New-page lead by default; defer existing designs unless the user asks.
- VibeSoft decision: **reference-only, not approved or installable**.

## [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) · [@Leonxlnx](https://github.com/Leonxlnx) — A-transformation + C-design-system + D-visual-verification

- Snapshot: **120,748 stars**, **8,107 forks**, last push **2026-11-22**; inspected source commit [`6c0b5c78f5d3`](https://github.com/Leonxlnx/taste-skill/tree/6c0b5c78f5d31776e2210305abaa210cdc0030bf).
- License: **MIT**. Evidence: [README/docs](https://github.com/Leonxlnx/taste-skill/tree/6c0b5c78f5d31776e2210305abaa210cdc0030bf/README.md), [`SKILL.md`](https://github.com/Leonxlnx/taste-skill/tree/6c0b5c78f5d31776e2210305abaa210cdc0030bf/skills/taste-skill/SKILL.md), [license](https://github.com/Leonxlnx/taste-skill/tree/6c0b5c78f5d31776e2210305abaa210cdc0030bf/LICENSE).
- Compatibility: Codex plugin / skill; Node 22+ and Chromium-family browser required.
- Installation/dependencies and code risk: install.sh creates symlinks in Codex/Claude skill directories. Gate can register a Codex stop hook, maintain project .taste-skill state, and block completion on open findings. Inspect hook scope and project writes before use.
- Scores, in rubric order: `5 · 4 · 4 · 5 · 4 · 4 · 4 · 3 · 4 · 4 · 5 · 3 · 5 · 3`.
- Evidence: SKILL.md provides product-type-specific art direction, reusable design consistency/performance gates, and browser finish checks; repository contains checker scripts and visual effect assets. Code inspection found install.sh symlinks into agent skill folders and gate.mjs can install a stop hook, create project state, and use local browser automation.
- Limits: MIT. install.sh may remove a conflicting existing non-link destination to create its link. Node 22+/Chromium and hook scope require review; broad triggers and strong style prescriptions can override a project system unless routed carefully.
- VibeSoft decision: **reference-only, not approved or installable**.

## [wwewtech/anti-slop-design](https://github.com/wwewtech/anti-slop-design) · [@wwewtech](https://github.com/wwewtech) — A-transformation

- Snapshot: **5 stars**, **1 forks**, last push **2026-10-21**; inspected source commit [`071fd3c40a57`](https://github.com/wwewtech/anti-slop-design/tree/071fd3c40a57d1e6bd6953b4d10974afb4626d04).
- License: **MIT**. Evidence: [README/docs](https://github.com/wwewtech/anti-slop-design/tree/071fd3c40a57d1e6bd6953b4d10974afb4626d04/README.md), [`SKILL.md`](https://github.com/wwewtech/anti-slop-design/tree/071fd3c40a57d1e6bd6953b4d10974afb4626d04/skills/anti-slop-design/SKILL.md), [license](https://github.com/wwewtech/anti-slop-design/tree/071fd3c40a57d1e6bd6953b4d10974afb4626d04/LICENSE).
- Compatibility: Portable SKILL.md plus npm metadata; multi-agent portability claimed.
- Installation/dependencies and code risk: Low adoption; includes an additional zzprobe-in-working-repo skill whose purpose and scope need scrutiny; do not install without reviewing all shipped instructions.
- Scores, in rubric order: `3 · 4 · 3 · 3 · 3 · 3 · 4 · 3 · 3 · 3 · 2 · 3 · 2 · 1`.
- Evidence: MIT SKILL.md offers a broad anti-cliché matrix, typography/layout axioms, visual DNA extraction, and responsive/mobile guidance.
- Limits: Five stars and one fork in snapshot; many absolute mandates lack evidence or measured validation. Tree also contains an unexplained zzprobe-in-working-repo skill. Defer pending provenance and full-content review.
- VibeSoft decision: **reference-only, not approved or installable**.

## [elayadesign/ai-design-skills](https://github.com/elayadesign/ai-design-skills) · [@elayadesign](https://github.com/elayadesign) — A-transformation (landing pages)

- Snapshot: **16,510 stars**, **1,290 forks**, last push **2026-11-01**; inspected source commit [`456d9e0d3e2d`](https://github.com/elayadesign/ai-design-skills/tree/456d9e0d3e2d84c748bb143c6ca3d90c45e16213).
- License: **MIT**. Evidence: [README/docs](https://github.com/elayadesign/ai-design-skills/tree/456d9e0d3e2d84c748bb143c6ca3d90c45e16213/README.md), [`SKILL.md`](https://github.com/elayadesign/ai-design-skills/tree/456d9e0d3e2d84c748bb143c6ca3d90c45e16213/skills/landing-page-design/SKILL.md), [license](https://github.com/elayadesign/ai-design-skills/tree/456d9e0d3e2d84c748bb143c6ca3d90c45e16213/LICENSE).
- Compatibility: Agent Skills folders for Figma and landing-page design.
- Installation/dependencies and code risk: Landing-page skill is strongly prescriptive and broad in trigger; overlaps with design builders.
- Scores, in rubric order: `4 · 3 · 4 · 4 · 4 · 4 · 4 · 4 · 3 · 3 · 3 · 1 · 1 · 3`.
- Evidence: MIT README and landing-page SKILL.md give intake, audience/offer, section structure, conversion copy, SEO, and a detailed visual system; includes a separate Figma skill and validator script.
- Limits: Landing-page and conversion focused; visual rules may be overly prescriptive for product interfaces. No browser verification found in selected skill. Script was inspected as a path but not run.
- VibeSoft decision: **reference-only, not approved or installable**.

## [emilkowalski/skills](https://github.com/emilkowalski/skills) · [@emilkowalski](https://github.com/emilkowalski) — B-polish (motion and taste learning)

- Snapshot: **59,121 stars**, **3,481 forks**, last push **2026-11-15**; inspected source commit [`64eb3deb9a5f`](https://github.com/emilkowalski/skills/tree/64eb3deb9a5fbfa041faf783e0bc3fd635872e9c).
- License: **MIT**. Evidence: [README/docs](https://github.com/emilkowalski/skills/tree/64eb3deb9a5fbfa041faf783e0bc3fd635872e9c/README.md), [`SKILL.md`](https://github.com/emilkowalski/skills/tree/64eb3deb9a5fbfa041faf783e0bc3fd635872e9c/skills/learn-taste/SKILL.md), [license](https://github.com/emilkowalski/skills/tree/64eb3deb9a5fbfa041faf783e0bc3fd635872e9c/LICENSE).
- Compatibility: Skills CLI / Agent Skills.
- Installation/dependencies and code risk: Several skills overlap with UI/UX candidates; curate individual skills.
- Scores, in rubric order: `3 · 3 · 3 · 2 · 2 · 3 · 3 · 2 · 3 · 4 · 5 · 2 · 1 · 4`.
- Evidence: MIT collection has narrow skills for animation, performance, gestures, review, animation removal, and learning rules from user corrections; learn-taste explicitly writes rules without changing code.
- Limits: Collection is heterogeneous rather than one full designer workflow. Selected learn-taste skill is not an implementation or browser QA skill. Choose a single relevant entry.
- VibeSoft decision: **reference-only, not approved or installable**.

## [jakubkrehel/skills](https://github.com/jakubkrehel/skills) · [@jakubkrehel](https://github.com/jakubkrehel) — B-polish + C-design-system + design critique

- Snapshot: **12,623 stars**, **493 forks**, last push **2026-11-19**; inspected source commit [`672ae44ace6a`](https://github.com/jakubkrehel/skills/tree/672ae44ace6aaed65b86cbb1e2fd6fbea0e79578).
- License: **MIT**. Evidence: [README/docs](https://github.com/jakubkrehel/skills/tree/672ae44ace6aaed65b86cbb1e2fd6fbea0e79578/README.md), [`SKILL.md`](https://github.com/jakubkrehel/skills/tree/672ae44ace6aaed65b86cbb1e2fd6fbea0e79578/skills/better-ui/SKILL.md), [license](https://github.com/jakubkrehel/skills/tree/672ae44ace6aaed65b86cbb1e2fd6fbea0e79578/LICENSE).
- Compatibility: Agent Skills with Claude plugin; portable SKILL.md paths.
- Installation/dependencies and code risk: Useful narrow skills, but many separate instructions can overlap; select by role.
- Scores, in rubric order: `3 · 3 · 4 · 3 · 4 · 4 · 4 · 3 · 4 · 4 · 4 · 4 · 3 · 4`.
- Evidence: MIT collection separates better-typography, colors, layout, motion, accessibility, interface-review, and build-design. Better-ui explicitly treats surface/icon details as polish after interaction is sound.
- Limits: Focused skills intentionally omit a unified new-product art-direction process. Do not install all entries simultaneously; select one by issue.
- VibeSoft decision: **reference-only, not approved or installable**.

## [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) · [@nextlevelbuilder](https://github.com/nextlevelbuilder) — C-design-system + searchable implementation reference

- Snapshot: **153,380 stars**, **16,172 forks**, last push **2026-11-24**; inspected source commit [`f2f7266b0780`](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/f2f7266b07805025421611656045e9b44b41e2eb).
- License: **MIT**. Evidence: [README/docs](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/f2f7266b07805025421611656045e9b44b41e2eb/README.md), [`SKILL.md`](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/f2f7266b07805025421611656045e9b44b41e2eb/.claude/skills/ui-ux-pro-max/SKILL.md), [license](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/f2f7266b07805025421611656045e9b44b41e2eb/LICENSE).
- Compatibility: Skill files distributed through project setup CLI.
- Installation/dependencies and code risk: Large overlapping design catalog; review installer behavior before use.
- Scores, in rubric order: `3 · 3 · 4 · 3 · 4 · 3 · 4 · 4 · 4 · 3 · 3 · 4 · 2 · 3`.
- Evidence: MIT SKILL.md describes searchable style, palette, font, UX, icon, chart, and stack data with a required design-system step. Repository includes data search, token scripts, stack guidance, and test files.
- Limits: Large CLI/data package and many overlapping skills; scripts/dependencies require code and installer review. Searchable recipes can encourage template matching without product-specific critique.
- VibeSoft decision: **reference-only, not approved or installable**.

## [anthropics/skills](https://github.com/anthropics/skills) · [@anthropics](https://github.com/anthropics) — A-transformation (frontend-design) + separate browser testing skill

- Snapshot: **199,560 stars**, **23,355 forks**, last push **2026-11-16**; inspected source commit [`e4bb5d960d87`](https://github.com/anthropics/skills/tree/e4bb5d960d87126ff3b3a8af1a104b7db67560ba).
- License: **No root license declared in GitHub metadata**. Evidence: [README/docs](https://github.com/anthropics/skills/tree/e4bb5d960d87126ff3b3a8af1a104b7db67560ba/README.md), [`SKILL.md`](https://github.com/anthropics/skills/tree/e4bb5d960d87126ff3b3a8af1a104b7db67560ba/skills/frontend-design/SKILL.md), [per-skill license](https://github.com/anthropics/skills/tree/e4bb5d960d87126ff3b3a8af1a104b7db67560ba/skills/frontend-design/LICENSE.txt).
- Compatibility: Agent Skills; frontend-design and webapp-testing entries use SKILL.md.
- Installation/dependencies and code risk: GitHub API reports no repository license; frontend-design SKILL.md points to per-skill LICENSE.txt. Review exact skill license and terms before redistribution.
- Scores, in rubric order: `5 · 4 · 4 · 4 · 4 · 3 · 4 · 3 · 3 · 3 · 2 · 3 · 1 · 4`.
- Evidence: frontend-design SKILL.md directs product-grounded aesthetic decisions and a plan/review/build/critique process. A separate webapp-testing skill exists. Per-skill license files are present.
- Limits: GitHub API reports no root license; frontend-design references its own LICENSE.txt. The selected skill itself does not provide runnable browser capture or systematic responsive evidence.
- VibeSoft decision: **reference-only, not approved or installable**.

## [h3nryprod01/design-taste](https://github.com/h3nryprod01/design-taste) · [@h3nryprod01](https://github.com/h3nryprod01) — A-transformation + B-polish + D-visual-verification

- Snapshot: **104 stars**, **12 forks**, last push **2026-11-09**; inspected source commit [`3218793173ba`](https://github.com/h3nryprod01/design-taste/tree/3218793173ba67d88840296a45b0aec189d0a224).
- License: **MIT AND Apache-2.0**. Evidence: [README/docs](https://github.com/h3nryprod01/design-taste/tree/3218793173ba67d88840296a45b0aec189d0a224/README.md), [`SKILL.md`](https://github.com/h3nryprod01/design-taste/tree/3218793173ba67d88840296a45b0aec189d0a224/SKILL.md), [license](https://github.com/h3nryprod01/design-taste/tree/3218793173ba67d88840296a45b0aec189d0a224/LICENSE).
- Compatibility: Portable SKILL.md with preflight checker and tests.
- Installation/dependencies and code risk: Small adoption and composite upstream-derived pack; inspect bundled LICENSES and upstream sync drift before redistribution.
- Scores, in rubric order: `4 · 4 · 4 · 4 · 4 · 4 · 4 · 4 · 3 · 4 · 4 · 4 · 4 · 3`.
- Evidence: SKILL.md defines a never-ship-first-version loop, design rules, anti-pattern detection, and implementation workflow; preflight script has clean/dirty fixtures and tests; upstream drift script indicates provenance monitoring.
- Limits: 104 stars/12 forks at review. Composite MIT AND Apache-2.0 license files and upstream-derived content require per-source/attribution review before redistribution; drift test alone does not validate visual outcomes.
- VibeSoft decision: **reference-only, not approved or installable**.

## [microsoft/playwright-cli](https://github.com/microsoft/playwright-cli) · [@microsoft](https://github.com/microsoft) — D-visual-verification-tool

- Snapshot: **15,412 stars**, **955 forks**, last push **2026-11-18**; inspected source commit [`c872a33cec77`](https://github.com/microsoft/playwright-cli/tree/c872a33cec77fa03c28fa7c6d1ad99d15d04ce42).
- License: **Apache-2.0**. Evidence: [README/docs](https://github.com/microsoft/playwright-cli/tree/c872a33cec77fa03c28fa7c6d1ad99d15d04ce42/README.md), [`SKILL.md`](https://github.com/microsoft/playwright-cli/tree/c872a33cec77fa03c28fa7c6d1ad99d15d04ce42/skills/playwright-cli/SKILL.md), [license](https://github.com/microsoft/playwright-cli/tree/c872a33cec77fa03c28fa7c6d1ad99d15d04ce42/LICENSE).
- Compatibility: Standalone npm CLI for Playwright browser control; includes optional skill.
- Installation/dependencies and code risk: Tool, not a design skill. Browser navigation and interaction operate on real targets; use authorized URLs. Repository maintenance helper uses child_process execSync and deletes/replaces its generated skill destination; do not run it blindly.
- Scores, in rubric order: `0 · 0 · 0 · 0 · 0 · 0 · 0 · 2 · 2 · 5 · 1 · 2 · 5 · 4`.
- Evidence: Apache-2.0 npm CLI and SKILL.md document navigation, interaction, snapshots, resizing, screenshots, and browser sessions; it provides observation/action primitives, not aesthetic rules. Repository maintenance update.js uses execSync and removes/replaces its generated skill destination.
- Limits: Tool only; 0 in design dimensions means not its purpose, not poor implementation. Requires Node/npm package installation and browser runtime. Only use browser sessions and URLs authorized for testing.
- VibeSoft decision: **tool-only**.

## [JaimeJunr/claude-code-frontend-skills](https://github.com/JaimeJunr/claude-code-frontend-skills) · [@JaimeJunr](https://github.com/JaimeJunr) — A/B/C orchestration collection (Claude plugin marketplace)

- Snapshot: **11 stars**, **1 forks**, last push **2026-11-23**; inspected source commit [`d82f1db8f6bc`](https://github.com/JaimeJunr/claude-code-frontend-skills/tree/d82f1db8f6bceda64a5823728ff352a573e0c2eb).
- License: **NOASSERTION**. Evidence: [README/docs](https://github.com/JaimeJunr/claude-code-frontend-skills/tree/d82f1db8f6bceda64a5823728ff352a573e0c2eb/README.md), [`SKILL.md`](https://github.com/JaimeJunr/claude-code-frontend-skills/tree/d82f1db8f6bceda64a5823728ff352a573e0c2eb/plugins/frontend-stack/skills/frontend-stack/SKILL.md), [license](https://github.com/JaimeJunr/claude-code-frontend-skills/tree/d82f1db8f6bceda64a5823728ff352a573e0c2eb/LICENSE).
- Compatibility: Claude Code plugin marketplace; router plus bundled upstream skill plugins.
- Installation/dependencies and code risk: Repository aggregates and syncs third-party skills. Parent license metadata is NOASSERTION and some optional plugins call paid services; do not mirror/install as a bundle until per-plugin licensing, sync scripts, and dependencies are reviewed.
- Scores, in rubric order: `4 · 4 · 4 · 4 · 4 · 4 · 4 · 4 · 4 · 4 · 4 · 4 · 4 · 2`.
- Evidence: README documents a router, one lead plus at most two supporting skills, explicit conflict rules, upstream plugin sync, and differentiated roles. It includes frontend-stack and design-critique SKILL.md paths.
- Limits: Not a standalone design skill and not verified Codex install format. GitHub reports NOASSERTION for root license; aggregated plugin licenses vary and optional plugins can invoke paid services. Do not mirror wholesale.
- VibeSoft decision: **reference-only, not approved or installable**.

## [phcodesage/anti-slop-atlas](https://github.com/phcodesage/anti-slop-atlas) · [@phcodesage](https://github.com/phcodesage) — Reference catalog only

- Snapshot: **3 stars**, **2 forks**, last push **2026-09-23**; inspected source commit [`011ef0c086f7`](https://github.com/phcodesage/anti-slop-atlas/tree/011ef0c086f7a3e7054e3f95a26e2b6fbfe1fb18).
- License: **CC0-1.0**. Evidence: [README/docs](https://github.com/phcodesage/anti-slop-atlas/tree/011ef0c086f7a3e7054e3f95a26e2b6fbfe1fb18/README.md), No SKILL.md found; README/catalog only., [license](https://github.com/phcodesage/anti-slop-atlas/tree/011ef0c086f7a3e7054e3f95a26e2b6fbfe1fb18/LICENSE).
- Compatibility: Curated directory only; no SKILL.md found.
- Installation/dependencies and code risk: Discovery reference, not executable skill; very low adoption and older snapshot activity.
- Scores, in rubric order: `0 · 2 · 0 · 0 · 0 · 0 · 0 · 1 · 0 · 0 · 0 · 0 · 0 · 2`.
- Evidence: CC0 README organizes skills, design context, MCP servers, and browser 'eyes', with a useful anti-pattern checklist and routing references. Tree contains no SKILL.md.
- Limits: Three stars/two forks and older push in snapshot. Useful for discovery; not an installable skill and claims are not an independent evaluation.
- VibeSoft decision: **catalog-only**.

## VibeSoft orchestration choice

Use the first-party [Design Intelligence Director](skills/design-intelligence/SKILL.md) to pick one lead and at most two relevant specialists. For an existing generic UI, choose one transformation lead (for example Unslop or Impeccable if already installed); for a new page, choose one new-page art director (for example Hallmark or Taste); choose the design-system reference separately; use Playwright CLI or another available browser only for rendered QA. Do not load several broad design skills together. External repositories remain unbundled until their source, license, dependencies, hooks, install scripts, compatibility, and pinned version receive explicit review.

## Repeatable output review prompts

Use the same project and screenshot/browser setup for each candidate when comparing real outputs:

1. “Redesign this existing analytics screen for operations staff. Keep all current data and actions. Show your visual direction first; then implement and verify the result at desktop, tablet, and phone widths.”
2. “Build a new landing page for this product brief and audience. Avoid assuming a standard hero or card pattern; explain your choices, implement real content, and inspect the rendered page at three widths.”
3. “Review this implemented checkout flow. Find the three highest-impact visual, interaction, accessibility, and responsive defects; fix them and recheck the affected states.”

Human reviewers should compare task completion, visual specificity to brief, responsive captures, keyboard behavior, reduced-motion handling, and maintainability. This repository has not run these comparative prompts; no performance improvement is claimed.
