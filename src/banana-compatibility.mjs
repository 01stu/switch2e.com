import { loc } from './data.mjs';

export const bananaCompatibility = {
  reviewed: '2026-11-11',
  sources: [
    { label: 'README — Games', url: 'https://git.eden-emu.dev/moceure/BananaNative/src/branch/android/README.md#games' },
    { label: 'v0.3.1 release notes', url: 'https://git.eden-emu.dev/moceure/BananaNative/releases/tag/v0.3.1' },
    { label: 'Source game catalog', url: 'https://git.eden-emu.dev/moceure/BananaNative/src/branch/android/dm/games/README.md#games' }
  ],
  rows: [
    { game: 'donkey-kong-bananza', titleId: '040074A01BF12000', version: 'update 458752', status: 'supported', notes: loc('30 fps', '30 fps', '30 fps') },
    { game: 'mario-kart-world', titleId: '0400C3F00006E000', version: '1.8.0', status: 'supported', notes: loc('A phone cooler is recommended.', '建议使用手机散热器。', 'スマートフォン用冷却器を推奨。') },
    { game: 'pokemon-pokopia', titleId: '0400A3A01EE4C000', version: 'update 655360 (Ver. 2.0.1)', status: 'supported', notes: loc('About 60 fps.', '约 60 fps。', '約 60 fps。') },
    { game: 'ocarina-of-time', titleId: '0400486024DEC000', version: '2.0', status: 'experimental', notes: loc('Plays, with visual glitches (too bright, mesh foliage missing); system driver only, according to the README.', '可以游玩，但有画面问题（过亮、缺少网格植被）；README 要求仅使用系统驱动。', 'プレイ可能ですが、明るすぎる画面やメッシュ植生の欠落があります。README ではシステムドライバーのみ。') },
    { game: 'splatoon-raiders', titleId: '0400380020056000', version: 'update 65536', status: 'experimental', notes: loc('Boots and runs, but not playable yet (very low frame rate).', '可启动并运行，但尚不可玩（帧率很低）。', '起動・動作しますが、極めて低いフレームレートのため、まだプレイ不可。') },
    { game: 'fire-emblem-fortunes-weave', titleId: '04007EF01F8AE000', version: 'v131072', status: 'playable', notes: loc('Added as playable in v0.3.1. Uses a stand-in upscaler (Snapdragon GSR2 by default); the game’s default frame rate is 30 fps. Version from the source game catalog.', 'v0.3.1 新增可玩支持，使用替代升频器（默认 Snapdragon GSR2），游戏默认帧率为 30 fps；版本号来自源码游戏列表。', 'v0.3.1 でプレイ可能なタイトルとして追加。代替アップスケーラー（標準は Snapdragon GSR2）を使い、ゲームの標準フレームレートは 30 fps。版番号はソースのゲーム一覧に基づきます。') }
  ]
};
