import { Extension } from "@codemirror/state"
import { ICodeMirrorOptions } from "./extensions/interface"
import { RefObject } from "react"
import { HintTooltipProps } from "../HintToolTip/interface"


export interface RenderCodeMirrorProps extends ICodeMirrorOptions,
  Omit<HintTooltipProps, "isEditorFocused" | "children"> {
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
  tooltipContainer?: RefObject<HTMLElement>
}
