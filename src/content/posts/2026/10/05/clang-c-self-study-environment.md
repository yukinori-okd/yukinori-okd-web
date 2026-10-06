---
title: 'clangでのC言語の自習環境を構築しよう'
description: 'Xcode Command Line Toolsの導入と、WSLによるUnixライクな環境の構築で、C言語の自習環境を用意する方法'
pubDate: '2026-10-05'
tags: ["Xcode Command Line Tools", "clang", "macOS", "Windows", "WSL", "C"]
---

大学のサウンドプログラミングの演習を自宅でも進められるように、自分のPCに同様の環境を構築する方法をまとめます。演習ではmacOSのApple clangでビルドを行うため、macOSではXcode Command Line Toolsを、WindowsではUnixライクな環境を用意し、clangを使えるようにします。

これは2026年10月時点での話です。

## macOS
こちらは大学の環境と同じOSであるため、同じような環境を作ればいいです。
必要なものはApple clangです。これを利用するためにXcode Command Line Toolsをインストールします。
Homebrewを使っている方は既にXcode Command Line Toolsがインストールされているため、以下のインストール手順は不要です。

### Command Line Toolsのインストール
ターミナルで以下を実行します。

```sh
xcode-select --install
```

ダイアログが表示されるため、「インストール」を押し、表示される指示に従って進めます（使用許諾契約への同意を求められるかもしれません）。ダウンロードとインストールには少し時間がかかります。

インストールが完了したら、Apple clangが使える状態か確認します。

```sh
clang --version
```

`Apple clang version ...`のように表示されれば完了です。

## Windows
Windowsの場合はUnixライクな環境を構築する必要があります。ここではWSL（Windows Subsystem for Linux）を使います。

### WSLのインストール
WSLでは複数のLinuxの種類（一般的にディストリビューションと呼ぶ）を使えますが、今回は情報が多く安定しているとされているUbuntu 24.04 LTSをインストールします。
Windows 10（バージョン2004以降）またはWindows 11であれば、管理者として起動したPowerShellから以下のコマンドを実行するだけで、Ubuntu 24.04 LTSがインストールできます。

```powershell
wsl --install -d Ubuntu-24.04
```

インストール後に再起動を求められたら再起動し、Ubuntu 24.04 LTSを起動すると、ユーザー名とパスワードの設定を求められます。ここでは任意のものを入力します（Windowsのアカウントとは別物であるため、忘れないようにしてください）。

続いて、Ubuntuのパッケージを最新化し、ビルドに必要なツールをインストールします。これらのコマンドを実行すると、先ほど設定したパスワードを求められるので、入力してください。（何も入力していないように見えるのは仕様です。ちゃんと入力できているので安心してください。）

```sh
sudo apt update && sudo apt upgrade -y
sudo apt install -y build-essential clang
```

インストールが完了したら、clangが使える状態か確認します。

```sh
clang --version
```

Ubuntuでは`Ubuntu clang version ...`のように表示されれば完了です（clang系のコンパイラなので、基本的な使い方はmacOSと同じです）。詳しい手順は[Microsoft公式のガイド](https://learn.microsoft.com/ja-jp/windows/wsl/install)を参照するとよいです。

### Ubuntuのホームディレクトリへのアクセス
Ubuntuのホームディレクトリである`~`にアクセスするにはエクスプローラーのアドレスバーに`\\wsl.localhost\Ubuntu-24.04\home\<ユーザー名>`と入力すると良いです。

## 動作確認
試しに、テキストエディタで以下の内容の`hello.c`を作成します。

```c
#include <stdio.h>

int main(void) {
    printf("Hello, World!\n");
    return 0;
}
```

上記のコードが書かれた`hello.c`を保存したら、ビルドしてみます。

```sh
clang hello.c -o hello
./hello
```

`Hello, World!`と表示されれば、コンパイル環境は整っています。
