# de-ai Genre Skill: ビジネス・BtoB / Business & B2B

> Load this in addition to `skill.md` for startups, SaaS products, B2B services, manufacturers, recruitment sites, and construction companies.
> スタートアップ・SaaS・BtoBサービス・製造業・採用・工務店のサイト制作時に `skill.md` と合わせて読み込む。

---

## Core Principle / 核心原則

**Reduce the risk in the buyer's mind.**
B2B buyers are not excited — they are cautious. They need to justify the purchase to their boss. Design must communicate credibility, specificity, and low switching cost.

**購買担当者の頭の中にあるリスクを取り除く。**
BtoBの購買担当者はワクワクしているのではなく、慎重になっている。上司への稟議を通す必要がある。デザインは信頼性・具体性・乗り換えやすさを伝えなければならない。

---

## Subcategory Differences / サブカテゴリの違い

| カテゴリ | 意思決定者 | 最優先で伝えること |
|---------|-----------|-------------------|
| SaaS・スタートアップ | 事業責任者 / 現場担当 | 課題解決・ROI・導入のしやすさ |
| 製造業・メーカー | 調達・購買担当 | 品質・納期・実績・対応力 |
| 採用サイト | 就職・転職希望者 | 働く環境・成長・チーム |
| 工務店・建設 | 施主（個人・法人） | 施工実績・品質・安心感 |

---

## Color / 色彩

```css
/* SaaS・スタートアップ：前進・信頼 */
:root {
  --bg: #F7F8FA;
  --text: #1C2333;
  --accent: #0052CC;
  --accent-light: #E8EFFC;
  --border: #D8E2F4;
}

/* 製造業・工務店：誠実・堅牢 */
:root {
  --bg: #F8F8F6;
  --text: #1E1E1C;
  --accent: #2A4A6B;
  --accent-light: #E4EBF4;
  --border: #D8D8D4;
}

/* 採用サイト：活気・可能性 */
:root {
  --bg: #FAFAF8;
  --text: #1A1A1A;
  --accent: #1A7A4A;
  --accent-light: #E6F4EC;
  --border: #D8E8E0;
}
```

---

## Typography / タイポグラフィ

```css
/* キャッチコピー：課題に直接語りかける */
.hero-title {
  font-family: 'Noto Serif JP', 'Yu Mincho', serif;
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.03em;
}

/* 数値・実績：インパクト */
.metric-number {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
}

/* 機能名・仕様 */
.feature-title {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}
```

---

## Layout / レイアウト

### Hero / ヒーロー（SaaS）
```css
/* ✅ 課題提示 + UIスクリーンショット */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 5rem 2.5rem;
  background: var(--bg);
}
/* 左：コピー + CTA、右：プロダクトのUI画像 */

/* ❌ グラジェント背景 + 中央揃えテキストのみ */
```

### Feature Section / 機能セクション
```css
/* ✅ アイコン + 機能名 + 説明の2カラム */
.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 3rem;
}
.feature-item {
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: 1rem;
  align-items: start;
}

/* ✅ または：左に機能リスト、右にスクリーンショット */
.feature-showcase {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: center;
}
```

### Social Proof / 実績・導入事例
```css
/* ✅ 数値を大きく + ラベルで文脈を与える */
.metrics-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--border);
  border-left: 1px solid var(--border);
}
.metric-cell {
  padding: 2rem;
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

/* ✅ 導入事例：会社名 + 課題 + 効果の3点セット */
.case-study {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  padding: 2rem;
  border: 1px solid var(--border);
  border-radius: 4px;
}
```

### Pricing Table / 料金表
```css
/* ✅ 横並び比較表：差分が一目でわかる */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.pricing-card {
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 2rem;
}
.pricing-card.recommended {
  border-color: var(--accent);
  border-width: 2px;
}
```

---

## Must-Have Sections / 必須セクション

### SaaS・BtoBサービス
1. **課題の提示**（「こんな課題ありませんか？」）
2. **解決策の概要**（30秒で理解できる）
3. **主要機能**（3〜6機能）
4. **導入実績・数値**
5. **導入事例**（会社名・業種・効果）
6. **料金プラン**
7. **よくある質問**（稟議の障壁を取り除く）
8. **サポート体制**
9. **無料トライアル / 資料請求 CTA**

### 採用サイト
1. **働く意義・ミッション**
2. **社員インタビュー**（リアルな声）
3. **職種・募集要項**
4. **社内制度・福利厚生**
5. **社内の雰囲気・オフィス**
6. **選考フロー**
7. **代表メッセージ**

---

## CTA Examples / CTAテキスト例

```
SaaS:
❌ "Get Started" / "Try for Free" / "Sign Up"
✅ "14日間無料で試す" / "デモを見る（30分）" / "資料をダウンロードする"
   "導入事例を読む" / "料金プランを確認する"

採用:
❌ "Apply Now" / "Join Us"
✅ "募集要項を見る" / "カジュアル面談を申し込む"
   "社員の声を読む" / "1dayインターンに参加する"
```

---

## Trust Architecture / 信頼設計

BtoBで稟議を通すために必要な情報を設計する：

```html
<!-- ✅ 導入実績を具体的に -->
<div class="social-proof">
  <span class="stat">導入企業 <strong>2,400社以上</strong></span>
  <span class="stat">継続率 <strong>97.3%</strong></span>
  <span class="stat">平均ROI <strong>3.2倍</strong></span>
</div>

<!-- ✅ セキュリティ・プライバシーへの対応を明示 -->
<div class="security-badges">
  <span>ISO 27001認定</span>
  <span>SOC 2 Type II</span>
  <span>GDPR対応</span>
</div>

<!-- ✅ サポート体制を具体的に -->
<div class="support-info">
  <span>平日9-18時 電話・チャット対応</span>
  <span>専任カスタマーサクセス担当</span>
</div>
```

---

## Avoid / 避けること

- 「業界最高水準」「革新的な」などの根拠のない形容詞
- 料金を「要相談」のみにする（離脱率が大幅に上がる）
- 機能説明ばかりで「なぜそれが必要か」の文脈がない
- 導入企業のロゴだけ並べて事例の詳細がない
- セキュリティ・データ取り扱いへの言及がない
- CTAが「お問い合わせ」1種類しかない（温度感に合わせて複数用意）
