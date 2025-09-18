import { SerializedStyles } from "@emotion/react"
import { RenderCodeMirrorProps } from "./CodeMirror/interface"
import { VALIDATION_TYPES } from "#core-utils/utils.validation"

export interface CodeEditorProps
  extends Omit<
    RenderCodeMirrorProps,
    | "hasError"
    | "resultType"
    | "result"
    | "executionResult"
    | "expressions"
    | "canShowResultRealtime"
  > {
  expectValueType?: VALIDATION_TYPES
  wrappedCodeFunc?: (value: string) => string
  canExpand?: boolean
  modalTitle?: string
  modalDescription?: string
  wrapperCss?: SerializedStyles,
  [key: string]: any
}
