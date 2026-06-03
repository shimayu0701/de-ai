# de-ai Skill — Build Websites That Look Intentionally Human
# de-ai スキル — 意図をもって、人間らしいウェブをつくる

> **出会い (de-ai)**: to encounter something genuinely human.

This skill helps you build websites that are both **rich in design quality** and **free from AI-generated clichés**.
The goal is not simplicity for its own sake — it's *intentionality*. Every color, typeface, and layout choice should feel like a human decision.

このスキルは**デザイン品質が高く**、かつ**AIらしさのない**ウェブサイトを構築するためのガイドです。
目標はシンプルさではなく「**意図**」です。色・書体・レイアウトのすべてが、人間の判断によるものに見えること。

---

## The Real Problem / 本当の問題

AI doesn't make bad websites because it uses gradients. It makes bad websites because it makes **no decisions** — it averages everything into the most statistically common output.

AIが悪いウェブサイトを作るのは、グラジェントを使うからではありません。**何も決断しない**からです。すべてを統計的に最も一般的な出力に平均化してしまう。

**The antidote is not "simpler". The antidote is "more intentional".**
**解決策は「よりシンプルに」ではない。「より意図的に」だ。**

---

## Foundation / 基盤となる考え方

Before writing a single line of CSS, answer these three questions:
CSSを1行書く前に、この3つの問いに答えること：

1. **誰に届けるか** — ターゲットの年齢・価値観・期待値は何か
2. **何を信じてもらうか** — このサイトが伝えるべき一言は何か
3. **どんな感情を残すか** — 離脱後にユーザーが感じるべき印象は何か

These answers drive every design decision. If you can't answer them, ask before designing.
この3つの答えがすべてのデザイン判断を導く。答えられなければ、デザインを始める前に確認すること。

---

## Part 1: Color / 色彩

### Principle / 原則
Use **one primary color** with intention. Add a second only when it serves a clear purpose (e.g., CTA vs. body link). Backgrounds should have subtle warmth or coolness — pure `#FFFFFF` feels unfinished; `#FAFAF8` or `#F7F8FA` gives the page a ground.

**1色のプライマリカラー**を意図をもって使う。2色目は明確な目的（CTAとテキストリンクの区別など）がある場合のみ追加。背景は微妙な温冷感を持たせること。純粋な `#FFFFFF` は未完成に見える。

### Palettes That Work / 使えるパレット

| トーン | 背景 | テキスト | アクセント | サブ背景 | 用途 |
|--------|------|----------|------------|----------|------|
| クリーン | `#FAFAF8` | `#1A1A1A` | `#003A8C` | `#F0F0ED` | BtoB・SaaS・士業 |
| ウォーム | `#FBF8F3` | `#2C2418` | `#C45C00` | `#F3EDE3` | 飲食・ライフスタイル |
| クール | `#F5F7FA` | `#1C2333` | `#0052CC` | `#EBF0F8` | テクノロジー・金融 |
| 和 | `#F8F6F0` | `#2A2218` | `#8B2A2A` | `#EDE8DE` | 伝統・宿泊・食文化 |
| ダーク | `#141414` | `#EBEBEB` | `#E8C547` | `#1E1E1E` | ラグジュアリー・クリエイター |

### Avoid / 避けること
```css
/* ❌ AI defaults */
background: linear-gradient(to right, #7c3aed, #2563eb);
color: #7c3aed;
background-clip: text; /* gradient headings */
```

---

## Part 2: Typography / タイポグラフィ

### Principle / 原則
Typography is the primary carrier of personality. Use **contrast between typefaces** — a serif heading with a sans-serif body creates editorial richness that AI never produces by default.

タイポグラフィはページの個性を最も直接的に伝える。**書体のコントラスト**を使うこと。明朝体の見出し＋ゴシック体の本文という組み合わせは、AIがデフォルトでは絶対に生成しない編集的な豊かさを生む。

