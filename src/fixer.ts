import fs from "fs";
import OpenAI from "openai";
import chalk from "chalk";
import type { PatternMatch } from "./types";

const CONTEXT_LINES = 5;

function extractContext(file: string, line: number): string {
  const lines = fs.readFileSync(file, "utf-8").split("\n");
  const start = Math.max(0, line - CONTEXT_LINES - 1);
  const end = Math.min(lines.length, line + CONTEXT_LINES);
  return lines
    .slice(start, end)
    .map((l, i) => `${start + i + 1}: ${l}`)
    .join("\n");
}

function buildPrompt(matches: PatternMatch[], file: string): string {
  const context = extractContext(file, matches[0].line);
  const issues = matches
    .map(
      (m) =>
        `- Line ${m.line}: "${m.matched}" — ${m.description_en}\n  Suggestion: ${m.suggestion_en}`
    )
    .join("\n");

  return `You are a web design expert specializing in removing AI-generated patterns from websites, with a focus on Japanese web aesthetics.

The following file has AI-like design patterns that should be replaced with more human and intentional design choices.

File: ${file}

Detected issues:
${issues}

Code context around the first issue:
\`\`\`
${context}
\`\`\`

Please provide:
1. A revised code snippet that fixes the detected issues
2. A brief explanation of each change (in both English and Japanese)

Follow these principles:
- Use flat design over gradients and shadows
- Prefer borders (1px solid) over rounded corners and drop shadows
- For Japanese sites: use Yu Gothic/Hiragino for headings, Yu Mincho for body text
- Use asymmetric layouts instead of 3-equal-column grids
- Use specific, descriptive CTA text instead of generic "Get Started"`;
}

export async function fix(matches: PatternMatch[]): Promise<void> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error(
      chalk.red(
        "\nError: OPENAI_API_KEY is not set.\nSet it with: export OPENAI_API_KEY=your-key\n"
      )
    );
    process.exit(1);
  }

  const client = new OpenAI({ apiKey });

  // Group by file
  const byFile = new Map<string, PatternMatch[]>();
  for (const m of matches) {
    if (!byFile.has(m.file)) byFile.set(m.file, []);
    byFile.get(m.file)!.push(m);
  }

  console.log(chalk.bold("\n✦ Generating fix suggestions with OpenAI...\n"));
  console.log(chalk.gray("─".repeat(60)));

  for (const [file, fileMatches] of byFile) {
    console.log(chalk.cyan(`\n${file}`));

    const prompt = buildPrompt(fileMatches, file);

    try {
      const stream = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        stream: true,
      });

      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content ?? "";
        process.stdout.write(text);
      }
      console.log("\n");
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(chalk.red(`\nAPI error: ${err.message}\n`));
      }
    }
  }
}
