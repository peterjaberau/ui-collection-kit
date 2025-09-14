import { SerializedStyles } from "@emotion/react"
import { RenderCodeMirrorProps } from "./CodeMirror/interface"

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
  wrapperCss?: SerializedStyles
}
