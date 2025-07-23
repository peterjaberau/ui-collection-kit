import { createProps } from "@ui-kit/core-types"
import { createSplitProps } from "@ui-kit/core-utils"
import type { TooltipProps } from "./tooltip.types"

export const props = createProps<TooltipProps>()([
  "aria-label",
  "closeDelay",
  "closeOnEscape",
  "closeOnPointerDown",
  "closeOnScroll",
  "closeOnClick",
  "dir",
  "disabled",
  "getRootNode",
  "id",
  "ids",
  "interactive",
  "onOpenChange",
  "defaultOpen",
  "open",
  "openDelay",
  "positioning",
])

export const splitProps = createSplitProps<Partial<TooltipProps>>(props)