### Recommended Stacks / 推奨フォントスタック

```css
/* 見出し：明朝体で格調と存在感 */
h1, h2 {
  font-family: 'Noto Serif JP', 'Yu Mincho', 'Hiragino Mincho ProN', serif;
  font-weight: 700;
  letter-spacing: 0.03em;
  line-height: 1.35;
}

/* 本文：ゴシック体で読みやすさ */
body {
  font-family: 'Noto Sans JP', 'Yu Gothic', 'Hiragino Kaku Gothic ProN', sans-serif;
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 1.8;
}

/* 強調・ラベル：ゴシック太字 */
strong, .label {
  font-weight: 700;
  letter-spacing: 0.05em;
}
```

### Size Scale / サイズスケール
```
display:  3rem–3.5rem  (特別な場面のみ)
h1:       2rem–2.5rem
h2:       1.5rem–1.75rem
h3:       1.125rem–1.25rem
body:     1rem (16px)
small:    0.875rem
label:    0.75rem  letter-spacing: 0.08em
```

### Creating Richness Through Type / タイポグラフィでリッチさを出す
```css
/* 大きなディスプレイ見出し — 行間を詰めて存在感を出す */
.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.2;
  letter-spacing: -0.01em; /* 大きいサイズでは詰める */
}

/* キャプション・ラベル — 大文字・広いトラッキングで品格を出す */
.section-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase; /* 英語ラベルのみ */
}

/* 引用・証言 — 明朝体でコントラストをつける */
blockquote {
  font-family: 'Noto Serif JP', serif;
  font-size: 1.125rem;
  line-height: 1.9;
}
```

---

## Part 3: Layout / レイアウト

### Principle / 原則
Layouts should reflect **information hierarchy**, not template convenience. The most important content should occupy the most visual weight. Use asymmetry intentionally — it signals a human editor made choices.

レイアウトは**情報の階層**を反映すべきで、テンプレートの便宜のためではない。最重要コンテンツに最大の視覚的重みを与える。非対称性を意図的に使うこと — 人間の編集者が判断したことを示すサインになる。

### Layout Patterns That Work / 使えるレイアウトパターン

```css
/* パターン1: 非対称2カラム（メインコンテンツ + サイドバー） */
.asymmetric {
  display: grid;
  grid-template-columns: 1fr 340px; /* or 2fr 1fr */
  gap: 3rem;
}

/* パターン2: 大小交互（フィーチャーセクション） */
.alternating {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}
.alternating > *:nth-child(even) { order: -1; } /* 左右を交互に */

/* パターン3: マガジン風グリッド */
.magazine {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1.5rem;
}
.magazine > *:first-child { grid-row: span 2; } /* リード記事を大きく */

/* パターン4: 全幅帯セクション（背景で区切る） */
.band {
  padding: 5rem 0;
  background: var(--bg-alt);
}
.band-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2.5rem;
}
```

### Avoid / 避けること
```css
/* ❌ 3均等カラムのカードグリッド */
display: grid;
grid-template-columns: repeat(3, 1fr); /* + 同じサイズのカード */
```

---

## Part 4: Components / コンポーネント

### Cards / カード
```css
/* ✅ リッチなカード — 薄い影 + 左アクセントボーダー */
.card {
  background: #fff;
  border: 1px solid #E8E8E4;
  border-left: 3px solid var(--accent);
  border-radius: 4px;
  padding: 1.75rem 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: box-shadow 150ms, transform 150ms;
}
.card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.09);
  transform: translateY(-2px);
}

/* ❌ AI default */
.card { border-radius: 1.5rem; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
```

