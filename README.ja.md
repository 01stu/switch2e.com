# Switch2e

[简体中文](README.md) · [English](README.en.md) · **日本語**

Switch2e ウェブサイトのソースコードです。クリーム色と深緑を基調としたデザインで、英語・簡体字中国語・日本語に対応しています。エミュレーター一覧、ゲームのおすすめ、ゲーム再コンパイルツール、導入ガイドを掲載しています。Node.js の標準モジュールで HTML を事前生成し、ブラウザー側は標準の JavaScript を使用します。フレームワークやビルド用の外部依存パッケージは不要です。

## 公開サイト

以下のリンクから Switch2e をご覧いただけます。このリポジトリでは、第三者のゲーム画像やプロジェクトのアバターの代わりに、テキスト・記号・独自のプレースホルダー画像を使用しています。

| ページ | 公開リンク |
| --- | --- |
| ホーム / English | [switch2e.com](https://switch2e.com/) |
| 中国語ホーム | [Switch2e 简体中文](https://switch2e.com/zh-CN/) |
| 日本語ホーム | [Switch2e 日本語](https://switch2e.com/ja/) |
| エミュレーター一覧 | [Switch 2 エミュレーター](https://switch2e.com/ja/emulators/) |
| ゲームのおすすめ | [ゲーム一覧と推薦の根拠](https://switch2e.com/ja/games/) |
| 再コンパイルツール | [ゲーム再コンパイルツール](https://switch2e.com/ja/tools/) |
| Android | [Android エミュレーター](https://switch2e.com/ja/platforms/android/) |
| 導入ガイド | [はじめての方へ](https://switch2e.com/ja/guide/) |
| 掲載・推薦基準 | [Switch2e について](https://switch2e.com/ja/about/) |

機械可読データ：[Sitemap](https://switch2e.com/sitemap.xml) · [llms.txt](https://switch2e.com/llms.txt) · [ディレクトリ JSON](https://switch2e.com/directory.json)。

## クイックスタート

**Node.js 22 以降**が必要です。npm の依存パッケージはないため、`npm install` は不要です。プロジェクトのルートディレクトリで実行してください。

```sh
npm run dev
```

ローカルでのアクセス先：

- English：<http://localhost:4321/>
- 简体中文：<http://localhost:4321/zh-CN/>
- 日本語：<http://localhost:4321/ja/>

開発サーバーは起動時にページを生成します。ファイルを編集したら再起動してください。ページはサイトのルートを基準としたパスを使用するため、HTML ファイルを直接開かず、HTTP 経由でプレビューしてください。

```sh
npm run build  # dist/ を生成
npm test       # ビルド後、ページ・内部リンク・素材・SEO・リリース情報を検証
```

`npm run start` は `npm run dev` と同じ動作です。プレビューのポートを変更する場合：

```powershell
$env:PORT = "4322"
npm run dev
```

## 含まれる内容

- 96 の言語別ページと専用の 404 ページ。
- エミュレーター、ゲーム、再コンパイルツール、および Windows / Linux / macOS / Android の各ページ。
- サイト内検索、OS・ジャンルの絞り込み、言語切り替え、モバイルナビゲーション、FAQ。
- 出典・確認日・ダウンロード時の注意事項を含む、開発元のリリースとコミット情報のスナップショット。
- ページごとの canonical、hreflang、JSON-LD、Open Graph、Sitemap、llms ファイル。
- ローカルのフォント、スタイル、ブラウザースクリプト、独自のプレースホルダー素材。

リリース情報は `src/cache/releases.json` に保存され、**自動更新されません**。変更後に再ビルドしてください。表示される日付は実際の取得・確認日時を保持します。このリポジトリには `/api/releases` のオンライン API は含まれません。

ご自身で公開する場合は、広告・利用規約・プライバシーの各ページと連絡先を、実際のサービスに合わせて更新してください。

アクセス解析・広告スクリプト、サイト所有権の確認ファイル、Worker、KV バインディング、定期同期、環境変数の認証情報、デプロイ用アカウントの設定は含まれません。

## ディレクトリ構成

```text
./
├── public/assets/       # CSS、ブラウザースクリプト、フォント、独自画像
├── scripts/
│   ├── build.mjs        # HTML 事前生成、構造化データ、Sitemap、発見用ファイル
│   └── serve.mjs        # ローカル HTTP プレビューと正しい 404 応答
├── src/
│   ├── data.mjs         # エミュレーター、ゲーム、出典
│   ├── i18n.mjs         # 3 言語の UI テキスト
│   ├── tools.mjs        # 再コンパイルツール一覧
│   ├── releases.mjs     # リリース情報の描画。オンライン同期処理は含まない
│   └── cache/           # ローカルのスナップショットと素材索引
├── tests/               # 外部依存パッケージ不要のサイト検証
├── netlify.toml
├── vercel.json
├── README.md            # 简体中文
├── README.en.md         # English
├── README.ja.md         # 日本語
├── LICENSE
└── THIRD_PARTY_NOTICES.md
```

## デプロイ

ビルド後、`dist/` をウェブサイトのルートとしてホスティング先にアップロードしてください。Netlify と Vercel の設定ファイルを同梱しています。本プロジェクトのディレクトリをホスティングのルートに指定し、ビルドコマンドを `npm run build`、出力ディレクトリを `dist` に設定してください。

ビルド時の既定ドメインは `https://switch2e.com` です。別のドメインを使う場合は、ホスティング環境の **`SITE_URL`** を設定してからビルドしてください。canonical、hreflang、共有 URL、Sitemap、ディレクトリデータに、そのドメインが使われます。

PowerShell：

```powershell
$env:SITE_URL = "https://your-domain.example"
npm run build
```

macOS / Linux：

```sh
SITE_URL=https://your-domain.example npm run build
```

`.env.example` は環境変数の参考例です。プロジェクトは `.env` を自動では読み込みません。

ディレクトリ内の `index.html` と正しい 404 応答に対応した静的ホスティングを使用し、URL 末尾のスラッシュを維持してください。生成される `_redirects` には旧 `/en/...` URL のリダイレクト、`_headers` には同一サイトのリソースのみを許可する CSP が含まれます。これらのファイルへの対応はホスティング先に依存します。Vercel の設定には、セキュリティヘッダーと旧英語 URL のリダイレクトを別途定義しています。不明なパスをホームページへ一律に書き換えないでください。リソースはルート相対パスのため、GitHub Pages の `/repo/` サブパスにはそのまま配置できません。

## コンテンツの編集

- ページと共通テンプレート：`scripts/build.mjs`。
- レスポンシブスタイル：`public/assets/styles.css`。
- 検索・絞り込み・ナビゲーション：`public/assets/app.js`。
- エミュレーター・ゲーム情報：`src/data.mjs`。OS 別の説明や導入ガイドは `src/` 内にあります。
- ツール紹介：`src/tools.mjs`、`src/recompia.mjs`、`src/emblemweave.mjs`、`src/longshot.mjs`。
- リリース情報：`src/cache/releases.json`。
- サイト名、表示ドメイン、メール、Telegram、規約・プライバシーページ：共通テンプレートと `src/advertising.mjs`、`src/legal.mjs`、`src/i18n.mjs`。

`media.json` と `icons.json` は既定で空のため、プレースホルダーを表示します。使用権限のある画像を追加する場合は、対応する素材索引とクレジットも更新してください。

## ライセンス

独自のコードとドキュメントは [MIT License](LICENSE) で公開しています。Outfit フォントには同梱の SIL Open Font License が適用されます。第三者の名称、商標、出典文書、リリース情報の権利関係は、コードの公開によって変わりません。詳しくは [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) をご覧ください。

本プロジェクトは任天堂および掲載プロジェクトとは関係ありません。エミュレーターのバイナリ、ゲーム、キー、ファームウェアは含まれません。フォークを公開する際は、ご自身のサイト名と連絡先を使用してください。

## コントリビューション

翻訳、アクセシビリティ、ページスタイル、出典の説明への改善を歓迎します。変更を提出する前に `npm test` を実行してください。開発元の情報を更新する場合は一次情報を添え、開発者による報告と Switch2e 独自の検証を区別してください。
