import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { emulators, games, languages } from '../src/data.mjs';
import { tools } from '../src/tools.mjs';
import { platforms } from '../src/platforms.mjs';
import { copy } from '../src/i18n.mjs';
import { renderReleaseList } from '../src/releases.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = resolve(root, 'dist');
const origin = new URL(process.env.SITE_URL || 'https://switch2e.com').origin;

// A static build must work without contacting any upstream service.
const originalFetch = globalThis.fetch;
globalThis.fetch = () => { throw new Error('Static builds must not use the network'); };
try {
  await import('../scripts/build.mjs');
} finally {
  globalThis.fetch = originalFetch;
}

async function files(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => {
    const path = resolve(directory, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  }))).flat();
}

const outputFiles = await files(output);
const documents = new Map(await Promise.all(outputFiles
  .filter(file => file.endsWith('.html'))
  .map(async file => [file, await readFile(file, 'utf8')])));
const localizedCount = (9 + emulators.length + tools.length + platforms.length + games.length) * languages.length;
const sitePath = (language, route = '') =>
  `${language === 'en' ? '/' : `/${language}/`}${route ? `${route}/` : ''}`;

test('all localized pages have canonical metadata, reciprocal languages and valid structured data', () => {
  assert.equal(documents.size, localizedCount + 1);
  const titles = new Set();
  for (const [file, html] of documents) {
    assert.match(html, /class="static-notice"/, file);
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, file);
    assert.ok(!html.includes('undefined'), file);
    if (file === resolve(output, '404.html')) {
      assert.match(html, /content="noindex, follow"/);
      assert.doesNotMatch(html, /rel="canonical"/);
      continue;
    }
    const canonical = new URL(html.match(/rel="canonical" href="([^"]+)"/)[1]);
    assert.equal(canonical.origin, origin);
    assert.equal(resolve(output, `.${canonical.pathname}`, 'index.html'), file);
    const route = canonical.pathname.replace(/^\/(?:zh-CN|ja)(?=\/)/, '').replace(/^\/|\/$/g, '');
    for (const language of [...languages, 'x-default']) {
      const url = `${origin}${sitePath(language === 'x-default' ? 'en' : language, route)}`;
      assert.ok(html.includes(`hreflang="${language}" href="${url}"`), `${file}: ${language}`);
    }
    const title = html.match(/<title>(.*?)<\/title>/)[1];
    assert.ok(!titles.has(title), `Duplicate title: ${title}`);
    titles.add(title);
    assert.match(html, /<meta name="description" content="[^"<>]+">/);
    const structuredData = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
    assert.equal(structuredData['@context'], 'https://schema.org');
    assert.ok(structuredData['@graph'].some(item => item['@id'] === `${canonical.href}#webpage`));
  }
});

test('every internal link, image, stylesheet, script and fragment resolves', async () => {
  for (const [file, html] of documents) {
    for (const [, value] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (/^(?:https?:|mailto:|data:)/.test(value)) continue;
      const current = new URL(`/${relative(output, file).replaceAll('\\', '/')}`, 'https://local.invalid/');
      const url = new URL(value, current);
      const target = resolve(output, `.${decodeURIComponent(url.pathname)}`, url.pathname.endsWith('/') ? 'index.html' : '');
      assert.ok(await stat(target).then(info => info.isFile(), () => false), `${file}: missing ${value}`);
      if (url.hash) {
        const targetHtml = documents.get(target) || await readFile(target, 'utf8');
        assert.ok(targetHtml.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${file}: missing ${value}`);
      }
    }
  }
});

test('discovery files cover all pages and use the configured deployment domain', async () => {
  const sitemap = await readFile(resolve(output, 'sitemap.xml'), 'utf8');
  const robots = await readFile(resolve(output, 'robots.txt'), 'utf8');
  const directory = JSON.parse(await readFile(resolve(output, 'directory.json'), 'utf8'));
  assert.equal((sitemap.match(/<loc>/g) || []).length, localizedCount);
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
  assert.equal(directory.siteURL, origin);
  assert.equal(directory.emulators.length, emulators.length);
  assert.equal(directory.tools.length, tools.length);
  assert.equal(directory.games.length, games.length);
  for (const file of ['llms.txt', 'llms-full.txt']) {
    assert.ok((await readFile(resolve(output, file), 'utf8')).includes(`${origin}/tools/`));
  }
});

test('the standalone package has no production services, account identifiers or unbundled artwork', async () => {
  const packageData = JSON.parse(await readFile(resolve(root, 'package.json'), 'utf8'));
  assert.equal(packageData.license, 'MIT');
  assert.equal(Object.keys(packageData.dependencies || {}).length, 0);
  assert.equal(Object.keys(packageData.devDependencies || {}).length, 0);
  for (const name of ['src/worker.mjs', 'wrangler.jsonc', '.wrangler', 'backlink-submissions']) {
    assert.equal(await stat(resolve(root, name)).then(() => true, () => false), false, name);
  }
  assert.ok(!outputFiles.some(file => /baidu_verify|[\\/]assets[\\/](games|emulators)[\\/]/.test(file)));
  for (const [file, html] of documents) {
    for (const [, attributes] of html.matchAll(/<script\b([^>]*)>/g)) {
      const source = attributes.match(/\bsrc="([^"]+)"/)?.[1];
      if (source) assert.ok(source.startsWith('/assets/'), `${file}: unexpected script`);
      else assert.match(attributes, /type="application\/(?:ld\+)?json"/, `${file}: unexpected executable inline script`);
    }
    assert.doesNotMatch(html, /GTM-[A-Z0-9]+|ca-pub-\d+|data-website-id=/);
    assert.doesNotMatch(html, /Checked hourly|每小时检查更新|1 時間ごとに更新/);
  }
  const headers = await readFile(resolve(output, '_headers'), 'utf8');
  assert.match(headers, /script-src 'self';/);
  assert.doesNotMatch(headers, /googlesyndication|umami|baidu|cloudflareinsights/);
});

test('snapshots keep caution, archived-download and filename protections', () => {
  const release = {
    tag: 'v1.0',
    title: '<unsafe>',
    url: 'https://example.com/releases/v1.0',
    assets: [
      { name: 'app.zip', url: 'https://example.com/app.zip' },
      { name: 'debug-symbols.zip', url: 'https://example.com/debug.zip' },
      { name: 'SHA256SUMS.txt', url: 'https://example.com/checksums.txt' },
      { name: 'bad.zip', url: 'javascript:alert(1)' }
    ]
  };
  const html = renderReleaseList({ releases: [release] }, copy.en);
  assert.ok(html.includes('href="https://example.com/app.zip"'));
  assert.ok(html.includes('&lt;unsafe&gt;'));
  assert.doesNotMatch(html, /href="https:\/\/example.com\/(?:debug|checksums)|javascript:/);
  const caution = renderReleaseList({ releases: [{ ...release, caution: true }] }, copy.en);
  assert.ok(!caution.includes('href="https://example.com/app.zip"'));
  const archived = renderReleaseList({ releases: [release] }, copy.en, { showLinks: false });
  assert.ok(!archived.includes('href='));
});
