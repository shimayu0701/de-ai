# de-ai Skill — Remove AI Look, Restore Human Touch
# de-ai スキル — AIらしさを除去して、人間らしいウェブを取り戻す

> **出会い (de-ai)**: to encounter something genuinely human.

This skill guides you to build websites that don't look AI-generated.
Load this file when starting any web project and follow its principles throughout.

このスキルはAIらしくないウェブサイトを構築するためのガイドです。
ウェブプロジェクト開始時に読み込み、設計全体を通じて原則に従ってください。

---

## The Core Problem / 核心的な問題

When AI generates websites, it defaults to a recognizable pattern:
AIがウェブサイトを生成すると、認識可能なパターンに陥りがちです：

- Purple-to-blue gradients on hero sections / 紫〜青のグラジェントヒーロー
- 3 equal-width feature cards / 3枚均等幅のフィーチャーカード
- Glassmorphism or heavy drop shadows / ガラスモーフィズムや過剰シャドウ
- "Get Started" / "Learn More" CTAs / 汎用英語CTA
- Inter or Noto font only / InterまたはNotoフォント一択
- Gradient clip-text on headings / 見出しへのグラジェントテキスト
- Oversized centered hero headlines / 過剰に大きなセンタリング見出し

**Your job is to break every one of these defaults.**
**あなたの仕事は、これらすべてのデフォルトを壊すことです。**

---

## Rule 1: Color / 色彩

### Avoid / 避けること
```css
/* AI default — never use this */
background: linear-gradient(to right, #7c3aed, #2563eb);
color: #7c3aed; /* purple-600 as primary */
```

### Use Instead / 代わりに使うこと
```css
/* Restrained, intentional color */
background: #FFFFFF;
border-bottom: 1px solid #DDDDDD;
color: #1A1A1A;
accent-color: #003A8C; /* One specific brand color, used sparingly */
```

**Japanese palette examples / 日本サイト向けパレット例:**
| Style | Background | Text | Accent | Border |
|-------|-----------|------|--------|--------|
| 新聞 | `#FFFFFF` | `#1A1A1A` | `#C00000` | `#DDDDDD` |
| 企業 | `#F8F8F8` | `#222222` | `#003A8C` | `#E0E0E0` |
| 伝統 | `#FAFAF5` | `#2C2C2C` | `#8B4513` | `#D4C5A9` |

---

## Rule 2: Typography / タイポグラフィ

### Avoid / 避けること
```css
font-family: 'Inter', 'Noto Sans JP', sans-serif; /* AI default */
```

### Use Instead / 代わりに使うこと
```css
/* Mix gothic and mincho for intentional contrast */
h1, h2, h3 {
  font-family: 'Yu Gothic', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif;
  font-weight: 700;
  letter-spacing: 0.05em;
}

body {
  font-family: 'Yu Mincho', 'Hiragino Mincho ProN', 'Noto Serif JP', serif;
  /* Or stay gothic for body but use mincho for pull quotes */
}
```

**Size scale — no exaggeration / サイズスケール — 誇張しない:**
```
h1: 2rem–2.5rem (not 4rem–5rem)
h2: 1.5rem
body: 1rem (16px)
small: 0.875rem
```

---

## Rule 3: Layout / レイアウト

### Avoid / 避けること
```html
<!-- AI default: 3 equal cards -->
<div class="grid grid-cols-3 gap-6">
  <div class="rounded-2xl shadow-xl p-8">...</div>
  <div class="rounded-2xl shadow-xl p-8">...</div>
  <div class="rounded-2xl shadow-xl p-8">...</div>
</div>
```

### Use Instead / 代わりに使うこと
```html
<!-- Asymmetric layout with clear hierarchy -->
<div style="display: grid; grid-template-columns: 200px 1fr; gap: 0;">
  <nav style="border-right: 1px solid #DDD; padding: 1rem;">...</nav>
  <main style="padding: 1.5rem;">...</main>
</div>

<!-- Or: table layout for comparisons -->
<table>
  <tr><th>機能</th><td>説明</td></tr>
</table>

<!-- Or: bordered list -->
<ul style="border: 1px solid #DDD; list-style: none; margin: 0; padding: 0;">
  <li style="border-bottom: 1px solid #DDD; padding: 0.75rem 1rem;">...</li>
</ul>
```

