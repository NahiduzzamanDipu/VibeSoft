# VibeSoft — Universal AI Skills Hub

Curated, reusable Agent Skills for Codex, Claude Code, Cursor, Gemini CLI, OpenCode, and GitHub Copilot. VibeSoft keeps reviewed skills installable and keeps third-party candidates and security tools separate until a human approves them.

> Give an agent this repository URL and say: **“Read `README.md`, `INSTALL.md`, `SKILL-CATALOG.md`, and `SECURITY.md`. Show me a plan, then install only approved skills for my agent and scope.”**

## What’s included

- A first-party design intelligence system with one design director, one builder, and focused anti-slop, systems, typography, interaction, motion, visual QA, accessibility, responsive, and critique skills.
- Engineering and testing skills for React, modern web guidance, web app testing, and full web development workflows.
- Two first-party workflows for broader web engineering and safe security review.
- A design scorecard with evidence, limitations, licensing, source commits, maintenance snapshots, compatibility, and role-based routing for 14 specialist candidates.
- A cross-agent compatibility manifest based on current official documentation.
- A Node.js installer with explicit agent/scope selection, dry run, safe skip behavior, backups for updates, and ownership-aware uninstall.
- A GitHub metadata refresh and weekly discovery workflow. New sources enter a pending queue and are never auto-approved or auto-installed.
- A separate security-tool guide for secrets, SAST, dependency/configuration scans, and authorized web testing.

External repositories in the catalog are linked and credited to their publishers. Their code is not copied or installed by this project. See [the complete source review](SKILL-CATALOG.md).

## Install

Requirements: Node.js 20 or later. Clone the repository, preview the plan, then explicitly approve the write.

```bash
git clone https://github.com/NahiduzzamanDipu/VibeSoft.git
cd VibeSoft
node installer/install.mjs --agent codex --scope project --category engineering,ui-ux,testing --dry-run
node installer/install.mjs --agent codex --scope project --category engineering,ui-ux,testing --yes
```

For another agent, change `--agent` to `claude-code`, `cursor`, `gemini-cli`, `opencode`, or `github-copilot`. `windsurf` is deliberately not accepted because its current official documentation does not verify `SKILL.md` skill installation.

Install across your user profile only after reviewing the paths and requesting the change:

```bash
node installer/install.mjs --agent codex --scope user --skill frontend-design --dry-run
node installer/install.mjs --agent codex --scope user --skill frontend-design --yes
```

See [INSTALL.md](INSTALL.md) for path details, selection, update, uninstall, and troubleshooting. The installer copies only approved skills shipped in this repository; it does not clone or execute code from third-party repositories.

## Elite design intelligence

For substantial UI work, start with [`design-intelligence`](skills/design-intelligence/SKILL.md). It routes to one lead approach and at most two specialists, resolves conflicts in favor of the user brief and project system, and requires truthful evidence for visual checks. Keep only relevant specialist skills enabled for a task.

| Role | Skill |
| --- | --- |
| Design Director / router | [`design-intelligence`](skills/design-intelligence/SKILL.md) |
| Design Builder | [`frontend-design`](skills/frontend-design/SKILL.md) |
| Product-specific redesign | [`anti-slop`](skills/anti-slop/SKILL.md) |
| Tokens and reusable UI | [`design-systems`](skills/design-systems/SKILL.md) |
| Type and hierarchy | [`typography`](skills/typography/SKILL.md) |
| Task flows and states | [`interaction-design`](skills/interaction-design/SKILL.md) |
| Motion | [`animation`](skills/animation/SKILL.md) |
| Rendered browser QA | [`visual-quality`](skills/visual-quality/SKILL.md) |
| Accessibility | [`accessibility`](skills/accessibility/SKILL.md) |
| Responsive behavior | [`responsive-design`](skills/responsive-design/SKILL.md) |
| Design Critic | [`design-review`](skills/design-review/SKILL.md) |

