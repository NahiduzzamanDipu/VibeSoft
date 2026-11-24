# Standalone security tools

These repositories contain standalone scanners or query/tooling ecosystems, not Agent Skills. They are listed separately and are not installed by the VibeSoft skill installer. Check current official installation instructions and licensing for your OS before installing a dependency.

## Local source and configuration checks

Run these only from a trusted checkout and review configuration supplied by that checkout. Do not expose report files containing secrets.

| Tool | Use | Example after separately installing it | Notes |
| --- | --- | --- | --- |
| [Gitleaks](https://github.com/gitleaks/gitleaks) | Search local repository history/files for secrets | `gitleaks git .` | Upstream says feature development is complete; future work is security fixes. Review its current status before adopting. |
| [Trivy](https://github.com/aquasecurity/trivy) | Dependency, secret, IaC/configuration, container, and filesystem checks | `trivy fs --scanners vuln,misconfig,secret .` | Trivy can load config from the current working directory. Use trusted config/ignore files when scanning untrusted repos. |
| [Semgrep](https://github.com/semgrep/semgrep) | Static application security testing | `semgrep scan --config auto .` | Coverage depends on the ruleset/edition; triage findings and document limitations. |
| [CodeQL](https://github.com/github/codeql) | Query databases for code vulnerabilities | Use the official [CodeQL CLI setup and analysis guide](https://docs.github.com/en/code-security/codeql-cli/getting-started-with-the-codeql-cli). | The `github/codeql` repository is query/library source; the CLI and language packs are separate. Check licensing for private/commercial use. |
| [TruffleHog](https://github.com/trufflesecurity/trufflehog) | Detect and optionally verify credentials | Bash: `trufflehog git file://"$PWD"` | The Git mode includes repository history. Verification may contact external services; use detection-only or an approved configuration if required. AGPL-3.0. |

Package-manager audits are preferable for dependency findings when a project already has a lockfile and manager. Examples: `npm audit`, `pnpm audit`, `yarn audit`, `pip-audit` only if already installed/approved, or the ecosystem's documented equivalent. Never apply forced upgrades automatically.

## Authorized web application testing

All commands below require an exact target owned by you or written authorization. Replace the example URL only with the approved staging/local target. Read each tool’s current options first; keep request rates and test modules within scope.

| Tool | Use | Safe starting point |
| --- | --- | --- |
| [OWASP ZAP](https://github.com/zaproxy/zaproxy) | DAST proxy/scanner | `docker run -t ghcr.io/zaproxy/zaproxy:stable zap-baseline.py -t https://staging.example.test` | This is the time-limited passive baseline mode; it still sends requests. Replace the example only with an authorized target. |
| [Nuclei](https://github.com/projectdiscovery/nuclei) | Template-based vulnerability checks | `nuclei -u https://staging.example.test` only after authorization; review templates/severity and rate limits. |
| [Katana](https://github.com/projectdiscovery/katana) | Web crawling | `katana -u https://staging.example.test -d 2` only after authorization and scope confirmation. |
| [Nettacker](https://github.com/OWASP/Nettacker) | Reconnaissance and active penetration tests | Do not start without written scope; disable brute-force modules unless expressly authorized. |
| [Shannon](https://github.com/KeygraphHQ/shannon) | Autonomous web/API penetration testing | High-impact tool that can execute real exploits; use an isolated staging target and explicit approval. |
| [sqlmap](https://github.com/sqlmapproject/sqlmap) | SQL injection testing/exploitation | Do not run against arbitrary URLs. Use a deliberately vulnerable local lab or approved staging endpoint only. |

Do not run any network scanner from a discovery job, installer, default CI workflow, or skill trigger. A clean result does not prove a system is secure.