---

## Rule 4: Components / コンポーネント

### Borders over shadows / シャドウよりボーダー
```css
/* AI: */
.card { border-radius: 1rem; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }

/* Human: */
.card { border: 1px solid #DDDDDD; border-radius: 2px; }
```

### Flat buttons / フラットなボタン
```css
/* AI: */
.btn { background: linear-gradient(...); border-radius: 9999px; padding: 1rem 2rem; }

/* Human: */
.btn { background: #003A8C; color: #FFF; border-radius: 2px; padding: 0.5rem 1.25rem; font-size: 0.875rem; }
```

### Specific CTAs / 具体的なCTA
```
❌ "Get Started" / "Learn More" / "Try for Free"
✅ "3分で設定完了" / "導入事例を見る" / "資料をダウンロード"
✅ "See setup guide" / "Read case study" / "Download spec sheet"
```

---

## Rule 5: Motion / モーション

### Avoid / 避けること
- Scroll-triggered fade-in animations / スクロールトリガーのフェードイン
- Parallax effects / パララックス効果
- Hero video backgrounds / ヒーロー動画背景
- Animated gradient backgrounds / アニメーションするグラジェント背景

### Allow / 許容すること
```css
/* Interactive feedback only, max 200ms */
button { transition: background-color 150ms ease; }
a { transition: color 150ms ease; }
```

---

## Rule 6: Structure / ページ構成

### Avoid templated section order / テンプレート的なセクション順序を避ける
```
❌ Hero → Features(3cards) → Social proof logos → Testimonials → FAQ → CTA → Footer
```

### Think editorially / 編集的に考える
```
✅ Purpose → Evidence → Detail → Action
✅ 目的 → 根拠 → 詳細 → 行動
```

Build sections based on what the user needs to know next, not what AI templates suggest.
ユーザーが次に知るべきことに基づいてセクションを構築する。AIテンプレートの提案に従わない。

---

## Checklist Before Finishing / 完成前チェックリスト

Run through this before calling a design done:
デザイン完成と言う前に確認する：

- [ ] No purple/blue gradients anywhere / 紫・青のグラジェントがない
- [ ] No 3-equal-column card grid / 3均等カラムのカードグリッドがない
- [ ] No glassmorphism (backdrop-blur + transparent bg) / ガラスモーフィズムがない
- [ ] No `rounded-2xl` or larger on non-button elements / ボタン以外に`rounded-2xl`以上がない
- [ ] No `shadow-xl` or `shadow-2xl` / `shadow-xl`以上がない
- [ ] No generic CTAs ("Get Started", "Learn More") / 汎用CTAがない
- [ ] No gradient clip-text on headings / 見出しにグラジェントテキストがない
- [ ] No scroll-triggered animations / スクロールトリガーアニメーションがない
- [ ] Font is not Inter/Noto alone / フォントがInterまたはNoto一択でない
- [ ] Borders define structure (not shadows) / 構造はシャドウでなくボーダーで定義

---

## Quick Reference: AI vs Human / 早見表：AI vs 人間

| Element | AI Default | Human Alternative |
|---------|-----------|-------------------|
| Hero BG | Purple gradient | White + border-bottom |
| Layout | 3 equal cards | Asymmetric / table / list |
| Border radius | `rounded-2xl` | `rounded` or none |
| Depth | `shadow-xl` | `border: 1px solid` |
| Font | Inter only | Gothic + Mincho mix |
| CTA | "Get Started" | Specific action text |
| Color | Purple/indigo | Brand-specific neutral |
| Heading | Gradient clip-text | Plain bold high-contrast |
| Animation | Scroll-triggered | Hover/focus only |
| Section | Template order | Editorial order |

---

*de-ai — because every website deserves to look like a human made it.*
*de-ai — すべてのウェブサイトは、人間が作ったように見えるべきだから。*
