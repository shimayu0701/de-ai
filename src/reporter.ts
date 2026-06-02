import chalk from "chalk";
import type { PatternMatch } from "./types";

const SEVERITY_ICON = {
  high: chalk.red("●"),
  medium: chalk.yellow("◐"),
  low: chalk.gray("○"),
};

function calcScore(matches: PatternMatch[]): number {
  const weight = { high: 10, medium: 5, low: 2 };
  const total = matches.reduce((sum, m) => sum + weight[m.severity], 0);
  // Cap at 100, normalize
  return Math.min(100, total);
}

function scoreColor(score: number): string {
  if (score >= 70) return chalk.red(`${score}/100`);
  if (score >= 40) return chalk.yellow(`${score}/100`);
  return chalk.green(`${score}/100`);
}

export function printReport(matches: PatternMatch[]): void {
  console.log("\n" + chalk.bold("de-ai") + " — AI-likeness Report\n");
  console.log(chalk.gray("─".repeat(60)));

  if (matches.length === 0) {
    console.log(chalk.green("\n✓ No AI-like patterns detected. Looks human!\n"));
    return;
  }

  // Group by file
  const byFile = new Map<string, PatternMatch[]>();
  for (const m of matches) {
    if (!byFile.has(m.file)) byFile.set(m.file, []);
    byFile.get(m.file)!.push(m);
  }

  for (const [file, fileMatches] of byFile) {
    console.log("\n" + chalk.cyan(file));

    for (const m of fileMatches) {
      const loc = chalk.gray(`${m.line}:${m.column}`);
      const icon = SEVERITY_ICON[m.severity];
      const keyword = chalk.bold(`"${m.matched}"`);
      console.log(`  ${icon} ${loc}  ${keyword}`);
      console.log(`     ${chalk.white(m.description_ja)}`);
      console.log(`     ${chalk.green("→")} ${m.suggestion_ja}`);
    }
  }

  const score = calcScore(matches);
  const highCount = matches.filter((m) => m.severity === "high").length;
  const medCount = matches.filter((m) => m.severity === "medium").length;
  const lowCount = matches.filter((m) => m.severity === "low").length;

  console.log("\n" + chalk.gray("─".repeat(60)));
  console.log(
    `\nAI-likeness score: ${scoreColor(score)}  ` +
      `${chalk.red(`● ${highCount}`)}  ${chalk.yellow(`◐ ${medCount}`)}  ${chalk.gray(`○ ${lowCount}`)}`
  );
  console.log(chalk.gray("Target: 30 or below / 30以下を目標に\n"));

  if (score >= 70) {
    console.log(chalk.red("This site looks AI-generated. Run --fix for suggestions."));
    console.log(chalk.red("AIらしさが強く検出されました。--fix で修正提案を生成できます。\n"));
  } else if (score >= 40) {
    console.log(chalk.yellow("Getting there. A few patterns remain."));
    console.log(chalk.yellow("改善中です。いくつかのパターンが残っています。\n"));
  }
}
