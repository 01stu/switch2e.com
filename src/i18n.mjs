import { tools } from './tools.mjs';
import { advertisingCopy } from './advertising.mjs';
import { legalCopy } from './legal.mjs';
export const copy = {
  en: {
    setupSources: 'Setup sources', setupReviewed: 'Reviewed', compatibilityTitle: 'Game compatibility', compatibilityIntro: 'Developer-reported results for the listed game versions and test devices, not Switch2e benchmarks or performance guarantees. The first five rows summarize the README; Fortune’s Weave is added from v0.3.1 release notes and the source game catalog.', compatibilityGame: 'Game', compatibilityVersion: 'Version', compatibilityStatus: 'Status', compatibilityNotes: 'Notes', compatibilitySupported: 'Supported', compatibilityExperimental: 'Experimental', compatibilityPlayable: 'Playable (v0.3.1)', launcherWindows: 'Download Windows launcher', launcherLinux: 'Download Linux AppImage', launcherPortable: 'Download Windows portable ZIP', lang: 'en', locale: 'en_US', home: 'Home', emulators: 'Emulators', games: 'Games', guide: 'Getting started', about: 'Our methodology', search: 'Search games, emulators…', searchLabel: 'Search the directory', menu: 'Open navigation', gameDirectoryDescription: 'Browse Nintendo Switch 2 games, transparent emulator recommendations, and source-linked compatibility notes for each title.',
    eyebrow: 'THE INDEPENDENT SWITCH 2 EMULATION DIRECTORY', heroA: 'A new world.', heroB: 'More ways to play.', intro: 'Explore the Switch 2 emulation scene. Find your emulator, discover game-specific forks, and go straight to the source.', explore: 'Explore emulators', browse: 'Find your game', independent: 'Independent. Open-source focused. Always curious.',
    projects: 'projects to explore', gameCount: 'games in the directory', languages: 'languages, one community', updated: 'Sources reviewed', experimental: 'A scene in progress', experimentalNote: 'Switch 2 emulation is experimental. Compatibility changes by build, game and hardware. Recommendations include their evidence.',
    section01: '01 / THE TOOLKIT', emuHeading: 'Meet your next emulator.', emuIntro: 'One scene. Different approaches. Find the project that fits your setup.', all: 'All platforms', allGames: 'All games', viewAll: 'View all', details: 'Explore project', experimentalBadge: 'Experimental', activeDevelopment: 'Active development', lastCommit: 'Latest repository commit', by: 'by', source: 'Source repository', sourceLink: 'View source',
    section02: '02 / FIND YOUR NEXT ADVENTURE', gameHeading: 'Start with the game.', gameIntro: 'Find a game, see the recommended projects, and understand what is actually known.', recommended: 'Projects to explore', recommendedGames: 'Recommended games', reported: 'Developer reported', focused: 'Project focus', unverified: 'Not verified', readEvidence: 'See recommendation evidence', gameDetails: 'Game details',
    empty: 'No matches this time.', emptyNote: 'Try another name or choose all platforms.', reset: 'Clear filters', results: 'results',
    section03: '03 / A LITTLE CONTEXT', faqTitle: 'Good questions. Clear answers.', faqIntro: 'A few things to know before your first download.',
    ctaTitle: 'New to the scene?', ctaText: 'A little context goes a long way. Start with our guide to builds, compatibility and finding the right project.', ctaButton: 'Read the starter guide',
    footerText: 'An independent field guide to the next generation of emulation.', footerNote: 'Not affiliated with Nintendo or the projects listed. Game artwork and trademarks belong to their respective owners.', footerLegal: 'No games, keys or firmware are hosted here.', directory: 'Directory', resources: 'Resources', backTop: 'Back to top',
    overview: 'The overview', downloads: 'Downloads', downloadButton: 'View official releases', releaseIntro: 'Download from the project maintainer. Check the release notes, platform and CPU requirements before choosing a file.', latestRelease: 'Latest release', lastChecked: 'Last checked', releases: 'Recent upstream releases', releaseNote: 'Bundled static snapshot; no automatic updates. The upstream release page is authoritative.', noReleases: 'No release snapshot is available. Check the project’s releases page for current downloads.', releasePage: 'Release notes & assets', prerelease: 'Pre-release', blocked: 'Developer caution — review notes', noAssets: 'No published assets in this entry', downloadAsset: 'Download asset',
    quickFacts: 'At a glance', maintainer: 'Maintainer', platforms: 'Platforms to check', status: 'Development status', lineage: 'Repository identity', alias: 'Also known as', platformNote: 'Listed platforms are project targets or observed build families, not a promise that every release includes every OS. Published assets take priority.',
    relatedGames: 'Games connected to this project', relatedProjects: 'Explore another project', noRelated: 'No game-specific recommendation has been verified in our reviewed sources. Browse the project’s own reports.', evidence: 'Why these projects?', evidenceNote: 'Switch2e has not independently benchmarked this game. A project recommendation is not a guarantee of playability.', officialGame: 'Official game information', facts: 'Game facts', platform: 'Game platform', year: 'Release year', genre: 'Genre', noGameDownload: 'This page provides project information, not game downloads.', citations: 'Sources & review', reviewText: 'Project descriptions and recommendations are editorial summaries of the linked primary sources. Sources last reviewed on', snapshot: 'Release metadata fetched', related: 'Related reading',
    aboutHeading: 'Built for discovery. Grounded in sources.', aboutIntro: 'Switch2e is an independent directory of Switch 2 emulator projects and game-specific forks. We help you compare identities and find original downloads.',
    guideHeading: 'Your first steps into emulation.', guideIntro: 'Choose a project with context, understand the evidence, and get the right build from its original maintainer.',
    step1: 'Start with your game', step1Text: 'Open a game page and read the recommendation evidence. “Developer reported” means the project describes a result; “Project focus” means the fork targets that title; “Not verified” means research candidates only.',
    step2: 'Match your hardware', step2Text: 'Confirm your operating system, CPU architecture, graphics API and driver requirements in the upstream documentation. A Zen 3-optimized build is not a universal recommendation.',
    step3: 'Choose the original download', step3Text: 'Follow the maintainer’s release link, read the full notes and check the filename. Avoid dependency packages and builds the developer labels “do not use”. Back up existing saves before testing.',
    step4: 'Keep your setup reproducible', step4Text: 'Use only games and system files you are entitled to use. When checking compatibility, record the emulator version, game update, CPU, GPU, driver and settings. One successful boot does not establish full playability.',
    methodology1: 'Recommendations have an evidence level', methodology1Text: 'We distinguish a developer’s reported result from a project’s stated focus and from an unverified research candidate. None is presented as an independent Switch2e benchmark. We do not invent FPS, scores or compatibility percentages.',
    methodology2: 'The original maintainer is the source', methodology2Text: 'Every project page links to its repository and releases. Renames and forks are identified separately. Upstream README inheritance is not treated as proof that another fork has identical features or platform builds.',
    methodology3: 'Dates describe an actual review', methodology3Text: 'The source-review date records editorial verification. Release sync timestamps describe only metadata retrieval. They do not automatically mark game compatibility as re-tested. Updates are made in the versioned data files.',
    methodology4: 'Independent, transparent and lightweight', methodology4Text: 'Switch2e is not an official Nintendo or emulator project website. It hosts no game files, keys or firmware. This static edition includes no analytics, advertising scripts or account system. External sites have their own privacy practices.',
    notFound: 'A little off the map.', notFoundText: 'This page could not be found. There is still plenty to explore.', backHome: 'Back to the directory', close: 'Close search', searchHint: 'Search by game, project or maintainer. Use Tab to choose a result.', searchEmpty: 'No matching projects or games. Try a shorter search.',
    faqs: [
      ['What is a Switch 2 emulator?', 'It is software that attempts to reproduce Nintendo Switch 2 system behavior on other hardware. The projects in this directory are experimental and have different goals and compatibility.'],
      ['Which Switch 2 emulator should I choose?', 'Start with your game. Eglantine is a general starting point; PokeDinner focused on Pokopia but is no longer maintained, Fortune’s Eden on Fortune’s Weave, and Selevet publishes experimental builds for Mario Kart World and Ocarina of Time. Read the evidence and platform requirements first.'],
      ['Are these games guaranteed to work?', 'No. We distinguish developer reports, project focus and unverified suggestions. Game version, emulator build, hardware and settings all affect the result. Switch2e has not independently benchmarked these games.'],
      ['Where do the downloads come from?', 'Download links lead to the original maintainer’s repository or release assets. Switch2e does not repackage or host emulator binaries, games, keys or firmware.'],
      ['Is Frizti/Lichii the same as Lichii?', 'Frizti/Lichii now redirects to Frizti/Fritchii. It is a separate fork from zortos293/Lichii. Switch2e lists them separately to avoid confusing their releases.'],
      ['Does “60 FPS patch” guarantee 60 FPS?', 'No. Fortune’s Eden describes an optional patch that is disabled by default. Its normal target is 30 FPS, and actual performance depends on hardware and settings.']
    ]
  },
  'zh-CN': {
    setupSources: '入门说明来源', setupReviewed: '核查于', compatibilityTitle: '游戏兼容性', compatibilityIntro: '以下为开发者针对所列游戏版本和测试设备报告的结果，并非 Switch2e 实测或性能保证。前五行整理自 README，Fortune’s Weave 根据 v0.3.1 发布说明及源码游戏列表补充。', compatibilityGame: '游戏', compatibilityVersion: '版本', compatibilityStatus: '状态', compatibilityNotes: '备注', compatibilitySupported: '支持', compatibilityExperimental: '实验性支持', compatibilityPlayable: '可玩（v0.3.1）', launcherWindows: '下载 Windows 启动器', launcherLinux: '下载 Linux AppImage', launcherPortable: '下载 Windows 便携 ZIP', lang: 'zh-CN', locale: 'zh_CN', home: '首页', emulators: '模拟器', games: '游戏', guide: '入门指南', about: '收录与推荐标准', search: '搜索游戏、模拟器…', searchLabel: '搜索目录', menu: '展开导航', gameDirectoryDescription: '按游戏浏览 Switch 2 模拟器推荐，查看开发者报告、项目目标与原始来源，了解每项兼容性判断的依据。',
    eyebrow: '独立的 SWITCH 2 模拟器探索指南', heroA: '新的世界。', heroB: '更多游玩可能。', intro: '探索 Switch 2 模拟器生态。找到适合自己的项目，发现游戏专属分支，从这里直达开发者。', explore: '探索模拟器', browse: '寻找你的游戏', independent: '独立整理 · 关注开源 · 保持好奇',
    projects: '个值得探索的项目', gameCount: '款游戏收录', languages: '种语言，同一个社区', updated: '资料核查于', experimental: '仍在成长的生态', experimentalNote: 'Switch 2 模拟仍处于实验阶段。兼容性因构建版本、游戏及硬件而异，每项推荐均注明依据。',
    section01: '01 / 你的模拟工具箱', emuHeading: '认识你的下一款模拟器。', emuIntro: '同一个生态，不同的探索方向。找到适合你设备的项目。', all: '全部平台', allGames: '全部游戏', viewAll: '查看全部', details: '探索项目', experimentalBadge: '实验阶段', activeDevelopment: '活跃开发中', lastCommit: '仓库最近提交', by: '维护者', source: '源代码仓库', sourceLink: '查看源码',
    section02: '02 / 开启下一场冒险', gameHeading: '从想玩的游戏开始。', gameIntro: '找到游戏，了解推荐项目，也了解当前真正已知的运行情况。', recommended: '推荐关注的项目', recommendedGames: '推荐游戏', reported: '开发者已报告', focused: '项目关注方向', unverified: '尚未验证', readEvidence: '查看推荐依据', gameDetails: '游戏详情',
    empty: '暂时没有匹配的结果。', emptyNote: '试试其他名称，或选择全部平台。', reset: '清除筛选', results: '条结果',
    section03: '03 / 开始之前，了解一点', faqTitle: '好问题，清楚回答。', faqIntro: '第一次下载之前，你可能想知道这些。',
    ctaTitle: '第一次接触模拟器？', ctaText: '先了解一点，探索更轻松。从构建版本、兼容性到如何选择项目，入门指南带你开始。', ctaButton: '阅读入门指南',
    footerText: '一份探索新一代模拟器生态的独立指南。', footerNote: '本站与任天堂或收录项目无隶属关系。游戏图片与商标归各自权利人所有。', footerLegal: '本站不托管游戏、密钥或固件。', directory: '探索目录', resources: '实用信息', backTop: '回到顶部',
    overview: '项目简介', downloads: '下载', downloadButton: '前往项目发布页', releaseIntro: '从项目维护者处下载。选择文件前，请核对发布说明、操作系统和 CPU 要求。', latestRelease: '最新版本', lastChecked: '最后检测时间', releases: '近期上游版本', releaseNote: '随代码附带的静态快照，不自动更新；以项目发布页为准。', noReleases: '暂无发布信息快照，请前往该项目的发布页查看最新下载。', releasePage: '发布说明与附件', prerelease: '预发布', blocked: '开发者提示谨慎使用，请阅读说明', noAssets: '该条目暂无发布附件', downloadAsset: '下载文件',
    quickFacts: '项目速览', maintainer: '维护者', platforms: '可关注的平台', status: '开发状态', lineage: '仓库身份', alias: '曾用名 / 别名', platformNote: '所列平台代表项目目标或已观察到的构建类型，不代表每个版本都提供所有系统的文件，请以实际发布附件为准。',
    relatedGames: '与此项目相关的游戏', relatedProjects: '继续探索其他项目', noRelated: '已核查资料暂无具体游戏推荐依据，可前往项目查看社区报告。', evidence: '为什么推荐这些项目？', evidenceNote: 'Switch2e 未对本游戏进行独立跑分。项目推荐不代表保证可玩。', officialGame: '官方游戏资料', facts: '游戏资料', platform: '游戏平台', year: '发行年份', genre: '游戏类型', noGameDownload: '此页面提供项目信息，不提供游戏下载。', citations: '资料来源与核查', reviewText: '项目介绍与推荐依据为对以下一手资料的编辑整理。最近资料核查日期：', snapshot: '发布元数据获取于', related: '延伸阅读',
    aboutHeading: '为了发现，也为了可信。', aboutIntro: 'Switch2e 是独立的 Switch 2 模拟器及游戏专属分支目录。我们帮你分清项目身份，并找到原始下载入口。',
    guideHeading: '你的模拟器探索第一步。', guideIntro: '带着依据选择项目，理解兼容性信息，再从原始维护者处下载适合自己的构建。',
    step1: '从你的游戏开始', step1Text: '打开游戏页面并阅读推荐依据。“开发者已报告”指项目描述了运行结果；“项目关注方向”指该分支以此游戏为目标；“尚未验证”仅表示可进一步调查的候选项目。',
    step2: '核对你的硬件', step2Text: '在上游文档中确认操作系统、CPU 架构、图形 API 和驱动要求。针对 Zen 3 优化的构建并不适合不加区分地推荐给所有设备。',
    step3: '找到原始下载', step3Text: '通过维护者发布链接，阅读完整说明并检查文件名。避开依赖包以及开发者注明“请勿使用”的构建。测试前备份现有存档。',
    step4: '让测试可以复现', step4Text: '仅使用你有权使用的游戏与系统文件。核查兼容性时，记录模拟器版本、游戏更新版本、CPU、GPU、驱动和设置。成功启动一次不等于全流程可玩。',
    methodology1: '每项推荐都有依据等级', methodology1Text: '我们区分开发者报告、项目声明的关注方向与尚未验证的候选项目。任何一类都不等于本站独立实测。我们不会编造 FPS、评分或兼容率。',
    methodology2: '以原始维护者为信息来源', methodology2Text: '每个项目页面都链接到仓库及发布页。更名与分支会分别标明。继承上游 README，不足以证明分支具有完全相同的功能或平台构建。',
    methodology3: '核查日期对应真实的核查', methodology3Text: '资料核查日期记录人工整理核验时间；发布同步时间只说明元数据获取时间，不会自动把游戏标记为重新实测。内容更新保存在版本化数据文件中。',
    methodology4: '独立、透明、轻量', methodology4Text: 'Switch2e 不是任天堂或任何模拟器项目的官方网站，不托管游戏文件、密钥或固件。此静态版本不包含统计、广告脚本或账户系统。外部网站有各自的隐私政策。',
    notFound: '似乎偏离了地图。', notFoundText: '没有找到这个页面，不过还有很多值得探索的内容。', backHome: '回到探索目录', close: '关闭搜索', searchHint: '按游戏、项目或维护者搜索，使用 Tab 选择结果。', searchEmpty: '没有匹配的项目或游戏，试试更短的关键词。',
    faqs: [
      ['什么是 Switch 2 模拟器？', '它是尝试在其他硬件上重现 Nintendo Switch 2 系统行为的软件。本站收录项目仍处于实验阶段，目标和兼容性各不相同。'],
      ['应该选择哪一个 Switch 2 模拟器？', '先从你想玩的游戏开始。Eglantine 是通用探索起点；PokeDinner 曾关注 Pokopia，现已停止维护；Fortune’s Eden 面向 Fortune’s Weave；Selevet 关注 Mario Kart World 调优。选择前请阅读推荐依据和平台要求。'],
      ['这里的游戏一定能运行吗？', '不能保证。本站区分开发者报告、项目关注方向和尚未验证的建议。游戏版本、模拟器构建、硬件与设置均影响结果。本站尚未独立跑分。'],
      ['下载文件来自哪里？', '下载链接指向原始维护者的仓库或发布附件。Switch2e 不重新打包或托管模拟器二进制文件、游戏、密钥及固件。'],
      ['Frizti/Lichii 和 Lichii 是同一个项目吗？', 'Frizti/Lichii 现已跳转至 Frizti/Fritchii，是独立于 zortos293/Lichii 的另一个分支。本站将它们分别收录，避免下载时混淆。'],
      ['“60 FPS 补丁”能保证 60 FPS 吗？', '不能。Fortune’s Eden 说明此补丁可选且默认关闭，正常目标为 30 FPS，实际性能取决于硬件和设置。']
    ]
  },
  ja: {
    setupSources: '導入手順の出典', setupReviewed: '確認日', compatibilityTitle: 'ゲーム互換性', compatibilityIntro: '掲載されたゲーム版とテスト端末での開発者報告です。Switch2e の実測値や性能保証ではありません。最初の 5 行は README、Fortune’s Weave は v0.3.1 の説明とソースのゲーム一覧に基づきます。', compatibilityGame: 'ゲーム', compatibilityVersion: 'バージョン', compatibilityStatus: '状態', compatibilityNotes: '備考', compatibilitySupported: '対応', compatibilityExperimental: '実験段階', compatibilityPlayable: 'プレイ可能（v0.3.1）', launcherWindows: 'Windows ランチャーを取得', launcherLinux: 'Linux AppImage を取得', launcherPortable: 'Windows ポータブル ZIP を取得', lang: 'ja', locale: 'ja_JP', home: 'ホーム', emulators: 'エミュレーター', games: 'ゲーム', guide: 'はじめ方', about: '掲載・推薦の基準', search: 'ゲームやプロジェクトを検索…', searchLabel: 'ディレクトリを検索', menu: 'ナビゲーションを開く', gameDirectoryDescription: 'Nintendo Switch 2 のゲーム別にエミュレーター候補を比較。動作報告、開発対象、出典や互換性情報を確認できます。',
    eyebrow: '独立した SWITCH 2 エミュレーションガイド', heroA: '新しい世界へ。', heroB: '遊びの可能性を、もっと。', intro: 'Switch 2 エミュレーションの今を探そう。エミュレーターやゲーム専用フォークを見つけ、開発元へアクセスできます。', explore: 'プロジェクトを探す', browse: 'ゲームから探す', independent: '独立した視点。オープンソースへの関心。探求する心。',
    projects: 'のプロジェクト', gameCount: 'の掲載ゲーム', languages: '言語、ひとつのコミュニティ', updated: '情報確認日', experimental: '進化の途中にあるシーン', experimentalNote: 'Switch 2 エミュレーションは実験段階です。互換性はビルド、ゲーム、環境により異なります。推薦には根拠を添えています。',
    section01: '01 / ツールキット', emuHeading: '次のエミュレーターに出会おう。', emuIntro: '同じシーンに、異なるアプローチ。環境に合うプロジェクトを探しましょう。', all: 'すべての OS', allGames: 'すべてのゲーム', viewAll: 'すべて見る', details: 'プロジェクトを見る', experimentalBadge: '実験段階', activeDevelopment: '開発中', lastCommit: 'リポジトリの最新コミット', by: '開発者', source: 'ソースリポジトリ', sourceLink: 'ソースを見る',
    section02: '02 / 次の冒険を見つけよう', gameHeading: '遊びたいゲームから。', gameIntro: 'ゲームから候補を探し、現時点で分かっていることを確認できます。', recommended: '候補のプロジェクト', recommendedGames: 'おすすめのゲーム', reported: '開発者の動作報告', focused: '開発対象', unverified: '未確認', readEvidence: '推薦の根拠を見る', gameDetails: 'ゲーム詳細',
    empty: '一致する結果がありません。', emptyNote: '別の名前や、すべての OS を試してください。', reset: '絞り込みを解除', results: '件',
    section03: '03 / はじめる前に', faqTitle: '知りたいことに、明確な答えを。', faqIntro: '最初のダウンロードの前に、知っておきたいこと。',
    ctaTitle: 'はじめての方へ。', ctaText: 'ビルド、互換性、プロジェクト選び。ガイドを読んで、少しずつ探索を始めましょう。', ctaButton: 'スタートガイドを読む',
    footerText: '次世代のエミュレーションを探る、独立したガイド。', footerNote: '任天堂および掲載プロジェクトとは関係ありません。ゲーム画像・商標は各権利者に帰属します。', footerLegal: 'ゲーム、キー、ファームウェアは配布していません。', directory: 'ディレクトリ', resources: 'リソース', backTop: 'ページ上部へ',
    overview: 'プロジェクト概要', downloads: 'ダウンロード', downloadButton: '開発元のリリースへ', releaseIntro: '開発元からダウンロードしてください。選択前にリリース説明、OS、CPU 要件を確認しましょう。', latestRelease: '最新リリース', lastChecked: '最終確認', releases: '最近のリリース', releaseNote: '同梱の静的スナップショットです。自動更新は行いません。開発元のリリースページを優先してください。', noReleases: 'リリース情報がありません。開発元の配布ページを確認してください。', releasePage: '説明・配布ファイル', prerelease: 'プレリリース', blocked: '開発者の注意事項を確認', noAssets: '配布ファイルはありません', downloadAsset: 'ファイルをダウンロード',
    quickFacts: '基本情報', maintainer: 'メンテナー', platforms: '確認対象の OS', status: '開発状況', lineage: 'リポジトリ', alias: '旧称・別名', platformNote: '掲載 OS は開発目標や確認できたビルドの種類です。全リリースでの配布を保証するものではありません。実際の配布ファイルを確認してください。',
    relatedGames: '関連するゲーム', relatedProjects: 'ほかのプロジェクトを探す', noRelated: '確認した情報には特定ゲームの推薦根拠がありません。開発元の報告をご覧ください。', evidence: '推薦の理由', evidenceNote: 'Switch2e は本作を独自にベンチマークしていません。推薦は動作保証ではありません。', officialGame: 'ゲームの公式情報', facts: 'ゲーム情報', platform: 'プラットフォーム', year: '発売年', genre: 'ジャンル', noGameDownload: 'プロジェクトの情報ページです。ゲームは配布していません。', citations: '出典と確認日', reviewText: '紹介と推薦は、以下の一次情報をもとに編集したものです。最終確認日：', snapshot: 'リリース情報取得日', related: 'あわせて読む',
    aboutHeading: '発見のために。確かな情報から。', aboutIntro: 'Switch2e は Switch 2 エミュレーターとゲーム専用フォークの独立したディレクトリです。プロジェクトを見分け、元の配布先を探すお手伝いをします。',
    guideHeading: 'エミュレーションへの第一歩。', guideIntro: '根拠を知り、互換性を理解して、開発元から環境に合うビルドを選びましょう。',
    step1: 'ゲームから選ぶ', step1Text: 'ゲームのページで推薦の根拠を読みます。「開発者の動作報告」は結果の説明、「開発対象」はフォークの目標、「未確認」は調査候補を意味します。',
    step2: 'ハードウェアを確認する', step2Text: '開発元の文書で OS、CPU アーキテクチャ、グラフィックス API、ドライバーの要件を確認してください。Zen 3 向け最適化ビルドがすべての環境に適するとは限りません。',
    step3: '元の配布先を選ぶ', step3Text: '開発者のリリースリンクを開き、説明全文とファイル名を確認します。依存パッケージや「使用しないで」と記されたビルドは避け、テスト前にセーブを保存してください。',
    step4: '再現できる記録を残す', step4Text: '使用する権利があるゲームやシステムファイルのみを使用してください。互換性を確認する際は、エミュレーター、ゲーム、CPU、GPU、ドライバー、設定を記録します。起動できることは全編の動作保証ではありません。',
    methodology1: '推薦には根拠の種類があります', methodology1Text: '開発者の動作報告、明示された開発対象、未確認の調査候補を区別しています。いずれも Switch2e 独自のベンチマークではありません。FPS、評価点、互換率を捏造しません。',
    methodology2: '元のメンテナーを情報源に', methodology2Text: 'すべてのプロジェクトにリポジトリとリリースへのリンクを掲載し、改名やフォークを区別します。上流 README の継承だけで、同じ機能や OS ビルドがあるとは判断しません。',
    methodology3: '確認日は実際の確認を示します', methodology3Text: '情報確認日は内容を編集・確認した日付です。リリース同期日時はメタデータの取得のみを示し、ゲームの再テストを意味しません。情報更新はバージョン管理されたデータに記録します。',
    methodology4: '独立、透明、軽量', methodology4Text: '任天堂や掲載プロジェクトの公式サイトではありません。ゲーム、キー、ファームウェアは配布しません。この静的版にはアクセス解析・広告スクリプト・アカウント機能はありません。外部サイトは各自のプライバシーポリシーに従います。',
    notFound: '少し、地図の外へ。', notFoundText: 'ページが見つかりません。ほかにも探索できる情報があります。', backHome: 'ディレクトリへ戻る', close: '検索を閉じる', searchHint: 'ゲーム、プロジェクト、開発者で検索できます。Tab で結果を選択します。', searchEmpty: '一致する結果がありません。短いキーワードを試してください。',
    faqs: [
      ['Switch 2 エミュレーターとは？', 'ほかのハードウェア上で Nintendo Switch 2 のシステム動作の再現を試みるソフトウェアです。掲載プロジェクトは実験段階にあり、目標や互換性が異なります。'],
      ['どのエミュレーターを選べばよいですか？', 'ゲームから選びましょう。Eglantine は汎用の出発点、PokeDinner は Pokopia 向けでしたがメンテナンス終了、Fortune’s Eden は Fortune’s Weave、Selevet は Mario Kart World と時のオカリナの実験ビルドを公開しています。根拠と要件を先に確認してください。'],
      ['ゲームは必ず動きますか？', '保証はできません。開発者報告、開発対象、未確認の候補を区別しています。結果はバージョン、ビルド、環境、設定に依存します。当サイトは独自にベンチマークしていません。'],
      ['ダウンロード元はどこですか？', '元のメンテナーのリポジトリや配布ファイルへリンクします。Switch2e はエミュレーター、ゲーム、キー、ファームウェアを再配布しません。'],
      ['Frizti/Lichii と Lichii は同じですか？', 'Frizti/Lichii は Frizti/Fritchii に転送されます。zortos293/Lichii とは別のフォークです。配布物の混同を防ぐため、別項目として掲載しています。'],
      ['60 FPS パッチは 60 FPS を保証しますか？', 'いいえ。Fortune’s Eden のパッチは任意で、初期状態では無効です。通常の目標は 30 FPS で、実際の性能は環境と設定に依存します。']
    ]
  }
};

// Keep the homepage FAQ and its structured data aligned with the tool directory.
for (const [language, text] of Object.entries(copy)) {
  text.advertise = advertisingCopy[language].label;
  text.terms = legalCopy[language].terms;
  text.privacy = legalCopy[language].privacy;
  text.supportEmail = { en: 'Customer support', 'zh-CN': '客服邮箱', ja: 'お問い合わせ' }[language];
  for (const tool of tools) text.faqs.push([tool.faqs[0].question[language], tool.faqs[0].answer[language]]);
}
