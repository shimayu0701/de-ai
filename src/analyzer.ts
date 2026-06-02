import fs from "fs";
import path from "path";
import { glob } from "glob";
import type { PatternMatch, AnalyzeOptions } from "./types";
import aiPatterns from "../rules/ai-patterns.json";

const STATIC_EXTS = ["html", "css"];
const ALL_EXTS = ["html", "css", "js", "ts", "jsx", "tsx", "vue", "svelte"];

type RawPattern = {
  id: string;
  severity: "high" | "medium" | "low";
  matchType?: "substring" | "word" | "regex";
  match: string[];
  description_en: string;
  description_ja: string;
  suggestion_en: string;
  suggestion_ja: string;
};

function buildGlobPattern(targetPath: string, all: boolean): string {
  const exts = all ? ALL_EXTS : STATIC_EXTS;
  const ext = exts.length === 1 ? exts[0] : `{${exts.join(",")}}`;
  const stat = fs.existsSync(targetPath) ? fs.statSync(targetPath) : null;
  if (stat?.isFile()) return targetPath;
  return path.join(targetPath, `**/*.${ext}`);
}

function collectPatterns(): RawPattern[] {
  const patterns: RawPattern[] = [];
  for (const category of Object.values(aiPatterns.categories)) {
    for (const p of category.patterns as RawPattern[]) {
      patterns.push(p);
    }
  }
  return patterns;
}

/** キーワードをmatchTypeに応じた正規表現に変換 */
function toRegex(keyword: string, matchType: RawPattern["matchType"]): RegExp {
  switch (matchType) {
    case "regex":
      return new RegExp(keyword, "i");
    case "word":
      // 単語境界。ただし日本語や記号を含む場合はそのまま検索
      return new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
    case "substring":
    default:
      return new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  }
}

type MatchResult = { col: number; text: string };

/** 1行内の全マッチ位置と実際にマッチした文字列を返す */
function findAllMatches(line: string, regex: RegExp): MatchResult[] {
  const results: MatchResult[] = [];
  const g = new RegExp(regex.source, regex.flags.includes("g") ? regex.flags : regex.flags + "g");
  let m: RegExpExecArray | null;
  while ((m = g.exec(line)) !== null) {
    results.push({ col: m.index, text: m[0] });
    if (m[0].length === 0) g.lastIndex++;
  }
  return results;
}

/** 同一行・同一パターンで既に報告済みかチェック（重複排除） */
function isDuplicate(
  results: PatternMatch[],
  file: string,
  line: number,
  patternId: string
): boolean {
  return results.some((r) => r.file === file && r.line === line && r.patternId === patternId);
}

export async function analyze(
  targetPath: string,
  options: AnalyzeOptions
): Promise<PatternMatch[]> {
  const pattern = buildGlobPattern(targetPath, options.all);
  const files = await glob(pattern, { nodir: true });

  if (files.length === 0) {
    console.error(`No files found: ${pattern}`);
    process.exit(1);
  }

  const allPatterns = collectPatterns();
  const results: PatternMatch[] = [];

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    const lines = content.split("\n");

    for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
      const line = lines[lineIdx];

      for (const pat of allPatterns) {
        for (const keyword of pat.match) {
          const regex = toRegex(keyword, pat.matchType);
          const matches = findAllMatches(line, regex);

          for (const { col, text } of matches) {
            // 同一パターンが同じ行で複数ヒットしても1件に集約
            if (isDuplicate(results, file, lineIdx + 1, pat.id)) break;

            results.push({
              file,
              line: lineIdx + 1,
              column: col + 1,
              patternId: pat.id,
              severity: pat.severity,
              matched: text,
              description_en: pat.description_en,
              description_ja: pat.description_ja,
              suggestion_en: pat.suggestion_en,
              suggestion_ja: pat.suggestion_ja,
            });
          }
        }
      }
    }
  }

  return results;
}
