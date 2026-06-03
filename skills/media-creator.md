# de-ai Genre Skill: メディア・クリエイター / Media & Creators

> Load this in addition to `skill.md` for portfolios, personal websites, blogs, online magazines, and freelancers.
> ポートフォリオ・個人サイト・ブログ・オンラインマガジン・フリーランスのサイト制作時に `skill.md` と合わせて読み込む。

---

## Core Principle / 核心原則

**The medium is the message.**
For creators, the website *is* the work. Every design choice is a demonstration of taste and craft. Generic templates say "I couldn't be bothered to have a point of view."

**媒体そのものがメッセージ。**
クリエイターにとって、ウェブサイトそのものが作品だ。すべてのデザイン判断がセンスと技術の証明になる。汎用テンプレートは「自分の視点を持つ気がない」と言っているのと同じ。

---

## Subcategory Differences / サブカテゴリの違い

| カテゴリ | 訪問者の目的 | デザインの役割 |
|---------|------------|----------------|
| デザイナー | 仕事を依頼できるか判断 | 実力・スタイルの証明 |
| エンジニア | 技術力・人柄を判断 | 信頼性・明快さの証明 |
| フォトグラファー | 作風に合うか判断 | 写真を最大限引き立てる |
| ライター・編集者 | 文章力・専門性を判断 | 文章そのものに語らせる |
| メディア・ブログ | 読む価値があるか判断 | 読みやすさ・発見しやすさ |

---

## Color / 色彩

```css
/* デザイナー・クリエイター：個性を表現 */
/* （以下はあくまでも参考。ブランドパーソナリティに合わせて選ぶ） */

/* ミニマル・モノクロ */
:root {
  --bg: #FAFAFA;
  --text: #111111;
  --accent: #111111;
  --border: #E8E8E8;
}

/* ダーク・プレミアム */
:root {
  --bg: #0E0E0E;
  --text: #F0F0F0;
  --accent: #E8C547;
  --border: #2A2A2A;
}

/* メディア・ブログ */
:root {
  --bg: #FFFFFF;
  --text: #1A1A1A;
  --accent: #C00000;
  --accent-light: #FBE8E8;
  --border: #E8E8E8;
}
```

---

## Typography / タイポグラフィ

```css
/* ポートフォリオ：タイポグラフィで個性を出す */
.hero-name {
  font-family: 'Noto Serif JP', serif;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.0;
}

/* メディア・ブログ：読みやすさ最優先 */
.article-body {
  font-family: 'Noto Serif JP', serif; /* 長文は明朝体が読みやすい */
  font-size: 1.0625rem;
  line-height: 2.0;
  letter-spacing: 0.02em;
}

/* 見出し階層 */
.article-h2 {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--accent);
}
.article-h3 {
  font-size: 1.125rem;
  font-weight: 700;
  margin-top: 2rem;
  padding-left: 0.75rem;
  border-left: 3px solid var(--accent);
}
```

---

## Layout / レイアウト

### Portfolio Hero
```css
/* ✅ フルスクリーン + タイポグラフィ主体 */
.hero-portfolio {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 4rem;
  background: var(--bg);
}
.hero-role {
  font-size: 0.875rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-sub);
  margin-bottom: 1rem;
}

/* ✅ 作品グリッド：マガジン風 */
.works-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto;
  gap: 1.5rem;
}
.works-grid > *:nth-child(3) { grid-column: 1; }
.works-grid > *:nth-child(4) { grid-column: 2; grid-row: 2; }
```

### Blog / Media Layout
```css
/* ✅ 記事一覧：メイン + サイドバー */
.blog-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 4rem;
  max-width: 1100px;
  margin: 0 auto;
}

/* ✅ 記事カード：横長 */
.article-card {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 1.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border);
  margin-bottom: 2rem;
}

/* ✅ 記事本文：読みやすい幅 */
.article-content {
  max-width: 720px;
  margin: 0 auto;
}
```

---

## Must-Have Sections / 必須セクション

### デザイナー・フリーランス
1. **自己紹介**（何者で何ができるか30秒で）
2. **作品一覧**（カテゴリ・期間・役割を明示）
3. **サービス・対応可能な業務**
4. **制作の流れ**
5. **料金の目安**（隠さない）
6. **連絡先・問合せフォーム**
7. **SNS・外部プロフィールリンク**

### メディア・ブログ
1. **最新・注目記事**
2. **カテゴリ・タグ**（読者が探しやすく）
3. **著者プロフィール**
4. **メールマガジン登録**
5. **アーカイブ・検索**

---

## CTA Examples / CTAテキスト例

```
ポートフォリオ:
❌ "Contact" / "Hire Me" / "Get in Touch"
✅ "仕事を依頼する" / "ポートフォリオを見る"
   "料金・対応業務を確認する" / "プロジェクトについて相談する"

メディア:
❌ "Read More" / "Subscribe"
✅ "続きを読む" / "週刊ニュースレターを受け取る"
   "このカテゴリの記事を全て見る"
```

---

## Portfolio Work Item Structure / 作品の見せ方

```html
<!-- ✅ 作品1件につき以下を必ず含める -->
<article class="work-item">
  <img src="main-visual.jpg" alt="プロジェクト名">
  <div class="work-meta">
    <span class="work-client">クライアント: 株式会社〇〇</span>
    <span class="work-role">役割: UIデザイン・プロトタイプ</span>
    <span class="work-period">期間: 2024年3月〜5月（3ヶ月）</span>
  </div>
  <p class="work-challenge">課題: ...</p>
  <p class="work-solution">アプローチ: ...</p>
  <p class="work-result">成果: コンバージョン率 23%向上</p>
</article>
```

---

## Reading Experience / 読む体験（メディア・ブログ）

```css
/* 長文記事を読みやすくする */
.article-content {
  /* 1行60〜75文字が最適 */
  max-width: 720px;

  /* 段落間は行高より広く */
  p + p { margin-top: 1.5em; }

  /* 画像は本文幅いっぱい */
  img { width: 100%; height: auto; margin: 2rem 0; }

  /* 引用はビジュアルで区別 */
  blockquote {
    border-left: 4px solid var(--accent);
    padding: 1rem 1.5rem;
    background: var(--bg-alt);
    font-family: 'Noto Serif JP', serif;
    font-size: 1.0625rem;
  }
}
```

---

## Avoid / 避けること

- 作品の羅列のみで「何を考えてそのデザインにしたか」がない
- 全作品が同じ見せ方（大小・縦横を変化させる）
- 「フリーランスのデザイナーです」だけで得意分野・業種が不明
- 料金を「要相談」のみ（最低限の目安を出す）
- ブログ記事の文字が小さく・行間が狭い
- 著者プロフィールがない（誰が書いているか重要）
