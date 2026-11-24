#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const catalogPath = path.join(root, 'manifest', 'candidates.json');
const pendingRoot = path.join(root, 'pending');
const now = new Date();

export function rankRepository(repo, nowDate = now) {
  const starScore = Math.min(1, Math.log10((repo.stars ?? 0) + 1) / 6);
  const forkScore = Math.min(1, Math.log10((repo.forks ?? 0) + 1) / 5);
  const lastPush = repo.pushed_at ? Date.parse(repo.pushed_at) : 0;
  const days = lastPush ? Math.max(0, (nowDate.getTime() - lastPush) / 86_400_000) : 3650;
  const activityScore = Math.max(0, Math.exp(-days / 180));
  const licenseText = String(repo.license ?? '').toLowerCase();
  const licenseScore = licenseText === 'mit' || licenseText.includes('apache-2.0') || licenseText.includes('bsd') ? 1
    : licenseText.includes('gpl') || licenseText.includes('agpl') ? 0.45 : 0;
  const score = (starScore * 0.35) + (forkScore * 0.15) + (activityScore * 0.30) + (licenseScore * 0.20);
  return Math.round(score * 1000) / 10;
}

async function github(url) {
  const headers = { 'Accept': 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', 'User-Agent': 'VibeSoft-Skills-Hub' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const response = await fetch(url, { headers, signal: AbortSignal.timeout(20_000) });
  if (!response.ok) throw new Error(`GitHub API ${response.status} for ${url}`);
  return response.json();
}

function writeJsonAtomic(destination, value) {
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  const temp = `${destination}.tmp`;
  fs.writeFileSync(temp, `${JSON.stringify(value, null, 2)}\n`, { flag: 'w' });
  fs.renameSync(temp, destination);
}

async function refresh() {
  const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
  let updated = 0;
  for (const item of catalog.repositories) {
    const metadata = await github(`https://api.github.com/repos/${item.repo}`);
    item.stars = metadata.stargazers_count;
    item.forks = metadata.forks_count;
    item.pushed_at = metadata.pushed_at;
    item.updated_at = metadata.updated_at;
    item.archived = metadata.archived;
    item.open_issues = metadata.open_issues_count;
    item.license = metadata.license?.spdx_id ?? item.license ?? null;
    item.default_branch = metadata.default_branch;
    item.last_verified = now.toISOString().slice(0, 10);
    item.rank_score = rankRepository(item);
    if (metadata.archived && !['tool-only', 'catalog-only', 'deprecated'].includes(item.review_status)) item.review_status = 'flagged-archived';
    else if (!metadata.archived && item.review_status === 'flagged-archived') item.review_status = 'pending';
    updated += 1;
  }
  catalog.snapshot_date = now.toISOString().slice(0, 10);
  writeJsonAtomic(catalogPath, catalog);
  console.log(`Updated metadata for ${updated} repositories. Review status was not promoted automatically.`);
}

const queries = [
  '"agent skills" in:readme stars:>25',
  '"SKILL.md" "Codex" in:readme stars:>25',
  '"Claude Code" "skills" in:readme stars:>25',
  '"Cursor skills" in:readme stars:>25',
  '"frontend skill" OR "UI UX skill" in:readme stars:>25',
  '"security skill" OR "testing skill" in:readme stars:>25',
  '"DevOps skill" OR "AI agent skill" in:readme stars:>25'
];

async function discover() {
  const known = new Set(JSON.parse(fs.readFileSync(catalogPath, 'utf8')).repositories.map((entry) => entry.repo.toLowerCase()));
  const found = new Map();
  for (const q of queries) {
    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(q)}&sort=updated&order=desc&per_page=100`;
    const response = await github(url);
    for (const repo of response.items ?? []) {
      const fullName = repo.full_name.toLowerCase();
      if (known.has(fullName) || repo.archived || repo.disabled) continue;
      found.set(fullName, {
        repo: repo.full_name,
        owner: repo.owner?.login ?? repo.full_name.split('/')[0],
        url: repo.html_url,
        description: repo.description,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        open_issues: repo.open_issues_count,
        updated_at: repo.updated_at,
        pushed_at: repo.pushed_at,
        default_branch: repo.default_branch,
        license: repo.license?.spdx_id ?? null,
        rank_score: rankRepository({ stars: repo.stargazers_count, forks: repo.forks_count, pushed_at: repo.pushed_at, license: repo.license?.spdx_id }),
        lifecycle: 'discovered',
        review_status: 'pending-human-review',
        compatible_agents: [],
        source_pin: null,
        discovered_on: now.toISOString().slice(0, 10),
        review_required: ['README/doc review', 'license confirmation', 'skill content and script review', 'agent compatibility verification', 'usefulness and duplication review']
      });
    }
  }
  const output = {
    schema_version: 1,
    created_at: now.toISOString(),
    note: 'Discovery metadata is a triage aid only. Entries are not approved, trusted, or installable.',
    repositories: [...found.values()].sort((a, b) => b.rank_score - a.rank_score)
  };
  fs.mkdirSync(pendingRoot, { recursive: true });
  const file = path.join(pendingRoot, `discovery-${now.toISOString().slice(0, 10)}.json`);
  writeJsonAtomic(file, output);
  console.log(`Queued ${output.repositories.length} repositories for human review at ${path.relative(root, file)}.`);
}

export { refresh, discover };

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const command = process.argv[2];
  if (command === 'refresh') refresh().catch((error) => { console.error(error.message); process.exitCode = 1; });
  else if (command === 'discover') discover().catch((error) => { console.error(error.message); process.exitCode = 1; });
  else {
    console.error('Usage: node scripts/catalog.mjs <refresh|discover>');
    process.exitCode = 2;
  }
}
