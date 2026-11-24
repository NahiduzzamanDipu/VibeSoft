import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const data = JSON.parse(fs.readFileSync(path.join(root, 'manifest', 'candidates.json'), 'utf8'));
const config = JSON.parse(fs.readFileSync(path.join(root, 'manifest', 'config.json'), 'utf8'));
const groups = [
  ['Agent skills and packages', new Set(['agent-skills', 'agent-skill', 'agent-skill-and-tool', 'agent-skills-and-cli', 'skill-auditing-tool'])],
  ['Catalogs and directories', new Set(['catalog'])],
  ['Standalone security tools', new Set(['security-tool', 'security-tool-and-query-repo'])]
];
const popularity = (n) => Number(n).toLocaleString('en-US');
const cell = (value) => String(value ?? 'Not declared').replaceAll('|', '\\|').replaceAll('\n', ' ');
let output = `# ${config.display_name} — Candidate repository review\n\n`;
output += `Snapshot: **${data.snapshot_date}**. Stars, forks, and push dates are dated GitHub repository metadata and may change. External sources remain reference-only until individually pinned and approved. Metrics inform triage; they do not establish quality or trust.\n\n`;
output += `## Review rules\n\n- **Agent skill/package** means a repository documents an Agent Skill or compatible package. It still needs a human license, script, source-pin, and compatibility review before install.\n- **Catalog** means it indexes sources; it is not itself a skill.\n- **Standalone security tool** means a CLI or testing system, not an installable agent skill. Network-capable tools require authorized scope.\n- GitHub API license metadata may be absent or different from a README badge. The table preserves uncertainty rather than guessing.\n- “Pending” is not approval. The installer only accepts entries where ` + '`review_status`' + ` is ` + '`approved`' + ` and ` + '`installable`' + ` is ` + '`true`' + ` in ` + '`manifest/skills.json`' + `.\n\n`;
for (const [heading, kinds] of groups) {
  const entries = data.repositories.filter((r) => kinds.has(r.kind));
  output += `## ${heading} (${entries.length})\n\n`;
  output += `| Repository and creator credit | Classification / compatibility | License | Stars | Forks | Last push | Review state | Notes |\n| --- | --- | --- | ---: | ---: | --- | --- | --- |\n`;
  for (const repo of entries) {
    const [owner] = repo.repo.split('/');
    const url = `https://github.com/${repo.repo}`;
    const creator = `[@${owner}](https://github.com/${owner})`;
    output += `| [${repo.repo}](${url}) · ${creator} | ${cell(repo.compatibility)} | ${cell(repo.license)} | ${popularity(repo.stars)} | ${popularity(repo.forks)} | ${repo.pushed_at} | ${repo.review_status} | ${cell(repo.risk_note ?? '')} |\n`;
  }
  output += '\n';
}
output += `## Priority interpretation\n\nHigh-adoption, actively pushed skill collections such as mattpocock/skills, obra/superpowers, addyosmani/agent-skills, DietrichGebert/ponytail, Graphify, UI/UX Pro Max, Taste, and Impeccable deserve focused review, not automatic installation. They overlap and several rely on installer CLIs, plugins, external binaries, or strongly prescriptive workflows. VibeSoft installs none of them from this external list.\n\n`;
output += `For immediate use, the four first-party skills shipped in this repository are the only entries approved in the install manifest. They are small, instruction-only, MIT-licensed with the repository, and use the shared Agent Skills ` + '`SKILL.md`' + ` format.\n`;
fs.writeFileSync(path.join(root, 'SKILL-CATALOG.md'), output, 'utf8');
console.log(`Rendered ${data.repositories.length} external repository reviews to SKILL-CATALOG.md.`);
