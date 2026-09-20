---
title: 'PowerShellでポリシーによりコマンドが実行できない際の対処法'
description: 'Set-ExecutionPolicyでPowerShellの実行ポリシーを変更しスクリプトを実行可能にする方法'
pubDate: '2026-09-21'
tags: ["PowerShell", "Windows"]
---

7年間メイン端末として使っていたWindows PCくんの挙動が怪しくなってきたためメイン端末を移行することとしました。（いろいろと無理をさせてきました。ありがとう。）その際に開発ツールを新規PCにインストールしたのですが、pnpm経由で`npm-check-updates`をインストールし実行を試した際に以下のようなエラーメッセージが出力されました。

```powershell
PS C:\Users\user> ncu
ncu : このシステムではスクリプトの実行が無効になっているため、ファイル C:\Users\user\AppData\Local\pnpm\bin\ncu.ps1 を読
み込むことができません。詳細については、「about_Execution_Policies」(https://go.microsoft.com/fwlink/?LinkID=135170) を
参照してください。
発生場所 行:1 文字:1
+ ncu
+ ~~~
    + CategoryInfo          : セキュリティ エラー: (: ) []、PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

エラーメッセージに書いてある通りですが、PowerShellの実行ポリシーで制限がかかっているためデフォルトの状態では.ps1が実行できません。すっかり忘れていました。

PC全体で実行してもよいとするのであれば、管理者権限のPowerShellで以下のコマンドを実行するとよいです。

```
Set-ExecutionPolicy RemoteSigned
```

これにて実行できるようになりました。

もし、現在のユーザーに絞って実行可能にするのであれば、末尾に` -Scope CurrentUser`をつけるとよさそうです（未確認）。

```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```