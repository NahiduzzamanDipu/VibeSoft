# Security policy

VibeSoft treats skills as executable-adjacent instructions: an agent may act on their directions and may have access to project files or tools. Popularity is not a trust signal by itself.

## Candidate review lifecycle

`discovered → analyzed → security-review → compatibility-review → approved → published`

Discovery records metadata only. A maintainer must review the repository owner, source commit/release, README and docs, license, maintenance, scripts, dependencies, network behavior, permission requests, prompt-injection content, duplication, and target agent format. Record findings and a pin in the manifest before making a skill installable. Re-review archived, compromised, deleted, or stale repositories.

## Installer guarantees

- Only bundled approved entries from `manifest/skills.json` can be installed.
- Third-party repositories are not fetched or executed by the installer.
- The installer refuses symlinks/special files, path traversal, unknown agents, unverified formats, and unapproved entries.
- Existing destinations are skipped unless `--update` is explicitly selected; replacement creates a backup.
- Uninstall requires a VibeSoft ownership marker and matching content hash; modified content is preserved unless the user explicitly uses `--force`.
- User-scope writes and active scans require explicit user approval.

## Security testing

Secrets, SAST, dependency, and configuration checks against a local checkout are distinct from network testing. Tools such as ZAP, Nuclei, Nettacker, Shannon, sqlmap, and Katana can send traffic, enumerate endpoints, or exploit vulnerabilities. Use them only against a system you own or have explicit authorization to test. Confirm exact target, environment, allowed methods, rate limits, time window, credentials handling, and stop conditions before a dynamic test. Prefer passive or local checks first. Stop on unexpected state changes or out-of-scope redirects.

See [`tools/cybersecurity/README.md`](tools/cybersecurity/README.md) for tool purpose and safe usage notes. VibeSoft does not install these tools or run scans automatically.

## Reporting a vulnerability

Please do not publish an exploitable report as a public issue. Contact the maintainer through the private vulnerability reporting feature on the GitHub repository. Include affected version/commit, impact, and a safe reproduction. Do not include real secrets or private user data.
