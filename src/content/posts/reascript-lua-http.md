---
title: 'ReaScript(Lua)内で簡単にHTTP通信をする方法'
description: 'How to Easily Perform HTTP Communication in ReaScript(Lua)'
pubDate: '2026-04-28'
heroImage: '../../assets/blog-placeholder-1.jpg'
tags: ["REAPER", "ReaScript", "Lua", "cURL"]
---
## 結論
クロスプラットフォームで手軽にHTTP通信を行いたい場合は、`curl` を `exec` にて呼び出す方法がもっとも扱いやすいと考える。

## ReaScript内でHTTPリクエストをするには
ReaScriptで利用できる言語は、REAPER v7時点で以下の3つである。

- EEL2
- Lua (v5.4)
- Python (v2.7-v3.x)

詳細は[公式のReaScriptページ](https://www.reaper.fm/sdk/reascript/reascript.php)を参照するとよい。

今回は、その中でもLuaを用いる場合に絞って記述する。

### HTTPリクエストの正攻法
Luaには[LuaSocket](https://lunarmodules.github.io/luasocket/)というライブラリがあり、これを利用すればHTTPリクエストを送れる。ただし、ライブラリの追加導入が必要になるため、手軽さという点ではややハードルが高い。

簡易的にリクエストを送りたいだけなら、`curl` を `exec` で呼ぶ方法が適している。

### なぜ他のコマンドではなくcurlを使うのか
`curl` は主要な環境では標準で導入されていることが多く、仮に入っていない場合でも、既定のパッケージマネージャーから導入しやすい。

- Windowsでは10以降からデフォルトでインストールされている
  - [https://curl.se/windows/microsoft.html](https://curl.se/windows/microsoft.html)
- macOSでもデフォルトでインストールされている
  - [https://github.com/curl/everything-curl/blob/master/install/macos.md](https://github.com/curl/everything-curl/blob/master/install/macos.md)
- LinuxではDistroによって異なるため、ユーザーにインストールを促すのが良い
  - [https://github.com/curl/everything-curl/blob/master/install/linux.md](https://github.com/curl/everything-curl/blob/master/install/linux.md)

### 実装例
```lua
-- ローカルサーバーにリクエストを送る
local handle = io.popen("curl -s http://localhost:8080")
local result = handle:read("*a")
handle:close()
reaper.ShowConsoleMsg(result)
```
