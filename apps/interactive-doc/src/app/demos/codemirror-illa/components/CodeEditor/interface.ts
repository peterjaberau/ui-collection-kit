import { SerializedStyles } from "@emotion/react"
import { CodeMirrorProps } from "./CodeMirror/interface"
import { VALIDATION_TYPES } from "#codemirror-illa/utils"

export interface CodeEditorProps
  extends Omit<
    CodeMirrorProps,
    "hasError" | "resultType" | "result" | "executionResult" | "expressions" | "canShowResultRealtime"
  > {
  expectValueType?: VALIDATION_TYPES
  wrappedCodeFunc?: (value: string) => string
  canExpand?: boolean
  modalTitle?: string
  modalDescription?: string
  wrapperCss?: any
  [key: string]: any
}
