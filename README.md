# Yukinori Okada's Personal Web
## Language
[日本語](#日本語) | [English](#English)

## 日本語

### 機能

- サイトマップのサポート
- RSS フィードのサポート
- Markdown, MDX サポート
- OGP (Open Graph Protocol) に対応
- 記事のタグ付けサポート
- 見た目が統一された 404 ページ
- View Transitions API によるシームレスなページ遷移
- カラースキームによる、ライトモード・ダークモード切り替え
- PC, Smartphone レスポンシブデザイン対応

## 実装予定

- 記事用タグ別サイドバー
- Schema.org による SEO 対策

### 参考

- [Astro Starter Kit: Blog](https://github.com/withastro/astro/tree/main/examples/blog)
- [Astro タグ別記事一覧ページの作り方](https://qiita.com/takeshi_du/items/4d8d63a8c1231ac8828a)
- [カスタム404エラーページ | Astro Docs](https://docs.astro.build/ja/basics/astro-pages/#%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0404%E3%82%A8%E3%83%A9%E3%83%BC%E3%83%9A%E3%83%BC%E3%82%B8)
- [View transitions | Astro Docs](https://docs.astro.build/ja/guides/view-transitions/)
- [faviconをsvgでスマートに設定する](https://zenn.dev/masatodev/articles/d80635ebfda05a)

### 技術スタック
- Astro
- TypeScript
- JavaScript
- Cloudflare Pages
- pnpm

### プロジェクト構造

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── .editorconfig
├── .gitignore
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

`src/pages/` ディレクトリ内の `.astro` か `.md` ファイルを走査して、ファイル名によりルーティングを行います。

`src/components/` には Astro や UI Frameworks のコンポーネントを配置します。

`src/content/` には、ポストとしての Markdown および MDX ドキュメントの「コレクション」を配置しています。`getCollection()` を使用して `src/content/post/` から投稿を確認できるほか、タグ付けも行います。

`public/` には画像などの静的リソースを配置しています。

### コマンド

ターミナルにて、プロジェクトのルートディレクトリで叩くことができるコマンド:

| コマンド               | 実行内容                                          |
| :--------------------- | :------------------------------------------------ |
| `pnpm install`         | 依存関係のインストール                            |
| `pnpm dev`             | `localhost:4321` でのローカル開発サーバーの起動   |
| `pnpm build`           | `./dist/` にプロダクションでサイトをビルド        |
| `pnpm preview`         | ビルドしたものをローカルでプレビュー              |
| `pnpm astro ...`       | `astro add`, `astro check` のようなコマンドの実行 |
| `pnpm astro -- --help` | Astro CLI の使用に関するヘルプ                    |

## English

------ テンプレのまま ------

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and Open Graph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
