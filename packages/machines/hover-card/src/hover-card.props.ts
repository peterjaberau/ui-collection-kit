import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
import type { HoverCardProps } from "./hover-card.types"

export const props = createProps<HoverCardProps>()([
  "closeDelay",
  "dir",
  "getRootNode",
  "id",
  "ids",
  "onOpenChange",
  "defaultOpen",
  "open",
  "openDelay",
  "positioning",
  "onInteractOutside",
  "onPointerDownOutside",
  "onFocusOutside",
])

export const splitProps = createSplitProps<Partial<HoverCardProps>>(props)
