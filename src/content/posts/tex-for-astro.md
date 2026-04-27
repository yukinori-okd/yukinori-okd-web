---
title: 'AstroのMarkdownでTeXを使う'
description: 'Use TeX in Markdown with Astro'
pubDate: '2026-04-15'
updatedDate: '2026-04-28'
heroImage: '../../assets/blog-placeholder-1.jpg'
tags: ["Astro", "TeX", "Markdown", "MathJax"]
---
## 結論
[remark-math](https://github.com/remarkjs/remark-math) + [rehype-mathjax](https://github.com/remarkjs/remark-math/tree/main/packages/rehype-mathjax)によるビルド時のsvg生成を行うこととした。

## Astroの採用と数式レンダリングの必要性
本サイトは、フレームワークに[Astro](https://astro.build)を採用しています。Markdown/MDXからのコンテンツ生成が標準でサポートされており、高速な静的Webページを構築できる点が、日々行う作業の効率化・パフォーマンスを重視する自身の開発スタイルに合致したためです。

そして、今後に何らかの解説においてTeX記法を用いた数式を記述する可能性があるため、ビルドパイプラインにTeXレンダラを組み込むことにしました。

## 外部CDN依存への懸念とKaTeXの検討
当初、Astroでの導入事例が多いKaTeXを検討しました。調査の過程で、以下のサイトを参考に実装を進めました。

- [Astroで数式を使いたい！LaTeX数式を表示させる方法について解説します。](https://qiita.com/TomoyaKuroda/items/e73cc61c9f972a5c3ae4)
- [AstroでKaTeXを使いたいぞという話](https://a.conao3.com/blog/2023/11bb-5375/)

上記の事例では、CSSの読み込みにjsDelivrという外部CDNが利用されています。jsDelivr自体の信頼性は高いものの、外部サービスへの不要な依存は、ネットワーク障害時に適切なユーザー体験を損なうリスクがあると考えました。

「サイト内で完結したアセット管理」を目指し、ローカルにCSSをバンドルする方法を模索したところ、以下のサイトに辿り着きました。

- [在 Astro 中使用 KaTeX 渲染数学公式](https://zhoujingyu.com/posts/astro-katex-math-rendering/)

この方法では、`node_modules` 内の `katex.min.css` を直接インポートすることでローカル完結なレンダリングが可能になります。

具体的には、記事に共通でimportされる`BaseHead.astro`に
```astro
---
import "/node_modules/katex/dist/katex.min.css";
---
```
と記述することでCSSのインポートを行っています。こちらの方法を行うことで、無事KaTeXにてTeX記法の文字列をレンダリングすることが可能になりました。

## バンドルサイズとパフォーマンスのトレードオフ
実際にKaTeXをローカルでバンドルしたところ、CSSだけでなくWebフォントまでアセットに含まれることになり、最終的なバンドルサイズが約1MB増加することが判明しました。

「高速なWebページ」というAstroの利点を活かすため、さらなる最適化を検討した結果、MathJaxによるビルド時のSVG出力という手法に辿り着きました。

- [AstroでYouTube/Xの埋め込みとTeX/Mermaid図を表示させながら、Lighthouse 100点を達成した話](https://zenn.dev/miyabitti/articles/4a446827568b53)

この方式の利点は、ビルド時に数式を純粋なSVGへ変換してHTMLに埋め込む点にあります。クライアント側でのフォント読み込みが不要になり、結果としてバンドルサイズを大幅に削減することができました。

## MathMLの採用を見送った理由
ブラウザ標準の数式レンダリング規格として MathML も検討しました。

- [rehype-mathml: TeX数式をMathMLにするrehypeプラグイン](https://qiita.com/Daiji256/items/fcd8ee6f286e5db775d5)
- [AstroでKaTeXで書いた数式をMathMLに変換して表示する](https://bcrikko.github.io/til/posts/2025-02-16/astro-math/)

MathMLは軽量で魅力的な選択肢とは思いましたが、仕様変更の懸念や古い環境における表示の一貫性を考慮し、現時点ではSVG方式が本サイトには最適であると判断しました。


## 実際のレンダリング結果

### インライン
$a = bc^2$

```tex
$a = bc^2$
```

### ブロック
$$
\begin{align}
3x + 2x &= 5 \\
5x &= 5 \\
x &= 1
\end{align}
$$

```tex
$$
\begin{align}
3x + 2x &= 5 \\
5x &= 5 \\
x &= 1
\end{align}
$$
```



