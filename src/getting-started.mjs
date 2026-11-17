import { hokkaidoGettingStarted } from './hokkaido.mjs';
import { loc } from './data.mjs';

const step = (title, text) => ({ title, text });
export const gettingStartedReviewed = '2026-11-10';

// Editorial summaries of the linked repository documentation, reviewed separately from releases.
export const gettingStarted = {
  hokkaido: hokkaidoGettingStarted,
  'banana-native': {
    reviewed: '2026-11-11',
    note: loc('These steps summarize Banana Native’s own README and Android setup guide. It uses prepared game packs, so the desktop forks’ key and firmware installation steps do not apply.', '以下整理自 Banana Native 的 README 与 Android 入门文档。它使用准备好的游戏 pack，桌面分支安装密钥和固件的步骤不适用于本项目。', 'Banana Native の README と Android 向け導入ガイドを要約しています。準備したゲーム pack を使うため、デスクトップ版のキー・ファームウェア導入手順は適用されません。'),
    sources: [
      { label: 'README and requirements', url: 'https://git.eden-emu.dev/moceure/BananaNative/src/branch/android/README.md' },
      { label: 'Getting started on the phone', url: 'https://git.eden-emu.dev/moceure/BananaNative/src/branch/android/docs/guides/getting-started.md' },
      { label: 'PC or Mac preparation', url: 'https://git.eden-emu.dev/moceure/BananaNative/src/branch/android/docs/guides/pc-mac-packing.md' }
    ],
    steps: [
      step(loc('Check your Android device', '核对 Android 设备要求', 'Android 端末の要件を確認'), loc('Use Android 13 or newer on a 64-bit Snapdragon/Adreno phone with at least 12 GB RAM; Mario Kart World needs 16 GB. A cooler is recommended. The guide requests about 1 GB free storage for a pack, plus 2 GB temporarily while preparing on the phone.', '使用 Android 13+ 的 64 位 Snapdragon/Adreno 手机，至少 12 GB 内存，Mario Kart World 要求 16 GB，建议配散热器。指南要求 pack 约 1 GB 空间，手机准备过程中还需临时额外 2 GB。', 'Android 13 以降の 64 ビット Snapdragon/Adreno 端末を使い、RAM は最低 12 GB、Mario Kart World は 16 GB を用意します。冷却器が推奨され、pack に約 1 GB、端末上での準備中は追加で約 2 GB の空き容量が必要です。')),
      step(loc('Install the project APK', '安装项目 APK', '開発元の APK を導入'), loc('Download the APK from the BananaNative repository’s Releases and open Banana Native. Its Allow file access card opens Android’s All files access setting. Without that permission, .nup files can be used in place and dump folders are copied into app storage.', '从 BananaNative 仓库 Releases 下载 APK 并打开 Banana Native。通过 Allow file access 卡片打开 Android 的 All files access 设置；不授予该权限时，.nup 可原位使用，游戏目录则复制到应用存储。', 'BananaNative リポジトリの Releases から APK を入手して起動します。Allow file access から Android の All files access を設定できます。許可しない場合も .nup は元の場所から使用でき、フォルダーはアプリ内にコピーされます。')),
      step(loc('Add your dump and prepare', '添加游戏并准备 pack', 'ダンプを追加して準備'), loc('Copy your own game dump to the phone and tap Add game: select the folder containing base/exefs and base/romfs, or a .nup file. Tap Prepare to rewrite its code and translate its shaders. Keep the phone charging; preparation runs in the background and can be paused. Keys, firmware, NSP and XCI are not used.', '将自己的游戏导出文件复制到手机，点击 Add game，选择含 base/exefs、base/romfs 的目录或 .nup 文件。点击 Prepare 重写代码并转换着色器，过程中保持充电，可后台运行及暂停。此流程不用密钥、固件、NSP 或 XCI。', '自分のダンプを端末にコピーし、Add game で base/exefs・base/romfs を含むフォルダー、または .nup を選びます。Prepare でコードとシェーダーを変換します。充電しながら実行し、バックグラウンド動作と一時停止も可能です。キー、ファームウェア、NSP、XCI は使いません。')),
      step(loc('Play or prepare on a computer', '开始游戏或改用电脑准备', 'プレイ、または PC で準備'), loc('Tap Play when the card is ready. For faster preparation, the README provides scripts/bananative.bat on Windows or scripts/bananative.command on Mac: prepare the game, copy the game and its android-pack to the phone, then add the game or use Import pack. Settings → Readiness check and the game’s Share log help diagnose problems.', '卡片准备完成后点击 Play。为加快准备，README 提供 Windows 的 scripts/bananative.bat 和 Mac 的 scripts/bananative.command：在电脑上准备后将游戏及 android-pack 复制到手机，再添加游戏或使用 Import pack。遇到问题可看 Settings → Readiness check，或通过游戏的 Share log 分享日志。', 'カードの準備が完了したら Play を選びます。PC で高速に準備する場合は Windows の scripts/bananative.bat または Mac の scripts/bananative.command を使い、ゲームと android-pack を端末にコピーして追加、または Import pack を使います。問題の確認には Settings → Readiness check と Share log が使えます。'))
    ]
  },
  eglantine: {
    note: loc('The repository links to an inherited Eden Quick Start. Its menu names are a starting point; use the Eglantine build and executable supplied by the release you choose.', '仓库链接的快速入门沿用 Eden 文档。下列菜单名称可作参考；请使用所选 Eglantine 版本附带的程序，勿按旧文档误下载 Eden。', 'リポジトリのクイックスタートは Eden 由来です。メニュー名は参考とし、選んだ Eglantine リリースに付属する実行ファイルを使ってください。'),
    sources: [
      { label: 'README', url: 'https://github.com/Eglantine-Community/Eglantine/blob/nx2/README.md' },
      { label: 'Quick Start', url: 'https://github.com/Eglantine-Community/Eglantine/blob/nx2/docs/user/QuickStart.md' }
    ],
    steps: [
      step(loc('Prepare your system', '准备运行环境', '実行環境を準備'), loc('On Windows, install the latest Microsoft Visual C++ Redistributable required by the handbook. Prepare your own console-dumped games, keys and firmware.', 'Windows 用户先安装手册要求的最新版 Microsoft Visual C++ Redistributable，并准备从自己主机导出的游戏、密钥和固件。', 'Windows では手引きで指定された最新の Microsoft Visual C++ Redistributable を用意し、自分の本体から取得したゲーム、キー、ファームウェアを準備します。')),
      step(loc('Choose and unpack a build', '选择并解压版本', 'ビルドを選んで展開'), loc('Download Eglantine from its own Releases page, choosing your OS and CPU architecture. Extract the full archive and launch the included application. The handbook also covers Steam Deck and macOS.', '从 Eglantine 自己的 Releases 页面选择匹配系统和 CPU 架构的构建，完整解压后运行其中的程序。手册另有 Steam Deck 与 macOS 说明。', 'Eglantine の Releases から OS と CPU に合うビルドを選び、全ファイルを展開して付属アプリを起動します。Steam Deck と macOS の説明も手引きにあります。')),
      step(loc('Set up system files', '设置系统文件', 'システムファイルを設定'), loc('The inherited guide uses Tools → Install Decryption Keys, then Tools → Install Firmware → From Folder or From ZIP. Select the files you prepared from your console.', '继承的手册使用 Tools → Install Decryption Keys 导入密钥，再通过 Tools → Install Firmware → From Folder 或 From ZIP 导入你已准备的固件。', '継承された手引きでは Tools → Install Decryption Keys、続いて Tools → Install Firmware → From Folder または From ZIP から自分で準備したファイルを指定します。')),
      step(loc('Add games and configure input', '添加游戏并设置控制器', 'ゲームと操作を設定'), loc('Double-click the empty main window to select your game directory. Open Emulation → Configure → Input, map your controller, save, and double-click a game to start.', '双击主窗口空白处选择游戏目录，再进入 Emulation → Configure → Input 映射控制器并保存，最后双击游戏启动。', 'メイン画面の空白部分をダブルクリックしてゲームフォルダーを追加します。Emulation → Configure → Input でコントローラーを設定し、ゲームをダブルクリックします。'))
    ]
  },
  lichii: {
    note: loc('Lichii’s README documents Windows startup and data-directory behavior. The setup menus below come from its inherited Eden Quick Start and may retain upstream names.', 'Lichii README 明确说明了 Windows 启动方式与数据目录行为；设置菜单来自仓库内继承的 Eden 快速入门，部分名称可能仍使用上游叫法。', 'Windows の起動方法とデータの扱いは Lichii の README に基づきます。設定メニューは継承された Eden の手引きに基づくため、上流の名称が残る場合があります。'),
    sources: [
      { label: 'Downloads and setup', url: 'https://github.com/zortos293/Lichii/blob/nx2/README.md#downloads-and-setup' },
      { label: 'Quick Start', url: 'https://github.com/zortos293/Lichii/blob/nx2/docs/user/QuickStart.md' }
    ],
    steps: [
      step(loc('Use the project release', '下载项目原始构建', '開発元のビルドを入手'), loc('Use zortos293/Lichii Releases. On Windows, extract the entire archive and run lichii.exe. The project says its compatibility website is for reports, not downloads.', '使用 zortos293/Lichii 的 Releases。Windows 下完整解压构建压缩包后运行 lichii.exe。项目说明兼容性网站用于报告，不提供游戏下载或模拟器分发。', 'zortos293/Lichii の Releases を使います。Windows では全ファイルを展開して lichii.exe を起動します。互換性サイトは報告用で、配布サイトではありません。')),
      step(loc('Prepare the runtime and system files', '准备运行库及系统文件', 'ランタイムとシステムファイル'), loc('The Windows handbook requires Microsoft Visual C++ Redistributable. Use your own console-dumped keys and firmware with Tools → Install Decryption Keys and Tools → Install Firmware.', 'Windows 手册要求 Microsoft Visual C++ Redistributable。通过 Tools → Install Decryption Keys 和 Tools → Install Firmware 导入从自己主机导出的密钥与固件。', 'Windows の手引きは Microsoft Visual C++ Redistributable を必要とします。Tools → Install Decryption Keys と Tools → Install Firmware で自分の本体から取得したファイルを設定します。')),
      step(loc('Protect existing data', '先备份已有数据', '既存データをバックアップ'), loc('Lichii keeps the existing Eden/Eglantine data directories, including settings, saves and shader caches. Back up your saves before trying a new build; the rebrand does not create an isolated profile.', 'Lichii 继续使用 Eden/Eglantine 的配置、存档和着色器缓存目录。测试新版本前先备份存档；更名本身不会创建独立配置。', 'Lichii は Eden/Eglantine の設定、セーブ、シェーダーキャッシュの保存先を引き継ぎます。新しいビルドを試す前にセーブをバックアップしてください。')),
      step(loc('Configure and launch', '设置后开始游戏', '設定して起動'), loc('Double-click the empty game list to add your own game folder, configure input under Emulation → Configure → Input, then launch a game. Compare community reports for your build and hardware if it misbehaves.', '双击空游戏列表添加自己的游戏目录，在 Emulation → Configure → Input 设置输入后启动游戏。遇到问题可对照对应构建和硬件的社区兼容性报告。', '空のゲーム一覧をダブルクリックしてフォルダーを追加し、Emulation → Configure → Input で操作を設定して起動します。問題があればビルドとハードウェアが近い互換性報告を確認します。'))
    ]
  },
  pokedinner: {
    note: loc('PokeDinner is hosted on the Eden Git service. Its Quick Start is inherited from Eden; fork-specific requirements below come from PokeDinner’s own release notes.', 'PokeDinner 托管在 Eden Git 服务上。快速入门继承自 Eden；下面的分支专属要求来自 PokeDinner 自己的版本说明。', 'PokeDinner は Eden の Git サービスにあります。クイックスタートは Eden 由来で、フォーク固有の要件は PokeDinner のリリース説明に基づきます。'),
    sources: [
      { label: 'Quick Start', url: 'https://git.eden-emu.dev/Franseven/PokeDinner-a-Eglantine-Fork/src/branch/master/docs/user/QuickStart.md' },
      { label: '2.5.0 release notes', url: 'https://git.eden-emu.dev/Franseven/PokeDinner-a-Eglantine-Fork/releases/tag/2.5.0' },
      { label: '2.7.7 release notes', url: 'https://git.eden-emu.dev/Franseven/PokeDinner-a-Eglantine-Fork/releases/tag/2.7.7' }
    ],
    steps: [
      step(loc('Choose a build for your game', '按游戏选择构建', 'ゲームに合うビルドを選択'), loc('Use this fork’s own Releases page. The 2.7.7 notes describe a Windows-only Ocarina test build, warn AMD GPU users against it, and say other games are untested. Review the chosen release before replacing a working build.', '从本分支自己的 Releases 页面下载。2.7.7 被标为仅限 Windows 的时之笛测试构建，提示 AMD GPU 用户不宜使用，其他游戏未经测试。替换可用版本前先读对应说明。', 'このフォーク自身の Releases を使います。2.7.7 は Windows 限定の時のオカリナ向けテスト版で、AMD GPU には不向き、他のゲームは未検証とされています。使用中のビルドを置き換える前に説明を確認します。')),
      step(loc('Extract and configure system files', '解压并设置系统文件', '展開してシステムファイルを設定'), loc('Extract the entire package. On Windows, prepare the Visual C++ runtime required by the handbook. Launch the included application and use its Tools menus to install your own decryption keys and firmware.', '完整解压构建包。Windows 用户准备手册要求的 Visual C++ 运行库，启动包内程序，通过 Tools 菜单设置自己的解密密钥和固件。', 'パッケージ全体を展開します。Windows では手引きにある Visual C++ ランタイムを用意し、付属アプリの Tools メニューから自分のキーとファームウェアを設定します。')),
      step(loc('Check memory and FPS modes', '核对内存与帧率模式', 'メモリと FPS モードを確認'), loc('The 2.5.0 notes request at least 32 GB of page file/swap and the emulator’s 12 GB DRAM setting. For the Dynamic FPS / 30 FPS lock options described there, enable only one at a time.', '2.5.0 说明要求至少 32 GB 的页面文件或 swap，并开启模拟器的 12 GB DRAM 设置。该说明中的 Dynamic FPS 与 30 FPS 锁定选项一次只能启用一个。', '2.5.0 の説明はページファイル／swap を最低 32 GB、エミュレーターの DRAM を 12 GB にするよう指定しています。そこに記載された Dynamic FPS と 30 FPS ロックは一度に一つだけ有効にします。')),
      step(loc('Add your game and input', '添加游戏和输入设备', 'ゲームと入力を追加'), loc('Following the inherited Quick Start, add your game directory from the empty main window and configure input under Emulation → Configure → Input. Start your game using the selected build’s settings.', '按继承的快速入门，在主窗口空白处添加自己的游戏目录，通过 Emulation → Configure → Input 配置输入，再按所选版本的设置启动游戏。', '継承された手引きに従い、メイン画面の空白部分からゲームフォルダーを追加し、Emulation → Configure → Input で入力を設定して起動します。'))
    ]
  },
  'fortunes-eden': {
    note: loc('These steps summarize Fortune’s Eden’s own Requirements, Getting started, Saves and 60 FPS patch sections.', '以下整理自 Fortune’s Eden 自己的 Requirements、Getting started、Saves 和 60 FPS patch 章节。', '以下は Fortune’s Eden 自身の Requirements、Getting started、Saves、60 FPS patch の要約です。'),
    sources: [
      { label: 'Getting started', url: 'https://github.com/TheSneakyBadger/FEFW-Stable-with-60-FPS-Patch/blob/main/README.md#getting-started' },
      { label: 'Requirements', url: 'https://github.com/TheSneakyBadger/FEFW-Stable-with-60-FPS-Patch/blob/main/README.md#requirements' },
      { label: 'Saves', url: 'https://github.com/TheSneakyBadger/FEFW-Stable-with-60-FPS-Patch/blob/main/README.md#saves' }
    ],
    steps: [
      step(loc('Check Windows and memory', '检查 Windows 与内存', 'Windows とメモリを確認'), loc('The README specifies 64-bit Windows 10 or 11, a Vulkan-capable GPU, and at least 16 GB RAM with a large page file (system-managed or about 32 GB). Prepare your own console-dumped game.', 'README 要求 64 位 Windows 10 或 11、支持 Vulkan 的 GPU、至少 16 GB 内存及较大的页面文件（系统管理或约 32 GB）。准备从自己主机导出的游戏。', 'README の要件は 64 ビット Windows 10／11、Vulkan 対応 GPU、16 GB 以上の RAM と十分なページファイル（システム管理または約 32 GB）です。自分の本体から取得したゲームを準備します。')),
      step(loc('Unpack the portable build', '解压便携构建', 'ポータブル版を展開'), loc('Download FEFW-Stable-60FPS-Portable.zip from the latest release. Extract everything to a folder outside Program Files and run Fortune’s Eden.exe.', '从最新发布页下载 FEFW-Stable-60FPS-Portable.zip，完整解压到 Program Files 之外的目录，然后运行 Fortune’s Eden.exe。', '最新リリースから FEFW-Stable-60FPS-Portable.zip を入手し、Program Files 以外のフォルダーに全ファイルを展開して Fortune’s Eden.exe を起動します。')),
      step(loc('Select the game and play', '选择游戏并启动', 'ゲームを選んでプレイ'), loc('Double-click the empty game list and choose the folder with your game’s loose exefs/romfs files, or use File → Load File to open your .nup. When the game card appears, select Play.', '双击空游戏列表，选择包含游戏 exefs/romfs 松散文件的目录；也可通过 File → Load File 打开自己的 .nup 文件。出现游戏卡片后点击 Play。', '空のゲーム一覧をダブルクリックして exefs/romfs のあるフォルダーを選ぶか、File → Load File で自分の .nup を開きます。ゲームカードが表示されたら Play を選びます。')),
      step(loc('Keep saves and start at default FPS', '保留存档，先用默认帧率', 'セーブを保管し標準 FPS から開始'), loc('Saves are portable under user/nand next to the executable; back up that folder before deleting or moving the installation. Start with the default 30 FPS mode. The optional 60fps add-on requires a game restart and can be unticked if it causes problems.', '存档位于程序旁的 user/nand 中，删除或移动安装目录前先备份。先使用默认的 30 FPS 模式；可选的 60fps 附加项需重启游戏生效，出现问题可取消勾选。', 'セーブは実行ファイルの隣の user/nand にあります。インストール先を削除・移動する前にバックアップします。まず標準の 30 FPS を使い、任意の 60fps アドオンはゲーム再起動後に試し、問題があれば無効にします。'))
    ]
  },
  fritchii: {
    note: loc('Fritchii’s short README has no setup tutorial. Download, executable and shader-preparation details come from the v5.6 release notes; system-file and input setup comes from its inherited Eden Quick Start.', 'Fritchii 的简短 README 没有安装教程。下载文件、程序名称及着色器准备步骤来自 v5.6 Release 说明；系统文件和输入设置来自仓库继承的 Eden 快速入门。', 'Fritchii の短い README には導入手順がありません。配布ファイル、実行ファイル、シェーダー準備は v5.6 の説明に基づき、システムファイルと入力設定は継承された Eden の手引きに基づきます。'),
    sources: [
      { label: 'v5.6 release notes', url: 'https://github.com/Frizti/Fritchii/releases/tag/fritchii-v5.6' },
      { label: 'Quick Start', url: 'https://github.com/Frizti/Fritchii/blob/nx2/docs/user/QuickStart.md' }
    ],
    steps: [
      step(loc('Get the Windows application archive', '下载 Windows 程序包', 'Windows アプリの ZIP を入手'), loc('Choose the Windows-x64.zip application asset from Fritchii Releases, not GitHub’s Source code archives. The v5.6 notes say to extract the archive and run lichii.exe inside the Fritchii folder.', '在 Fritchii Releases 选择 Windows-x64.zip 程序附件，而非 GitHub 的 Source code。v5.6 说明要求解压后运行 Fritchii 文件夹中的 lichii.exe。', 'Fritchii Releases の Windows-x64.zip を選びます。GitHub の Source code は実行用ではありません。v5.6 の説明では、展開した Fritchii フォルダーの lichii.exe を起動します。')),
      step(loc('Set up system files and input', '设置系统文件与输入', 'システムファイルと入力を設定'), loc('The inherited Windows guide calls for the Visual C++ runtime and your own console-dumped files. Use Tools → Install Decryption Keys and Tools → Install Firmware, add your game directory, then map input under Emulation → Configure → Input. Menu names can differ in the current UI.', '继承的 Windows 手册要求 Visual C++ 运行库及从自己主机导出的文件。使用 Tools → Install Decryption Keys 和 Tools → Install Firmware，添加游戏目录，再在 Emulation → Configure → Input 映射输入；当前界面的菜单名称可能不同。', '継承された Windows 手引きでは Visual C++ ランタイムと自分の本体から取得したファイルを使います。Tools のキー・ファームウェア設定後、ゲームフォルダーと入力を設定します。現行 UI のメニュー名は異なる場合があります。')),
      step(loc('Allow shader preparation to finish', '等待着色器准备完成', 'シェーダー準備を待つ'), loc('When starting Ocarina of Time, current release notes describe a Preparing shaders stage before play. v5.6 can rebuild it once even after an earlier version; the author estimates about 15 minutes on an eight-core CPU. A new GPU or driver can also trigger preparation.', '启动《时之笛》时，当前版本说明描述了游玩前的 Preparing shaders 阶段。v5.6 升级后也可能重新准备一次，作者估计八核 CPU 约需 15 分钟；更换 GPU 或驱动也可能重新触发。', '時のオカリナの起動時には Preparing shaders が実行されます。v5.6 では旧版からの更新後も再準備する場合があり、作者の目安は 8 コア CPU で約 15 分です。GPU やドライバーの変更でも再準備が必要になります。')),
      step(loc('Update or report a problem', '更新或反馈问题', '更新と問題報告'), loc('The v5.6 notes say v4–v5.5 offer an update when opened. For problems, use Help → Export Log and include your GPU model in the issue report. Review the latest release notes for changes to these steps.', 'v5.6 说明称 v4 至 v5.5 启动时会提示更新。出现问题可用 Help → Export Log 导出日志，反馈时附上 GPU 型号；后续步骤变化以最新 Release 说明为准。', 'v5.6 の説明によると v4〜v5.5 は起動時に更新を案内します。問題があれば Help → Export Log を使い、GPU 型番を添えて報告します。手順の変更は最新のリリース説明を確認してください。'))
    ]
  },
  'selevet-eglantine': {
    note: loc('Selevet’s tuned README contains both older eglantine.exe instructions and newer performance-build notes that rename it selevet.exe. Use the executable supplied with your selected build.', 'Selevet 的 tuned README 同时保留了旧版 eglantine.exe 用法和新版性能构建更名为 selevet.exe 的说明。请以所选构建包内的程序为准。', 'tuned README には旧版の eglantine.exe の説明と、性能版で selevet.exe に改名した説明が併存します。選んだビルドに付属する実行ファイルを使ってください。'),
    sources: [
      { label: 'Download and requirements', url: 'https://github.com/sylvieistaken/selevet-eglantine/blob/main/tuned/README.md#download' },
      { label: 'Built-in settings', url: 'https://github.com/sylvieistaken/selevet-eglantine/blob/main/tuned/README.md#built-in-settings' },
      { label: 'Performance build notes', url: 'https://github.com/sylvieistaken/selevet-eglantine/blob/main/tuned/README.md#performance-build-9-ocarina-of-time-on-more-gpus-test-build-23' }
    ],
    steps: [
      step(loc('Check CPU and runtime requirements', '核对 CPU 与运行库要求', 'CPU とランタイムを確認'), loc('This Windows build requires an AVX2-capable CPU and the latest Microsoft Visual C++ x64 runtime. Prepare your own console-dumped keys, firmware and games.', '该 Windows 构建要求 CPU 支持 AVX2，并安装最新版 Microsoft Visual C++ x64 运行库；准备从自己主机导出的密钥、固件和游戏。', 'この Windows ビルドには AVX2 対応 CPU と最新の Microsoft Visual C++ x64 ランタイムが必要です。自分の本体から取得したキー、ファームウェア、ゲームを準備します。')),
      step(loc('Unpack into a separate folder', '解压到独立目录', '専用フォルダーに展開'), loc('Download a ZIP from Selevet’s Releases and extract all its files into a separate folder. Newer performance builds use selevet.exe; the original README calls the executable eglantine.exe.', '从 Selevet Releases 下载 ZIP 并完整解压到独立目录。较新的性能构建使用 selevet.exe，早期 README 中的程序名为 eglantine.exe。', 'Selevet Releases の ZIP を専用フォルダーに全て展開します。新しい性能版は selevet.exe、初期の README は eglantine.exe と記載しています。')),
      step(loc('Choose shared or separate settings', '选择共享或独立配置', '設定の共有・分離を選択'), loc('The tuned README warns that settings are shared with Eden/Eglantine. Back up %APPDATA%/eden/config before switching builds. To use separate portable data, create an empty user folder beside the executable before setup; put your own system files in that profile.', 'tuned README 提醒配置会与 Eden/Eglantine 共享。切换前备份 %APPDATA%/eden/config；需要独立便携数据时，先在程序旁创建空的 user 文件夹，再为该配置准备自己的系统文件。', '設定は Eden/Eglantine と共有されるため、切り替え前に %APPDATA%/eden/config をバックアップします。分離する場合は設定前に実行ファイルの隣に空の user フォルダーを作り、その環境に自分のシステムファイルを用意します。')),
      step(loc('Set up and use the build’s game settings', '完成设置并核对游戏选项', '設定を完了しゲーム別の項目を確認'), loc('Launch the application, add your keys and firmware, and map your controller as the README directs. For Ocarina of Time, build 9 notes specify 1x resolution. Build 10 enables FSR 3 frame generation by default; turn it off in Graphics → Enable Frame Generation if you prefer.', '按 README 启动程序、添加密钥与固件并映射控制器。《时之笛》在 build 9 说明中要求使用 1x 分辨率；build 10 默认开启 FSR 3 补帧，如不需要可在 Graphics → Enable Frame Generation 关闭。', 'README に従って起動し、キーとファームウェアを追加してコントローラーを設定します。時のオカリナは build 9 の説明では 1x 解像度を使います。build 10 は FSR 3 補間が標準で有効で、Graphics → Enable Frame Generation から無効にできます。'))
    ]
  }
};
