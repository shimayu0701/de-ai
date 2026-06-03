# de-ai Genre Skill: 教育 / Education

> Load this in addition to `skill.md` for cram schools, tutoring, universities, vocational schools, online courses, and educational SaaS.
> 学習塾・予備校・大学・専門学校・オンライン講座・教育系SaaSのサイト制作時に `skill.md` と合わせて読み込む。

---

## Core Principle / 核心原則

**Sell the outcome, not the curriculum.**
Visitors (and their parents) don't care about teaching methods — they care about results. Every section should answer: "What will change in my life after this?"

**カリキュラムではなく成果を売る。**
訪問者（と保護者）は教育方法に興味がない。「この後、自分（子供）の人生に何が変わるか」を知りたい。すべてのセクションがその問いに答えること。

---

## Subcategory Differences / サブカテゴリの違い

| カテゴリ | 意思決定者 | 最優先で伝えること |
|---------|-----------|-------------------|
| 学習塾・予備校 | 保護者 + 生徒 | 合格実績・指導力・安心感 |
| 大学・専門学校 | 受験生 + 保護者 | 卒業後の進路・学べること |
| オンライン講座 | 受講生本人 | スキル習得後の変化・受講のしやすさ |
| 教育SaaS | 教育機関の担当者 | 導入効果・操作のしやすさ・サポート |

---

## Color / 色彩

```css
/* 学習塾・受験：信頼と集中 */
:root {
  --bg: #F8F9FC;
  --text: #1A2233;
  --accent: #1A56C4;
  --accent-light: #E8EFFC;
  --border: #D8E2F4;
}

/* オンライン講座：前向き・達成感 */
:root {
  --bg: #FAFAF8;
  --text: #1A1A1A;
  --accent: #0D7C3D;
  --accent-light: #E6F4EC;
  --border: #D8EDE0;
}

/* 大学・専門学校：格調と将来感 */
:root {
  --bg: #F7F8FA;
  --text: #1C2333;
  --accent: #8B2A2A;
  --accent-light: #F4E8E8;
  --border: #DDD8D8;
}
```

---

## Typography / タイポグラフィ

```css
/* 合格実績・数値：インパクト重視 */
.achievement-number {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  font-family: 'Noto Serif JP', serif;
  color: var(--accent);
  line-height: 1.1;
}

/* 講座名・コース名 */
.course-title {
  font-family: 'Noto Serif JP', serif;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.03em;
}

/* 強調メッセージ */
.hero-title {
  font-family: 'Noto Serif JP', serif;
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.04em;
}
```

---

## Layout / レイアウト

### Achievement / 合格実績の見せ方
```css
/* ✅ 大学名+人数のリスト — インパクトと信頼感 */
.results-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
  border: 1px solid var(--border);
}
.result-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem 1.25rem;
  border-bottom: 1px solid var(--border);
  border-right: 1px solid var(--border);
}
.result-school { font-weight: 500; font-size: 0.9375rem; }
.result-count {
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--accent);
}

/* ❌ 実績をアイコンカードで並べる */
```

### Course Card / 講座カード
```css
/* ✅ 受講者の属性・ゴールを明示したカード */
.course-card {
  border: 1px solid var(--border);
  border-top: 3px solid var(--accent);
  border-radius: 4px;
  padding: 1.75rem;
}
.course-target {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
}
.course-outcome {
  font-size: 0.875rem;
  color: var(--text-sub);
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border);
}
```

### Instructor Profile / 講師紹介
```css
/* ✅ 資格・実績を明示したプロフィール */
.instructor {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1.5rem;
  align-items: start;
}
.instructor-credentials {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.75rem;
}
.credential-tag {
  font-size: 0.75rem;
  background: var(--accent-light);
  color: var(--accent);
  padding: 0.2rem 0.6rem;
  border-radius: 2px;
}
```

---

## Must-Have Sections / 必須セクション

### 学習塾・予備校
1. **合格実績**（最重要・数値で明示）
2. **コース・料金一覧**
3. **指導方法・特長**（なぜ合格できるか）
4. **講師紹介**
5. **通塾の流れ・体験申込**
6. **保護者の声・生徒の声**
7. **よくある質問**

### オンライン講座
1. **受講後に何ができるか**（ゴール明示）
2. **カリキュラム概要**
3. **受講者の変化・口コミ**
4. **講師プロフィール**
5. **料金・サポート内容**
6. **無料体験・サンプル動画**

---

## CTA Examples / CTAテキスト例

```
塾・スクール:
❌ "Apply Now" / "Get Started" / "Learn More"
✅ "無料体験授業を申し込む" / "資料を請求する（無料）"
   "合格実績を詳しく見る" / "授業料を確認する"

オンライン講座:
❌ "Enroll" / "Sign Up"
✅ "無料で受講してみる" / "サンプル動画を見る"
   "受講者の声を読む" / "コース内容を確認する"
```

---

## Social Proof Design / 実績・口コミの見せ方

```html
<!-- ✅ 合格実績は数値で具体的に -->
<div class="achievement">
  <span class="year">2024年度</span>
  <span class="number">東京大学 12名合格</span>
</div>

<!-- ✅ 口コミは変化を具体的に -->
<blockquote class="testimonial">
  <p>入塾前は偏差値42でしたが、8ヶ月で63まで伸び第一志望に合格できました。</p>
  <cite>高3・男子 / 私立大学合格</cite>
</blockquote>

<!-- ❌ "丁寧な指導が良かったです" だけの抽象的な口コミ -->
```

---

## Avoid / 避けること

- 合格実績を「多数」「多くの生徒が」など曖昧に表現する
- 料金を「お問い合わせください」で隠す（不信感の最大原因）
- 「やる気のある生徒を歓迎」など条件を付けすぎる
- カリキュラム説明が長すぎて「結果どうなるか」が伝わらない
- 体験申込のフォームが長すぎる（名前・電話・希望日程の3項目で十分）
