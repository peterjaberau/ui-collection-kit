import { createProps } from "@ui-kit/core-types"
import { createSplitProps } from "@ui-kit/core-utils"
import type { PanelProps, ResizeTriggerProps, SplitterProps } from "./splitter.types"

export const props = createProps<SplitterProps>()([
  "dir",
  "getRootNode",
  "id",
  "ids",
  "onResize",
  "onResizeStart",
  "onResizeEnd",
  "onCollapse",
  "onExpand",
  "orientation",
  "size",
  "defaultSize",
  "panels",
  "keyboardResizeBy",
  "nonce",
])

export const splitProps = createSplitProps<Partial<SplitterProps>>(props)

export const panelProps = createProps<PanelProps>()(["id"])
export const splitPanelProps = createSplitProps<PanelProps>(panelProps)

export const resizeTriggerProps = createProps<ResizeTriggerProps>()(["disabled", "id"])
export const splitResizeTriggerProps = createSplitProps<ResizeTriggerProps>(resizeTriggerProps)
