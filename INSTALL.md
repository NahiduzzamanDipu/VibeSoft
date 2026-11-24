# Installation and operations

## Requirements

- Node.js 20 or newer; no npm packages or global dependencies are required.
- A copy of this repository, local or cloned from GitHub.
- The target agent must support the Agent Skills `SKILL.md` format and the selected scope in [`manifest/agents.json`](manifest/agents.json).

## Preview and install

Choose exactly one agent, one scope, and an explicit selection (`--skill`, `--category`, or `--all`). Use `--dry-run` first. User-scope installs prompt for confirmation; automation must pass `--yes` only after a human has approved the plan.

```bash
node installer/install.mjs --agent codex --scope project --category engineering,ui-ux --dry-run
node installer/install.mjs --agent codex --scope project --category engineering,ui-ux --yes
```

Agent IDs: `codex`, `claude-code`, `cursor`, `gemini-cli`, `opencode`, and `github-copilot`. Windsurf is listed as unsupported for portable `SKILL.md` installation; the installer refuses it.

Selection examples:

```bash
node installer/install.mjs --agent claude-code --scope project --skill frontend-design,webapp-testing --dry-run
node installer/install.mjs --agent cursor --scope project --project ../my-app --category ui-ux --yes
node installer/install.mjs --agent gemini-cli --scope user --skill modern-web-guidance --dry-run
```

For the full first-party design collection, preview the install list before choosing individual skills:

```bash
node installer/install.mjs --agent codex --scope project --category design-intelligence,ui-ux,design-systems,typography,interaction-design,motion,visual-quality,accessibility,responsive-design,design-review --dry-run
```

Installing a collection does not mean every instruction should lead every task. Start frontend tasks with `design-intelligence`; it selects one lead skill and at most two specialists. A compact setup can install `design-intelligence,ui-ux,visual-quality,accessibility` and add other focused skills only when needed.

The project scope writes under the selected project’s verified agent skill directory. User scope writes to the current user’s documented skills directory. Review the resolved destination printed by `--dry-run` before continuing.

## Update and replace

By default, an existing skill directory is skipped. To update it, pass `--update` (alias `--replace`). The installer moves the existing directory to a sibling `.vibesoft-backups/` folder before copying the new approved version. Review and prune backups manually when you no longer need them.

```bash
node installer/install.mjs --agent codex --scope project --skill frontend-design --dry-run
node installer/install.mjs --agent codex --scope project --skill frontend-design --update --yes
```

## Uninstall

The installer only removes folders with a valid VibeSoft ownership marker. If installed contents have changed since install, it refuses to delete them. `--force` explicitly discards those changes and should only be used after reviewing them.

```bash
node installer/install.mjs --agent codex --scope project --skill frontend-design --uninstall --dry-run
node installer/install.mjs --agent codex --scope project --skill frontend-design --uninstall --yes
```

## Security and scope

- The installer copies local, approved skills only. It does not fetch third-party code, invoke package managers, execute install scripts, or change agent settings.
- Never pass a target folder you do not own. Inspect user-scope paths before confirming.
- `--update` backs up an existing target; it does not silently overwrite it.
- Third-party sources are not installable until a human adds a pinned and reviewed entry to `manifest/skills.json`.
- Network discovery only reads public GitHub repository metadata and writes pending review records. It never downloads or executes discovered repositories.

## Catalog maintenance

```bash
npm run validate
npm test
npm run catalog:render
node scripts/catalog.mjs refresh
GITHUB_TOKEN=... node scripts/catalog.mjs discover
```

On PowerShell, set a token only for the current process with `$env:GITHUB_TOKEN = '...'`, run discovery, then remove it with `Remove-Item Env:GITHUB_TOKEN`. GitHub Actions supplies a short-lived token automatically. Never commit a token.

Refresh fetches metadata for the existing candidate list. Discovery creates a dated file under `pending/`; maintainers must inspect candidate files, license, scripts, release pin, compatibility, and quality before review or approval. `npm run catalog:render` regenerates the repository catalog and design scorecard from the manifests.
