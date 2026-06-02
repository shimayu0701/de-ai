#!/usr/bin/env node
import { program } from "commander";
import { analyze } from "./analyzer";
import { printReport } from "./reporter";
import { fix } from "./fixer";

program
  .name("de-ai")
  .description(
    "Remove AI-generated look from websites / AIらしさを除去して人間らしいウェブを取り戻す"
  )
  .version("0.1.0")
  .argument("<path>", "Directory or file to analyze")
  .option("--all", "Include all file types (HTML, CSS, JS, TS, JSX, TSX, Vue, Svelte)")
  .option("--fix", "Generate fix suggestions using OpenAI API")
  .action(async (targetPath: string, options: { all?: boolean; fix?: boolean }) => {
    const results = await analyze(targetPath, { all: !!options.all });
    printReport(results);

    if (options.fix && results.length > 0) {
      await fix(results);
    }
  });

program.parse();
