---
title: 'コスパのいいAIコーディング環境を試してみる'
description: '昨今の物価高と円安を受け、学生目線で安価なAIコーディング環境をいくつか試した比較メモ'
pubDate: '2026-10-03'
tags: ["AI", "LLM", "Claude", "Gemini", "Antigravity", "OpenCode", "Command Code", "GitHub Copilot", "CLI"]
---
2026年の6月から10月までの試行に関する記事です。
2026/10/03時点での内容であるため、記事を読まれている際にはかなり情勢が変わっている可能性があります。

## AIを試したきっかけ
AIを試そうと思ったのは6月頃ですが、以下のようなきっかけがあったためです。
- [ADC Japan 26](/posts/20260611-adc-japan-26)において、エージェントを活用したコーディングが目立っていたこと
- 友人がOpenAIモデルやClaudeモデルの凄さを熱く語ってくれたこと
- 先輩などがClaudeを日常的に活用していると聞いたこと

## AIに手を出しづらい
ClaudeやCodexなどの契約を検討したものの、円安が続いているなか主要サービスは基本的に米ドル建てのため、学生にとっては月額費用のハードルが高いのが実情です。

そこで、学生用プランや比較的安価なAIコーディング環境を（米ドル建ても含みます）公式のクライアントCLIを用い、6月上旬から10月上旬にかけて色々と試してみました（それぞれデスクトップアプリも提供されているため、好みに応じて選べます）。

試した環境の目次は以下の通りです。
- [Antigravity](#antigravity)
- [GitHub Copilot Student](#github-copilot-student)
- [Command Code Go](#command-code-go)
- [Command Code GOAT](#command-code-goat)
- [OpenCode Go](#opencode-go)

## 各AIコーディング環境の所感

### Antigravity
無料で利用できます。([公式ページ](https://antigravity.google))

利用できるモデルは以下の通りです。
- Gemini 3.8 Flash (Low, Medium, High)
- Gemini 3.7 Flash (Low, Medium, High)
- Gemini 3.6 Flash (Low, Medium, High)
- Gemini 3.1 Pro (Low, High)
- Claude Sonnet 4.6 (Thinking)
- Claude Opus 4.6 (Thinking)
- GPT-OSS-120B (Medium)

なお、GeminiモデルとOthers（ClaudeやGPT-OSSなど）のモデルのリミットは別枠になっています。
usageで確認する限りは週間ですが、実際には5時間ごとのリミットも存在するようです。

GoogleのAI関連は無料枠がかなり充実しているようですが、当初はあまり使用していませんでした。
最初は無料枠でもClaude Opusが使えるということで試してみたのですが、すぐにリミットに達してしまい、継続的なコーディング作業には向きませんでした。

一方で、Google Gemini系列のモデルは日本語処理に強くクオータ制限が緩いと聞いていたため、ドキュメントの文章を整えるような用途で使用しています。

### GitHub Copilot Student
学生であれば無料で利用できます。([公式のdocs](https://docs.github.com/ja/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students))

こちらは学生枠の新規受付の停止直前にギリギリで申し込んでいました。
しかし使い始めてからプレミアムリクエストが廃止されるなど、日常的な利用がかなり難しくなってしまいました。
現在はAutoモードのみで任意のモデルを選択することができません。仕様再編中のようであるため、現時点ではあまりおすすめできません。

### Command Code Go
Command Codeにおいて月額\$1のプランです。手数料などを含めると約\$1.36/月ほどになります。([公式のリンク](https://commandcode.ai/docs/plans/go))
このプランについてはAPIアクセス非対応で、公式のクライアントのみ利用可能です。

モデルはオープンウェイトモデルが豊富に利用できます。私はDeepSeek V4 FlashやDeepSeek V4.1 Flashをメインで使用していたのですが、かなり実用的でした（`AGENTS.md` に記載した制約やルールを遵守してくれます）。
ペースを上げて使っていると半月ほどでリミットに到達してしまいましたが、単一プロジェクトをとりあえずAIと共に進めてみる用途であれば十分困らない印象です。私はAIツールに慣れるまでの最初の3ヶ月間、このプランをメインで活用していました。
安くて、何らかのプランに加入している場合に使用できる無料モデルなども公開されているため、気軽に試してみるのも良いかもしれません。

なお、Command Codeでは `taste.md` というファイルにユーザーのコーディング傾向などが記録され、後から参照される仕組みがあります。基本的には意識せず便利に使えるのですが、コードレビュー時などに過去の記憶をリセットしたい場合は少し手間でした。

### Command Code GOAT
Command Codeにおいて月額\$10のプランです。([公式のリンク](https://commandcode.ai/docs/plans/goat))
上記のCommand Code Goプランで使えるモデルに加え、多少の上位グレードのモデルが利用可能です。私が加入した時点ではGPT-5.6 SolやClaude Sonnet 5.5などが使えました。

こちらのプランではプロバイダーAPIも公開されるようです（こちらはまだ試していません）。
クオータがかなり潤沢なため、マネージャー／ワーカー構成での運用にも適していそうだと考え、現在試行錯誤しています。

### OpenCode Go
OpenCodeにおいて月額\$10のプランです。([公式のリンク](https://opencode.ai/go))
私が加入した際には初月割引が適用され\$5/月でしたが、現在は廃止されているようです。

当初はDeepSeek V4 Flashをそれなりのクオータで利用できたのですが、DeepSeek公式の値上げに伴い、利用制限がかなり厳しくなってしまいました。
現在は\$60/月相当分が使えるようなプラン改定が行われたようですが、私の用途ではCommand Code GOATの方がコストパフォーマンスが良かったため解約しました。
こちらも無料モデルが公開されているため、まずは試してみるのも手です（こちらは有料プラン未加入でも利用できそうです）。

## まとめ

| サービス | 料金目安 | 主な強み | おすすめ用途・現状 |
|---|---|---|---|
| Antigravity | 無料枠あり | Gemini/Claude等複数モデル対応 | ドキュメント推敲・無料での検証 |
| GitHub Copilot Student | 無料（学生） | エディタ統合 | 仕様再編中のため現在は様子見推奨 |
| Command Code Go | 約\$1.36/月 | オープンウェイト豊富・非常に安価 | コスパ重視の日常コーディング・入門用 |
| Command Code GOAT | \$10/月 | GPT系対応・API公開・潤沢なクオータ | 本格運用・マルチエージェント試行 |
| OpenCode Go | \$10/月 | DeepSeek V4 Flash対応 | 枠の改定動向を見つつ検討 |

円安が続く昨今ですが、定額制や安価な従量課金サービスを自分の用途やフェーズに合わせてうまく使い分けるのが良さそうです。
