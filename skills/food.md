# de-ai Genre Skill: 飲食・食 / Food & Dining

> Load this in addition to `skill.md` when building websites for restaurants, cafes, bars, food producers, or any food-related business.
> 飲食店・カフェ・バー・食品生産者など、食に関わるビジネスのサイト制作時に `skill.md` と合わせて読み込む。

---

## Core Principle / 核心原則

**Food websites sell an experience, not a product.**
The design must make the visitor feel hungry, curious, or transported — before they read a single word.

**飲食サイトは商品ではなく体験を売る。**
デザインは、訪問者が一言も読む前に「食べたい」「行きたい」「知りたい」と感じさせなければならない。

---

## Color / 色彩

食の世界観に合わせたパレットを使う。AIデフォルトのブルー系・インディゴ系は食欲を減退させる。

| スタイル | 背景 | テキスト | アクセント | 用途 |
|--------|------|----------|------------|------|
| ビストロ | `#FAF7F2` | `#2A1F14` | `#8B3A1A` | 洋食・ワインバー |
| 和食 | `#F5F0E8` | `#1E1A14` | `#8B2A2A` | 和食・割烹・寿司 |
| カフェ | `#FBF8F4` | `#2C2418` | `#6B4C2A` | カフェ・パン・スイーツ |
| モダン | `#F2F2F0` | `#1A1A1A` | `#2D5A27` | モダン・ヴィーガン・ファーム |
| ラグジュアリー | `#0E0C08` | `#F0EAD8` | `#C8A96E` | 高級レストラン・鉄板焼き |

```css
/* 食欲をそそる暖色ベース */
:root {
  --bg: #FAF7F2;
  --text: #2A1F14;
  --accent: #8B3A1A;
  --accent-light: #F5EDE6;
  --border: #E8E0D4;
}
```

---

## Typography / タイポグラフィ

```css
/* 店名・キャッチコピー：明朝体で格調を出す */
.restaurant-name, .hero-title {
  font-family: 'Noto Serif JP', 'Yu Mincho', serif;
  font-weight: 700;
  letter-spacing: 0.08em;
}

/* 本文・説明：ゴシック体で読みやすく */
body {
  font-family: 'Noto Sans JP', 'Yu Gothic', sans-serif;
  line-height: 1.9; /* 食の説明文はゆったり読ませる */
}

/* メニュー価格：数字を際立たせる */
.price {
  font-family: 'Georgia', serif;
  font-size: 1.25rem;
  letter-spacing: 0.02em;
}
```

---

## Layout / レイアウト

### Hero / ヒーロー
```css
/* ✅ 料理写真を全画面で — テキストは左下に */
.hero {
  position: relative;
  height: 85vh;
  min-height: 560px;
}
.hero-image {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center;
}
.hero-content {
  position: absolute;
  bottom: 3rem; left: 3rem;
  color: white;
  text-shadow: 0 2px 16px rgba(0,0,0,0.4);
}

/* ❌ 中央寄せのテキストオーバーレイ（AI定番） */
```

### Menu Layout / メニューレイアウト
```css
/* ✅ 価格右揃えの2カラム — 読みやすい */
.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.875rem 0;
  border-bottom: 1px solid var(--border);
  gap: 2rem;
}
.menu-item-name { flex: 1; }
.menu-item-desc {
  font-size: 0.8125rem;
  color: var(--text-sub);
  margin-top: 0.2rem;
}
.menu-item-price {
  font-weight: 700;
  white-space: nowrap;
  color: var(--accent);
}

/* ❌ カードグリッドでメニューを並べる（AI定番） */
```

### Photo Gallery / フォトギャラリー
```css
/* ✅ マガジン風の不均等グリッド */
.gallery {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto;
  gap: 4px;
}
.gallery > *:first-child { grid-row: span 2; }
```

---

## Content / コンテンツ

### Must-Have Sections / 必須セクション（優先順）
1. **世界観ヒーロー** — 料理写真1枚で世界観を伝える
2. **シグネチャー料理** — 代表メニュー2〜3品を大きく
3. **こだわり・ストーリー** — シェフや素材へのこだわりを短文で
4. **空間・雰囲気** — 内観写真2〜3枚
5. **予約・アクセス** — 電話・予約リンク・地図

### Writing Style / 文章スタイル
```
❌ "厳選された食材を使用した本格的なお料理をご提供いたします"
   （抽象的・どこにでもある表現）

✅ "毎朝5時、豊洲から届く魚だけを使います"
   "山梨・清里の契約農家から直送された野菜"
   （具体的・唯一性がある）
```

### CTA Examples / CTAテキスト例
```
❌ "Reserve Now" / "Book a Table" / "Learn More"
✅ "席を予約する" / "本日の空席を確認" / "おまかせコースを見る"
   "テイクアウトメニューを見る" / "ギフト券を購入する"
```

---

## Photography Direction / 写真の方向性

- **料理写真**：真上（真俯瞰）または斜め45度。横からの水平は避ける
- **アスペクト比**：ヒーローは16:9〜2:1。料理単品は1:1または4:3
- **色調**：暖色系に統一（青白い光は食欲を減退させる）
- **背景**：木・石・布など自然素材。白いテーブルクロスより質感があるものを

---

## Avoid in Food Sites / 飲食サイトで避けること

- 食材・料理の写真なしにアイコンで代替する
- メニューをカードグリッドで横並びにする
- 予約ボタンを目立たない場所に置く
- 「こだわり」を箇条書き3点で済ませる
- ナビゲーションに「Home」「About」「Contact」だけ（業種に合わせた言葉を）
