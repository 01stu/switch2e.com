const loc = (en, zh, ja) => ({ en, 'zh-CN': zh, ja });
const repo = 'https://github.com/Dittobyte/Recompia';
const revision = '2fdda31288427d5a3ebcaefc26c5d90c543df23c';
const source = path => `${repo}/blob/${revision}/${path}`;
export const recompia = {
  id: 'recompia', name: 'Recompia', owner: 'Dittobyte',
  kind: 'static-recompilation', game: 'pokemon-pokopia',
  repo, api: 'https://api.github.com/repos/Dittobyte/Recompia/releases?per_page=5',
  platforms: ['Windows', 'Linux (x64 / Arm64)', 'macOS (Apple Silicon)'],
  maintenance: 'active', reviewed: '2026-11-16', sourceRevision: revision,
  license: 'GPL-3.0', licenseURL: source('LICENSE'),
  seoTitle: loc('Recompia — Pokémon Pokopia PC Recompilation & Download', 'Recompia — Pokémon Pokopia PC 转译工具与下载', 'Recompia — Pokémon Pokopia PC 再コンパイル・導入'),
  seoDescription: loc(
    'Download Recompia for Pokémon Pokopia on Windows, Linux and Apple Silicon Macs. Check game version 2.0.1a, setup, saves and Link Play requirements.',
    'Recompia：Pokémon Pokopia 的 Windows、Linux、Apple Silicon Mac 转译工具。查看下载、2.0.1a 要求、本地构建、存档与 Link Play。',
    'Pokémon Pokopia 向け Recompia の Windows・Linux・Apple Silicon Mac 配布、2.0.1a の要件、導入・セーブ・Link Play を確認。'),
  sources: [repo, source('README.md'), `${repo}/releases`, `${repo}/releases/tag/v0.13.9`,
    source('launcher/README.md'), source('docs/link-play.md'), source('docs/multiplayer/README.md'),
    source('game-build/release_b/README.macos.txt'), source('docs/macos-port.md'),
    source('LEGAL.md'), source('CREDITS.md'), source('LICENSE')],
  summary: loc(
    'Recompia recompiles Pokémon Pokopia from your own game dump for Windows, native Linux and Apple Silicon Macs, with a launcher, save imports, mods and Link Play.',
    'Recompia 将用户自己的 Pokémon Pokopia 导出数据转译为 Windows、原生 Linux 和 Apple Silicon Mac 程序，提供启动器、存档导入、模组与 Link Play 联机。',
    'Recompia は自身の Pokémon Pokopia データを Windows・Linux・Apple Silicon Mac 向けに再コンパイルし、ランチャー・セーブ取り込み・MOD・Link Play を提供します。'),
  detail: loc(
    'Dittobyte’s Recompia is a game-specific recompilation project descended from pokopia-native. Setup verifies your dump, lifts game code to C++, compiles a local PC program and translates shaders. The runtime replaces console services and uses Vulkan; macOS uses bundled MoltenVK. This entry uses the Dittobyte/Recompia repository’s releases, because several README badges and download links still point to featureJosh/pokopia-recomp. It is separate from the PokeDinner, Banana Native and Hokkaido emulator options.',
    'Dittobyte 的 Recompia 是源自 pokopia-native 的单游戏转译项目。Set up 校验自己的导出数据，将游戏代码转换为 C++，本地编译 PC 程序并转换着色器；运行时替代主机服务，通过 Vulkan 渲染，macOS 使用随包提供的 MoltenVK。README 部分徽章及下载链接仍指向 featureJosh/pokopia-recomp，本站使用 Dittobyte/Recompia 自己的发布附件。它与 PokeDinner、Banana Native、Hokkaido 模拟器方案分别收录。',
    'Dittobyte の本作専用プロジェクトで、pokopia-native が基盤です。Set up が自身のデータを検証し、C++ に変換・ローカル構築、シェーダー変換を行います。ランタイムは本体サービスと Vulkan 描画を担当し、Mac は同梱 MoltenVK を使います。README の一部リンクが featureJosh/pokopia-recomp を指すため、当サイトは Dittobyte/Recompia 自身の配布を使用。PokeDinner・Banana Native・Hokkaido とは別です。'),
  note: loc(
    'No game files, keys or dumping tools are supplied. Use your own legally obtained game and do not redistribute built game files. Switch2e has not tested gameplay or performance. Linux Arm64 is experimental; the Mac port notes leave movies, peer Link Play and a physical controller unverified. Published packages are not a guarantee of complete compatibility on every platform.',
    '不提供游戏文件、密钥或导出工具；需要自己合法取得的游戏，不要分发构建后的游戏。Switch2e 未实测游戏或性能。Linux Arm64 属实验支持，Mac 移植说明仍将过场、实际双端 Link Play 与实体手柄列为未验证。有发布包不等于所有平台均已完整兼容。',
    'ゲーム・キー・吸い出しツールは配布されません。自身の適法なゲームを使用し、構築物は再配布しないでください。当サイトは動作・性能未検証です。Linux Arm64 は実験的、Mac 文書では動画・相手との Link Play・実機パッドが未検証。配布は全環境の互換性保証ではありません。'),
  requirements: [
    loc('The reviewed README requires your own extracted Pokémon Pokopia 2.0.1a, including its update. Use a folder containing base/ and updates/ with ExeFS/RomFS, or a .nup or .nx package made from extracted files. NSP/XCI are not accepted directly. Link Play documentation refers to game 2.0.1; keep the setup requirement 2.0.1a and match peers’ releases.',
      '核查的 README 要求含更新的 Pokémon Pokopia 2.0.1a。使用含 base/、updates/ 及 ExeFS／RomFS 的目录，或由已提取数据生成的 .nup／.nx；不能直接使用 NSP／XCI。Link Play 文档写游戏 2.0.1，安装仍按 2.0.1a 要求，并与伙伴匹配工具版本。',
      'README の導入要件は更新込みの Pokémon Pokopia 2.0.1a。base/・updates/ と ExeFS/RomFS のフォルダー、または展開済みデータ由来の .nup・.nx。NSP/XCI は直接不可。Link Play 文書は 2.0.1 と記載しますが、導入は 2.0.1a と相手の版を確認します。'),
    loc('Windows 10/11 x64 or native Linux with Vulkan 1.3 and a compatible GPU driver. The Linux launcher guide specifies glibc 2.35. Releases provide separate Linux x64 and experimental Arm64 archives; choose the CPU architecture you actually use.',
      'Windows 10／11 x64 或带兼容显卡驱动、Vulkan 1.3 的原生 Linux。Linux 启动器指南列出 glibc 2.35，发布包分别提供 x64 与实验性 Arm64，请按实际 CPU 架构选择。',
      'Windows 10/11 x64、または Vulkan 1.3・対応ドライバーの Linux。ランチャー文書は glibc 2.35 を指定。Linux x64 と実験的 Arm64 の書庫を CPU に合わせて選択します。'),
    loc('Apple Silicon M1 or newer, macOS 13+ for the Mac package. It contains MoltenVK and uses Apple clang for local compilation. Follow the macOS package notes; an Intel Mac build is not supplied.',
      'Mac 发布包要求 Apple Silicon M1 及以上、macOS 13+，随包提供 MoltenVK，使用 Apple clang 本地编译。请按 Mac 包说明设置，不提供 Intel Mac 构建。',
      'Mac は Apple Silicon M1 以降・macOS 13 以降。同梱 MoltenVK と Apple clang によるローカル構築を使用し、Mac 用説明に従います。Intel Mac 用ではありません。'),
    loc('Setup checks Vulkan, memory and free space: about 14 GB with packed shader files or 31 GB with loose files, in addition to the game dump. Loose translated shaders can occupy about 26 GB. These are setup space checks, not a total storage or RAM guarantee; initial translation may take a long time and can be paused.',
      'Set up 检查 Vulkan、内存及空间：压缩着色器模式约 14 GB，散文件模式约 31 GB，另需游戏导出数据空间；散着色器可占约 26 GB。这是安装空间检查，不是总空间或内存保证；首次转换较耗时，可暂停续作。',
      'Set up は Vulkan・メモリ・空き容量を確認し、圧縮シェーダー約 14 GB、非圧縮約 31 GB に加えダンプが必要。非圧縮キャッシュは約 26 GB。総容量や RAM の保証値ではなく、初回変換は長く一時停止可能です。')
  ],
  features: [
    loc('Link Play on the same network or via a project relay, with documented pokopia-native cross-play. Story-area interaction and seamless co-op are experimental and off by default. Nintendo’s online service is not implemented.',
      '支持同网络或项目中继的 Link Play，文档说明可与 pokopia-native 跨项目联机。剧情区域交互与无缝合作属实验功能，默认关闭；未实现任天堂在线服务。',
      '同一 LAN または専用リレーの Link Play、pokopia-native との相互接続を説明。ストーリー領域の操作・シームレス協力は実験的で初期は無効。任天堂のオンラインサービスではありません。'),
    loc('Save import from Eden/Ryujinx or a folder containing B00, G00 and S00, with backups. PokoHex is integrated in the launcher’s Save Editor; edit only with the game closed and keep a backup.',
      '可从 Eden／Ryujinx 或含 B00、G00、S00 的目录导入存档，并保存备份。启动器 Save Editor 集成 PokoHex，编辑时需关闭游戏并保留备份。',
      'Eden/Ryujinx、または B00・G00・S00 を含むフォルダーからセーブを取り込み、バックアップを保持。PokoHex 内蔵エディターはゲーム終了後に使用し保存を残します。'),
    loc('F1 settings, remappable keyboard/controller input, mouse mode, resolution and render scale, HDR and ultrawide options. FSR 1 and NVIDIA Image Scaling are described as working; the README advises leaving FSR 3 and DLSS/DLAA off while they need rework.',
      '提供 F1 设置、键鼠／手柄重映射、鼠标模式、分辨率与渲染比例、HDR 及超宽屏。README 称 FSR 1、NVIDIA Image Scaling 可用，FSR 3 与 DLSS／DLAA 仍需重做，建议关闭。',
      'F1 設定、キー・パッド割当、マウスモード、解像度・描画倍率、HDR・ワイド画面。FSR 1・NVIDIA Image Scaling は動作と記載、FSR 3・DLSS/DLAA は改善待ちで無効を推奨。'),
    loc('RomFS replacement mods and translations without changing the dump; mods replacing files containing shaders are unsupported. Launcher updates can rebuild only changed work. Version 0.13.9’s Online events switch simulates connectivity for timed events; it does not enable other Nintendo online services.',
      '支持不改导出数据的 RomFS 替换模组与翻译，不支持替换含着色器文件的模组；启动器更新可复用已有工作。0.13.9 的 Online events 开关为限时活动模拟连接状态，不会开启其他任天堂在线服务。',
      'ダンプを変更しない RomFS 差し替え・翻訳 MOD に対応し、シェーダー入りファイルの差し替えは不可。更新は既存処理を再利用。0.13.9 の Online events はイベント用の接続状態を模擬し、他の任天堂サービスは利用できません。')
  ],
  steps: [
    loc('Choose your OS/CPU package from Dittobyte/Recompia releases and extract it completely. Windows uses PokopiaLauncher.exe, Linux uses PokopiaLauncher.AppImage, and Mac uses PokopiaLauncher.app. Keep the tools beside the launcher.',
      '从 Dittobyte/Recompia 发布列表选择系统与 CPU 对应包并完整解压。Windows 运行 PokopiaLauncher.exe，Linux 使用 PokopiaLauncher.AppImage，Mac 使用 PokopiaLauncher.app，保留配套 tools。',
      'Dittobyte/Recompia から OS・CPU に合う書庫を全て展開。Windows は PokopiaLauncher.exe、Linux は PokopiaLauncher.AppImage、Mac は PokopiaLauncher.app。同梱 tools を保持します。'),
    loc('Select your own 2.0.1a dump in Game files and press Set up. Let local game compilation and shader translation finish; Pause/Continue setup preserves completed work. “Use fewer cores” reduces build load. An incompatible or damaged dump must be corrected before continuing.',
      '在 Game files 选择自己的 2.0.1a 导出数据，点击 Set up，等待本地编译及着色器转换。Pause／Continue setup 保留已完成工作，Use fewer cores 可降低构建负载；版本错误或数据损坏时先修正。',
      'Game files で自身の 2.0.1a を選び Set up。ローカル構築・シェーダー変換を待ち、Pause/Continue setup で再開できます。Use fewer cores で負荷を軽減し、誤版・破損データは先に修正します。'),
    loc('Press Play after setup. Linux runs natively without Proton/Wine; if FUSE is unavailable, use --appimage-extract-and-run. On Steam Deck, add the AppImage as a non-Steam game in Desktop Mode and use --play. Mac users should follow the package’s own startup notes.',
      '完成后点击 Play。Linux 原生运行，无需 Proton／Wine；缺 FUSE 可用 --appimage-extract-and-run。Steam Deck 在桌面模式把 AppImage 添加为非 Steam 游戏，启动参数用 --play。Mac 按发布包启动说明操作。',
      '完了後 Play。Linux は Proton/Wine 不要、FUSE がない場合 --appimage-extract-and-run。Deck は Desktop Mode で AppImage を非 Steam ゲームに加え --play を指定。Mac は配布の起動説明を確認します。'),
    loc('Back up save/ before updates or editing. For v0.13.9, the notes say Update then Set up again; shaders and saves are kept. Settings are pkp.ini and controls.ini, game diagnostics pkp.log, setup diagnostics setup.log. Report logs and hardware without attaching game data, build output or shader caches.',
      '更新和编辑前备份 save/。v0.13.9 说明要求 Update 后 Set up again，保留着色器与存档。设置在 pkp.ini、controls.ini，游戏日志 pkp.log，安装日志 setup.log；报告硬件与日志，不附带游戏数据、构建产物或着色器缓存。',
      '更新・編集前に save/ を保存。v0.13.9 は Update 後 Set up again、シェーダーとセーブは保持。設定 pkp.ini・controls.ini、ログ pkp.log・setup.log。環境とログを報告し、ゲーム・構築物・キャッシュは添付しません。')
  ],
  sections: [{
    id: 'platforms', title: loc('Platform packages and limits', '各平台发布包与限制', 'OS 別の配布と制約'),
    columns: [loc('Platform', '平台', 'OS'), loc('Package and documented status', '发布包与文档状态', '配布と文書上の状態')],
    rows: [
      [loc('Windows x64', 'Windows x64', 'Windows x64'), loc('PokopiaRecomp-<version>-win64.zip; local compilation and Vulkan graphics.', 'PokopiaRecomp-<version>-win64.zip；本地编译、Vulkan 渲染。', 'PokopiaRecomp-<version>-win64.zip。ローカル構築・Vulkan 描画。')],
      [loc('Linux / Steam Deck', 'Linux／Steam Deck', 'Linux／Steam Deck'), loc('linux-x64.tar.gz contains the native AppImage and tools; no Proton/Wine. linux-arm64.tar.gz is an experimental separate build.', 'linux-x64.tar.gz 含原生 AppImage 与工具，无需 Proton／Wine；linux-arm64.tar.gz 为独立实验构建。', 'linux-x64.tar.gz はネイティブ AppImage・ツール。Proton/Wine 不要、linux-arm64.tar.gz は実験的別ビルド。')],
      [loc('Apple Silicon Mac', 'Apple Silicon Mac', 'Apple Silicon Mac'), loc('Recompia-<version>-macos-arm64.zip, M1+, macOS 13+, bundled MoltenVK. Mac notes leave movies, peer Link Play and a physical controller unverified.', 'Recompia-<version>-macos-arm64.zip，M1+、macOS 13+，含 MoltenVK；Mac 说明仍有过场、双端联机、实体手柄未验证。', 'Recompia-<version>-macos-arm64.zip、M1 以降・macOS 13 以降・MoltenVK 同梱。動画・相手との接続・実機パッドは未検証。')]
    ], source: `${repo}/releases/tag/v0.13.9`
  }, {
    id: 'link-play', title: loc('Link Play requirements and online limits', 'Link Play 联机要求与在线功能边界', 'Link Play の要件とオンラインの制約'),
    paragraphs: [loc('Each player needs their own save, matching game/release versions, mods and experimental co-op switches. Set Link Play to Same network or Internet in the launcher, restart the game, then use Local connection at the first house’s PC once unlocked. The project relay does not encrypt game traffic. Nintendo’s Online connection is not available, and the Mac port has not verified peer multiplayer.',
      '每位玩家需有自己的存档，并匹配游戏／工具版本、模组与实验合作开关。在启动器选 Same network 或 Internet，重启游戏，解锁后在第一间房子的电脑中使用 Local connection。项目中继不加密游戏流量；不能使用任天堂 Online connection，Mac 双端联机尚未验证。',
      '各自のセーブ、対応するゲーム・ツール版・MOD・実験設定が必要。ランチャーで Same network／Internet を選び再起動、解放後に最初の家の PC で Local connection。リレーはゲーム通信を暗号化せず、任天堂 Online connection は不可。Mac の相手との接続は未検証。')], source: source('docs/link-play.md')
  }],
  faqs: [
    { question: loc('Is Recompia an emulator for Pokémon Pokopia?', 'Recompia 是 Pokémon Pokopia 模拟器吗？', 'Recompia は Pokémon Pokopia のエミュレーターですか？'),
      answer: loc('It is a game-specific static recompilation project. It builds a native program from your own Pokémon Pokopia 2.0.1a dump, with a runtime and launcher. It is separate from general Switch 2 emulators and supplies no game files.',
        '它是面向单款游戏的静态转译／重编译项目，使用自己的 Pokémon Pokopia 2.0.1a 导出数据构建原生程序，配套运行时与启动器。它独立于通用 Switch 2 模拟器，不提供游戏文件。',
        '本作専用の静的再コンパイルです。自身の Pokémon Pokopia 2.0.1a からネイティブプログラムを構築し、ランタイムとランチャーを使います。汎用 Switch 2 エミュレーターとは別で、ゲームは同梱されません。') },
    { question: loc('Does Recompia work natively on Linux and Mac?', 'Recompia 的 Linux 与 Mac 是原生运行吗？', 'Linux・Mac はネイティブですか？'),
      answer: loc('The published packages provide native Linux x64, experimental Linux Arm64, and Apple Silicon macOS builds. Linux uses Vulkan; Mac requires M1+ and macOS 13+ with bundled MoltenVK. Mac’s movies, peer multiplayer and physical controller remain unverified in the reviewed port notes.',
        '发布包提供原生 Linux x64、实验性 Linux Arm64 和 Apple Silicon macOS。Linux 使用 Vulkan，Mac 要求 M1+、macOS 13+，含 MoltenVK。核查的 Mac 说明仍有过场、双端联机与实体手柄未验证。',
        'Linux x64、実験的 Linux Arm64、Apple Silicon Mac のネイティブ版を配布。Linux は Vulkan、Mac は M1 以降・macOS 13 以降と同梱 MoltenVK。Mac の動画・相手との接続・実機パッドは未検証です。') },
    { question: loc('Does Link Play enable Nintendo’s online services?', 'Link Play 是否代表支持任天堂在线服务？', 'Link Play で任天堂のオンラインを使えますか？'),
      answer: loc('No. Link Play uses the project’s LAN/relay protocol and documented pokopia-native cross-play; every player needs their own save and compatible versions. Nintendo’s Online connection does not work. The Online events setting only simulates connectivity for timed events.',
        '不代表。Link Play 使用项目的局域网／中继协议，并说明可与 pokopia-native 跨项目连接，每人需独立存档和兼容版本。任天堂 Online connection 不可用，Online events 只为限时活动模拟连接状态。',
        '使えません。独自 LAN・リレー方式と pokopia-native の相互接続を説明し、各自のセーブと対応版が必要。任天堂 Online connection は不可で、Online events はイベント用に接続状態を模擬するだけです。') }
  ]
};
