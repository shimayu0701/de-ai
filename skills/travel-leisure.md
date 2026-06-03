# de-ai Genre Skill: 宿泊・旅行・レジャー / Travel, Accommodation & Leisure

> Load this in addition to `skill.md` for hotels, ryokan, travel agencies, tour companies, guesthouses, amusement parks, and leisure facilities.
> ホテル・旅館・旅行会社・ツアー・民泊・遊園地・レジャー施設のサイト制作時に `skill.md` と合わせて読み込む。

---

## Core Principle / 核心原則

**Sell the destination, not the service.**
Before a visitor books, they need to visualize themselves there. The design must transport them.

**サービスではなく目的地を売る。**
訪問者が予約する前に、自分がそこにいる姿を想像できなければならない。デザインはそこへ連れていく役割を担う。

---

## Subcategory Differences / サブカテゴリの違い

| カテゴリ | 最優先で伝えること | トーン |
|---------|-------------------|--------|
| 高級ホテル・旅館 | 非日常・贅沢・静寂 | ラグジュアリー・格調 |
| ビジネスホテル | 利便性・清潔感・価格 | 機能的・明快 |
| 民泊・ゲストハウス | 個性・体験・地域とのつながり | 親しみやすさ・物語 |
| 旅行会社・ツアー | 安心・品質・体験の豊かさ | 信頼・ワクワク感 |
| テーマパーク・レジャー | 楽しさ・興奮・家族の笑顔 | エネルギー・ポップ |

---

## Color / 色彩

```css
/* 高級旅館・和のリゾート */
:root {
  --bg: #F5F0E8;
  --text: #1E1814;
  --accent: #7A4F2A;
  --accent-light: #F0E8DA;
  --border: #DDD4C4;
}

/* ラグジュアリーホテル */
:root {
  --bg: #0A0A08;
  --text: #F0EAD8;
  --accent: #C8A96E;
  --accent-light: #1A1810;
  --border: #2A2820;
}

/* 民泊・ゲストハウス */
:root {
  --bg: #FAF8F4;
  --text: #2A2416;
  --accent: #4A7C59;
  --accent-light: #EAF3EC;
  --border: #DDD8CC;
}

/* テーマパーク・レジャー */
:root {
  --bg: #FFFFFF;
  --text: #1A1A1A;
  --accent: #E84B2A;
  --accent-secondary: #F5A800;
  --border: #E8E8E8;
}
```

---

## Typography / タイポグラフィ

```css
/* 旅館・ホテル：格調ある明朝体 */
h1, h2 {
  font-family: 'Noto Serif JP', 'Yu Mincho', serif;
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1.3;
}

/* ツアー名・プラン名 */
.plan-title {
  font-family: 'Noto Serif JP', serif;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

/* 価格表示 */
.price {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.price-unit {
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--text-sub);
}
```

---

## Layout / レイアウト

### Immersive Hero / 没入感のあるヒーロー
```css
/* ✅ 全画面ヒーロー + 予約フォームをオーバーレイ */
.hero {
  position: relative;
  height: 90vh;
  min-height: 600px;
}
.hero-image {
  width: 100%; height: 100%;
  object-fit: cover;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 40%,
    rgba(0,0,0,0.6) 100%
  );
}
.hero-booking {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 4px;
  min-width: 640px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
}
```

### Room / Plan Cards
```css
/* ✅ 横長カード：写真左 + 情報右 */
.plan-card {
  display: grid;
  grid-template-columns: 320px 1fr;
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
}
.plan-card-image {
  aspect-ratio: 4/3;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.plan-card-body {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
}
.plan-card-footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}
```

### Photo Gallery / フォトギャラリー
```css
/* ✅ 旅館・ホテルらしいギャラリー：大小混在 */
.gallery-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 280px 280px;
  gap: 4px;
}
.gallery-grid > *:first-child { grid-row: span 2; }
```

---

## Must-Have Sections / 必須セクション

### ホテル・旅館
1. **没入感のあるヒーロー** + 予約検索フォーム
2. **客室・プラン一覧**（写真大・価格明示）
3. **施設・アメニティ**
4. **アクセス・周辺情報**
5. **口コミ・お客様の声**
6. **季節・イベント情報**

### 旅行・ツアー
1. **目的地別・テーマ別ツアー検索**
2. **人気ツアーランキング**
3. **添乗員同行・サポート体制**
4. **料金・含まれるもの（明示）**
5. **お客様体験談**
6. **旅行保険・キャンセルポリシー**

---

## CTA Examples / CTAテキスト例

```
宿泊:
❌ "Book Now" / "Reserve"
✅ "空き状況を確認する" / "プランを選ぶ" / "この部屋を予約する"
   "お得な早割プランを見る" / "2名プランから ¥15,000〜"

旅行:
❌ "Learn More" / "Explore"
✅ "ツアー詳細を見る" / "無料パンフレットを請求する"
   "旅程を確認する" / "空席を確認する"
```

---

## Booking Flow Design / 予約フロー設計

```
✅ 予約フローは最大3ステップ:
   日程・人数選択 → プラン選択 → 個人情報入力

✅ 各ステップで「何が残っているか」を常に表示
✅ 価格の内訳（税・サービス料）を早い段階で明示
✅ キャンセルポリシーを予約完了前に明示

❌ 会員登録を予約の前に強制する
❌ 「お問い合わせください」で価格を隠す
```

---

## Photography Direction / 写真の方向性

- **時間帯**：夕暮れ・朝・青空など感情を動かす時間帯の写真を優先
- **構図**：人物（後ろ姿・シルエット）を入れると体験のイメージが伝わりやすい
- **季節**：四季の写真を用意してコンテンツを定期更新
- **部屋**：ベッドメイキング直後・採光が最も美しい時間に撮影

---

## Avoid / 避けること

- 価格を「要問合せ」「時期により異なります」だけにする
- 客室写真が小さくて暗い
- アクセスページにGoogle マップの埋め込みだけで住所・電話番号がない
- チェックイン・チェックアウト時間を目立たない場所に置く
- 「おすすめ」「人気」の根拠を示さない
