# de-ai 出会い

> *Remove AI. Restore the human touch.*
> *AIを取り除き、人間らしさを取り戻す。*

**de-ai** is a CLI tool and Claude Code skill that detects AI-generated design patterns in websites and helps you build something genuinely human — rich in design quality, intentional in every detail, rooted in Japanese web aesthetics.

**de-ai** はウェブサイトのAIらしいデザインパターンを検出するCLIツール＋Claude Codeスキルです。デザイン品質が高く、すべてに意図があり、日本のウェブデザイン美学に根ざしたサイトを作るためのガイドです。

---

## The Problem / 問題

Vibe-coded websites all look the same:

バイブコーディングで作ったウェブサイトはどれも同じに見えます：

- Purple-to-blue gradient hero / 紫→青グラジェントのヒーロー
- 3 equal-width feature cards / 3枚均等幅のフィーチャーカード
- Glassmorphism (`backdrop-blur`) / ガラスモーフィズム
- "Get Started" / "Learn More" CTAs / 汎用英語CTA
- Inter font only / Interフォント一択
- Gradient clip-text on headings / 見出しのグラジェントテキスト

The solution isn't "simpler." It's *more intentional.*

解決策は「よりシンプルに」ではない。「より意図的に」だ。

---

## Install / インストール

```bash
npm install -g @de-ai/cli
```

Or use without installing / インストールなしで使う:

```bash
npx @de-ai/cli ./src
```

---

## Usage / 使い方

### Analyze static files (HTML, CSS)
```bash
npx @de-ai/cli ./src
```

### Analyze all file types (JSX, TSX, Vue, Svelte, etc.)
```bash
npx @de-ai/cli ./src --all
```

### Generate fix suggestions with OpenAI
```bash
export OPENAI_API_KEY=your-key
npx @de-ai/cli ./src --fix
```

### Combine options
```bash
npx @de-ai/cli ./src --all --fix
```

---

## Example Output / 出力例

```
de-ai — AI-likeness Report

────────────────────────────────────────────────────────────

src/index.html
  ● 9:19  "linear-gradient(to right, #7c3aed"
     CSSのlinear-gradientをヒーロー要素に使用
     → フラットな背景色＋border-bottomに置き換える

  ● 23:7  "backdrop-filter: blur"
     CSSのbackdrop-filterによるガラスモーフィズム
     → ソリッドな背景色＋細いボーダーの方が読みやすい

  ● 39:25  "Get Started"
     英語の汎用CTAテキスト
     → 次に何が起きるかを具体的に示すテキストに変更

────────────────────────────────────────────────────────────

AI-likeness score: 72/100  ● 5  ◐ 3  ○ 1
Target: 30 or below / 30以下を目標に
```

**Severity legend / 重要度の凡例:**
- `●` High — strong AI signal, fix immediately
- `◐` Medium — common pattern, consider replacing
- `○` Low — minor pattern, worth reviewing

---

## Claude Code Skill / Claude Codeスキル

Load `skill.md` into Claude Code to prevent AI-like patterns from being generated in the first place.

`skill.md` をClaude Codeに読み込むと、最初からAIらしいパターンが生成されなくなります。

```bash
# 1. Install the package
npm install --save-dev @de-ai/cli

# 2. Add to your project's CLAUDE.md:
# プロジェクトのCLAUDE.mdに追加:
@node_modules/@de-ai/cli/skill.md
```

Or download `skill.md` directly:

またはリポジトリから直接ダウンロードして参照することもできます：

```bash
curl -o de-ai-skill.md https://raw.githubusercontent.com/shimayu0701/de-ai/main/skill.md
# Then add to CLAUDE.md: @de-ai-skill.md
```

### What the skill covers / スキルのカバー範囲

- **3 foundational questions** before any design decision / デザイン前の3つの問い
- **Color** — intentional palettes, not AI defaults / 意図的なカラーパレット
- **Typography** — serif + sans-serif contrast, Japanese font stacks / 明朝＋ゴシックのコントラスト
- **Layout** — asymmetric, magazine-style, information-hierarchy-driven / 非対称・マガジン風
- **Components** — accent borders, subtle shadows, flat buttons / アクセントボーダー・フラットボタン
- **Motion** — hover/focus only, no scroll-triggered animations / ホバー・フォーカスのみ
- **Structure** — editorial section order, not template order / 編集的なセクション構成
- **Richness techniques** — layered backgrounds, typographic hierarchy / 重なる背景・タイポグラフィ階層
- **Dual checklist** — AI removal + human confirmation / AIらしさ排除＋人間らしさ確認

