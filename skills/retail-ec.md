# de-ai Genre Skill: 小売・EC / Retail & E-commerce

> Load this in addition to `skill.md` for online shops, retail stores, brand e-commerce, and marketplace-style sites.
> オンラインショップ・実店舗・ブランドEC・マーケットプレイス型サイトのサイト制作時に `skill.md` と合わせて読み込む。

---

## Core Principle / 核心原則

**Remove friction, build desire.**
Every extra click, every unclear policy, every slow load is a lost sale. Simultaneously, the design must make the visitor *want* the product before they read the price.

**摩擦を取り除き、欲求を高める。**
余分なクリック・不明確なポリシー・遅い読み込みはすべて機会損失。同時に、デザインは訪問者が価格を見る前に「欲しい」と感じさせなければならない。

---

## Subcategory Differences / サブカテゴリの違い

| カテゴリ | 訪問者の行動 | 最優先で伝えること |
|---------|------------|-------------------|
| 単品ブランドEC | 世界観から入る | ブランドの価値観・品質 |
| 総合EC・セレクト | 比較・検索 | 品揃え・価格・信頼性 |
| 実店舗 + オンライン | 在庫確認・事前調査 | 店舗情報・在庫・予約 |
| サブスクボックス | 継続価値の理解 | 中身・頻度・解約しやすさ |

---

## Color / 色彩

```css
/* ラグジュアリー・プレミアム */
:root {
  --bg: #F8F5F0;
  --text: #1A1610;
  --accent: #1A1610;
  --accent-light: #EEEAE4;
  --border: #DDD8D0;
}

/* ナチュラル・オーガニック */
:root {
  --bg: #FAF8F3;
  --text: #2A2416;
  --accent: #4A6B3A;
  --accent-light: #EBF2E4;
  --border: #DDD8C8;
}

/* ポップ・カジュアル */
:root {
  --bg: #FFFFFF;
  --text: #1A1A1A;
  --accent: #E83C2A;
  --accent-light: #FBE8E6;
  --border: #E8E8E8;
}

/* テクノロジー・ガジェット */
:root {
  --bg: #F5F5F7;
  --text: #1D1D1F;
  --accent: #0071E3;
  --accent-light: #E8F2FC;
  --border: #D8D8D8;
}
```

---

## Typography / タイポグラフィ

```css
/* 商品名 */
.product-name {
  font-family: 'Noto Serif JP', serif;
  font-size: 1.375rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.4;
}

/* 価格 */
.price-current {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--text);
}
.price-original {
  font-size: 1rem;
  text-decoration: line-through;
  color: var(--text-light);
}
.price-discount {
  font-size: 0.875rem;
  font-weight: 700;
  color: #C00000;
  background: #FBE8E8;
  padding: 0.2rem 0.5rem;
  border-radius: 2px;
}

/* ブランドコピー */
.brand-tagline {
  font-family: 'Noto Serif JP', serif;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 400;
  letter-spacing: 0.06em;
  line-height: 1.6;
}
```

---

## Layout / レイアウト

### Product Grid / 商品グリッド
```css
/* ✅ 2〜4カラム（コンテンツ量で判断） */
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem 1.5rem;
}

/* ✅ 商品カード：ホバーで2枚目の画像へ */
.product-card { position: relative; }
.product-card-image-primary { display: block; }
.product-card-image-hover {
  display: none;
  position: absolute;
  inset: 0;
  object-fit: cover;
}
.product-card:hover .product-card-image-primary { display: none; }
.product-card:hover .product-card-image-hover { display: block; }
```

### Product Detail / 商品詳細
```css
/* ✅ 左：ギャラリー、右：購入UI — 固定スクロール */
.product-detail {
  display: grid;
  grid-template-columns: 1fr 440px;
  gap: 5rem;
  align-items: start;
}
.product-info { position: sticky; top: 2rem; }

/* ✅ 購入ボタン：目立つが押しつけがましくない */
.add-to-cart {
  width: 100%;
  padding: 1rem;
  background: var(--text); /* 黒 — アクセントより落ち着いた主張 */
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 150ms;
}
.add-to-cart:hover { opacity: 0.85; }

/* ✅ サイズ選択：ボタン形式 */
.size-options { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.size-btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--border);
  border-radius: 2px;
  background: white;
  font-size: 0.875rem;
  cursor: pointer;
  transition: border-color 150ms;
}
.size-btn:hover, .size-btn.selected {
  border-color: var(--text);
  background: var(--text);
  color: white;
}
.size-btn.out-of-stock {
  color: var(--text-light);
  text-decoration: line-through;
  cursor: not-allowed;
}
```

### Cart / Checkout
```css
/* ✅ カートは右サイドバーに集約 */
.checkout-layout {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 3rem;
  align-items: start;
}
.order-summary {
  position: sticky;
  top: 2rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 1.5rem;
}
```

---

## Must-Have Sections / 必須セクション

### ブランドEC
1. **世界観ヒーロー**（新作・シーズン）
2. **商品カテゴリ**
3. **新着・おすすめ商品**
4. **ブランドストーリー**（短く）
5. **お客様の声・レビュー**
6. **送料・返品ポリシー**（目立つ場所に）
7. **サイズガイド**

### 商品詳細ページ（必須要素）
1. **複数の商品画像**（着用・使用イメージ含む）
2. **商品名・価格**（税込み表示）
3. **サイズ・カラー選択**
4. **商品説明**（素材・サイズ感・生産地）
5. **在庫状況**
6. **購入ボタン** + カートに入れる
7. **配送日・送料**
8. **レビュー**
9. **関連商品**

---

## CTA Examples / CTAテキスト例

```
❌ "Add to Cart" / "Buy Now" / "Shop Now"
✅ "カートに入れる" / "すぐに購入する"
   "残り3点" / "本日中に注文で明日届く"
   "送料無料で試す" / "定期購入で15%オフ"
```

---

## Trust Signals / 購買信頼シグナル

```html
<!-- ✅ 配送・返品を目立つ場所に -->
<div class="trust-bar">
  <span>🚚 5,000円以上送料無料</span>
  <span>🔄 30日間返品保証</span>
  <span>🔒 SSL暗号化決済</span>
</div>

<!-- ✅ 在庫わずかで緊急性を演出（嘘をつかない） -->
<p class="stock-alert">残り2点</p>

<!-- ✅ レビュー数と評価 -->
<div class="rating">
  <span class="stars">★★★★☆</span>
  <span>4.3 (128件のレビュー)</span>
</div>
```

---

## Avoid / 避けること

- 送料・手数料を購入直前まで隠す（カート放棄の最大原因）
- 返品・交換ポリシーをフッターに小さく書くだけ
- 「売り切れ」商品を一覧から消す（「再入荷通知」を受け付ける）
- サイズ感・着用感の説明がない
- 会員登録を購入前に強制する（ゲスト購入を用意する）
- カートに入れたあと「続けてショッピング」か「レジに進む」の選択を奪う
