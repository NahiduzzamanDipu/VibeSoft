# Web Development Agent Skills

An installable, cross-agent starter pack for building and reviewing modern web interfaces. The bundled skills use the open Agent Skills format and work with compatible tools such as Codex, Claude Code, Cursor, and GitHub Copilot.

## Install

Install every skill in this repository with the [Skills CLI](https://skills.sh/docs/cli):

```bash
npx skills add NahiduzzamanDipu/VibeSoft --all
```

To install only selected skills, omit `--all` and select them in the CLI prompt. For one specific skill, use `--skill <name>`:

```bash
npx skills add NahiduzzamanDipu/VibeSoft --skill frontend-design
```

The CLI detects supported agents and installs into their skill locations. It does not install unrelated third-party skills automatically; use the upstream install commands below if you want those projects too.

## Included skills

| Skill | Use it for |
| --- | --- |
| [`frontend-design`](skills/frontend-design/SKILL.md) | Designing or implementing polished, responsive interfaces |
| [`react-best-practices`](skills/react-best-practices/SKILL.md) | Building or reviewing React and Next.js code |
| [`modern-web-guidance`](skills/modern-web-guidance/SKILL.md) | Choosing current HTML, CSS, and browser APIs |
| [`webapp-testing`](skills/webapp-testing/SKILL.md) | Verifying web app behavior in a real browser |

## Upstream projects to explore

These active projects provide deeper, separately maintained guidance. Check each project’s license and README before installing it.

| Project | GitHub owner / publisher | Focus | Install |
| --- | --- | --- | --- |
| [Anthropic Skills](https://github.com/anthropics/skills) | [@anthropics](https://github.com/anthropics) | Frontend design and web app testing | `npx skills add anthropics/skills --skill frontend-design webapp-testing` |
| [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) | [@vercel-labs](https://github.com/vercel-labs) | React performance and web design guidelines | `npx skills add vercel-labs/agent-skills --skill react-best-practices web-design-guidelines` |
| [Google Chrome Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance) | [@GoogleChrome](https://github.com/GoogleChrome) | Searchable guidance for current web platform patterns | See the upstream README for its current setup |
| [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | [@nextlevelbuilder](https://github.com/nextlevelbuilder) | Design systems, styles, and interface patterns | See the upstream README for its current setup |
| [Taste Skill](https://github.com/Leonxlnx/taste-skill) | [@Leonxlnx](https://github.com/Leonxlnx) | Visual direction and stronger design taste | See the upstream README for its current setup |
| [Impeccable](https://github.com/pbakaus/impeccable) | [@pbakaus](https://github.com/pbakaus) | Reviewing and refining frontend UX | See the upstream README for its current setup |

## More agent skill repositories

These additional repositories were shared for this directory. Credits link to each repository’s GitHub owner or publishing organization.

| Repository | GitHub owner / publisher |
| --- | --- |
| [mattpocock/skills](https://github.com/mattpocock/skills) | [@mattpocock](https://github.com/mattpocock) |
| [obra/superpowers](https://github.com/obra/superpowers) | [@obra](https://github.com/obra) |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | [@addyosmani](https://github.com/addyosmani) |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | [@DietrichGebert](https://github.com/DietrichGebert) |
| [openai/skills](https://github.com/openai/skills) | [@openai](https://github.com/openai) |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | [@Graphify-Labs](https://github.com/Graphify-Labs) |
| [heydamir/unslop](https://github.com/heydamir/unslop) | [@heydamir](https://github.com/heydamir) |
| [emilkowalski/skills](https://github.com/emilkowalski/skills) | [@emilkowalski](https://github.com/emilkowalski) |
| [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | [@Nutlope](https://github.com/Nutlope) |
| [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | [@greensock](https://github.com/greensock) |
| [hotskillsdev/awesome-agent-skills](https://github.com/hotskillsdev/awesome-agent-skills) | [@hotskillsdev](https://github.com/hotskillsdev) |
| [Abdalkaderdev/awesome-coding-agent-skills](https://github.com/Abdalkaderdev/awesome-coding-agent-skills) | [@Abdalkaderdev](https://github.com/Abdalkaderdev) |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | [@composio-community](https://github.com/composio-community) |

## Security and web testing repositories

| Repository | GitHub owner / publisher |
| --- | --- |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | [@NVIDIA](https://github.com/NVIDIA) |
| [projectdiscovery/nuclei](https://github.com/projectdiscovery/nuclei) | [@projectdiscovery](https://github.com/projectdiscovery) |
| [aquasecurity/trivy](https://github.com/aquasecurity/trivy) | [@aquasecurity](https://github.com/aquasecurity) |
| [gitleaks/gitleaks](https://github.com/gitleaks/gitleaks) | [@gitleaks](https://github.com/gitleaks) |
| [zaproxy/zaproxy](https://github.com/zaproxy/zaproxy) | [@zaproxy](https://github.com/zaproxy) |
| [semgrep/semgrep](https://github.com/semgrep/semgrep) | [@semgrep](https://github.com/semgrep) |
| [github/codeql](https://github.com/github/codeql) | [@github](https://github.com/github) |
| [trufflesecurity/trufflehog](https://github.com/trufflesecurity/trufflehog) | [@trufflesecurity](https://github.com/trufflesecurity) |
| [OWASP/Nettacker](https://github.com/OWASP/Nettacker) | [@OWASP](https://github.com/OWASP) |
| [KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon) | [@KeygraphHQ](https://github.com/KeygraphHQ) |
| [sqlmapproject/sqlmap](https://github.com/sqlmapproject/sqlmap) | [@sqlmapproject](https://github.com/sqlmapproject) |
| [projectdiscovery/katana](https://github.com/projectdiscovery/katana) | [@projectdiscovery](https://github.com/projectdiscovery) |

The list is a curated snapshot, not a live ranking. Upstream projects and their popularity change; check the linked repositories for current releases, compatibility, and instructions.

## Contributing

Open an issue or pull request with a focused skill, a source repository, and a short explanation of its value. Prefer linking to maintained upstream skills over copying their contents.

## License

The original files in this repository are released under the MIT License. Upstream projects linked above retain their own licenses.

