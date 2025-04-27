import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
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
