import { createProps } from "@ui-kit/core-types"
import { createSplitProps } from "@ui-kit/core-utils"
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
