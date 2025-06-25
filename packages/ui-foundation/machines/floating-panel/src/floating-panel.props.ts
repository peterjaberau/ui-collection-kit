import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
import type { FloatingPanelProps, ResizeTriggerProps } from "./floating-panel.types"

export const props = createProps<FloatingPanelProps>()([
  "allowOverflow",
  "closeOnEscape",
  "defaultOpen",
  "defaultPosition",
  "defaultSize",
  "dir",
  "disabled",
  "draggable",
  "getAnchorPosition",
  "getBoundaryEl",
  "getRootNode",
  "gridSize",
  "id",
  "ids",
  "lockAspectRatio",
  "maxSize",
  "minSize",
  "onOpenChange",
  "onPositionChange",
  "onPositionChangeEnd",
  "onSizeChange",
  "onSizeChangeEnd",
  "onStageChange",
  "open",
  "persistRect",
  "position",
  "resizable",
  "size",
  "strategy",
  "translations",
])
export const splitProps = createSplitProps<Partial<FloatingPanelProps>>(props)

export const resizeTriggerProps = createProps<ResizeTriggerProps>()(["axis"])
export const splitResizeTriggerProps = createSplitProps<Partial<ResizeTriggerProps>>(resizeTriggerProps)
