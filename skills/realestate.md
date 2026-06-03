# de-ai Genre Skill: 不動産・建設 / Real Estate & Construction

> Load this in addition to `skill.md` for real estate agencies, property developers, home builders, renovation companies, and architectural firms.
> 不動産仲介・デベロッパー・工務店・リノベーション・設計事務所のサイト制作時に `skill.md` と合わせて読み込む。

---

## Core Principle / 核心原則

**The biggest purchase of their life needs the deepest trust.**
Real estate is often the largest financial decision a person makes. The design must communicate stability, expertise, and transparency above all else.

**人生最大の買い物には、最大の信頼が必要。**
不動産は多くの人にとって生涯最大の金融的決断。デザインは何よりも安定感・専門性・透明性を伝えなければならない。

---

## Subcategory Differences / サブカテゴリの違い

| カテゴリ | 訪問者の感情 | 最優先で伝えること |
|---------|------------|-------------------|
| 売買仲介 | 不安・慎重 | 実績・信頼・地域知識 |
| 賃貸 | 比較・効率重視 | 物件数・検索のしやすさ・手数料 |
| 新築分譲 | 期待・夢 | モデルルーム・立地・生活イメージ |
| 工務店・注文住宅 | 理想・こだわり | 施工実績・素材・設計士との関係 |
| リノベーション | 可能性・変化 | Before/After・事例の豊富さ |

---

## Color / 色彩

```css
/* 不動産仲介・信頼感重視 */
:root {
  --bg: #F8F8F6;
  --text: #1E1E1C;
  --accent: #1A3A5C;
  --accent-light: #E4ECF4;
  --border: #D8D8D4;
}

/* 新築・分譲マンション：高級感 */
:root {
  --bg: #F5F3EE;
  --text: #1E1C18;
  --accent: #7A6040;
  --accent-light: #F0EAE0;
  --border: #E0D8CC;
}

/* 工務店・注文住宅：自然・温かみ */
:root {
  --bg: #FAF8F4;
  --text: #2A2218;
  --accent: #4A6B3A;
  --accent-light: #EAF0E4;
  --border: #DDD8CC;
}

/* リノベーション：可能性・変化 */
:root {
  --bg: #F8F8F8;
  --text: #1A1A1A;
  --accent: #C45C00;
  --accent-light: #FBE9E0;
  --border: #E8E8E8;
}
```

---

## Typography / タイポグラフィ

```css
/* 物件名・プロジェクト名：格調 */
.property-name {
  font-family: 'Noto Serif JP', 'Yu Mincho', serif;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1.4;
}

/* 価格：明確に・大きく */
.price-main {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--accent);
}
.price-unit {
  font-size: 0.875rem;
  color: var(--text-sub);
  font-weight: 400;
}

/* 物件スペック */
.spec-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--text-light);
}
.spec-value {
  font-size: 1rem;
  font-weight: 700;
}
```

---

## Layout / レイアウト

### Property Card / 物件カード
```css
/* ✅ 縦型：写真上 + スペック下 */
.property-card {
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
  transition: box-shadow 150ms;
}
.property-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
.property-card-image {
  aspect-ratio: 4/3;
  object-fit: cover;
  width: 100%;
}
.property-card-body { padding: 1.25rem; }
.property-specs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

/* ✅ 横型（一覧ページ）：写真左 + スペック右 */
.property-list-item {
  display: grid;
  grid-template-columns: 280px 1fr;
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
}
```

### Property Detail / 物件詳細
```css
/* ✅ メインビジュアル + サムネイルギャラリー */
.gallery-main {
  aspect-ratio: 16/9;
  object-fit: cover;
  width: 100%;
  border-radius: 4px;
}
.gallery-thumbs {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
  margin-top: 4px;
}

/* ✅ スペック表：定義リスト形式 */
.spec-table { width: 100%; border-collapse: collapse; }
.spec-table th {
  background: var(--bg-alt);
  width: 30%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  font-size: 0.875rem;
  font-weight: 700;
  text-align: left;
}
.spec-table td {
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  font-size: 0.875rem;
}
```

### Construction Portfolio / 施工事例
```css
/* ✅ Before/After：左右スライダーまたは2分割 */
.before-after {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  border-radius: 4px;
  overflow: hidden;
}
.before-after-label {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  background: rgba(0,0,0,0.6);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 2px;
}
```

---

## Must-Have Sections / 必須セクション

### 不動産仲介
1. **物件検索**（最重要 — ファーストビューに）
2. **新着・おすすめ物件**
3. **エリア・沿線から探す**
4. **会社概要・宅建業者免許番号**
5. **担当者紹介**
6. **お客様の声・成約実績**
7. **売却相談 / 買取のCTA**

### 工務店・注文住宅
1. **施工事例**（写真豊富に）
2. **家づくりの流れ**
3. **素材・構法のこだわり**
4. **設計士・棟梁紹介**
5. **価格帯・坪単価の目安**
6. **完成見学会・相談会**
7. **施工保証・アフターサービス**

---

## CTA Examples / CTAテキスト例

```
不動産仲介:
❌ "Contact Us" / "Learn More"
✅ "物件を探す" / "売却査定を依頼する（無料）"
   "資料を請求する" / "来店予約をする" / "チャットで相談する"

工務店:
❌ "Get Started" / "Inquire"
✅ "施工事例を見る" / "見学会に参加する"
   "資金計画を相談する（無料）" / "プランを依頼する"
```

---

## Legal Requirements / 法的表示（日本）

不動産サイトには以下の表示が法的に必要：

```html
<!-- 宅地建物取引業者免許 -->
<p class="license">宅地建物取引業 国土交通大臣（X）第XXXXX号</p>

<!-- 物件広告の表示義務 -->
<!-- 価格・面積・間取り・築年数・所在地の明示 -->
<!-- 「新築」の定義（建築後1年未満かつ未使用） -->
<!-- 取引態様（売主・代理・媒介）の明示 -->
```

---

## Avoid / 避けること

- 物件価格を「応相談」「お問い合わせください」にする
- 間取り図が小さくて読めない
- アクセス情報（最寄り駅・徒歩分数）が目立たない場所にある
- 宅建業者免許番号の非表示
- 施工事例の写真が少なすぎる（最低10事例・各5枚以上）
- 問合せフォームが長すぎる（名前・連絡先・物件名の3項目で十分）
