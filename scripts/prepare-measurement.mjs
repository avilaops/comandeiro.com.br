import { readdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, join, basename } from 'node:path';
import { pathToFileURL } from 'node:url';

export async function prepareMeasurement(directory) {
  const root = resolve(directory);
  if (basename(root) !== '_site') throw new Error('Expected the isolated _site publication artifact');
  const target = join(root, 'measurement/sites.json');
  const config = JSON.parse(await readFile(target));
  if (config.sites.length !== 1 || config.sites[0].domain !== 'comandeiro.com.br') throw new Error('Unexpected measurement destination');
  const files = (await readdir(root, { recursive: true })).map(path => path.replaceAll('\\', '/'));
  const pages = files.filter(path => path.endsWith('.html') && !['404.html', '404/index.html'].includes(path) && !path.startsWith('operacao/'));
  const routes = pages.map(path => '/' + path.replace(/(^|\/)index\.html$/, '$1').replace(/\.html$/, '')).sort();
  if (!routes.includes('/')) throw new Error('Missing public root');
  for (const page of pages) {
    const file = join(root, page);
    const html = await readFile(file, 'utf8');
    if (!html.includes('data-avila-measurement')) {
      if ((html.match(/<\/head>/gi) || []).length !== 1) throw new Error('Expected one public head: ' + page);
      await writeFile(file, html.replace(/<\/head>/i, '<script type="module" src="/measurement/site.mjs" data-avila-measurement></script>\n</head>'));
    }
  }
  config.sites[0].publicPaths = routes;
  await writeFile(target, JSON.stringify(config, null, 2) + '\n');
  console.log('Medição Comandeiro • ' + routes.length + ' páginas públicas');
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) await prepareMeasurement(process.argv[2] || '_site');
