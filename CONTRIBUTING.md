# Contributing

Contributions should improve a focused part of the hub without weakening its trust boundary.

## Proposing a skill

Submit a repository URL, exact commit or release tag, source owner, license, purpose, target agents and official compatibility evidence. Include README quality, activity, stars/forks snapshot date, dependencies, every script and install hook, network/filesystem behavior, permission requests, likely duplicates, and a short threat review. A high score or many stars is not approval.

New sources enter `pending/` and remain non-installable until a human reviewer approves them. Copy code only when the source license permits redistribution and attribution is retained. Prefer linking to upstream sources.

## Changes to code

- Keep the installer dependency-free and platform-neutral where practical.
- Do not add shell execution, remote script execution, auto-approval, or implicit global writes.
- Add tests for installer and catalog behavior. Use temporary directories and local fixtures; never test against production targets.
- Update compatibility documentation only with primary official docs.

## Validate before opening a pull request

```bash
npm run validate
npm test
```

Describe scope, manual checks, automated checks, and remaining limitations. Do not include secrets, credentials, or private target information.
