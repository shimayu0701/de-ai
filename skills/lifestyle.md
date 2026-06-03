# de-ai Genre Skill: ライフスタイル / Lifestyle

> Load this in addition to `skill.md` for fashion/apparel, bridal, pet-related businesses, and parenting/childcare services.
> アパレル・ファッション・ブライダル・ペット・子育て・育児サービスのサイト制作時に `skill.md` と合わせて読み込む。

---

## Core Principle / 核心原則

**Lifestyle sites sell an identity, not a product.**
Visitors ask: "Is this brand *me*?" The design must reflect a clear point of view — a lifestyle that the visitor wants to belong to.

**ライフスタイルサイトは商品ではなくアイデンティティを売る。**
訪問者は「このブランドは自分らしいか？」を問う。デザインは明確な世界観——訪問者が属したいライフスタイルを反映しなければならない。

---

## Subcategory Differences / サブカテゴリの違い

| カテゴリ | 訪問者が求めるもの | デザインの役割 |
|---------|------------------|----------------|
| アパレル・ファッション | 自己表現・センス | ブランドの世界観を体感させる |
| ブライダル | 夢・感動・安心 | 特別な日の期待感を高める |
| ペット | 愛情・安心・楽しさ | ペットへの愛を共感・肯定する |
| 子育て・育児 | 安心・情報・共感 | 不安を取り除き、支持者になる |

---

## Color / 色彩

```css
/* ハイファッション・セレクトショップ */
:root {
  --bg: #F8F7F4;
  --text: #1A1814;
  --accent: #1A1814; /* テキストカラー = アクセント */
  --accent-light: #EDEAE4;
  --border: #D8D4CC;
}

/* カジュアル・ストリート */
:root {
  --bg: #FFFFFF;
  --text: #1A1A1A;
  --accent: #E8291C;
  --accent-light: #FBE9E8;
  --border: #E8E8E8;
}

/* ブライダル */
:root {
  --bg: #FDFAF6;
  --text: #2A2218;
  --accent: #C4956A;
  --accent-light: #FAF0E6;
  --border: #EAE0D4;
}

/* ペット */
:root {
  --bg: #FAFBF8;
  --text: #1E2418;
  --accent: #5A7A3A;
  --accent-light: #EBF2E4;
  --border: #D8E4CC;
}

/* 子育て・育児 */
:root {
  --bg: #FAFAF6;
  --text: #2A2418;
  --accent: #3A7A8A;
  --accent-light: #E4F2F4;
  --border: #D8E8EC;
}
```

---

## Typography / タイポグラフィ

```css
/* ファッション：ゆったりとしたレタースペーシング */
.brand-name {
  font-family: 'Noto Serif JP', serif;
  font-weight: 300;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

/* ブライダル：優雅な明朝体 */
.hero-title {
  font-family: 'Noto Serif JP', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 400; /* ウェイトを落として優雅に */
  letter-spacing: 0.08em;
  line-height: 1.6;
}

/* 子育て：親しみやすいゴシック */
.hero-title {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 700;
  letter-spacing: 0.03em;
  line-height: 1.5;
}
```

---

## Layout / レイアウト

### Fashion / アパレル
```css
/* ✅ エディトリアルグリッド：大小混在 */
.lookbook-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 2px;
}
.lookbook-grid > *:nth-child(4) {
  grid-column: span 2; /* 4枚目を2カラム幅に */
}

/* ✅ 商品詳細：写真大 + 情報右 */
.product-detail {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 4rem;
  align-items: start;
}
.product-gallery {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 8px;
}
.product-thumbs {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
```

### Bridal / ブライダル
```css
/* ✅ 感動的なヒーロー：花嫁写真 + 引用 */
.hero-bridal {
  position: relative;
  height: 100vh;
  min-height: 700px;
}
.hero-quote {
  position: absolute;
  bottom: 4rem;
  left: 4rem;
  color: white;
  font-family: 'Noto Serif JP', serif;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}

/* ✅ プラン表：装飾的に */
.plan-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.plan-card {
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 2.5rem 2rem;
  text-align: center;
  position: relative;
}
.plan-card.featured::before {
  content: 'POPULAR';
  position: absolute;
  top: -1px; left: 50%; transform: translateX(-50%);
  background: var(--accent);
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0.25rem 1rem;
}
```

---

## Must-Have Sections / 必須セクション

### アパレル・ファッション
1. **世界観ヒーロー**（シーズンビジュアル）
2. **新着アイテム**
3. **カテゴリ・コレクション**
4. **スタイリング提案**（コーディネート例）
5. **サイズガイド**
6. **配送・返品ポリシー**

### ブライダル
1. **感動的なヒーロービジュアル**
2. **プラン・料金**（明確に）
3. **会場・装花・演出の実例**
4. **先輩カップルの声・写真**
5. **相談会・見学予約**
6. **よくある質問**（費用・日程・準備）

### ペット
1. **サービス内容**（トリミング・ペットホテルなど）
2. **料金**
3. **施設・環境の写真**
4. **スタッフ紹介**（資格・経験）
5. **利用者の声**（ペットの写真も）
6. **予約・アクセス**

---

## CTA Examples / CTAテキスト例

```
ファッション:
❌ "Shop Now" / "Buy Now"
✅ "コレクションを見る" / "新着をチェックする" / "スタイリングを参考にする"

ブライダル:
❌ "Learn More" / "Contact"
✅ "ブライダルフェアに参加する" / "無料相談を予約する"
   "実例集を見る" / "プランを確認する"

ペット:
❌ "Book" / "Reserve"
✅ "トリミングを予約する" / "空き状況を確認する"
   "ペットホテルの詳細を見る"
```

---

## Avoid / 避けること

### アパレル共通
- 商品写真の背景が全部白（着用イメージを必ず掲載）
- サイズ感・素材感の説明がない
- 返品・交換ポリシーが見つけにくい

### ブライダル
- 価格を「お問い合わせください」だけにする（離脱率が急増）
- 成約カップルの写真がストック写真（実際の写真を使う）

### ペット・子育て
- 動物・子供の写真がストックフォトばかり
- 専門資格・衛生管理への言及がない
- 「安心・安全」を根拠なく連呼する
