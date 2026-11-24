#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const skills = JSON.parse(fs.readFileSync(path.join(root, 'manifest', 'skills.json'), 'utf8'));
const agents = JSON.parse(fs.readFileSync(path.join(root, 'manifest', 'agents.json'), 'utf8'));
const candidates = JSON.parse(fs.readFileSync(path.join(root, 'manifest', 'candidates.json'), 'utf8'));
const ids = new Set();
let errors = 0;
function fail(message) { console.error(`FAIL ${message}`); errors += 1; }

for (const skill of skills.skills) {
  if (ids.has(skill.id)) fail(`duplicate skill id: ${skill.id}`);
  ids.add(skill.id);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(skill.id)) fail(`invalid skill id: ${skill.id}`);
  if (!skill.description || skill.description.length > 1024) fail(`invalid description: ${skill.id}`);
  if (!['approved', 'pending', 'rejected'].includes(skill.review_status)) fail(`invalid review status: ${skill.id}`);
  if (skill.installable && skill.review_status !== 'approved') fail(`unapproved skill marked installable: ${skill.id}`);
  const dir = path.resolve(root, skill.path);
  const skillsRoot = path.resolve(root, 'skills');
  const relative = path.relative(skillsRoot, dir);
  if (relative.startsWith('..') || path.isAbsolute(relative) || relative === '') fail(`skill path escapes skills/: ${skill.id}`);
  const file = path.join(dir, 'SKILL.md');
  if (!fs.existsSync(file)) fail(`missing SKILL.md: ${skill.id}`);
  else {
    const content = fs.readFileSync(file, 'utf8');
    if (!content.startsWith('---\n') || !/^name:\s*\S+/m.test(content) || !/^description:\s*\S+/m.test(content)) fail(`invalid frontmatter: ${skill.id}`);
  }
  for (const agent of skill.supported_agents) if (!agents.agents[agent]?.verified) fail(`unsupported agent ${agent} in ${skill.id}`);
}

const repoIds = new Set();
for (const repo of candidates.repositories) {
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repo.repo)) fail(`invalid GitHub repository: ${repo.repo}`);
  if (repoIds.has(repo.repo.toLowerCase())) fail(`duplicate repository: ${repo.repo}`);
  repoIds.add(repo.repo.toLowerCase());
  if (repo.installable === true || repo.review_status === 'approved') fail(`external candidate cannot be installable without separate approved source pin: ${repo.repo}`);
  if (!Number.isInteger(repo.stars) || !Number.isInteger(repo.forks)) fail(`missing popularity snapshot: ${repo.repo}`);
}

function markdownFiles(folder) {
  const files = [];
  for (const entry of fs.readdirSync(folder, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const full = path.join(folder, entry.name);
    if (entry.isDirectory()) files.push(...markdownFiles(full));
    else if (entry.isFile() && /\.md$/i.test(entry.name)) files.push(full);
  }
  return files;
}

for (const file of markdownFiles(root)) {
  const content = fs.readFileSync(file, 'utf8');
  const links = content.matchAll(/\[[^\]]*\]\(([^)]+)\)/g);
  for (const [, rawTarget] of links) {
    const target = rawTarget.split('#')[0].trim();
    if (!target || /^(?:https?:|mailto:|data:)/i.test(target)) continue;
    let decoded;
    try { decoded = decodeURIComponent(target); } catch { fail(`invalid link encoding in ${path.relative(root, file)}: ${target}`); continue; }
    const resolved = path.resolve(path.dirname(file), decoded);
    if (!fs.existsSync(resolved)) fail(`broken internal link in ${path.relative(root, file)}: ${target}`);
  }
}

if (errors) process.exitCode = 1;
else console.log(`Validated ${skills.skills.length} bundled skills, ${Object.keys(agents.agents).length} agent entries, ${candidates.repositories.length} external repositories, and internal Markdown links.`);
