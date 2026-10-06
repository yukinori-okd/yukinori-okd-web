---
title: 'miseで開発ツールのバージョンを管理する'
description: 'wingetと公式インストールスクリプトでmiseを導入し、Node.jsなどの開発ツールを管理する方法'
pubDate: '2026-09-21'
tags: ["mise", "Node.js", "Ruby", "Windows", "macOS"]
---

様々な開発ツールをインストールする際、インターネットで調べると公式インストーラーを勧められることがあるが、バージョン更新時などに沼にハマる。よってバージョン管理ソフトウェアを使用すると良い。

今まで私はNode.jsの管理に、Windowsでは[NVM for Windows](https://github.com/nvm-windows/nvm)、macOSでは[nodebrew](https://github.com/hokaccha/nodebrew)を用いてきた。が、PCを新調して環境を再構築する際に調査したところ、複数言語を用いる私は[mise](https://github.com/jdx/mise)を用いるのが良さそうである。ということで、環境更新における備忘録を兼ねて、miseで導入を行う方法を記載する。（余談だがNode.jsのみの場合は[fnm](https://github.com/Schniz/fnm)を用いるとよさそうである。）

これはmise 2026.9.05, Windows 11 25H2, macOS Tahoe 26.6.2時点での話です。

## miseのインストール

基本的には[mise公式のガイド](https://mise.jdx.dev/installing-mise.html)を頼りにすると良い。が、今回は私の事情に合わせてWindowsではAlternativeと明示されている手法で導入する（Windowsではscoopを導入していないため）。

### Windows

まず、[PowerShellの実行ポリシーについて](/posts/2026/09/21/powershell-execution-policy/)、あらかじめ確認しておくべきである。設定しておかないとmiseでインストールしたツールの実行に失敗することがある。

Windowsでは[winget](https://learn.microsoft.com/ja-jp/windows/package-manager/winget/)を用いてインストールする。

```powershell
winget install jdx.mise
```

これだけではmiseで導入したツールを実行できない（shimsディレクトリにPATHが通らないためである）。公式には`mise activate`でPATHを設定する方法が用意されているが、cmdなどactivateに対応していないシェルもあるため、ここでは手動で追加する。

1. Windowsの「設定」→「システム」→「バージョン情報」→「システムの詳細設定」→「環境変数」で環境変数設定画面を開く。
2. 「ユーザー環境変数」の「Path」をクリックし、「編集」を選択する。
3. 「新規」をクリックし、`%LOCALAPPDATA%\mise\shims`を追加する。
4. 「OK」をクリックして環境変数設定を保存する。

### macOS

macOSではzshを用いているため、公式のzsh用インストールスクリプトを用いてインストールする。

```zsh
curl -fsSL https://mise.run/zsh | sh
```

## 共通のインストール確認

ターミナルを再起動後、以下を実行し`No problems found`が出ることを確認すると良い。
```sh
mise doctor
```

## 開発ツールのインストール

```sh
mise install <tool>@<version>
```

Node.jsのLTSの場合は以下のようになる。

```sh
mise install node@lts
```

`<version>`の部分にはインストールしたいNode.jsのバージョンを指定する。これにはメジャーバージョンのみ(`24`)やパッチバージョン(`24.0.0`)、さらには最新(`latest`)やLTS(`lts`)の指定も可能である。

インストールというコマンド名だが、これは実行ファイルをインターネットからダウンロードしてくるだけである。よって、後述のグローバルコマンド指定を行うべきである。

## グローバルコマンドとして使う開発ツールの指定

miseでは`mise use`コマンドを用いて開発ツールのバージョンを管理する。
グローバルなコマンド(`node`や`npm`)として使う開発ツールは`--global`オプションを用いる。Node.jsの場合は以下のようなコマンドとなる。

```sh
mise use -g node@<version>
```

## 開発ツールのアンインストール

```sh
mise uninstall <tool>@<version>
```

アンインストールではバージョンはフルで指定する方が安心である。

## mise自体のアップデート

### Windows

Windowsではwinget経由でインストールしているため、winget経由でアップデートする。

```powershell
winget update jdx.mise
```

### macOS

macOSではmise自体のアップデートは`mise self-update`コマンドを用いる。

```sh
mise self-update
```

## まとめ
これにて、インストール、グローバル設定、アンインストールなどの簡単な管理ならできるようになった。
更新の際には「`mise use -g`」でメインコマンドのバージョンを更新した後で、旧バージョンが不必要であれば「`mise uninstall`」の順で行うとよい。

macOSではRubyでも同様の方法で管理できることは確認済みである。

簡潔に記述しているため、詳しい使用法はmiseのヘルプや公式ドキュメントを参照するとよい。
