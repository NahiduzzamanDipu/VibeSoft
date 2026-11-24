# VibeSoft — Candidate repository review

Snapshot: **2026-11-24**. Stars, forks, and push dates are dated GitHub repository metadata and may change. External sources remain reference-only until individually pinned and approved. Metrics inform triage; they do not establish quality or trust.

## Review rules

- **Agent skill/package** means a repository documents an Agent Skill or compatible package. It still needs a human license, script, source-pin, and compatibility review before install.
- **Catalog** means it indexes sources; it is not itself a skill.
- **Standalone security tool** means a CLI or testing system, not an installable agent skill. Network-capable tools require authorized scope.
- **Visual verification tool** operates a browser or inspects rendered output; it does not supply design judgment by itself. **Skill collection/router** coordinates multiple upstream packs and needs per-source licensing review.
- GitHub API license metadata may be absent or different from a README badge. The table preserves uncertainty rather than guessing.
- “Pending” is not approval. The installer only accepts entries where `review_status` is `approved` and `installable` is `true` in `manifest/skills.json`.

## Agent skills and packages (19)

| Repository and creator credit | Classification / compatibility | License | Stars | Forks | Last push | Review state | Notes |
| --- | --- | --- | ---: | ---: | --- | --- | --- |
| [mattpocock/skills](https://github.com/mattpocock/skills) · [@mattpocock](https://github.com/mattpocock) | Codex plugin / Agent Skills; installation method is plugin or Skills CLI | MIT | 331,472 | 27,854 | 2026-11-19 | pending |  |
| [obra/superpowers](https://github.com/obra/superpowers) · [@obra](https://github.com/obra) | Codex plugin and other skill-capable agents | MIT | 325,161 | 28,840 | 2026-11-03 | pending | Opinionated workflow; includes mandatory TDD, subagent, and worktree guidance. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) · [@addyosmani](https://github.com/addyosmani) | Agent Skills; installable through Skills CLI for Codex and other agents | MIT | 120,016 | 12,473 | 2026-11-18 | pending |  |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) · [@DietrichGebert](https://github.com/DietrichGebert) | Claude Code, Codex, OpenCode, Gemini and other agents; Agent Skills plus adapters | MIT | 197,563 | 11,170 | 2026-11-22 | pending | Strong opinionated workflow; contains commands and tests that should be reviewed before adoption. |
| [openai/skills](https://github.com/openai/skills) · [@openai](https://github.com/openai) | Legacy Codex skill collection | Not declared | 29,031 | 2,051 | 2026-10-28 | deprecated | README marks this repository deprecated and redirects users to newer plugin-based guidance. |
| [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) · [@vercel-labs](https://github.com/vercel-labs) | Agent Skills format; broad agent support via Skills CLI | Not declared | 34,817 | 3,034 | 2026-11-20 | pending | No license declared in GitHub repository metadata at snapshot; verify license file before redistribution. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) · [@Graphify-Labs](https://github.com/Graphify-Labs) | Codex skill plus Graphify CLI; requires uv/tool setup | Apache-2.0 | 152,569 | 14,664 | 2026-11-23 | pending | Skill depends on a separately installed executable; do not invoke installer automatically. |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) · [@nextlevelbuilder](https://github.com/nextlevelbuilder) | Skill files distributed through project setup CLI | MIT | 153,380 | 16,172 | 2026-11-24 | pending | Large overlapping design catalog; review installer behavior before use. |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) · [@Leonxlnx](https://github.com/Leonxlnx) | Codex plugin / skill; Node 22+ and Chromium-family browser required | MIT | 120,748 | 8,107 | 2026-11-22 | pending | install.sh creates symlinks in Codex/Claude skill directories. Gate can register a Codex stop hook, maintain project .taste-skill state, and block completion on open findings. Inspect hook scope and project writes before use. |
| [heydamir/unslop](https://github.com/heydamir/unslop) · [@heydamir](https://github.com/heydamir) | Codex and other Agent Skills hosts | CC-BY-4.0 | 20,920 | 1,287 | 2026-11-15 | pending | Requires attribution; optional snapshot helper requires Playwright and can navigate a supplied URL. |
| [emilkowalski/skills](https://github.com/emilkowalski/skills) · [@emilkowalski](https://github.com/emilkowalski) | Skills CLI / Agent Skills | MIT | 59,121 | 3,481 | 2026-11-15 | pending | Several skills overlap with UI/UX candidates; curate individual skills. |
| [Nutlope/hallmark](https://github.com/Nutlope/hallmark) · [@Nutlope](https://github.com/Nutlope) | Codex skill; browser/photo tooling integration | MIT | 60,173 | 3,285 | 2026-11-11 | pending | Installer removes an existing target directory before copying; --remove deletes known copies. Hook installer writes Claude settings at project or user scope. Review backups and settings changes before any run. |
| [greensock/gsap-skills](https://github.com/greensock/gsap-skills) · [@greensock](https://github.com/greensock) | Agent Skills CLI; GSAP-specific | MIT | 18,971 | 1,223 | 2026-07-29 | pending | Narrow scope; last push is older than other candidates in the snapshot. |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) · [@NVIDIA](https://github.com/NVIDIA) | Scanner CLI and companion skill; Python 3.12+ / uv required | Apache-2.0 | 27,443 | 2,445 | 2026-11-24 | pending | The companion skill requires the separate scanner CLI; not a standalone skill install. |
| [wwewtech/anti-slop-design](https://github.com/wwewtech/anti-slop-design) · [@wwewtech](https://github.com/wwewtech) | Portable SKILL.md plus npm metadata; multi-agent portability claimed | MIT | 5 | 1 | 2026-10-21 | pending | Low adoption; includes an additional zzprobe-in-working-repo skill whose purpose and scope need scrutiny; do not install without reviewing all shipped instructions. |
| [elayadesign/ai-design-skills](https://github.com/elayadesign/ai-design-skills) · [@elayadesign](https://github.com/elayadesign) | Agent Skills folders for Figma and landing-page design | MIT | 16,510 | 1,290 | 2026-11-01 | pending | Landing-page skill is strongly prescriptive and broad in trigger; overlaps with design builders. |
| [jakubkrehel/skills](https://github.com/jakubkrehel/skills) · [@jakubkrehel](https://github.com/jakubkrehel) | Agent Skills with Claude plugin; portable SKILL.md paths | MIT | 12,623 | 493 | 2026-11-19 | pending | Useful narrow skills, but many separate instructions can overlap; select by role. |
| [anthropics/skills](https://github.com/anthropics/skills) · [@anthropics](https://github.com/anthropics) | Agent Skills; frontend-design and webapp-testing entries use SKILL.md | Not declared | 199,560 | 23,355 | 2026-11-16 | pending | GitHub API reports no repository license; frontend-design SKILL.md points to per-skill LICENSE.txt. Review exact skill license and terms before redistribution. |
| [h3nryprod01/design-taste](https://github.com/h3nryprod01/design-taste) · [@h3nryprod01](https://github.com/h3nryprod01) | Portable SKILL.md with preflight checker and tests | MIT AND Apache-2.0 | 104 | 12 | 2026-11-09 | pending | Small adoption and composite upstream-derived pack; inspect bundled LICENSES and upstream sync drift before redistribution. |

## Catalogs and directories (4)

| Repository and creator credit | Classification / compatibility | License | Stars | Forks | Last push | Review state | Notes |
| --- | --- | --- | ---: | ---: | --- | --- | --- |
| [hotskillsdev/awesome-agent-skills](https://github.com/hotskillsdev/awesome-agent-skills) · [@hotskillsdev](https://github.com/hotskillsdev) | Directory/catalog only | CC-BY-4.0 | 3 | 0 | 2026-11-23 | catalog-only | Very low adoption; listing is not an installable skill. |
| [Abdalkaderdev/awesome-coding-agent-skills](https://github.com/Abdalkaderdev/awesome-coding-agent-skills) · [@Abdalkaderdev](https://github.com/Abdalkaderdev) | Directory/catalog only | MIT (code); CC0 (list data per README) | 0 | 1 | 2026-10-08 | catalog-only | Low adoption and less recent activity than active skill sources. |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) · [@composio-community](https://github.com/composio-community) | Codex-specific catalog; no installable bundle | Not declared | 17,408 | 1,792 | 2026-07-26 | catalog-only | Catalog only; no license declared in GitHub metadata and stale relative to other sources. |
| [phcodesage/anti-slop-atlas](https://github.com/phcodesage/anti-slop-atlas) · [@phcodesage](https://github.com/phcodesage) | Curated directory only; no SKILL.md found | CC0-1.0 | 3 | 2 | 2026-09-23 | catalog-only | Discovery reference, not executable skill; very low adoption and older snapshot activity. |

## Standalone security tools (11)

| Repository and creator credit | Classification / compatibility | License | Stars | Forks | Last push | Review state | Notes |
| --- | --- | --- | ---: | ---: | --- | --- | --- |
| [projectdiscovery/nuclei](https://github.com/projectdiscovery/nuclei) · [@projectdiscovery](https://github.com/projectdiscovery) | Standalone vulnerability scanner; active templates can send network probes | MIT | 33,235 | 4,054 | 2026-11-23 | tool-only | Use only with explicit authorization and scoped targets. |
| [aquasecurity/trivy](https://github.com/aquasecurity/trivy) · [@aquasecurity](https://github.com/aquasecurity) | Standalone local/dependency/container/IaC scanner | Apache-2.0 | 39,663 | 929 | 2026-11-23 | tool-only |  |
| [gitleaks/gitleaks](https://github.com/gitleaks/gitleaks) · [@gitleaks](https://github.com/gitleaks) | Standalone secret scanner | MIT | 31,287 | 2,400 | 2026-10-28 | tool-only | README says feature development has ended; future releases are security fixes while maintainers shift focus to Betterleaks. |
| [zaproxy/zaproxy](https://github.com/zaproxy/zaproxy) · [@zaproxy](https://github.com/zaproxy) | Standalone dynamic web application scanner | Apache-2.0 | 16,253 | 2,722 | 2026-11-20 | tool-only | Baseline/passive scanning is less intrusive; active scanning requires authorization. |
| [semgrep/semgrep](https://github.com/semgrep/semgrep) · [@semgrep](https://github.com/semgrep) | Standalone SAST CLI; coverage varies by edition and ruleset | LGPL-2.1 | 17,913 | 1,208 | 2026-11-24 | tool-only |  |
| [github/codeql](https://github.com/github/codeql) · [@github](https://github.com/github) | Standalone database/query ecosystem; CLI and language pack requirements | MIT (repository); CodeQL CLI has separate terms | 10,401 | 2,155 | 2026-11-23 | tool-only | Check CodeQL CLI terms for the intended private/commercial use. |
| [trufflesecurity/trufflehog](https://github.com/trufflesecurity/trufflehog) · [@trufflesecurity](https://github.com/trufflesecurity) | Standalone secret scanner with credential verification | AGPL-3.0 | 29,600 | 2,791 | 2026-11-24 | tool-only | Credential verification can contact external services; review mode and scope before use. |
| [OWASP/Nettacker](https://github.com/OWASP/Nettacker) · [@OWASP](https://github.com/OWASP) | Standalone automated reconnaissance and penetration-testing tool | Apache-2.0 | 5,758 | 1,257 | 2026-11-23 | tool-only | Can scan and brute-force; only use on explicitly authorized systems. |
| [KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon) · [@KeygraphHQ](https://github.com/KeygraphHQ) | Autonomous web/API penetration-testing system | AGPL-3.0 | 52,239 | 6,121 | 2026-11-23 | tool-only | Executes real exploits with browser automation and Docker; requires specific target authorization and careful staging. |
| [sqlmapproject/sqlmap](https://github.com/sqlmapproject/sqlmap) · [@sqlmapproject](https://github.com/sqlmapproject) | Standalone SQL injection testing and exploitation tool | NOASSERTION in GitHub metadata; README badge says GPL-2.0 | 39,024 | 6,463 | 2026-11-23 | tool-only | Intrusive by design; use only on explicitly authorized targets. |
| [projectdiscovery/katana](https://github.com/projectdiscovery/katana) · [@projectdiscovery](https://github.com/projectdiscovery) | Standalone web crawler; some modes require headless Chrome | MIT | 17,894 | 1,247 | 2026-11-23 | tool-only | Crawling sends requests to the target; keep scope and rate limits explicit. |

## Visual verification tools and skill collections (2)

| Repository and creator credit | Classification / compatibility | License | Stars | Forks | Last push | Review state | Notes |
| --- | --- | --- | ---: | ---: | --- | --- | --- |
| [microsoft/playwright-cli](https://github.com/microsoft/playwright-cli) · [@microsoft](https://github.com/microsoft) | Standalone npm CLI for Playwright browser control; includes optional skill | Apache-2.0 | 15,412 | 955 | 2026-11-18 | tool-only | Tool, not a design skill. Browser navigation and interaction operate on real targets; use authorized URLs. Repository maintenance helper uses child_process execSync and deletes/replaces its generated skill destination; do not run it blindly. |
| [JaimeJunr/claude-code-frontend-skills](https://github.com/JaimeJunr/claude-code-frontend-skills) · [@JaimeJunr](https://github.com/JaimeJunr) | Claude Code plugin marketplace; router plus bundled upstream skill plugins | NOASSERTION | 11 | 1 | 2026-11-23 | pending | Repository aggregates and syncs third-party skills. Parent license metadata is NOASSERTION and some optional plugins call paid services; do not mirror/install as a bundle until per-plugin licensing, sync scripts, and dependencies are reviewed. |

## Priority interpretation

High-adoption, actively pushed skill collections such as mattpocock/skills, obra/superpowers, addyosmani/agent-skills, DietrichGebert/ponytail, Graphify, UI/UX Pro Max, Taste, Impeccable, Unslop, Hallmark, and Playwright CLI receive focused but separate review, not automatic installation. Design-specific evidence and limitations are scored in [DESIGN-SKILLS.md](DESIGN-SKILLS.md). Candidates overlap and some rely on installer CLIs, plugins, external binaries, or strongly prescriptive workflows. VibeSoft does not install them from this external list.

The only approved entries in the install manifest are first-party VibeSoft skills. They are instruction-only, MIT-licensed with the repository, and use the shared Agent Skills `SKILL.md` format.
