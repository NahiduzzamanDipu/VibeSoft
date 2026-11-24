import test from 'node:test';
import assert from 'node:assert/strict';
import { rankRepository } from '../scripts/catalog.mjs';

test('ranking stays bounded and rewards real maintenance signals', () => {
  const recent = rankRepository({ stars: 1000, forks: 100, pushed_at: '2026-11-20T00:00:00Z', license: 'MIT' }, new Date('2026-11-24T00:00:00Z'));
  const stale = rankRepository({ stars: 1000, forks: 100, pushed_at: '2024-01-01T00:00:00Z', license: 'MIT' }, new Date('2026-11-24T00:00:00Z'));
  assert.ok(recent >= 0 && recent <= 100);
  assert.ok(stale >= 0 && stale <= 100);
  assert.ok(recent > stale);
});

test('unknown licenses receive no license score and do not imply approval', () => {
  const noLicense = rankRepository({ stars: 50_000, forks: 5_000, pushed_at: '2026-11-23T00:00:00Z', license: null }, new Date('2026-11-24T00:00:00Z'));
  const permissive = rankRepository({ stars: 50_000, forks: 5_000, pushed_at: '2026-11-23T00:00:00Z', license: 'MIT' }, new Date('2026-11-24T00:00:00Z'));
  assert.ok(permissive > noLicense);
});