---

## Genre Skills / ジャンル別スキル

For genre-specific guidance, load the base skill plus the genre file:

ジャンル固有のガイダンスは、ベーススキルにジャンルファイルを追加して読み込みます：

```bash
# Example: Restaurant site / 飲食店サイトの場合
# Add to CLAUDE.md:
@node_modules/@de-ai/cli/skill.md
@node_modules/@de-ai/cli/skills/food.md
```

| Genre / ジャンル | File |
|-----------------|------|
| 飲食・食 | `skills/food.md` |
| 医療・健康・美容 | `skills/health-beauty.md` |
| 宿泊・旅行・レジャー | `skills/travel-leisure.md` |
| 教育 | `skills/education.md` |
| ビジネス・BtoB | `skills/business-b2b.md` |
| 不動産・建設 | `skills/realestate.md` |
| 士業・金融・保険 | `skills/legal-finance.md` |
| ライフスタイル | `skills/lifestyle.md` |
| メディア・クリエイター | `skills/media-creator.md` |
| 公共・社会 | `skills/public-social.md` |
| 小売・EC | `skills/retail-ec.md` |

Each genre skill includes / 各ジャンルスキルの内容:
- Core principle for that genre / ジャンルの核心原則
- Recommended color palettes / 推奨カラーパレット
- Typography guidance / タイポグラフィ指針
- Layout patterns / レイアウトパターン
- Must-have sections / 必須セクション
- CTA text examples / CTAテキスト例
- What to avoid / 避けること

---

## Detected Patterns / 検出パターン

| Category | Pattern | Severity |
|----------|---------|----------|
| Color | Purple/blue gradient (Tailwind & CSS) | 🔴 High |
| Color | Indigo/purple as primary color | 🟡 Medium |
| Layout | 3-column equal grid (Tailwind & CSS) | 🔴 High |
| Layout | Centered hero text | 🟢 Low |
| Typography | Inter font only | 🟡 Medium |
| Typography | Gradient clip-text on headings | 🔴 High |
| Typography | Oversized hero headline (6xl+) | 🟢 Low |
| Component | Glassmorphism (`backdrop-blur`) | 🔴 High |
| Component | Excessive border radius (2xl+) | 🟡 Medium |
| Component | Heavy drop shadows (xl+) | 🟡 Medium |
| Component | Generic CTA text | 🔴 High |
| Structure | Logo bar / "trusted by" section | 🟢 Low |
| Structure | Generic FAQ accordion | 🟢 Low |

---

## Design Philosophy / デザイン哲学

de-ai's suggestions are grounded in intentional design — not just removal of AI patterns:

| AI Default | Human Alternative |
|-----------|-------------------|
| Purple gradient hero | Layered section backgrounds with rhythm |
| Gradient clip-text | Serif heading + high contrast |
| 3 equal cards | Asymmetric / magazine / alternating layout |
| `rounded-2xl shadow-xl` | `border-left: 3px + shadow-sm` |
| Pill-shaped gradient button | Flat button, 4px radius |
| Inter only | Noto Sans (body) + Noto Serif (heading) |
| "Get Started" | Specific action verb with context |
| Scroll-triggered animation | Hover/focus only (150ms) |
| All-white sections | Background color rhythm per section |

---

## Contributing / コントリビュート

Pattern suggestions, genre knowledge, and design principles are all welcome!

パターンの追加提案・ジャンル知識・デザイン原則の共有を歓迎します！

1. Edit `rules/ai-patterns.json` to add detection patterns
2. Edit `rules/jp-design.json` to add design principles
3. Add or improve a genre skill in `skills/`
4. Open a PR with before/after examples

---

## License

MIT

---

*de-ai — because every website deserves to look like a human made it.*
*de-ai — すべてのウェブサイトは、人間が作ったように見えるべきだから。*
