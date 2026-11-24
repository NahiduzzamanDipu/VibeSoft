#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import readline from 'node:readline/promises';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const skillsManifest = JSON.parse(fs.readFileSync(path.join(repoRoot, 'manifest', 'skills.json'), 'utf8'));
const agentsManifest = JSON.parse(fs.readFileSync(path.join(repoRoot, 'manifest', 'agents.json'), 'utf8'));

export function parseArgs(argv) {
  const options = { skill: [], category: [], scope: 'project', dryRun: false, yes: false, replace: false, uninstall: false, force: false, detect: false };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const value = () => {
      const next = argv[++i];
      if (!next || next.startsWith('--')) throw new Error(`Missing value for ${arg}`);
      return next;
    };
    if (arg === '--agent') options.agent = value();
    else if (arg === '--scope') options.scope = value();
    else if (arg === '--project') options.project = value();
    else if (arg === '--skill') options.skill.push(...value().split(',').filter(Boolean));
    else if (arg === '--category') options.category.push(...value().split(',').filter(Boolean));
    else if (arg === '--all') options.all = true;
    else if (arg === '--dry-run') options.dryRun = true;
    else if (arg === '--yes') options.yes = true;
    else if (arg === '--replace' || arg === '--update') options.replace = true;
    else if (arg === '--uninstall') options.uninstall = true;
    else if (arg === '--force') options.force = true;
    else if (arg === '--detect') options.detect = true;
    else if (arg === '--help' || arg === '-h') options.help = true;
    else throw new Error(`Unknown option: ${arg}`);
  }
  return options;
}

function expandHome(value) {
  return value.replace(/^~(?=$|[\\/])/, os.homedir());
}

export function resolveInstallRoot(agent, scope, projectPath = process.cwd()) {
  const config = agentsManifest.agents[agent];
  if (!config) throw new Error(`Unknown agent '${agent}'. Choose: ${Object.keys(agentsManifest.agents).join(', ')}`);
  if (!config.verified || !config[`${scope}_path`]) throw new Error(`${config.label} has no verified ${scope}-scope SKILL.md installation path. No files were changed.`);
  if (scope === 'project') {
    const project = path.resolve(projectPath);
    if (!fs.existsSync(project) || !fs.statSync(project).isDirectory()) throw new Error(`Project directory does not exist: ${project}`);
    return path.resolve(fs.realpathSync(project), config.project_path);
  }
  if (scope !== 'user') throw new Error("Scope must be 'project' or 'user'.");

  if (agent === 'codex') {
    const codexHome = process.env.CODEX_HOME ? path.resolve(expandHome(process.env.CODEX_HOME)) : path.join(fs.realpathSync(os.homedir()), '.codex');
    return path.join(codexHome, 'skills');
  }
  return path.resolve(expandHome(config.user_path));
}

export function detectAgents(home = os.homedir()) {
  const realHome = fs.realpathSync(home);
  const checks = {
    codex: [path.join(realHome, '.codex'), process.env.CODEX_HOME].filter(Boolean),
    'claude-code': [path.join(realHome, '.claude')],
    cursor: [path.join(realHome, '.cursor')],
    'gemini-cli': [path.join(realHome, '.gemini')],
    opencode: [path.join(realHome, '.config', 'opencode')],
    'github-copilot': [path.join(realHome, '.copilot')],
    windsurf: [path.join(realHome, '.codeium', 'windsurf')]
  };
  return Object.entries(checks).filter(([, paths]) => paths.some((candidate) => candidate && fs.existsSync(path.resolve(expandHome(candidate))))).map(([id]) => id);
}

function isWithin(parent, child) {
  const rel = path.relative(parent, child);
  return rel === '' || (!rel.startsWith(`..${path.sep}`) && rel !== '..' && !path.isAbsolute(rel));
}

function assertNoSymlinkComponents(destination) {
  const absolute = path.resolve(destination);
  const root = path.parse(absolute).root;
  const parts = absolute.slice(root.length).split(path.sep).filter(Boolean);
  let current = root;
  for (const part of parts) {
    current = path.join(current, part);
    if (!fs.existsSync(current)) continue;
    if (fs.lstatSync(current).isSymbolicLink()) throw new Error(`Refusing a symlink in the destination path: ${current}`);
  }
}

function getSkill(id) {
  const entry = skillsManifest.skills.find((item) => item.id === id);
  if (!entry || !entry.installable || entry.review_status !== 'approved') throw new Error(`Skill '${id}' is not an approved installable skill.`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) throw new Error(`Unsafe skill identifier: ${id}`);
  if (!entry.supported_agents.includes(currentAgent)) throw new Error(`Skill '${id}' is not approved for ${currentAgent}.`);
  const source = path.resolve(repoRoot, entry.path);
  if (!isWithin(path.join(repoRoot, 'skills'), source)) throw new Error(`Skill source escapes skills/: ${entry.path}`);
  const skillFile = path.join(source, 'SKILL.md');
  if (!fs.existsSync(skillFile) || !fs.statSync(skillFile).isFile()) throw new Error(`Missing SKILL.md: ${entry.path}`);
  const content = fs.readFileSync(skillFile, 'utf8');
  if (!/^---\r?\n/.test(content) || !/^name:\s*\S+/m.test(content) || !/^description:\s*\S+/m.test(content)) throw new Error(`Invalid Agent Skills frontmatter: ${entry.path}/SKILL.md`);
  return { ...entry, source };
}

