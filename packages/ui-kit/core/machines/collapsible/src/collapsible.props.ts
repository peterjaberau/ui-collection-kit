import { createProps } from "@ui-kit/core-types"
import { createSplitProps } from "@ui-kit/core-utils"
import type { CollapsibleProps } from "./collapsible.types"

export const props = createProps<CollapsibleProps>()([
  "dir",
  "disabled",
  "getRootNode",
  "id",
  "ids",
  "onExitComplete",
  "onOpenChange",
  "defaultOpen",
  "open",
])
export const splitProps = createSplitProps<Partial<CollapsibleProps>>(props)
