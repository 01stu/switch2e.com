# Switch2e

[简体中文](README.md) · **English** · [日本語](README.ja.md)

Source code for the Switch2e website. A cream and dark green interface in English, Simplified Chinese and Japanese, featuring emulator listings, game recommendations, game recompilation tools and getting-started guides. Pages are prerendered with native Node.js modules, with vanilla JavaScript in the browser. No framework or build dependencies are required.

## Live website

Explore Switch2e through the links below. This repository uses text, symbols and original placeholders in place of third-party game artwork and project avatars.

| Page | Live link |
| --- | --- |
| Home / English | [switch2e.com](https://switch2e.com/) |
| Chinese home | [Switch2e 简体中文](https://switch2e.com/zh-CN/) |
| Japanese home | [Switch2e 日本語](https://switch2e.com/ja/) |
| Emulator directory | [Switch 2 emulators](https://switch2e.com/emulators/) |
| Game recommendations | [Games and recommendation evidence](https://switch2e.com/games/) |
| Recompilation tools | [Game recompilation tools](https://switch2e.com/tools/) |
| Android | [Android emulators](https://switch2e.com/platforms/android/) |
| Getting started | [Start here](https://switch2e.com/guide/) |
| Listing and recommendation criteria | [About Switch2e](https://switch2e.com/about/) |

Machine-readable resources: [Sitemap](https://switch2e.com/sitemap.xml) · [llms.txt](https://switch2e.com/llms.txt) · [Directory JSON](https://switch2e.com/directory.json).

## Quick start

Requires **Node.js 22 or later**. There are no npm dependencies, so `npm install` is unnecessary. Run from the project root:

```sh
npm run dev
```

Local pages:

- English: <http://localhost:4321/>
- 简体中文: <http://localhost:4321/zh-CN/>
- 日本語: <http://localhost:4321/ja/>

The development server builds pages on startup. Restart it after editing files. Pages use root-relative paths; preview them over HTTP rather than opening HTML files directly.

```sh
npm run build  # Generate dist/
npm test       # Build and check pages, internal links, assets, SEO and release snapshots
```

`npm run start` works the same as `npm run dev`. To change the preview port:

```powershell
$env:PORT = "4322"
npm run dev
```

## What's included

- 96 localized pages and a separate 404 page.
- Emulator, game and recompilation tool pages, plus Windows / Linux / macOS / Android platform pages.
- Site-wide search, platform and genre filters, language switching, mobile navigation and FAQs.
- Bundled upstream release and commit snapshots, with sources, review dates and download notices.
- Per-page canonical URLs, hreflang, JSON-LD, Open Graph, Sitemap and llms files.
- Local fonts, styles, browser scripts and original placeholder assets.

Release data is stored in `src/cache/releases.json` and **does not update automatically**. Edit it and rebuild to update the pages. Displayed dates retain the actual retrieval or review time. This repository does not include a live `/api/releases` endpoint.

When deploying your own site, update the advertising, terms, privacy and contact pages to reflect your service.

The repository excludes analytics and advertising scripts, site-verification files, the Worker, KV bindings, scheduled synchronization, environment credentials and deployment account settings.

## Project structure

```text
./
├── public/assets/       # CSS, browser scripts, fonts and original images
├── scripts/
│   ├── build.mjs        # Prerendering, structured data, Sitemap and discovery files
│   └── serve.mjs        # Local HTTP preview and true 404 responses
├── src/
│   ├── data.mjs         # Emulators, games and sources
│   ├── i18n.mjs         # Interface copy in three languages
│   ├── tools.mjs        # Recompilation tool directory
│   ├── releases.mjs     # Release snapshot rendering, without online synchronization
│   └── cache/           # Local snapshots and asset indexes
├── tests/               # Site checks without third-party dependencies
├── netlify.toml
├── vercel.json
├── README.md            # 简体中文
├── README.en.md         # English
├── README.ja.md         # 日本語
├── LICENSE
└── THIRD_PARTY_NOTICES.md
```

## Deployment

After building, upload `dist/` as the website root to your hosting provider. Netlify and Vercel configurations are included: set this project's directory as the hosting root, use `npm run build` as the build command, and `dist` as the output directory.

Builds use `https://switch2e.com` by default. To use another domain, set **`SITE_URL`** in your hosting environment before building. Canonical URLs, hreflang, sharing URLs, the Sitemap and directory data will use that domain.

PowerShell:

```powershell
$env:SITE_URL = "https://your-domain.example"
npm run build
```

macOS / Linux:

```sh
SITE_URL=https://your-domain.example npm run build
```

`.env.example` is a reference for environment variables; the project does not load `.env` automatically.

Use static hosting that supports directory `index.html` files and true 404 responses, and preserve trailing slashes in URLs. The generated `_redirects` contains redirects for legacy `/en/...` URLs, while `_headers` contains a CSP allowing only this site's resources. Support for these files depends on your hosting provider. The Vercel configuration separately defines security headers and legacy English route redirects. Do not rewrite unknown paths to the homepage. Assets use root-relative paths, so the project cannot be deployed directly under a GitHub Pages `/repo/` subpath.

## Editing content

- Pages and shared templates: `scripts/build.mjs`.
- Responsive styles: `public/assets/styles.css`.
- Search, filters and navigation: `public/assets/app.js`.
- Emulator and game data: `src/data.mjs`; related platform information and setup guides are in `src/`.
- Tool descriptions: `src/tools.mjs`, `src/recompia.mjs`, `src/emblemweave.mjs` and `src/longshot.mjs`.
- Release data: `src/cache/releases.json`.
- Site name, displayed domain, email, Telegram and legal pages: shared templates and `src/advertising.mjs`, `src/legal.mjs` and `src/i18n.mjs`.

`media.json` and `icons.json` are empty by default, so the builder uses placeholders. If you add images you have permission to use, maintain their asset indexes and attribution as well.

## License

Original code and documentation are released under the [MIT License](LICENSE). The Outfit font is distributed under the included SIL Open Font License. Third-party names, trademarks, source documents and release metadata retain their existing rights. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

This project is not affiliated with Nintendo or any listed project. It includes no emulator binaries, games, keys or firmware. Use your own site branding and contact details when publishing a fork.

## Contributing

Contributions to translations, accessibility, page styles and source documentation are welcome. Run `npm test` before submitting changes. For upstream information, include primary sources and distinguish developer reports from independent Switch2e testing.
