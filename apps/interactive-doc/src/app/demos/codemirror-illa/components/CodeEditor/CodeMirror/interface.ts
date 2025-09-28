import { Extension } from "@codemirror/state"
import { RefObject } from "react"
import { ICodeMirrorOptions } from "./extensions/interface"

export interface CodeMirrorProps
  extends ICodeMirrorOptions {
  extensions?: Extension[]
  value?: string
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: (value: string) => void
  height?: string
  minHeight?: string
  maxHeight?: string
  width?: string
  minWidth?: string
  maxWidth?: string
  editable?: boolean
  readOnly?: boolean
  placeholder?: string
  className?: string
  tooltipContainer?: RefObject<HTMLElement>,
  [key: string]: any
}
