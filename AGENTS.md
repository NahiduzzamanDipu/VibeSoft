# VibeSoft repository instructions

Read `README.md` for project scope and `SECURITY.md` before changing the installer, discovery process, or security-tool guidance. The catalog is the source of truth for approval and installability.

- Keep third-party candidates non-installable until human review, license verification, and a pinned source are recorded.
- Never execute third-party installation scripts as part of discovery, validation, or installation.
- Preserve explicit user confirmation for user-scope writes, replacements, system dependencies, and active scans.
- Keep agent paths in `manifest/agents.json`; only claim support backed by official documentation.
- Run `npm run validate` and `npm test` after installer/catalog changes. Do not add dependencies without explaining why.
- Keep discovery metadata separate from approval status. Automation must not promote candidates.
