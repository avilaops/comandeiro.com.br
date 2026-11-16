import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname, basename, resolve } from 'node:path';
import { prepareMeasurement } from './prepare-measurement.mjs';

test('only exported public HTML obtains one startup and an exact route inventory', async t => {
  const temp = await mkdtemp(join(tmpdir(), 'comandeiro-measurement-'));
  t.after(async () => {
    assert.equal(dirname(resolve(temp)), resolve(tmpdir()));
    assert.ok(basename(temp).startsWith('comandeiro-measurement-'));
    await rm(temp, { recursive: true, force: true });
  });
  const root = join(temp, '_site');
  await mkdir(join(root, 'measurement'), { recursive: true });
  await mkdir(join(root, 'guia', 'exemplo'), { recursive: true });
  await mkdir(join(root, 'operacao'), { recursive: true });
  const html = '<html><head><title>Site</title></head><body>Conteúdo público</body></html>';
  for (const file of ['index.html', '404.html', 'guia/exemplo/index.html', 'operacao/index.html']) await writeFile(join(root, file), html);
  await writeFile(join(root, 'measurement/sites.json'), JSON.stringify({sites:[{domain:'comandeiro.com.br',measurementId:'G-8TEMG79FDL',publicPaths:[]}]}));
  await prepareMeasurement(root);
  await prepareMeasurement(root);
  const config = JSON.parse(await readFile(join(root, 'measurement/sites.json')));
  assert.deepEqual(config.sites[0].publicPaths, ['/', '/guia/exemplo/']);
  for (const file of ['index.html', 'guia/exemplo/index.html']) assert.equal((await readFile(join(root, file), 'utf8')).match(/data-avila-measurement/g).length, 1);
  for (const file of ['404.html', 'operacao/index.html']) assert.equal(await readFile(join(root, file), 'utf8'), html);
});
