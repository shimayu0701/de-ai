# de-ai Genre Skill: 士業・金融・保険 / Legal, Finance & Insurance

> Load this in addition to `skill.md` for law firms, accounting firms, tax offices, judicial scriveners, financial advisors, securities companies, and insurance agencies.
> 法律事務所・会計事務所・税理士・司法書士・FP・証券会社・保険代理店のサイト制作時に `skill.md` と合わせて読み込む。

---

## Core Principle / 核心原則

**Authority and approachability in equal measure.**
Visitors come with a problem they can't solve alone — they need to feel the firm is both capable and willing to help them specifically.

**権威と親しみやすさを同時に。**
訪問者は自分一人では解決できない問題を抱えて来る。「この事務所は能力がある」と「自分のことを助けてくれる」を同時に感じさせなければならない。

---

## Subcategory Differences / サブカテゴリの違い

| カテゴリ | 訪問者の状態 | 最優先で伝えること |
|---------|------------|-------------------|
| 弁護士 | 困窮・不安・緊急 | 相談しやすさ・実績・費用感 |
| 税理士・会計士 | 課題認識・比較検討 | 専門分野・対応速度・料金体系 |
| 司法書士・行政書士 | 手続きの不安 | 何ができるか・費用・流れ |
| FP・保険 | 将来への不安 | 中立性・わかりやすい説明 |
| 証券・投資 | 興味・慎重 | 実績・リスク説明・規制対応 |

---

## Color / 色彩

```css
/* 弁護士・法律事務所：権威・信頼 */
:root {
  --bg: #F8F8F6;
  --text: #1A1A18;
  --accent: #1A3A5C;
  --accent-light: #E4ECF4;
  --border: #D8D8D4;
}

/* 税理士・会計事務所：誠実・安定 */
:root {
  --bg: #F7F9FC;
  --text: #1C2333;
  --accent: #1A5C3A;
  --accent-light: #E4F4EC;
  --border: #D4DDE8;
}

/* FP・保険：温かみ・寄り添い */
:root {
  --bg: #FBF9F5;
  --text: #2A2218;
  --accent: #7A4A2A;
  --accent-light: #F4EAE0;
  --border: #E4DCD4;
}
```

---

## Typography / タイポグラフィ

```css
/* 事務所名・キャッチ：格調と誠実さ */
h1, .firm-name {
  font-family: 'Noto Serif JP', 'Yu Mincho', serif;
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1.4;
}

/* 専門分野タグ */
.specialty-tag {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  border: 1px solid var(--accent);
  color: var(--accent);
  padding: 0.2rem 0.6rem;
  border-radius: 2px;
}

/* 料金・数値 */
.fee-amount {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}
```

---

## Layout / レイアウト

### Attorney / Professional Profile
```css
/* ✅ 士業のプロフィール：資格・実績を明示 */
.attorney-profile {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 2rem;
  padding: 2rem;
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent);
  border-radius: 4px;
}
.credentials-list {
  list-style: none;
  font-size: 0.8125rem;
  line-height: 2;
  color: var(--text-sub);
}

/* ✅ 対応業務一覧：ボーダー付きリスト */
.services-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border: 1px solid var(--border);
}
.service-item {
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--border);
  border-right: 1px solid var(--border);
  font-size: 0.9375rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
```

### Fee Table / 料金表
```css
/* ✅ 明確な料金表：隠さない */
.fee-table { width: 100%; border-collapse: collapse; }
.fee-table th {
  background: var(--bg-alt);
  padding: 0.875rem 1.25rem;
  border: 1px solid var(--border);
  font-size: 0.875rem;
  font-weight: 700;
  text-align: left;
}
.fee-table td {
  padding: 0.875rem 1.25rem;
  border: 1px solid var(--border);
  font-size: 0.875rem;
  vertical-align: top;
}
.fee-note {
  font-size: 0.8125rem;
  color: var(--text-sub);
  margin-top: 0.25rem;
}
```

### Consultation Flow / 相談の流れ
```css
/* ✅ ステップ形式：不安を取り除く */
.flow-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  position: relative;
}
.flow-step {
  padding: 1.5rem;
  border: 1px solid var(--border);
  border-right: none;
  text-align: center;
}
.flow-step:last-child { border-right: 1px solid var(--border); }
.step-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
  font-family: 'Noto Serif JP', serif;
}
```

---

## Must-Have Sections / 必須セクション

### 弁護士・法律事務所
1. **対応分野**（離婚・相続・交通事故など具体的に）
2. **初回相談の案内**（無料かどうか・所要時間）
3. **弁護士紹介**（資格・経歴・専門分野）
4. **費用・料金体系**（隠さない）
5. **相談の流れ**（初回連絡〜解決まで）
6. **解決事例**（守秘義務に配慮しつつ）
7. **アクセス・電話番号**（目立つ位置に）

### 税理士・会計事務所
1. **対応サービス一覧**
2. **料金目安**
3. **税理士・スタッフ紹介**
4. **対応業種・規模**
5. **顧問契約の流れ**
6. **お客様の声**
7. **無料相談・資料請求**

---

## CTA Examples / CTAテキスト例

```
弁護士:
❌ "Contact Us" / "Learn More"
✅ "無料相談を予約する" / "今すぐ電話する（受付時間内）"
   "対応事例を見る" / "費用の目安を確認する"

税理士:
❌ "Get Started" / "Inquire"
✅ "無料相談を申し込む" / "顧問料の見積もりを依頼する"
   "サービス内容を確認する" / "対応業種を確認する"
```

---

## Compliance Notes / 法的注意事項（日本）

```
弁護士法・税理士法・その他士業法に基づく広告規制に注意:
- 「日本一」「最強」などの最上級表現は禁止（弁護士）
- 報酬基準の明示（金融商品に関わる場合）
- 「必ず勝訴」「確実に節税」など断定的表現の禁止
- 資格・登録番号の明示
- 所属弁護士会・税理士会の表示
```

---

## Avoid / 避けること

- 料金を「ご相談ください」「個別にお見積り」だけにする
- 弁護士・税理士の顔写真がない（信頼の最大要素）
- 専門用語だらけで一般訪問者が理解できない
- 「どんなことでもご相談ください」の広すぎる訴求（専門性が伝わらない）
- 初回相談の予約導線が電話のみ（メール・フォーム・オンライン予約も用意）
- アクセス情報が不明確（最寄り駅・地図・ビル名は必須）
