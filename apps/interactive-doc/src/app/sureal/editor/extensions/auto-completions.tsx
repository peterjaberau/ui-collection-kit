import { type CompletionSource, snippetCompletion } from "@codemirror/autocomplete"
import type { Extension } from "@codemirror/state"

//completion sources
import { surrealqlLanguage } from "@surrealdb/codemirror"

export const surqlCustomFunctionCompletion = () => {
  return []
}

export const graphqlFillFields = () => {
  return []
}

export const surqlTableCompletion = () => {
  return []
}

export const surqlVariableCompletion = () => {
  return []
}