### Buttons / ボタン
```css
/* ✅ プライマリ — 確信を感じさせるフラット */
.btn-primary {
  background: var(--accent);
  color: #fff;
  padding: 0.6875rem 1.75rem;
  border: none;
  border-radius: 4px;
  font-size: 0.9375rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  transition: background 150ms, transform 100ms;
}
.btn-primary:hover { background: var(--accent-dark); }
.btn-primary:active { transform: scale(0.98); }

/* ✅ セカンダリ — ボーダーのみ */
.btn-secondary {
  background: transparent;
  color: var(--accent);
  padding: 0.6875rem 1.75rem;
  border: 1.5px solid var(--accent);
  border-radius: 4px;
  font-size: 0.9375rem;
  font-weight: 700;
  transition: background 150ms;
}
.btn-secondary:hover { background: var(--accent-light); }
```

### Section Dividers / セクション区切り
```css
/* ✅ 背景色の帯で区切る — ボーダーより豊かに見える */
section:nth-child(even) { background: var(--bg-alt); }

/* ✅ 微妙なトップボーダー */
section + section { border-top: 1px solid var(--border); }

/* ❌ hrタグで区切るだけ、または区切りなし */
```

### CTA Text / CTAテキスト
```
❌ "Get Started" / "Learn More" / "Try for Free" / "Sign Up"
✅ 次に何が起きるかを具体的に書く：
   "14日間無料で試す" / "事例集を読む" / "今すぐ相談する（無料）"
   "メニューを見る" / "空き状況を確認する" / "資料をダウンロードする"
```

---

## Part 5: Motion / モーション

### Principle / 原則
Motion should confirm interaction, not decorate scrolling. Every animation that plays automatically reduces the sense of human intentionality.

モーションはインタラクションを確認するためのもので、スクロールを飾るためではない。自動再生されるアニメーションはすべて、人間の意図感を削ぐ。

```css
/* ✅ インタラクティブフィードバックのみ */
a, button { transition: color 150ms ease, background 150ms ease; }
.card { transition: box-shadow 150ms ease, transform 150ms ease; }

/* ✅ 必要な場合のみ: ページ遷移後の初回表示 */
@media (prefers-reduced-motion: no-preference) {
  .fade-in {
    animation: fadeIn 400ms ease both;
    animation-delay: 100ms;
  }
}
@keyframes fadeIn { from { opacity: 0; translate: 0 8px; } to { opacity: 1; } }

/* ❌ スクロール連動・パララックス・自動グラジェントアニメーション */
```

---

## Part 6: Structure / ページ構成

### Editorial Thinking / 編集的思考
Don't follow template section order. Ask: *"What does the user need to believe before they take action?"* — then build sections that answer that question in sequence.

テンプレートのセクション順に従わない。「**ユーザーが行動を起こす前に何を信じる必要があるか？**」と問い、その問いに順番に答えるセクションを構築する。

```
❌ テンプレート順:
Hero → Feature Cards (3) → Social proof logos → Testimonials → FAQ → CTA

✅ 編集的構成例（BtoB SaaSの場合）:
課題の提示（共感） → 解決策の概要 → 具体的な機能・仕組み
→ 導入実績・数値 → 事例（誰がどう使っているか）→ 料金 → CTA

✅ 編集的構成例（飲食店の場合）:
世界観のヒーロー → シグネチャー料理 → ストーリー・こだわり
→ 空間・雰囲気 → 予約・アクセス
```

---

## Part 7: Richness Techniques / リッチさを出すテクニック

These are the techniques that separate a **designed** site from a **generated** one:

これが「デザインされたサイト」と「生成されたサイト」を分けるテクニックです：

### 1. Layered Backgrounds / 重なる背景
```css
/* セクションごとに背景を変えてリズムを作る */
.hero    { background: var(--bg-warm); }
.stats   { background: var(--accent); color: white; }
.features { background: white; }
.proof   { background: var(--bg-warm); }
.cta     { background: var(--text); color: white; }
```

### 2. Typographic Hierarchy / タイポグラフィの階層
```css
/* 見出しの前に小さなラベルを置いてコンテキストを与える */
.section-eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--accent);
  margin-bottom: 0.5rem;
}
```