function listRegularFiles(source) {
  const results = [];
  for (const dirent of fs.readdirSync(source, { withFileTypes: true })) {
    const full = path.join(source, dirent.name);
    if (dirent.isSymbolicLink()) throw new Error(`Refusing symlink in skill source: ${full}`);
    if (dirent.isDirectory()) results.push(...listRegularFiles(full));
    else if (dirent.isFile()) results.push(full);
    else throw new Error(`Refusing special file in skill source: ${full}`);
  }
  return results;
}

function treeHash(root) {
  const hash = crypto.createHash('sha256');
  for (const file of listRegularFiles(root).filter((item) => path.basename(item) !== '.vibesoft-origin.json').sort()) {
    hash.update(path.relative(root, file).replaceAll(path.sep, '/') + '\0');
    hash.update(fs.readFileSync(file));
  }
  return hash.digest('hex');
}

function copySkill(source, target) {
  for (const file of listRegularFiles(source)) {
    const relative = path.relative(source, file);
    const destination = path.resolve(target, relative);
    if (!isWithin(target, destination)) throw new Error(`Skill file escapes install folder: ${relative}`);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.copyFileSync(file, destination, fs.constants.COPYFILE_EXCL);
  }
}

async function confirm(options, message) {
  if (options.dryRun) return true;
  if (options.yes) return true;
  if (!process.stdin.isTTY) throw new Error('This action needs confirmation. Re-run interactively or pass --yes after reviewing the plan.');
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  try { return (await rl.question(`${message} [y/N] `)).trim().toLowerCase() === 'y'; }
  finally { rl.close(); }
}

function copyInstalledSkill(entry, target, options) {
  assertNoSymlinkComponents(target);
  if (fs.existsSync(target)) {
    if (!options.replace) {
      console.log(`SKIP ${entry.id}: destination already exists (use --update to back it up before replacing).`);
      return 'skipped';
    }
    const backupRoot = path.join(path.dirname(target), '.vibesoft-backups');
    const backup = path.join(backupRoot, `${entry.id}-${new Date().toISOString().replaceAll(':', '-')}-${crypto.randomBytes(3).toString('hex')}`);
    fs.mkdirSync(backupRoot, { recursive: true });
    const stage = path.join(path.dirname(target), `.${entry.id}.vibesoft-stage-${crypto.randomBytes(6).toString('hex')}`);
    fs.mkdirSync(stage, { recursive: false });
    try {
      copySkill(entry.source, stage);
      const sourceHash = treeHash(entry.source);
      const stagedHash = treeHash(stage);
      if (sourceHash !== stagedHash) throw new Error(`Copied content verification failed for ${entry.id}.`);
      const marker = {
        managed_by: 'VibeSoft installer',
        skill_id: entry.id,
        source_repository: entry.source_repository,
        installed_at: new Date().toISOString(),
        sha256: stagedHash
      };
      fs.writeFileSync(path.join(stage, '.vibesoft-origin.json'), `${JSON.stringify(marker, null, 2)}\n`, { flag: 'wx' });
      if (fs.existsSync(target)) {
        fs.renameSync(target, backup);
        console.log(`Backup: ${backup}`);
      }
      try { fs.renameSync(stage, target); }
      catch (error) {
        if (fs.existsSync(backup) && !fs.existsSync(target)) fs.renameSync(backup, target);
        throw error;
      }
      console.log(`INSTALLED ${entry.id}: ${target} (verified SHA-256 ${stagedHash})`);
      return 'installed';
    } catch (error) {
      if (fs.existsSync(stage)) fs.rmSync(stage, { recursive: true, force: true });
      throw error;
    }
  }
  const stage = path.join(path.dirname(target), `.${entry.id}.vibesoft-stage-${crypto.randomBytes(6).toString('hex')}`);
  fs.mkdirSync(stage, { recursive: false });
  try {
    copySkill(entry.source, stage);
    const sourceHash = treeHash(entry.source);
    const stagedHash = treeHash(stage);
    if (sourceHash !== stagedHash) throw new Error(`Copied content verification failed for ${entry.id}.`);
    const marker = {
      managed_by: 'VibeSoft installer',
      skill_id: entry.id,
      source_repository: entry.source_repository,
      installed_at: new Date().toISOString(),
      sha256: stagedHash
    };
    fs.writeFileSync(path.join(stage, '.vibesoft-origin.json'), `${JSON.stringify(marker, null, 2)}\n`, { flag: 'wx' });
    fs.renameSync(stage, target);
    console.log(`INSTALLED ${entry.id}: ${target} (verified SHA-256 ${stagedHash})`);
  } catch (error) {
    if (fs.existsSync(stage)) fs.rmSync(stage, { recursive: true, force: true });
    throw error;
  }
  return 'installed';
}

