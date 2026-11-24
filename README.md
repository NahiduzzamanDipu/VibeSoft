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

The list is a curated snapshot, not a live ranking. Upstream projects and their popularity change; check the linked repositories for current releases, compatibility, and instructions.

## Contributing

Open an issue or pull request with a focused skill, a source repository, and a short explanation of its value. Prefer linking to maintained upstream skills over copying their contents.

## License

The original files in this repository are released under the MIT License. Upstream projects linked above retain their own licenses.

