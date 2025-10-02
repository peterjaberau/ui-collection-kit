import React from "react"
import { EditorContext } from "./editor-context"

export function useEditor() {
  const editor = React.useContext(EditorContext)

  if (!editor) {
    throw new Error("No Editor set. Use EditorProvider to set one.")
  }

  return editor
}
