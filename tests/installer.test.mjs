import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parseArgs, resolveInstallRoot } from '../installer/install.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const installer = path.join(root, 'installer', 'install.mjs');

function cli(args) {
  return spawnSync(process.execPath, [installer, ...args], { cwd: root, encoding: 'utf8' });
}

test('parses explicit install flags and selection', () => {
  assert.deepEqual(parseArgs(['--agent', 'codex', '--scope', 'project', '--skill', 'frontend-design,webapp-testing', '--dry-run']), {
    skill: ['frontend-design', 'webapp-testing'], category: [], scope: 'project', dryRun: true,
    yes: false, replace: false, uninstall: false, force: false, detect: false, agent: 'codex'
  });
});

test('refuses agents without a verified SKILL.md destination', () => {
  assert.throws(() => resolveInstallRoot('windsurf', 'project'), /no verified project-scope/i);
});

test('dry-run is read-only', () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'vibesoft-dry-'));
  try {
    const result = cli(['--agent', 'cursor', '--scope', 'project', '--project', temp, '--skill', 'frontend-design', '--dry-run']);
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /WOULD INSTALL frontend-design/);
    assert.equal(fs.existsSync(path.join(temp, '.cursor', 'skills')), false);
  } finally { fs.rmSync(temp, { recursive: true, force: true }); }
});

test('install skips existing destinations and update keeps a backup', () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'vibesoft-update-'));
  try {
    const base = ['--agent', 'codex', '--scope', 'project', '--project', temp, '--skill', 'frontend-design'];
    let result = cli([...base, '--yes']);
    assert.equal(result.status, 0, result.stderr);
    const installed = path.join(temp, '.agents', 'skills', 'frontend-design');
    assert.equal(fs.existsSync(path.join(installed, 'SKILL.md')), true);
    result = cli([...base, '--yes']);
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /SKIP frontend-design/);
    result = cli([...base, '--yes', '--update']);
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /Backup:/);
    assert.equal(fs.existsSync(path.join(temp, '.agents', 'skills', '.vibesoft-backups')), true);
  } finally { fs.rmSync(temp, { recursive: true, force: true }); }
});

test('uninstall requires VibeSoft ownership and protects local edits', () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'vibesoft-remove-'));
  try {
    const base = ['--agent', 'codex', '--scope', 'project', '--project', temp, '--skill', 'frontend-design'];
    let result = cli([...base, '--yes']);
    assert.equal(result.status, 0, result.stderr);
    const skillFile = path.join(temp, '.agents', 'skills', 'frontend-design', 'SKILL.md');
    fs.appendFileSync(skillFile, '\nlocal edit\n');
    result = cli([...base, '--yes', '--uninstall', '--dry-run', '--force']);
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /WOULD REMOVE/);
    assert.equal(fs.existsSync(path.dirname(skillFile)), true);
    result = cli([...base, '--yes', '--uninstall']);
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /Refusing removal/);
    result = cli([...base, '--yes', '--uninstall', '--force']);
    assert.equal(result.status, 0, result.stderr);
    assert.equal(fs.existsSync(path.dirname(skillFile)), false);
  } finally { fs.rmSync(temp, { recursive: true, force: true }); }
});

test('rejects unapproved external skills', () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'vibesoft-pending-'));
  try {
    const result = cli(['--agent', 'codex', '--scope', 'project', '--project', temp, '--skill', 'unslop', '--yes']);
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /unknown, unapproved, or incompatible/);
    assert.equal(fs.existsSync(path.join(temp, '.agents')), false);
  } finally { fs.rmSync(temp, { recursive: true, force: true }); }
});
