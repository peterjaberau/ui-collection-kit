import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
import type { PopoverProps } from "./popover.types"

export const props = createProps<PopoverProps>()([
  "autoFocus",
  "closeOnEscape",
  "closeOnInteractOutside",
  "dir",
  "getRootNode",
  "id",
  "ids",
  "initialFocusEl",
  "modal",
  "onEscapeKeyDown",
  "onFocusOutside",
  "onInteractOutside",
  "onOpenChange",
  "onPointerDownOutside",
  "defaultOpen",
  "open",
  "persistentElements",
  "portalled",
  "positioning",
])

export const splitProps = createSplitProps<Partial<PopoverProps>>(props)
