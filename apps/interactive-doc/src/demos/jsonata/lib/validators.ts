import { get } from "lodash"
import { traverse } from "./object-utils"
import Editor, { Monaco } from "@monaco-editor/react"
import jsonata from "jsonata"

import { editor } from "monaco-editor/esm/vs/editor/editor.api"

export const validateTransformers = async (
  input: any,
  transformers: any,
  editor: any,
): Promise<editor.IMarkerData[]> => {
  const inputPathAsString = JSON.stringify(transformers, null, 4)

  const editorErrors = []
  for (let [key, value, path, parent] of traverse(transformers)) {
    if (value === null || typeof value !== "object") {
      try {
        await jsonata(value).evaluate(input)
      } catch (e: any) {
        const indexOfProperty = inputPathAsString.indexOf(get(transformers, key))
        const position = editor.getModel().getPositionAt(indexOfProperty)

        editorErrors.push({
          startLineNumber: position.lineNumber,
          startColumn: position.column,
          endLineNumber: position.lineNumber,
          endColumn: position.column,
          message: `"${e.message}"`,
          severity: 3,
        })
      }
    }
  }

  return editorErrors
}
