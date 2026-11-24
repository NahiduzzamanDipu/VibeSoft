import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const scores = JSON.parse(fs.readFileSync(path.join(root, 'manifest', 'design-evaluations.json'), 'utf8'));
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'manifest', 'candidates.json'), 'utf8'));
const byRepo = new Map(catalog.repositories.map((repo) => [repo.repo, repo]));
const skillPaths = {
  'heydamir/unslop': 'skills/unslop/SKILL.md',
  'pbakaus/impeccable': '.agents/skills/impeccable/SKILL.md',
  'Nutlope/hallmark': 'skills/hallmark/SKILL.md',
  'Leonxlnx/taste-skill': 'skills/taste-skill/SKILL.md',
  'wwewtech/anti-slop-design': 'skills/anti-slop-design/SKILL.md',
  'elayadesign/ai-design-skills': 'skills/landing-page-design/SKILL.md',
  'emilkowalski/skills': 'skills/learn-taste/SKILL.md',
  'jakubkrehel/skills': 'skills/better-ui/SKILL.md',
  'nextlevelbuilder/ui-ux-pro-max-skill': '.claude/skills/ui-ux-pro-max/SKILL.md',
  'anthropics/skills': 'skills/frontend-design/SKILL.md',
  'h3nryprod01/design-taste': 'SKILL.md',
  'microsoft/playwright-cli': 'skills/playwright-cli/SKILL.md',
  'JaimeJunr/claude-code-frontend-skills': 'plugins/frontend-stack/skills/frontend-stack/SKILL.md'
};
if (scores.dimensions_order.length !== 14) throw new Error('Expected fourteen design evaluation dimensions.');
let out = `# Elite Design Skills Review\n\n`;
out += `Static review dated **${scores.reviewed_on}**. ${scores.method}\n\n`;
out += `## Evaluation method\n\n${scores.scale}\n\n`;
out += `The vector order is: ${scores.dimensions_order.map((name, i) => `\`${i + 1}\` ${name.replaceAll('_', ' ')}`).join('; ')}. The scores are evidence tags for capability, not a universal quality rank and not user study results. A low or zero score on a browser tool's design dimensions means that design judgment is outside its purpose.\n\n`;
out += `| Class | What it means |\n| --- | --- |\n| A · Transformation | Changes art direction or meaningfully redesigns a screen/page. |\n| B · Polish | Improves detail, motion, or an existing direction; may not redefine it. |\n| C · Design system | Supplies tokens, components, rules, or searchable system guidance. |\n| D · Visual verification | Inspects rendered output or automates browser evidence. |\n| Catalog/router | Collects sources or routes skills; not an individual design implementation skill. |\n\n`;
for (const item of scores.repositories) {
  const repo = byRepo.get(item.repo);
  if (!repo) throw new Error(`Missing candidate metadata for ${item.repo}`);
  if (item.scores.length !== scores.dimensions_order.length) throw new Error(`Score vector length mismatch for ${item.repo}`);
  const commit = item.source_commit;
  const base = `https://github.com/${item.repo}/tree/${commit}`;
  const skill = skillPaths[item.repo] ? `[\`SKILL.md\`](${base}/${skillPaths[item.repo]})` : 'No SKILL.md found; README/catalog only.';
  const readme = `[README/docs](${base}/README.md)`;
  const licenseFile = item.repo === 'anthropics/skills' ? `[per-skill license](${base}/skills/frontend-design/LICENSE.txt)` : `[license](${base}/LICENSE)`;
  const scoreStr = item.scores.map((x) => `${x}`).join(' · ');
  const owner = item.repo.split('/')[0];
  out += `## [${item.repo}](https://github.com/${item.repo}) · [@${owner}](https://github.com/${owner}) — ${item.class}\n\n`;
  out += `- Snapshot: **${repo.stars.toLocaleString('en-US')} stars**, **${repo.forks.toLocaleString('en-US')} forks**, last push **${repo.pushed_at}**; inspected source commit [\`${commit.slice(0, 12)}\`](${base}).\n`;
  out += `- License: **${repo.license ?? 'No root license declared in GitHub metadata'}**. Evidence: ${readme}, ${skill}, ${licenseFile}.\n`;
  out += `- Compatibility: ${repo.compatibility}.\n`;
  out += `- Installation/dependencies and code risk: ${repo.risk_note ?? 'Review README install guidance and any scripts before use.'}\n`;
  out += `- Scores, in rubric order: \`${scoreStr}\`.\n`;
  out += `- Evidence: ${item.evidence}\n`;
  out += `- Limits: ${item.limits}\n`;
  out += `- VibeSoft decision: **${repo.review_status === 'tool-only' || repo.review_status === 'catalog-only' ? repo.review_status : 'reference-only, not approved or installable'}**.\n\n`;
}
out += `## VibeSoft orchestration choice\n\nUse the first-party [Design Intelligence Director](skills/design-intelligence/SKILL.md) to pick one lead and at most two relevant specialists. For an existing generic UI, choose one transformation lead (for example Unslop or Impeccable if already installed); for a new page, choose one new-page art director (for example Hallmark or Taste); choose the design-system reference separately; use Playwright CLI or another available browser only for rendered QA. Do not load several broad design skills together. External repositories remain unbundled until their source, license, dependencies, hooks, install scripts, compatibility, and pinned version receive explicit review.\n\n`;
out += `## Repeatable output review prompts\n\nUse the same project and screenshot/browser setup for each candidate when comparing real outputs:\n\n1. “Redesign this existing analytics screen for operations staff. Keep all current data and actions. Show your visual direction first; then implement and verify the result at desktop, tablet, and phone widths.”\n2. “Build a new landing page for this product brief and audience. Avoid assuming a standard hero or card pattern; explain your choices, implement real content, and inspect the rendered page at three widths.”\n3. “Review this implemented checkout flow. Find the three highest-impact visual, interaction, accessibility, and responsive defects; fix them and recheck the affected states.”\n\nHuman reviewers should compare task completion, visual specificity to brief, responsive captures, keyboard behavior, reduced-motion handling, and maintainability. This repository has not run these comparative prompts; no performance improvement is claimed.\n`;
fs.writeFileSync(path.join(root, 'DESIGN-SKILLS.md'), out, 'utf8');
console.log(`Rendered ${scores.repositories.length} evidence-based design skill reviews to DESIGN-SKILLS.md.`);