### 3. Accent Borders / アクセントボーダー
```css
/* 左ボーダーで情報に重みを与える */
.highlight {
  border-left: 4px solid var(--accent);
  padding-left: 1.25rem;
}
```

### 4. Negative Space as Design / 余白のデザイン
```css
/* 均等なpaddingではなく、上下で差をつけてリズムを作る */
.section { padding: 5rem 2.5rem 4rem; }
.section-dense { padding: 3rem 2.5rem; } /* 情報密度の高いセクション */
```

### 5. Photography Direction / 写真の使い方
- 全幅ヒーローは**横長アスペクト（16:9〜2:1）**で切り抜く
- ストック写真感を消すために**色調補正（わずかに暖色または寒色に統一）**
- 人物写真は**視線がコンテンツ方向を向いている**ものを選ぶ

---

## Checklist / 完成前チェックリスト

### AIらしさの排除
- [ ] 紫・青のグラジェントがない
- [ ] 見出しにグラジェントテキストがない
- [ ] ガラスモーフィズム（backdrop-blur + 半透明背景）がない
- [ ] 3均等カラムのカードグリッドだけに頼っていない
- [ ] `shadow-xl` 以上の過剰シャドウがない
- [ ] 汎用CTAテキスト（"Get Started", "Learn More"）がない
- [ ] スクロールトリガーアニメーションがない
- [ ] InterまたはNotoフォント一択でない

### 人間らしさの確認
- [ ] 3つの問いに答えられる（誰に・何を・どんな感情）
- [ ] セクション構成がテンプレートではなく編集的判断による
- [ ] 見出しと本文で書体のコントラストがある
- [ ] 背景色がセクションごとにリズムをもって変化している
- [ ] カードにホバー状態がある（150ms以内）
- [ ] CTAテキストが「次に何が起きるか」を具体的に説明している
- [ ] このページを見た人が「人間が作った」と感じるか？

---

## Quick Reference / 早見表

| 要素 | AIデフォルト | 人間らしい代替 |
|------|-------------|----------------|
| ヒーロー背景 | 紫グラジェント | セクション背景色 + 書体で表現 |
| 見出し | グラジェントテキスト | 明朝体 + 高コントラスト |
| レイアウト | 3均等カード | 非対称 / マガジン / 大小交互 |
| カード | `rounded-2xl shadow-xl` | `border-left: 3px + shadow-sm` |
| ボタン | 丸角グラジェント | フラット + 4px角丸 |
| フォント | Inter一択 | ゴシック本文 + 明朝見出し |
| CTA | "Get Started" | 具体的なアクション動詞 |
| アニメーション | スクロール連動 | ホバー・フォーカスのみ |
| セクション区切り | 全部白背景 | 背景色のリズム |
| 余白 | 均等padding | 上下非対称のリズム |

---

## Genre Skills / ジャンル別スキル

For genre-specific guidance, load the appropriate skill file in addition to this one:
ジャンル固有のガイダンスは、このファイルに加えて対応するスキルファイルを読み込んでください：

| ジャンル | ファイル |
|---------|---------|
| 飲食・食 | `@skills/food.md` |
| 医療・健康・美容 | `@skills/health-beauty.md` |
| 宿泊・旅行・レジャー | `@skills/travel-leisure.md` |
| 教育 | `@skills/education.md` |
| ビジネス・BtoB | `@skills/business-b2b.md` |
| 不動産・建設 | `@skills/realestate.md` |
| 士業・金融・保険 | `@skills/legal-finance.md` |
| ライフスタイル | `@skills/lifestyle.md` |
| メディア・クリエイター | `@skills/media-creator.md` |
| 公共・社会 | `@skills/public-social.md` |
| 小売・EC | `@skills/retail-ec.md` |

---

*de-ai — because every website deserves to look like a human made it.*
*de-ai — すべてのウェブサイトは、人間が作ったように見えるべきだから。*
