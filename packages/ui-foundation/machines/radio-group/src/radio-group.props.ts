import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
import type { ItemProps, RadioGroupProps } from "./radio-group.types"

export const props = createProps<RadioGroupProps>()([
  "dir",
  "disabled",
  "form",
  "getRootNode",
  "id",
  "ids",
  "name",
  "onValueChange",
  "orientation",
  "readOnly",
  "value",
  "defaultValue",
])
export const splitProps = createSplitProps<Partial<RadioGroupProps>>(props)

export const itemProps = createProps<ItemProps>()(["value", "disabled", "invalid"])
export const splitItemProps = createSplitProps<ItemProps>(itemProps)
