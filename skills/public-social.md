# de-ai Genre Skill: 公共・社会 / Public & Social

> Load this in addition to `skill.md` for NPOs, non-profit organizations, government agencies, local governments, and agricultural/food producers.
> NPO・非営利団体・行政・自治体・農業・食品生産者のサイト制作時に `skill.md` と合わせて読み込む。

---

## Core Principle / 核心原則

**Serve the public, not the algorithm.**
Public and social sector sites exist to help people accomplish specific tasks or understand important information. Clarity and accessibility come before aesthetics.

**アルゴリズムではなく市民に奉仕する。**
公共・社会セクターのサイトは、人々が特定のタスクを達成したり重要な情報を理解したりするために存在する。美しさより明瞭さとアクセシビリティを優先する。

---

## Subcategory Differences / サブカテゴリの違い

| カテゴリ | 訪問者の目的 | 最優先で伝えること |
|---------|------------|-------------------|
| NPO・非営利 | 支援・寄付・ボランティア | ミッション・活動実績・信頼性 |
| 行政・自治体 | 手続き・情報検索 | わかりやすさ・見つけやすさ |
| 農業・食品生産者 | 購入・産地理解 | 生産者の顔・こだわり・安心感 |

---

## Color / 色彩

```css
/* NPO・社会的活動：温かみと信頼 */
:root {
  --bg: #FAFAF7;
  --text: #1E2018;
  --accent: #2A6B3A;
  --accent-light: #E8F4EC;
  --border: #D8E4DC;
}

/* 行政・自治体：公正・明快 */
:root {
  --bg: #FFFFFF;
  --text: #1A1A1A;
  --accent: #0050A0;
  --accent-light: #E8F0FB;
  --border: #D8D8D8;
}

/* 農業・食品生産者：土・自然・安心 */
:root {
  --bg: #F8F6F0;
  --text: #2A2016;
  --accent: #5A7A2A;
  --accent-light: #EBF2E0;
  --border: #DDD8C8;
}
```

---

## Typography / タイポグラフィ

```css
/* 行政：読みやすさ最優先 */
body {
  font-family: 'Noto Sans JP', 'Yu Gothic', sans-serif;
  font-size: 16px; /* 最小16px — アクセシビリティ */
  line-height: 1.9;
  letter-spacing: 0.02em;
}

/* NPO：ミッションを力強く */
.mission-statement {
  font-family: 'Noto Serif JP', serif;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.04em;
}

/* 農業：温かみと誠実さ */
.farmer-voice {
  font-family: 'Noto Serif JP', serif;
  font-size: 1.125rem;
  line-height: 2.0;
  font-style: italic;
}
```

---

## Layout / レイアウト

### Government / 行政サイト
```css
/* ✅ タスク中心のトップ：よくある手続きを前面に */
.quick-links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border: 1px solid var(--border);
}
.quick-link-item {
  padding: 1.25rem;
  border-right: 1px solid var(--border);
  text-align: center;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--accent);
  text-decoration: none;
}
.quick-link-item:hover { background: var(--accent-light); }

/* ✅ お知らせ：日付付きリスト */
.news-list { list-style: none; }
.news-item {
  display: grid;
  grid-template-columns: 120px auto 1fr;
  gap: 1rem;
  align-items: baseline;
  padding: 0.875rem 0;
  border-bottom: 1px solid var(--border);
}
.news-date {
  font-size: 0.875rem;
  color: var(--text-sub);
  white-space: nowrap;
}
.news-category {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent);
  border: 1px solid var(--accent);
  padding: 0.1rem 0.5rem;
  white-space: nowrap;
}
```

### NPO Layout
```css
/* ✅ インパクトの数値 */
.impact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  text-align: center;
}
.impact-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent);
  font-family: 'Noto Serif JP', serif;
  line-height: 1;
}
.impact-label {
  font-size: 0.875rem;
  color: var(--text-sub);
  margin-top: 0.5rem;
}

/* ✅ 寄付CTA：明確に */
.donation-box {
  background: var(--accent);
  color: white;
  padding: 3rem;
  border-radius: 4px;
  text-align: center;
}
```

### Farm / Producer
```css
/* ✅ 生産者の顔：横大写真 + ストーリー */
.farmer-profile {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 500px;
}
.farmer-photo {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.farmer-story {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```

---

## Must-Have Sections / 必須セクション

### NPO・非営利団体
1. **ミッション・ビジョン**（なぜ存在するか）
2. **活動内容・プログラム**
3. **活動実績・インパクト数値**
4. **支援・寄付のお願い**（方法を明確に）
5. **ボランティア募集**
6. **スタッフ・代表者紹介**
7. **財務の透明性**（決算報告・認定状況）

### 行政・自治体
1. **よく使われる手続きへのショートカット**
2. **お知らせ・新着情報**
3. **カテゴリ別サービス一覧**
4. **相談窓口・連絡先**
5. **サイト内検索**（必須）

### 農業・食品生産者
1. **生産者の顔・ストーリー**
2. **作物・商品**
3. **生産へのこだわり・農法**
4. **産地・環境の写真**
5. **直売所・購入方法**
6. **季節の便り・ブログ**

---

## Accessibility / アクセシビリティ（公共サイトは特に重要）

```
必須対応:
- 文字サイズ: 本文16px以上
- コントラスト比: 4.5:1以上（WCAG AA）
- alt属性: 全画像に適切な代替テキスト
- キーボード操作: Tabキーで全操作可能
- フォームラベル: すべての入力欄にlabel要素

推奨対応:
- 読み上げ順序が視覚的順序と一致している
- リンクテキストが「こちら」「詳細」だけでない
- エラーメッセージが具体的（「入力してください」ではなく「電話番号を入力してください」）
```

---

## CTA Examples / CTAテキスト例

```
NPO:
❌ "Donate" / "Support Us" / "Learn More"
✅ "活動を支援する" / "マンスリーサポーターになる"
   "ボランティアに参加する" / "活動報告を読む"

行政:
❌ "Contact" / "Apply"
✅ "〇〇の申請をする" / "手続きの方法を確認する"
   "担当窓口を探す" / "よくある質問を見る"

農業・生産者:
❌ "Buy Now" / "Shop"
✅ "野菜セットを注文する" / "産地直送で届ける"
   "今週の旬を見る" / "農場を訪問する"
```

---

## Avoid / 避けること

### NPO・行政共通
- PDFへのリンクのみで情報をウェブページとして提供しない
- 更新日時が数年前のコンテンツを放置する
- 専門用語・行政用語をそのまま使う（「申請」より「手続きする」）

### 行政
- トップページに全情報を詰め込む（タスクベースの設計に）
- 組織構造でナビゲーションを構成する（利用者の目的で構成する）

### NPO
- 「ご支援をお願いします」だけで支援の方法・金額・使途が不明
- 活動実績がなく「これからやります」だけ
- 財務情報が不透明（寄付者は使途を知りたい）
