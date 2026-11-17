# Switch2e

**简体中文** · [English](README.en.md) · [日本語](README.ja.md)

Switch2e 网站的源代码。奶油白 / 深绿界面，支持英文、简体中文、日文，包含模拟器目录、游戏推荐、游戏转译工具和入门指南。使用 Node.js 原生模块预渲染 HTML，浏览器端使用原生 JavaScript，无框架、无构建依赖。

## 线上预览

访问下方链接体验 Switch2e。仓库使用文字、符号和原创占位图替代第三方游戏图片与项目头像。

| 页面 | 线上链接 |
| --- | --- |
| 官网 / English | [switch2e.com](https://switch2e.com/) |
| 中文首页 | [Switch2e 简体中文](https://switch2e.com/zh-CN/) |
| 日文首页 | [Switch2e 日本語](https://switch2e.com/ja/) |
| 模拟器目录 | [Switch 2 模拟器](https://switch2e.com/zh-CN/emulators/) |
| 游戏推荐 | [游戏目录与推荐依据](https://switch2e.com/zh-CN/games/) |
| 转译工具 | [游戏静态转译工具](https://switch2e.com/zh-CN/tools/) |
| Android 平台 | [Android 模拟器](https://switch2e.com/zh-CN/platforms/android/) |
| 入门指南 | [从这里开始](https://switch2e.com/zh-CN/guide/) |
| 收录与推荐标准 | [关于 Switch2e](https://switch2e.com/zh-CN/about/) |

机器可读数据：[Sitemap](https://switch2e.com/sitemap.xml) · [llms.txt](https://switch2e.com/llms.txt) · [目录 JSON](https://switch2e.com/directory.json)。

## 快速启动

需要 **Node.js 22 或更新版本**。没有 npm 依赖，无需先运行 `npm install`。在项目根目录运行：

```sh
npm run dev
```

本地访问：

- English：<http://localhost:4321/>
- 简体中文：<http://localhost:4321/zh-CN/>
- 日本語：<http://localhost:4321/ja/>

开发服务器启动时会构建页面；修改文件后重新启动即可。页面使用站点根路径，请通过 HTTP 预览，不要直接双击 HTML 文件。

```sh
npm run build  # 生成 dist/
npm test       # 构建并检查页面、站内链接、资源、SEO 和版本快照
```

`npm run start` 与 `npm run dev` 相同。修改预览端口：

```powershell
$env:PORT = "4322"
npm run dev
```

## 包含哪些内容

- 96 个本地化页面与独立 404 页面。
- 模拟器、游戏、转译工具及 Windows / Linux / macOS / Android 平台页面。
- 全站搜索、平台 / 类型筛选、语言切换、移动导航、FAQ。
- 随代码附带的上游版本与提交快照，保留来源、核查日期和下载提示。
- 独立 canonical、hreflang、JSON-LD、Open Graph、Sitemap 和 llms 文件。
- 本地字体、样式、交互脚本及原创占位资源。

版本数据保存在 `src/cache/releases.json`，**不自动更新**；修改后重新构建即可。页面显示的日期保留其真实获取 / 核查时间。仓库不包含 `/api/releases` 在线接口。

自行部署时，请按实际服务更新广告、条款、隐私页面和联系方式。

仓库不包含统计或广告脚本、站长验证文件、Worker、KV 绑定、定时同步、环境凭据及部署账号配置。

## 目录结构

```text
./
├── public/assets/       # CSS、浏览器脚本、字体与原创图片
├── scripts/
│   ├── build.mjs        # 预渲染、结构化数据、Sitemap 和发现文件
│   └── serve.mjs        # 本地 HTTP 预览与真实 404
├── src/
│   ├── data.mjs         # 模拟器、游戏及来源
│   ├── i18n.mjs         # 三语言界面文案
│   ├── tools.mjs        # 转译工具目录
│   ├── releases.mjs     # 版本快照渲染，无在线同步逻辑
│   └── cache/           # 本地快照与素材索引
├── tests/               # 无第三方依赖的站点检查
├── netlify.toml
├── vercel.json
├── README.md            # 简体中文
├── README.en.md         # English
├── README.ja.md         # 日本語
├── LICENSE
└── THIRD_PARTY_NOTICES.md
```

## 部署

构建后把 `dist/` 作为网站根目录上传到托管平台。Netlify 和 Vercel 配置已包含：将本项目所在目录设为托管根目录，构建命令为 `npm run build`，输出目录为 `dist`。

构建默认使用 `https://switch2e.com`。如需使用其他域名，在托管平台的环境变量中设置 **`SITE_URL`**，再构建；canonical、hreflang、分享地址、Sitemap 与目录数据会使用该域名。

PowerShell：

```powershell
$env:SITE_URL = "https://your-domain.example"
npm run build
```

macOS / Linux：

```sh
SITE_URL=https://your-domain.example npm run build
```

`.env.example` 仅提供变量参考；项目不会自动读取 `.env`。

请使用支持目录 `index.html` 和真实 404 的静态托管，并保持 URL 尾斜杠。生成的 `_redirects` 包含旧 `/en/...` 地址的重定向，`_headers` 包含仅允许本站资源的 CSP；这两种文件是否生效取决于托管平台。Vercel 配置另行提供安全头和英文旧路径重定向。不要把未知路径统一重写到首页。本项目使用根路径资源，不能直接部署到 GitHub Pages 的 `/repo/` 子路径。

## 修改内容

- 页面与共享模板：`scripts/build.mjs`。
- 响应式样式：`public/assets/styles.css`。
- 搜索、筛选和导航：`public/assets/app.js`。
- 模拟器 / 游戏数据：`src/data.mjs`，相关平台和入门说明位于 `src/`。
- 工具介绍：`src/tools.mjs`、`src/recompia.mjs`、`src/emblemweave.mjs`、`src/longshot.mjs`。
- 版本信息：`src/cache/releases.json`。
- 站点名称、域名展示、邮箱、Telegram 和法律页面：共享模板及 `src/advertising.mjs`、`src/legal.mjs`、`src/i18n.mjs`。

`media.json` 和 `icons.json` 默认为空，构建器使用占位展示。若自行补充有使用权限的图片，请同时维护对应素材索引与署名信息。

## 开源许可

原创代码及文档采用 [MIT License](LICENSE)。Outfit 字体采用随附的 SIL Open Font License；第三方名称、商标、来源文档与版本元数据不因代码开源而改变权利归属，详见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

本项目与任天堂或收录项目无隶属关系，不包含模拟器二进制、游戏、密钥或固件。Fork 后请使用自己的站点标识和联系方式。

## 参与贡献

欢迎改进翻译、可访问性、页面样式和来源说明。提交变更前运行 `npm test`；涉及上游信息时请附一手来源，并区分开发者报告与本站实测。
