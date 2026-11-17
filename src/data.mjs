import { hokkaido } from './hokkaido.mjs';
export const reviewed = '2026-11-09';
export const languages = ['en', 'zh-CN', 'ja'];
export const languageNames = { en: 'English', 'zh-CN': '简体中文', ja: '日本語' };
export const loc = (en, zh, ja) => ({ en, 'zh-CN': zh, ja });
export const emulators = [
  hokkaido,
  {
    id: 'banana-native', name: 'Banana Native', owner: 'moceure', symbol: '◡', color: 'yellow', alias: 'BananaNative',
    repo: 'https://git.eden-emu.dev/moceure/BananaNative', api: 'https://git.eden-emu.dev/api/v1/repos/moceure/BananaNative/releases?limit=5',
    platforms: ['Android'], kind: 'general', statusKey: 'active', status: loc('Active development', '活跃开发中', '活発に開発中'), activityDate: '2026-11-11',
    label: loc('Switch 2 on Android', '在 Android 上探索 Switch 2', 'Android で Switch 2'),
    summary: loc('An Android port of nxnative that runs Switch 2 ARM64 game code on your phone and translates graphics to Vulkan. APK releases are available from the Eden Git repository.', 'nxnative 的 Android 移植，在手机上运行 Switch 2 的 ARM64 游戏代码并将图形转换为 Vulkan，APK 可从 Eden Git 仓库发布页获取。', 'Switch 2 の ARM64 ゲームコードをスマートフォンで実行し、描画を Vulkan に変換する nxnative の Android 移植です。Eden Git のリリースから APK を入手できます。'),
    detail: loc('Banana Native supplies the system services a game calls rather than emulating console hardware. Its documentation specifies Android 13+, a Snapdragon/Adreno device and at least 12 GB RAM, or 16 GB for Mario Kart World. Each game is prepared into a pack on a phone or, more quickly, a Windows PC or Mac.', 'Banana Native 为游戏提供所需系统服务，而非模拟主机硬件。文档要求 Android 13+、Snapdragon/Adreno 设备及至少 12 GB 内存，Mario Kart World 要求 16 GB。游戏需先在手机或速度更快的 Windows PC、Mac 上准备为 pack。', '本体ハードウェアのエミュレーションではなく、ゲームが呼び出すシステムサービスを提供します。要件は Android 13 以降、Snapdragon/Adreno、RAM 12 GB 以上（Mario Kart World は 16 GB）。ゲームをスマートフォン、またはより高速な Windows PC／Mac で pack に準備します。'),
    note: loc('Use your own console-dumped game folder or .nup. No decryption keys or firmware are needed; NSP and XCI are not supported. Device, driver and game-version restrictions apply. The README labels Ocarina of Time experimental and Splatoon Raiders not yet playable.', '使用从自己主机导出的游戏目录或 .nup，无需解密密钥或固件，不支持 NSP 与 XCI。兼容性受设备、驱动和游戏版本限制；README 将《时之笛》标为实验性支持，Splatoon Raiders 尚不可玩。', '自分の本体から取得したゲームフォルダーまたは .nup を使います。キーやファームウェアは不要で、NSP／XCI は非対応です。端末・ドライバー・ゲーム版に制約があり、README では時のオカリナは実験段階、Splatoon Raiders はまだプレイ不可とされています。'),
    games: ['donkey-kong-bananza', 'mario-kart-world', 'pokemon-pokopia', 'ocarina-of-time', 'splatoon-raiders', 'fire-emblem-fortunes-weave'], extraSource: 'https://git.eden-emu.dev/moceure/BananaNative/src/branch/android/README.md'
  },
  {
    id: 'eglantine', name: 'Eglantine', owner: 'Djihads80', symbol: '✳', color: 'green',
    repo: 'https://github.com/Djihads80/Eglantine', api: 'https://api.github.com/repos/Djihads80/Eglantine/releases?per_page=5',
    platforms: ['Windows', 'Linux', 'macOS'], kind: 'general', statusKey: 'active', status: loc('Active development', '活跃开发中', '活発に開発中'), activityDate: '2026-11-08',
    label: loc('The starting point', '从这里开始', 'はじめの一歩'),
    summary: loc('An open-source Switch 2 emulator built on Eden, yuzu and Sudachi. A starting point for exploring the scene.', '基于 Eden、yuzu 和 Sudachi 的开源 Switch 2 模拟器，是了解这一生态的起点。', 'Eden、yuzu、Sudachi を基にしたオープンソースの Switch 2 エミュレーター。まず知っておきたいプロジェクトです。'),
    detail: loc('Written in C++, Eglantine publishes desktop builds. Its README reports Mario Kart World running at speeds that depend on the setup, and variable performance in Splatoon Raiders.', 'Eglantine 使用 C++ 编写，提供桌面平台构建。README 记载了 Mario Kart World 的运行情况（速度依配置而定），以及 Splatoon Raiders 的不稳定性能表现。', 'C++ で開発され、デスクトップ向けビルドを公開しています。README は Mario Kart World の動作と、Splatoon Raiders の環境により変わるパフォーマンスを報告しています。'),
    note: loc('Very experimental. A developer report is not a guarantee for your hardware.', '仍处于高度实验阶段。开发者的报告不代表你的设备一定能流畅运行。', '非常に実験的です。開発者の報告は、使用する環境での動作保証ではありません。'),
    games: ['mario-kart-world', 'splatoon-raiders']
  },
  {
    id: 'lichii', name: 'Lichii', owner: 'zortos293', symbol: '◒', color: 'pink',
    repo: 'https://github.com/zortos293/Lichii', api: 'https://api.github.com/repos/zortos293/Lichii/releases?per_page=5',
    platforms: ['Windows', 'Linux', 'macOS'], kind: 'general', statusKey: 'active', status: loc('Active development', '活跃开发中', '活発に開発中'), activityDate: '2026-11-08',
    label: loc('Community driven', '社区协作', 'コミュニティ主導'),
    summary: loc('An independent Eglantine-derived fork focused on renderer fixes and game compatibility, with community reporting.', 'Lichii 是源于 Eglantine 的独立开源分支，关注 Switch 2 游戏的渲染修复与兼容性，并提供社区兼容性报告入口。', 'Eglantine から派生した独立フォーク。Switch 2 ゲームの描画修正と互換性に取り組み、コミュニティ報告を提供します。'),
    detail: loc('Lichii retains the upstream data directories for settings and saves. Check its community compatibility catalog for reports tied to a specific build and hardware.', 'Lichii 延续上游的配置与存档目录。可通过其社区兼容性目录，查看与具体构建版本、硬件相对应的报告。', '上流の設定・セーブデータのディレクトリを引き継ぎます。互換性カタログでは、ビルドやハードウェアごとの報告を確認できます。'),
    note: loc('Back up saves before testing. Automated tests do not establish playable game compatibility.', '测试前请备份存档。自动化测试通过并不等于游戏达到可玩状态。', 'テスト前にセーブをバックアップしてください。自動テストの成功はゲームの動作保証ではありません。'),
    games: ['ocarina-of-time'], extraSource: 'https://lichii.zortos.me'
  },
  {
    id: 'pokedinner', name: 'PokeDinner', owner: 'Franseven', symbol: '◓', color: 'yellow',
    repo: 'https://git.eden-emu.dev/Franseven/PokeDinner-a-Eglantine-Fork', api: 'https://git.eden-emu.dev/api/v1/repos/Franseven/PokeDinner-a-Eglantine-Fork/releases?limit=5',
    platforms: ['Windows', 'Linux', 'macOS'], kind: 'specialized', statusKey: 'discontinued', status: loc('No longer maintained', '已停止维护', 'メンテナンス終了'), activityDate: '2026-11-04',
    maintenance: 'discontinued', reviewed: '2026-11-16',
    label: loc('Pokopia fork · unmaintained', 'Pokopia 分支 · 已停更', 'Pokopia 向け・メンテナンス終了'),
    summary: loc('PokeDinner is no longer maintained. This Eglantine fork focused on Pokémon Pokopia; its existing releases and setup notes remain available for reference.', 'PokeDinner 已停止维护。这个 Eglantine 分支曾主要关注 Pokémon Pokopia，本站保留其已有发布版本、平台附件和安装说明供历史参考。', 'PokeDinner はメンテナンスを終了しました。Pokémon Pokopia に注力した Eglantine フォークで、既存の配布・導入情報を参考資料として掲載しています。'),
    detail: loc('The repository identifies Pokopia as its main target. Use the fork’s own release page; inherited upstream download links may lead to a different project.', '仓库明确以 Pokopia 为主要目标。下载时应使用这个分支自己的发布页面，继承的上游 README 下载链接可能指向其他项目。', 'リポジトリは Pokopia を主な対象としています。上流から引き継いだ README のリンクではなく、このフォーク自身のリリースを確認してください。'),
    note: loc('This project is no longer maintained; the setup and compatibility information below is historical. A project focus is not an independently verified playability result. Check assets for platform support.', '项目已停止维护，下方安装与兼容性信息作为历史资料保留。项目关注方向不等于独立实测结果，具体平台支持请查看发布附件。', 'メンテナンス終了のため、以下の導入・互換性情報は過去の資料です。開発対象であることと独立した動作確認は異なります。対応 OS は配布で確認してください。'),
    games: ['pokemon-pokopia']
  },
  {
    id: 'fortunes-eden', name: 'Fortune’s Eden', owner: 'TheSneakyBadger', symbol: '✧', color: 'purple',
    repo: 'https://github.com/TheSneakyBadger/FEFW-Stable-with-60-FPS-Patch', api: 'https://api.github.com/repos/TheSneakyBadger/FEFW-Stable-with-60-FPS-Patch/releases?per_page=5',
    platforms: ['Windows'], kind: 'specialized', statusKey: 'active', status: loc('Active development', '活跃开发中', '活発に開発中'), activityDate: '2026-11-08', alias: 'FEFW Stable with 60 FPS Patch',
    label: loc('Fortune’s Weave focused', '专注 Fortune’s Weave', 'Fortune’s Weave 向け'),
    summary: loc('A portable Windows build tailored to Fire Emblem: Fortune’s Weave, with tuned settings and an optional 60 FPS patch.', '面向 Fire Emblem: Fortune’s Weave 的 Windows 便携构建，预设专用配置，附带可选的 60 FPS 补丁。', 'Fire Emblem: Fortune’s Weave 向けの Windows ポータブルビルド。調整済み設定と任意の 60 FPS パッチを備えます。'),
    detail: loc('Based on the Duck912 and xDarkWindx Eden forks. The default target is 30 FPS; the included 60 FPS patch is disabled by default and may introduce uneven performance.', '基于 Duck912 与 xDarkWindx 的 Eden 分支。默认目标为 30 FPS；附带的 60 FPS 补丁默认关闭，开启后可能出现帧时间不稳定。', 'Duck912 と xDarkWindx の Eden フォークが基盤です。標準は 30 FPS。60 FPS パッチは初期状態では無効で、動作が不安定になる場合があります。'),
    note: loc('“60 FPS” in the repository name is an optional patch, not a universal performance promise.', '仓库名称里的“60 FPS”指可选补丁，并非所有设备的帧率承诺。', '名前の「60 FPS」は任意のパッチを指し、あらゆる環境での性能を保証しません。'),
    games: ['fire-emblem-fortunes-weave']
  },
  {
    id: 'fritchii', name: 'Fritchii', owner: 'Frizti', symbol: 'ƒ', color: 'blue',
    repo: 'https://github.com/Frizti/Fritchii', originalRepo: 'https://github.com/Frizti/Lichii', api: 'https://api.github.com/repos/Frizti/Fritchii/releases?per_page=5',
    platforms: ['Windows'], kind: 'specialized', statusKey: 'active', status: loc('Active development', '活跃开发中', '活発に開発中'), activityDate: '2026-11-06', alias: 'Frizti/Lichii',
    label: loc('A different branch', '探索另一条分支', 'もうひとつのフォーク'),
    summary: loc('Fritchii is Frizti’s independent Lichii fork for Windows x64, formerly Frizti/Lichii. Find the maintainer’s downloads and setup instructions here.', 'Fritchii 是 Frizti 维护的 Windows x64 模拟器，也是 Lichii 的独立分支，原名 Frizti/Lichii。在这里查看维护者发布的下载与安装步骤。', 'Fritchii は Frizti が開発する Windows x64 向けの独立した Lichii フォークです。旧名は Frizti/Lichii。開発元のダウンロードと導入手順を確認できます。'),
    seo: {
      title: loc('Fritchii Emulator: Windows Download & Setup | Switch2e', 'Fritchii 模拟器：Windows 下载与安装指南 | Switch2e', 'Fritchii エミュレーター：Windows ダウンロード・導入 | Switch2e'),
      description: loc('Get Fritchii for Windows x64 from Frizti’s GitHub releases, with setup steps. This fork is separate from zortos293/Lichii.', '从 Frizti 的 GitHub 下载 Fritchii Windows x64 程序包，查看安装与首次启动步骤。原名 Frizti/Lichii，独立于 zortos293/Lichii。', 'Frizti の GitHub リリースから Windows x64 版 Fritchii を入手。展開、ランタイム、初回起動の導入手順を掲載。zortos293/Lichii とは別のフォークです。')
    },
    detail: loc('The old repository redirects to Fritchii. Its short README does not provide a general compatibility matrix; review the current release notes before choosing a build.', '旧仓库地址已跳转至 Fritchii。当前简短的 README 未提供通用兼容性表，选择构建前请阅读最新发布说明。', '旧 URL は Fritchii に転送されます。短い README には総合的な互換性表がないため、選択前に最新のリリース説明を確認してください。'),
    note: loc('Do not assume it has the same compatibility or releases as zortos293/Lichii. Platform availability follows published assets.', '不要假设它与 zortos293/Lichii 有相同的兼容性或版本。平台可用性以发布附件为准。', 'zortos293/Lichii と同じ互換性や配布内容とは限りません。対応 OS は配布ファイルで確認してください。'),
    games: ['ocarina-of-time'], extraSource: 'https://github.com/Frizti/Fritchii/releases/tag/fritchii-v5.6'
  },
  {
    id: 'selevet-eglantine', name: 'Selevet Eglantine', owner: 'sylvieistaken', symbol: '≋', color: 'orange',
    repo: 'https://github.com/sylvieistaken/selevet-eglantine', api: 'https://api.github.com/repos/sylvieistaken/selevet-eglantine/releases?per_page=5',
    platforms: ['Windows'], kind: 'optimized', statusKey: 'active', status: loc('Active development', '活跃开发中', '活発に開発中'), activityDate: '2026-11-06',
    label: loc('Tuned for your hardware', '面向硬件调优', 'ハードウェアに最適化'),
    summary: loc('An unofficial Eglantine build tuned for Mario Kart World and Zen 3 CPUs, using PGO and ThinLTO.', '为 Mario Kart World 与 Zen 3 CPU 调优的非官方 Eglantine 构建，使用 PGO 和 ThinLTO。', 'Mario Kart World と Zen 3 CPU 向けに調整した非公式 Eglantine ビルド。PGO と ThinLTO を使用します。'),
    detail: loc('This fork adds build and GPU mapping optimizations. Read the tuned documentation for CPU-specific requirements and choose an asset matching your machine.', '该分支增加了构建与 GPU 映射优化。请阅读 tuned 文档中的 CPU 要求，选择与你的设备匹配的发布文件。', 'ビルドと GPU マッピングの最適化を加えたフォークです。tuned ドキュメントの CPU 要件を読み、環境に合うファイルを選んでください。'),
    note: loc('The published Windows build requires AVX2. Tuning does not guarantee a speed increase on every CPU. This is an unofficial release.', '已发布的 Windows 构建要求 CPU 支持 AVX2。调优不代表所有 CPU 都会提速，这不是官方发布版本。', 'Windows 配布版には AVX2 が必要です。すべての CPU での高速化を保証しない非公式ビルドです。'),
    games: ['mario-kart-world', 'ocarina-of-time'], extraSource: 'https://github.com/sylvieistaken/selevet-eglantine/blob/main/tuned/README.md'
  }
];
export const games = [
  { id: 'mario-kart-world', name: 'Mario Kart World', genre: 'racing', year: '2025', color: 'blue', recommendations: ['eglantine', 'selevet-eglantine', 'banana-native'], evidence: 'reported',
    source: 'https://www.nintendo.com/us/store/products/mario-kart-world-switch-2/',
    summary: loc('Open roads. A world of racing. Explore emulator options for Nintendo’s Switch 2 kart racer.', '开放道路，纵横世界。了解这款 Switch 2 赛车游戏对应的模拟器选择。', '道はつながる、世界へ。Switch 2 のレースゲームに向けたエミュレーターを確認しましょう。'),
    reason: loc('Eglantine’s README reports this game running with hardware-dependent performance. Selevet explicitly targets this game. These are developer claims, not Switch2e benchmarks.', 'Eglantine README 记载了本作的运行情况，性能依硬件而定；Selevet 明确针对此游戏调优。这些是开发者陈述，并非本站跑分。', 'Eglantine の README に動作報告があり、Selevet は本作を調整対象にしています。開発者の説明であり、当サイトのベンチマークではありません。') },
  { id: 'pokemon-pokopia', name: 'Pokémon Pokopia', genre: 'simulation', year: '2026', color: 'green', recommendations: ['pokedinner', 'banana-native', 'hokkaido'], evidence: 'focused',
    source: 'https://www.nintendo.com/us/store/products/pokemon-pokopia-switch-2/',
    summary: loc('Explore Pokémon Pokopia with Recompia recompilation for PC and Mac, plus PokeDinner, Banana Native and Hokkaido emulator options.', '查看 Pokémon Pokopia 的 Recompia PC／Mac 转译方案，以及 PokeDinner、Banana Native、Hokkaido 模拟器选项。', 'Pokémon Pokopia 向け Recompia の PC・Mac 再コンパイルと、PokeDinner・Banana Native・Hokkaido を紹介します。'),
    seoDescription: loc('Compare Recompia for Pokémon Pokopia with PokeDinner, Banana Native and Hokkaido emulators. Find game requirements, setup guides and original downloads.', '比较 Pokémon Pokopia 的 Recompia 转译方案与 PokeDinner、Banana Native、Hokkaido 模拟器，查看游戏版本、系统要求、安装指南与原始下载。', 'Pokémon Pokopia の Recompia 再コンパイルと PokeDinner・Banana Native・Hokkaido を比較。バージョン・動作要件・導入・配布元を確認。'),
    reason: loc('PokeDinner focused on Pokopia but is no longer maintained; its entry is retained for historical reference. Recompia provides a separate recompilation option, while Banana Native and Hokkaido have Android-specific requirements and developer reports. None is a full-game compatibility or frame-rate guarantee.', 'PokeDinner 曾专注 Pokopia，现已停止维护，条目仅作历史参考。Recompia 提供独立转译方案，Banana Native 与 Hokkaido 则有各自的 Android 要求和开发者报告；这些信息均不代表全流程兼容或帧率保证。', 'PokeDinner は Pokopia に注力しましたがメンテナンス終了のため参考掲載です。Recompia は別の再コンパイル方式、Banana Native・Hokkaido は Android ごとの要件と開発者報告があります。全編互換性や FPS の保証ではありません。') },
  { id: 'fire-emblem-fortunes-weave', name: 'Fire Emblem: Fortune’s Weave', genre: 'rpg', year: '2026', color: 'purple', recommendations: ['fortunes-eden', 'banana-native', 'hokkaido'], evidence: 'focused',
    source: 'https://www.nintendo.com/us/store/products/fire-emblem-fortunes-weave-switch-2/',
    summary: loc('Explore Fire Emblem: Fortune’s Weave on PC: EmblemWeave recompilation, the discontinued fefw-recomp archive, Fortune’s Eden and Banana Native emulator options.', '了解 Fire Emblem: Fortune’s Weave 的 PC 运行方案：EmblemWeave 转译工具、已停更的 fefw-recomp 历史资料，以及 Fortune’s Eden 与 Banana Native 模拟器。', 'Fire Emblem: Fortune’s Weave 向け EmblemWeave、開発終了した fefw-recomp の記録と、Fortune’s Eden・Banana Native の情報を紹介します。'),
    seoDescription: loc('Explore Fire Emblem: Fortune’s Weave with EmblemWeave, migration from discontinued fefw-recomp, and Fortune’s Eden / Banana Native emulator options.', 'Fire Emblem: Fortune’s Weave 的 PC 方案：EmblemWeave 转译工具、停更 fefw-recomp 的迁移入口与模拟器推荐。', 'Fire Emblem: Fortune’s Weave 向け EmblemWeave、fefw-recomp からの移行と、Fortune’s Eden・Banana Native の紹介。'),
    reason: loc('Fortune’s Eden is explicitly packaged for this game. Its README describes a 30 FPS default and an optional 60 FPS patch. Results vary by PC and settings.', 'Fortune’s Eden 专门为此游戏打包。README 说明默认 30 FPS，60 FPS 补丁可选，实际效果取决于电脑配置及设置。', 'Fortune’s Eden は本作用に構成されています。README は標準 30 FPS と任意の 60 FPS パッチを説明しています。結果は PC や設定に依存します。') },
  { id: 'splatoon-raiders', name: 'Splatoon Raiders', genre: 'action', year: '2026', color: 'yellow', recommendations: ['eglantine', 'banana-native'], evidence: 'reported',
    source: 'https://www.nintendo.com/us/store/products/splatoon-raiders-switch-2/',
    summary: loc('Ink, treasure and a new frontier. Follow the current developer-reported emulation status.', '墨水、宝藏与全新冒险。了解开发者目前报告的模拟运行情况。', 'インクと宝探しの新たな冒険。開発者が報告するエミュレーションの現状を確認できます。'),
    reason: loc('Eglantine’s README mentions Splatoon Raiders, with variable performance. No independent full-game test or stable FPS target has been verified by Switch2e.', 'Eglantine README 提到了本作，注明性能表现不稳定。Switch2e 尚未独立验证全流程表现或稳定帧率。', 'Eglantine の README は本作のパフォーマンスが変動するとしています。当サイトで全編の動作や安定した FPS は確認していません。') },
  { id: 'donkey-kong-bananza', name: 'Donkey Kong Bananza', genre: 'action', year: '2025', color: 'orange', recommendations: ['lichii', 'eglantine', 'banana-native'], evidence: 'unverified',
    source: 'https://www.nintendo.com/us/store/products/donkey-kong-bananza-switch-2/',
    summary: loc('A smash-filled adventure. Track the projects to investigate while compatibility remains unverified here.', '探索 Donkey Kong Bananza 的 Switch 2 模拟器信息与兼容性来源。本站尚无经过验证的运行报告，请将所列通用项目视为调查起点。', 'Donkey Kong Bananza の Switch 2 向けエミュレーター情報と出典を紹介します。互換性は未確認のため、候補を調査の出発点としてご覧ください。'),
    reason: loc('Lichii and Eglantine are general-purpose projects to investigate, not confirmed working recommendations for this game. Look for a report matching your game version, build and hardware.', 'Lichii 与 Eglantine 是可供调查的通用模拟器项目，不代表已证实能够运行 Donkey Kong Bananza。请查找匹配游戏版本、模拟器构建、操作系统和硬件的具体测试报告。', 'Lichii と Eglantine は汎用の調査候補であり、本作の動作確認済み推奨ではありません。ゲームのバージョン、ビルド、OS、ハードウェアに合う報告を確認してください。') },
  { id: 'ocarina-of-time', name: 'The Legend of Zelda: Ocarina of Time', genre: 'rpg', year: '2026', color: 'green', recommendations: ['selevet-eglantine', 'fritchii', 'lichii', 'banana-native', 'hokkaido'], evidence: 'reported',
    source: 'https://www.nintendo.com/us/store/products/the-legend-of-zelda-ocarina-of-time-switch-2/',
    evidenceSource: 'https://github.com/sylvieistaken/selevet-eglantine/blob/main/tuned/README.md',
    evidenceSources: ['https://github.com/zortos293/Lichii/releases/tag/build-130'],
    summary: loc('Compare Longshot and NX2navi static recompilation tools for the Switch 2 version of The Legend of Zelda: Ocarina of Time, with source-linked setup guides.', '了解 Switch 2 版 The Legend of Zelda: Ocarina of Time（塞尔达传说：时之笛）的 Longshot 与 NX2navi 静态转译工具、使用指南及有来源说明的模拟器方案。', 'Switch 2 版ゼルダの伝説 時のオカリナの静的再コンパイルツール Longshot・NX2navi、導入ガイドと出典付きのエミュレーター情報を紹介します。'),
    reason: loc('Selevet’s build notes report Ocarina of Time booting and playing. Fritchii’s v5.6 release notes also describe testing this game and preparing its shaders before play. Lichii build 130 reports game-specific performance and memory improvements, with Windows PGO builds trained on Ocarina of Time. These are developer reports from specific setups, not Switch2e benchmarks or guarantees of full-game compatibility.', 'Selevet 的构建说明称《时之笛》可以启动并游玩；Fritchii v5.6 发布说明也描述了本作的测试情况及游玩前的着色器准备。Lichii build 130 说明也记录了本作的性能与内存改进，并提供使用《时之笛》训练的 Windows PGO 构建。这些是特定环境下的开发者报告，不是 Switch2e 跑分，也不保证全流程兼容。', 'Selevet は時のオカリナの起動・プレイを報告しています。Fritchii v5.6 のリリース説明にも本作のテストとプレイ前のシェーダー準備が記載されています。Lichii build 130 も本作の性能・メモリ改善と、本作で学習した Windows PGO ビルドを記載しています。特定環境での開発者報告であり、当サイトのベンチマークや全編動作の保証ではありません。') }
];
export const genres = {
  racing: loc('Racing', '竞速', 'レース'), simulation: loc('Life simulation', '生活模拟', 'シミュレーション'), rpg: loc('RPG & adventure', '角色扮演与冒险', 'RPG・冒険'), action: loc('Action', '动作', 'アクション')
};
