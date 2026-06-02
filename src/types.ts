export interface PatternMatch {
  file: string;
  line: number;
  column: number;
  patternId: string;
  severity: "high" | "medium" | "low";
  matched: string;
  description_en: string;
  description_ja: string;
  suggestion_en: string;
  suggestion_ja: string;
}

export interface AnalyzeOptions {
  all: boolean;
}
