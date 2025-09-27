import { completeFromList, CompletionSource } from "@codemirror/autocomplete"

export function autoCompletionList(
  customFunctions?: Record<string, { func: Function; signature: string }>,
): CompletionSource {
  return completeFromList(autocompletions(customFunctions))
}

const autocompletions = (customFunctions?: Record<string, { func: Function; signature: string }>) => {
  const allFunctions = [...functionNames]

  if (customFunctions) {
    allFunctions.push(...Object.keys(customFunctions))
  }

  return allFunctions.map((functionName) => ({
    label: `$${functionName}`,
    type: "function",
  }))
}

const functionNames = [
  "sum",
  "count",
  "max",
  "min",
  "average",
  "string",
  "substring",
  "substringBefore",
  "substringAfter",
  "lowercase",
  "uppercase",
  "length",
  "trim",
  "pad",
  "match",
  "contains",
  "replace",
  "split",
  "join",
  "formatNumber",
  "formatBase",
  "number",
  "floor",
  "ceil",
  "round",
  "abs",
  "sqrt",
  "power",
  "random",
  "boolean",
  "not",
  "map",
  "zip",
  "filter",
  "single",
  "foldLeft",
  "sift",
  "keys",
  "lookup",
  "append",
  "exists",
  "spread",
  "merge",
  "reverse",
  "each",
  "error",
  "assert",
  "type",
  "sort",
  "shuffle",
  "distinct",
  "base64encode",
  "base64decode",
  "encodeUrlComponent",
  "encodeUrl",
  "decodeUrlComponent",
  "decodeUrl",
  "GET_ANSWER",
  "HAS_KEYWORD",
  "MAP_SCORES",
  "CALCULATE_WEIGHTED_SCORE",
  "CALCULATE_WEIGHTED_AVERAGE",
  "SUM_SCORES",
  "CLASSIFY_SCORE",
  "MATRIX_LOOKUP",
  "ESCALATE_IF",
  "CLASSIFY_BOOLEAN",
]