function uninstallSkill(id, root, options) {
  const target = path.resolve(root, id);
  if (!isWithin(root, target) || target === root) throw new Error(`Unsafe uninstall destination: ${target}`);
  if (!fs.existsSync(target)) { console.log(`SKIP ${id}: not installed at ${target}`); return 'skipped'; }
  const markerPath = path.join(target, '.vibesoft-origin.json');
  if (!fs.existsSync(markerPath)) throw new Error(`Refusing to remove unmanaged directory: ${target}`);
  const marker = JSON.parse(fs.readFileSync(markerPath, 'utf8'));
  if (marker.managed_by !== 'VibeSoft installer' || marker.skill_id !== id) throw new Error(`Invalid ownership marker: ${target}`);
  if (treeHash(target) !== marker.sha256 && !options.force) throw new Error(`Skill '${id}' changed since installation. Refusing removal; inspect it and use --force only if you want to discard those edits.`);
  if (options.dryRun) { console.log(`WOULD REMOVE ${id}: ${target}`); return 'would-remove'; }
  fs.rmSync(target, { recursive: true, force: false });
  console.log(`REMOVED ${id}: ${target}`);
  return 'removed';
}

function printHelp() {
  console.log(`VibeSoft safe skill installer\n\nUsage:\n  node installer/install.mjs --agent <id> --scope <project|user> [--project PATH] (--skill ID[,ID] | --category ID[,ID] | --all) [--dry-run] [--yes] [--update]\n  node installer/install.mjs --agent <id> --scope <project|user> --skill ID --uninstall [--force]\n  node installer/install.mjs --detect\n\nAvailable agents: ${Object.keys(agentsManifest.agents).join(', ')}\nAvailable skills: ${skillsManifest.skills.map((skill) => `${skill.id} (${skill.category})`).join(', ')}\n\nThird-party candidates are not installable from this catalog. The installer only copies reviewed skills shipped in this repository. --update backs up existing managed destinations before replacing them.`);
}

let currentAgent;
export async function run(argv = process.argv.slice(2)) {
  const options = parseArgs(argv);
  if (options.help) return printHelp();
  if (options.detect) {
    const detected = detectAgents();
    console.log(detected.length ? `Detected configuration directories: ${detected.join(', ')}. Choose --agent explicitly; detection does not infer the active client.` : 'No known agent configuration directories detected. Choose --agent explicitly if the agent supports Agent Skills.');
    return;
  }
  if (!options.agent) throw new Error('--agent is required.');
  if (!['project', 'user'].includes(options.scope)) throw new Error("--scope must be 'project' or 'user'.");
  currentAgent = options.agent;
  const root = resolveInstallRoot(options.agent, options.scope, options.project);
  assertNoSymlinkComponents(root);
  const selectedIds = options.all
    ? skillsManifest.skills.filter((skill) => skill.installable && skill.review_status === 'approved' && skill.supported_agents.includes(options.agent)).map((skill) => skill.id)
    : skillsManifest.skills.filter((skill) => (options.skill.includes(skill.id) || options.category.includes(skill.category)) && skill.installable && skill.review_status === 'approved' && skill.supported_agents.includes(options.agent)).map((skill) => skill.id);
  if (options.uninstall && !options.skill.length) throw new Error('--uninstall requires one or more --skill IDs.');
  if (!options.uninstall && options.skill.some((id) => !selectedIds.includes(id))) throw new Error('One or more selected skills are unknown, unapproved, or incompatible. Nothing was changed.');
  if (!options.uninstall && !selectedIds.length) throw new Error('Select skills with --skill, --category, or --all. Nothing was changed.');
  const ids = options.uninstall ? options.skill : [...new Set(selectedIds)];
  const entries = options.uninstall ? [] : ids.map(getSkill);
  console.log(`${options.dryRun ? 'DRY RUN: ' : ''}${options.uninstall ? 'Uninstall' : 'Install'} ${ids.join(', ')} for ${options.agent} (${options.scope}) at ${root}`);
  if (!await confirm(options, options.scope === 'user' ? 'This writes to your user-level skills directory. Continue?' : 'Write the selected skills into this project?')) {
    console.log('Cancelled. No files were changed.'); return;
  }
  if (!options.dryRun && !options.uninstall) fs.mkdirSync(root, { recursive: true });
  if (options.uninstall) {
    for (const id of ids) uninstallSkill(id, root, options);
  } else {
    for (const entry of entries) {
      const target = path.resolve(root, entry.id);
      if (!isWithin(root, target) || target === root) throw new Error(`Unsafe install destination: ${target}`);
      if (options.dryRun) console.log(`WOULD INSTALL ${entry.id}: ${target}`);
      else copyInstalledSkill(entry, target, options);
    }
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  run().catch((error) => { console.error(`Error: ${error.message}`); process.exitCode = 1; });
}