External candidate packages are evaluated, linked, credited, and kept separate from bundled skills. Read the [design scorecard](DESIGN-SKILLS.md) for capability vectors, evidence, limits, license and source pins. `microsoft/playwright-cli` is classified as a browser verification tool; catalogs and bundles are not treated as design skills.

## Bundled skills

| Skill | Category | Purpose |
| --- | --- | --- |
| [`web-development-workflow`](skills/web-development-workflow/SKILL.md) | Engineering | Architecture, planning, implementation, debugging, review, accessibility, performance, and UI craft |
| [`security-workflow`](skills/security-workflow/SKILL.md) | Cybersecurity | Secrets, SAST, dependencies, configuration, and authorized web testing |
| `frontend-design` and design intelligence specialists | UI/UX | Art direction, focused design roles, rendered QA, accessibility, and responsive review |
| `react-best-practices` | Engineering | React and Next.js component boundaries, data flow, and performance |
| `modern-web-guidance` | Engineering | Current platform APIs, progressive enhancement, and browser support |
| `webapp-testing` | Testing | Scoped verification of browser-visible behavior and responsive states |

## Verified agent support

| Agent | Project scope | User scope | Status |
| --- | --- | --- | --- |
| Codex | `.agents/skills/` | `$CODEX_HOME/skills/` or `~/.codex/skills/` | Verified `SKILL.md` |
| Claude Code | `.claude/skills/` | `~/.claude/skills/` | Verified `SKILL.md` |
| Cursor | `.cursor/skills/` | Not installed globally by this tool | Project path verified |
| Gemini CLI | `.gemini/skills/` | `~/.gemini/skills/` | Verified `SKILL.md`; also supports `.agents/skills/` |
| OpenCode | `.opencode/skills/` | `~/.config/opencode/skills/` | Verified `SKILL.md` |
| GitHub Copilot | `.github/skills/` | `~/.copilot/skills/` | Verified, subject to client/surface support |
| Windsurf | — | — | No verified portable `SKILL.md` destination; use Windsurf Rules/Workflows separately |

Paths and caveats are documented in [`manifest/agents.json`](manifest/agents.json), with links to official agent documentation. Agent support changes; confirm the relevant client documentation before relying on an integration.

## Trust and review policy

Third-party candidates stay `pending`, `catalog-only`, `tool-only`, or `deprecated` until a human reviewer checks the source, pinned commit, license, scripts, dependencies, prompt-injection risks, compatibility, duplicate coverage, and maintenance. Popularity is one signal, not approval. The weekly workflow can update metadata and open a review PR; it cannot promote a candidate into the installable manifest.

Security tools such as Gitleaks, Trivy, Semgrep, ZAP, Nuclei, CodeQL, TruffleHog, Nettacker, Shannon, sqlmap, and Katana are standalone programs, not skills. VibeSoft does not install them. Active scans require explicit authorization for the exact target and scope. Read [SECURITY.md](SECURITY.md) and [the toolkit guide](tools/cybersecurity/README.md).

## Maintenance

```bash
npm run validate
npm test
```

The weekly workflow searches broader frontend design topics, refreshes metadata, and opens a pull request for review. Candidate metrics are a dated GitHub REST snapshot, not a live ranking. Metadata ranking does not change the static design scorecard or approval status. See [DISCOVERY.md](DISCOVERY.md) and [DESIGN-SKILLS.md](DESIGN-SKILLS.md). The display name and repository URL live in [`manifest/config.json`](manifest/config.json).

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md). Contributions should be small, sourced, licensed, pinned, and reviewable. No third-party candidate becomes installable solely because an automated scan or popularity score is high.

## License and attribution

First-party VibeSoft files are MIT licensed. Linked repositories retain their own code and documentation licenses; see each upstream repository before reuse. The catalog credits each repository owner/publisher. See [LICENSE](LICENSE).
