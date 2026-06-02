# de-ai 出会い

> *Remove AI. Restore the human touch.*
> *AIを取り除き、人間らしさを取り戻す。*

**de-ai** is a CLI tool and Claude Code skill that detects and removes AI-generated design patterns from websites — with a focus on Japanese web aesthetics.

**de-ai** はウェブサイトのAIらしいデザインパターンを検出・除去するCLIツール＋Claude Codeスキルです。日本のウェブデザイン美学に特化しています。

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

**de-ai** detects these patterns and suggests human, intentional alternatives — especially those rooted in Japanese web design traditions.

**de-ai** はこれらのパターンを検出し、人間的で意図的な代替案を提案します。

---

## Install / インストール

```bash
npm install -g de-ai
```

Or use without installing / インストールなしで使う:

```bash
npx de-ai ./src
```

---

## Usage / 使い方

### Analyze static files (HTML, CSS)
```bash
de-ai ./src
```

### Analyze all file types (JSX, TSX, Vue, Svelte, etc.)
```bash
de-ai ./src --all
```

### Generate fix suggestions with OpenAI
```bash
export OPENAI_API_KEY=your-key
de-ai ./src --fix
```

### Combine options
```bash
de-ai ./src --all --fix
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
# In your project, add to CLAUDE.md:
# プロジェクトのCLAUDE.mdに追加:
@de-ai/skill.md
```

The skill covers: / スキルのカバー範囲:
- Color rules (no purple gradients) / カラールール
- Typography (Gothic + Mincho mixing) / タイポグラフィ
- Layout (asymmetric over 3-col grids) / レイアウト
- Component rules (borders over shadows) / コンポーネント
- Motion (restrained, interactive only) / モーション
- CTA text (specific over generic) / CTAテキスト
- Pre-flight checklist / 完成前チェックリスト

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

## Japanese Design Principles / 日本のデザイン原則

de-ai's suggestions are based on observed patterns in trusted Japanese websites:

| AI Default | Japanese Alternative |
|-----------|---------------------|
| Purple gradient | White + `border-bottom: 1px solid` |
| 3 equal cards | Asymmetric grid / `<table>` / `<dl>` |
| `rounded-2xl shadow-xl` | `border: 1px solid #DDD` |
| Inter only | Yu Gothic + Yu Mincho mix |
| "Get Started" | Specific action (e.g. "資料をダウンロード") |
| Scroll animations | Hover/focus transitions only (150ms) |

---

## Contributing / コントリビュート

Pattern suggestions and Japanese design knowledge welcome!

パターンの追加提案・日本のデザイン知識の共有を歓迎します！

1. Edit `rules/ai-patterns.json` to add detection patterns
2. Edit `rules/jp-design.json` to add design principles
3. Open a PR with examples

---

## License

MIT

---

*de-ai — because every website deserves to look like a human made it.*
*de-ai — すべてのウェブサイトは、人間が作ったように見えるべきだから。*
