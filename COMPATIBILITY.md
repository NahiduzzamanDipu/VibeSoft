# Agent compatibility

This matrix describes where the bundled Agent Skills `SKILL.md` format is verified by official documentation as of **2026-11-24**. Support depends on agent version and client surface. The installer reads the machine-readable paths from [`manifest/agents.json`](manifest/agents.json); it refuses unsupported or unverified paths instead of guessing.

| Agent | Project destination | User destination | Format / notes | Official documentation |
| --- | --- | --- | --- | --- |
| OpenAI Codex | `.agents/skills/<skill>/SKILL.md` | `$CODEX_HOME/skills/<skill>/SKILL.md` (default `~/.codex/skills`) | Agent Skills. The newer `gh skill install` documentation also lists `.agents/skills` as user/project paths; VibeSoft keeps Codex's configured `CODEX_HOME/skills` for global installs. | [Codex skill install](https://developers.openai.com/api/reference/cli), [OpenAI skill format](https://developers.openai.com/plugins/build/skills) |
| Claude Code | `.claude/skills/<skill>/SKILL.md` | `~/.claude/skills/<skill>/SKILL.md` | Native filesystem skills. | [Claude Code skills](https://code.claude.com/docs/en/skills) |
| Cursor | `.cursor/skills/<skill>/SKILL.md` | Not installed globally by this tool | Project path documented. Global destination is intentionally not guessed. | [Cursor Agent Skills](https://cursor.com/docs/skills) |
| Gemini CLI | `.gemini/skills/<skill>/SKILL.md` | `~/.gemini/skills/<skill>/SKILL.md` | Also discovers `.agents/skills` as a compatibility alias. | [Gemini CLI Agent Skills](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/using-agent-skills.md) |
| OpenCode | `.opencode/skills/<skill>/SKILL.md` | `~/.config/opencode/skills/<skill>/SKILL.md` | Also reads compatible `.agents/skills` and `.claude/skills` sources. | [OpenCode skills](https://opencode.ai/docs/skills/) |
| GitHub Copilot | `.github/skills/<skill>/SKILL.md` | `~/.copilot/skills/<skill>/SKILL.md` | Support depends on Copilot client/surface; the Agent Skills format is not universal to every Copilot feature. | [Copilot customization reference](https://docs.github.com/en/copilot/reference/customization-cheat-sheet), [adding skills](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills) |
| Windsurf | — | — | Its docs describe Rules, Workflows, and hooks; VibeSoft found no official `SKILL.md` installation path. No files are installed. | [Windsurf Rules and Memories](https://docs.windsurf.com/windsurf/cascade/memories) |

## Scope and adapter policy

- Project paths are visible to supported agents in that repository and should be committed only when the project owner intends to share them.
- User paths apply across projects and are a broader change. Review the printed destination before confirming.
- Copilot and Cursor features vary by IDE, CLI, cloud, and account surface. A path being accepted by one client does not prove support in every client.
- Windsurf is not marked as a supported Agent Skills host. A future adapter must translate approved content to Windsurf’s native format and be backed by current official documentation.
- Agent-specific rules files (such as `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, and `.cursor/rules/`) guide this repository. They are not portable skill installers.
