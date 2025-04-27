import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
import type { ItemProps, ToggleGroupProps } from "./toggle-group.types"

export const props = createProps<ToggleGroupProps>()([
  "dir",
  "disabled",
  "getRootNode",
  "id",
  "ids",
  "loopFocus",
  "multiple",
  "onValueChange",
  "orientation",
  "rovingFocus",
  "value",
  "defaultValue",
  "deselectable",
])

export const splitProps = createSplitProps<Partial<ToggleGroupProps>>(props)

export const itemProps = createProps<ItemProps>()(["value", "disabled"])

export const splitItemProps = createSplitProps<ItemProps>(itemProps)
