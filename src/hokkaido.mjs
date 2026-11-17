const loc = (en, zh, ja) => ({ en, 'zh-CN': zh, ja });
const repo = 'https://github.com/pavelgajdo/Hokkaido';
const revision = '8396939c1140247030a8db4d88db37d880764269';
const readme = `${repo}/blob/${revision}/README.md`;
const release = `${repo}/releases/tag/android-0.6.6`;
export const hokkaido = {
  id: 'hokkaido', name: 'Hokkaido', owner: 'pavelgajdo', symbol: '❄', color: 'blue',
  alias: 'Lichii for Android', repo,
  api: 'https://api.github.com/repos/pavelgajdo/Hokkaido/releases?per_page=5',
  platforms: ['Android'], kind: 'general', statusKey: 'active',
  status: loc('Active development', '活跃开发中', '活発に開発中'),
  activityDate: '2026-11-15', reviewed: '2026-11-16', sourceRevision: revision,
  label: loc('Android, with an Exynos focus', '关注 Exynos 的 Android 模拟器', 'Exynos に注力する Android 版'),
  summary: loc(
    'Hokkaido is an experimental Switch 2 emulator for Android, formerly Lichii for Android. It focuses on Exynos/Xclipse phones and also reports Snapdragon/Adreno tests.',
    'Hokkaido 是实验性的 Android Switch 2 模拟器，原名 Lichii for Android，重点关注 Exynos／Xclipse 手机，也有 Snapdragon／Adreno 设备的开发者测试报告。',
    'Hokkaido は旧 Lichii for Android の実験的 Switch 2 エミュレーターです。Exynos／Xclipse に注力し、Snapdragon／Adreno のテストも報告しています。'),
  seo: {
    title: loc('Hokkaido Android Switch 2 Emulator: APK & Setup | Switch2e', 'Hokkaido Android Switch 2 模拟器：APK 下载与指南 | Switch2e', 'Hokkaido Android Switch 2：APK ダウンロード・導入 | Switch2e'),
    description: loc(
      'Get the Hokkaido Android APK, formerly Lichii for Android. Check Android 13+, Vulkan 1.3, Exynos/Adreno support, setup and developer game reports.',
      'Hokkaido Android APK 下载：Android 13+、Vulkan 1.3、Exynos／Adreno 要求、安装与游戏报告。原名 Lichii for Android。',
      '旧 Lichii for Android、Hokkaido の APK・Android 13 以降・Vulkan 1.3 の要件、Exynos／Adreno、導入手順と開発者の報告を確認。')
  },
  detail: loc(
    'Maintained by pavelgajdo, Hokkaido continues yuzu, Sudachi, Eden, Eglantine and Lichii work on Android. The README specifies an arm64 phone, Android 13+ and Vulkan 1.3. Developer tests cover Galaxy S26 (Exynos 2600/Xclipse 960, 12 GB), S24 (Exynos 2400/Xclipse 940, 8 GB) and S25 (Snapdragon 8 Elite/Adreno 830, 12 GB), on Android 17. Xclipse tests use a custom RADV driver; the S25 uses “8gen V39 Patched”. AV1 movies use Android MediaCodec. These devices and drivers are test configurations, not a universal support list.',
    'Hokkaido 由 pavelgajdo 维护，在 Android 上延续 yuzu、Sudachi、Eden、Eglantine 与 Lichii 的工作。README 要求 arm64 手机、Android 13+ 和 Vulkan 1.3。开发者测试设备为 Galaxy S26（Exynos 2600／Xclipse 960、12 GB）、S24（Exynos 2400／Xclipse 940、8 GB）及 S25（Snapdragon 8 Elite／Adreno 830、12 GB），系统均为 Android 17。Xclipse 测试使用自定义 RADV 驱动，S25 使用“8gen V39 Patched”。AV1 过场使用 Android MediaCodec 解码。这些是测试配置，不是对所有设备的支持承诺。',
    'pavelgajdo が yuzu・Sudachi・Eden・Eglantine・Lichii の成果を Android で継続します。README の要件は arm64、Android 13 以降、Vulkan 1.3。開発者の端末は Galaxy S26（Exynos 2600／Xclipse 960、12 GB）、S24（Exynos 2400／Xclipse 940、8 GB）、S25（Snapdragon 8 Elite／Adreno 830、12 GB）で Android 17。Xclipse は独自 RADV、S25 は「8gen V39 Patched」で検証し、AV1 動画には MediaCodec を使います。全端末の対応保証ではありません。'),
  note: loc(
    'Independent and experimental. Games, keys and firmware are not included; use your own legally obtained files. This is separate from Banana Native’s game-pack workflow and zortos293/Lichii’s desktop releases. Developer-reported playability is not an independent Switch2e test. Ocarina of Time recommends 16 GB RAM; 12 GB phones can run out of memory. Microphone input is unsupported, and heat can reduce performance.',
    '独立实验项目，不包含游戏、密钥或固件，需使用自己合法取得的文件。它与 Banana Native 的游戏 pack 流程及 zortos293/Lichii 桌面版分别收录。可玩性为开发者报告，非 Switch2e 实测。《时之笛》推荐 16 GB 内存，12 GB 手机可能内存不足；不支持麦克风输入，发热会导致降速。',
    '独立した実験的プロジェクトで、ゲーム・キー・ファームウェアは同梱されません。自身の適法なファイルを使用します。Banana Native の pack 方式や zortos293/Lichii のデスクトップ版とは別です。動作は開発者報告で、当サイトの実測ではありません。時のオカリナは RAM 16 GB 推奨、12 GB では不足の可能性。マイク非対応、発熱で速度が低下します。'),
  games: ['pokemon-pokopia', 'fire-emblem-fortunes-weave', 'ocarina-of-time'],
  extraSource: readme,
  compatibility: {
    reviewed: '2026-11-16', source: readme, releaseSource: release,
    intro: loc('Developer reports from the listed Samsung test devices. Other phones, drivers and game versions can behave differently; these are not Switch2e benchmarks.', '以下来自开发者列出的三星测试设备，其他手机、驱动及游戏版本可能表现不同，不是 Switch2e 实测结果。', '記載の Samsung 端末での開発者報告です。他の端末・ドライバー・ゲーム版では異なる場合があり、当サイトの実測ではありません。'),
    rows: [
      { game: 'pokemon-pokopia', notes: loc('Reported playable, including on an 8 GB phone. Version 0.6.6 fixes the sky; its release notes still report a slowdown under investigation.', '报告可玩，包括 8 GB 手机。0.6.6 修复天空显示，但发布说明仍记载性能下降，原因调查中。', '8 GB 端末を含めプレイ可能と報告。0.6.6 で空の表示を修正しましたが、速度低下は調査中です。') },
      { game: 'fire-emblem-fortunes-weave', notes: loc('Reported playable with 0.5x resolution and “Present a frame ahead” left on Auto. This is not a frame-rate guarantee.', '报告可玩，建议 0.5x 分辨率，“Present a frame ahead” 保持 Auto，不构成帧率保证。', '0.5x 解像度、「Present a frame ahead」は Auto でプレイ可能と報告。FPS の保証ではありません。') },
      { game: 'ocarina-of-time', notes: loc('Reported playable at 0.5x; 16 GB RAM recommended. Optimization for 12 GB phones has stopped. Some Snapdragon phones may show a black screen after the intro; occasional graphics glitches may clear after restarting.', '报告可玩，建议 0.5x、16 GB 内存，已不再针对 12 GB 手机优化。部分 Snapdragon 手机可能过场后黑屏，偶发画面错误可尝试重启游戏。', '0.5x・RAM 16 GB 推奨でプレイ可能と報告。12 GB 向け最適化は終了。一部 Snapdragon は動画後に黒画面、描画不具合は再起動で改善する場合があります。') }
    ]
  }
};
const step = (title, text) => ({ title, text });
export const hokkaidoGettingStarted = {
  reviewed: '2026-11-16',
  note: loc(
    'Based on the pinned Hokkaido README and android-0.6.6 release notes. Hokkaido was renamed at 0.5.0; existing Lichii for Android installations update in place and retain data. Back up saves first.',
    '依据固定版本的 Hokkaido README 与 android-0.6.6 发布说明。项目在 0.5.0 更名，原 Lichii for Android 可原位更新并保留数据；更新前先备份存档。',
    '固定版 README と android-0.6.6 の説明に基づきます。0.5.0 で改名し、旧 Lichii for Android はデータを引き継いで更新できます。先にセーブを保存してください。'),
  sources: [{ label: 'Hokkaido README and device tests', url: readme }, { label: 'Android 0.6.6 setup and known issues', url: release }],
  steps: [
    step(loc('Check your phone', '核对手机要求', '端末を確認'),
      loc('Use an arm64 phone with Android 13+ and Vulkan 1.3 as documented. Check the tested GPU and driver combinations above. Ocarina of Time recommends 16 GB RAM; the 8 GB Pokopia report does not establish an 8 GB minimum for every game.',
        '按文档使用 Android 13+、Vulkan 1.3 的 arm64 手机，核对上文测试的 GPU 与驱动。《时之笛》推荐 16 GB，Pokopia 的 8 GB 报告不等于所有游戏都只需 8 GB。',
        '文書の arm64・Android 13 以降・Vulkan 1.3 を確認し、上記 GPU・ドライバーを参照。時のオカリナは 16 GB 推奨、Pokopia の 8 GB 報告は全ゲームの最低要件ではありません。')),
    step(loc('Install the APK', '安装 APK', 'APK を導入'),
      loc('Download app-mainline-release.apk from a versioned android-* release and allow installation from your browser or file manager if Android requests it. android-latest and android-test-* are test pre-releases; read their labels before installing.',
        '从带版本号的 android-* 发布下载 app-mainline-release.apk，按 Android 提示允许浏览器或文件管理器安装。android-latest 与 android-test-* 为测试预发布，安装前先看版本标记。',
        'バージョン付き android-* の app-mainline-release.apk を入手し、必要に応じブラウザー・ファイル管理アプリからの導入を許可。android-latest・android-test-* はテスト用プレリリースです。')),
    step(loc('Add your games and system files', '添加自己的游戏与系统文件', '自身のゲームとシステムファイルを追加'),
      loc('Follow the release instructions to add your game folder and configure your own legally obtained keys and firmware. None are included. Do not substitute Banana Native’s Prepare/Import pack instructions for this emulator’s setup.',
        '按发布说明添加自己的游戏目录，设置自己合法取得的密钥与固件；项目不附带这些文件。不要套用 Banana Native 的 Prepare／Import pack 步骤。',
        'リリースの手順で自分のゲームフォルダー・適法に取得したキーとファームウェアを設定します。同梱されません。Banana Native の Prepare／Import pack 手順は使いません。')),
    step(loc('Choose the documented settings', '使用文档建议设置', '推奨設定で開始'),
      loc('Start with Handheld mode, NCE CPU backend and 0.5x resolution. On Xclipse, the maintainer recommends a compatible custom RADV driver installed through GPU driver management. For Fortune’s Weave, leave “Present a frame ahead” on Auto. Close other apps and watch heat and memory use.',
        '先用 Handheld 模式、NCE CPU 后端和 0.5x 分辨率。Xclipse 用户按维护者建议通过 GPU 驱动管理安装兼容的自定义 RADV 驱动。Fortune’s Weave 的“Present a frame ahead”保持 Auto。关闭其他应用，留意温度及内存占用。',
        'Handheld・NCE・0.5x から開始。Xclipse は GPU ドライバー管理で対応する独自 RADV を導入する案内です。Fortune’s Weave の「Present a frame ahead」は Auto。他アプリを閉じ、発熱とメモリを確認します。')),
    step(loc('Back up saves and collect a log', '备份存档并获取日志', 'セーブ保存とログ確認'),
      loc('Report the device, Android version and driver with Android/data/dev.lichii.android/files/log/eden_log.txt. Test builds use dev.lichii.android.relWithDebInfo. Inspect logs for personal data before sharing. Leave env.txt empty for normal play; diagnostic switches can slow games.',
        '报告问题时提供设备、Android 版本、驱动与 Android/data/dev.lichii.android/files/log/eden_log.txt；测试版使用 dev.lichii.android.relWithDebInfo。分享前检查日志中的个人信息，正常游玩保持 env.txt 为空，诊断开关可能降低速度。',
        '端末・Android 版・ドライバーと Android/data/dev.lichii.android/files/log/eden_log.txt を報告。テスト版は dev.lichii.android.relWithDebInfo。共有前に個人情報を確認し、通常は env.txt を空にします。診断設定は速度を落とす場合があります。'))
  ]
};
