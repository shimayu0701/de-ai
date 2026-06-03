# de-ai Genre Skill: 医療・健康・美容 / Health, Medical & Beauty

> Load this in addition to `skill.md` for clinics, hospitals, dental offices, salons, spas, fitness gyms, and wellness businesses.
> クリニック・病院・歯科・美容室・サロン・スパ・フィットネスジムなどのサイト制作時に `skill.md` と合わせて読み込む。

---

## Core Principle / 核心原則

**Trust before beauty.**
In health and beauty, visitors are making decisions about their bodies. The design must communicate safety, expertise, and warmth — in that order.

**美しさより信頼。**
医療・美容では、訪問者は自分の身体に関わる決断をしている。デザインは安全性・専門性・温かさをこの順で伝えなければならない。

---

## Subcategory Differences / サブカテゴリの違い

| カテゴリ | 最優先で伝えること | トーン |
|---------|-------------------|--------|
| 医療・クリニック | 安心・専門性・清潔感 | 誠実・落ち着き |
| 歯科 | 痛くない・きれい・通いやすい | 親しみやすさ + 清潔感 |
| 美容室・サロン | センス・技術・居心地 | おしゃれ・リラックス |
| スパ・エステ | 非日常・癒し・高級感 | 静寂・ラグジュアリー |
| フィットネス・ジム | 結果・コミュニティ・楽しさ | エネルギー・達成感 |

---

## Color / 色彩

```css
/* 医療・クリニック：清潔感と安心 */
:root {
  --bg: #F7F9FC;
  --text: #1C2B3A;
  --accent: #0066CC;
  --accent-light: #E8F0FB;
  --border: #D8E4F0;
}

/* 美容室・サロン：洗練と温かみ */
:root {
  --bg: #FAF8F5;
  --text: #2A2218;
  --accent: #8B6B4A;
  --accent-light: #F3EDE4;
  --border: #E8E0D6;
}

/* スパ・エステ：静寂と高級感 */
:root {
  --bg: #F5F2EC;
  --text: #2A2416;
  --accent: #6B7C5A;
  --accent-light: #EBF0E4;
  --border: #DDD8CC;
}

/* フィットネス：エネルギーと結果 */
:root {
  --bg: #F8F8F8;
  --text: #1A1A1A;
  --accent: #D94F00;
  --accent-light: #FBE9E0;
  --border: #E0E0E0;
}
```

---

## Typography / タイポグラフィ

```css
/* 医療系：権威と安心感 */
h1, h2 {
  font-family: 'Noto Serif JP', 'Yu Mincho', serif;
  font-weight: 700;
  letter-spacing: 0.04em;
}

/* 美容・サロン系：おしゃれさ */
h1, h2 {
  font-family: 'Noto Serif JP', serif;
  font-weight: 600;
  letter-spacing: 0.06em;
  line-height: 1.4;
}

/* 施術名・メニュー名 */
.treatment-name {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}
```

---

## Layout / レイアウト

### Clinic / Medical Layout
```css
/* ✅ 診療科目：アイコン + テキストのリスト形式 */
.department-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}
.department-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--border);
  border-right: 1px solid var(--border);
}

/* ✅ 医師紹介：横長プロフィール */
.doctor-profile {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 1.5rem;
  padding: 2rem;
  border: 1px solid var(--border);
  border-radius: 4px;
}
```

### Salon / Beauty Layout
```css
/* ✅ メニュー表：価格右揃え */
.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);
}

/* ✅ Before/After：2分割 */
.before-after {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  border-radius: 4px;
  overflow: hidden;
}
```

---

## Must-Have Sections / 必須セクション

### 医療・クリニック
1. **アクセス・診療時間**（最重要 — ファーストビューか直リンク）
2. **診療科目・内容**
3. **医師・スタッフ紹介**
4. **院内設備・清潔感の写真**
5. **初診の流れ**（不安を取り除く）
6. **よくある質問**

### 美容室・サロン
1. **スタイル写真ギャラリー**（技術の証明）
2. **メニュー・料金**
3. **スタイリスト紹介**
4. **予約・空き状況**
5. **お客様の声・施術例**

### フィットネス
1. **設備・プログラム**
2. **料金・体験申込**
3. **トレーナー紹介**
4. **会員の変化・実績**
5. **アクセス・営業時間**

---

## CTA Examples / CTAテキスト例

```
医療系:
❌ "Contact Us" / "Learn More"
✅ "WEB予約はこちら" / "初診の方へ" / "診療時間・アクセス"
   "オンライン診療を予約する" / "健診を申し込む"

美容・サロン:
❌ "Book Now" / "Get Started"
✅ "今すぐ予約する" / "空き状況を見る" / "カウンセリング（無料）"
   "スタイルを相談する" / "初回限定プランを見る"

フィットネス:
❌ "Join Now" / "Sign Up"
✅ "無料体験を申し込む" / "見学を予約する" / "プランを比較する"
```

---

## Trust Signals / 信頼シグナルの設計

医療・美容サイトでは信頼を可視化することが重要：

```html
<!-- ✅ 資格・認定を明示 -->
<div class="credentials">
  <span>厚生労働省認定</span>
  <span>日本皮膚科学会会員</span>
</div>

<!-- ✅ 実績数値 -->
<div class="stats">
  <div>創業 <strong>15年</strong></div>
  <div>施術実績 <strong>2万件以上</strong></div>
  <div>リピート率 <strong>89%</strong></div>
</div>

<!-- ✅ プライバシーへの配慮を明示 -->
<p class="privacy-note">
  個人情報は厳重に管理し、第三者への提供は一切行いません。
</p>
```

---

## Avoid / 避けること

- ビフォーアフター写真を小さく並べすぎる（インパクトを殺す）
- 料金を「要相談」「お問い合わせください」で隠す（不信感を生む）
- ストック写真の笑顔だらけのサイト（実際の施術・スタッフ写真を使う）
- 「最先端」「業界最高水準」などの根拠のない形容詞
- 予約動線が3クリック以上
