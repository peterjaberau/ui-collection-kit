import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
import type { ItemProps, RatingGroupProps } from "./rating-group.types"

export const props = createProps<RatingGroupProps>()([
  "allowHalf",
  "autoFocus",
  "count",
  "dir",
  "disabled",
  "form",
  "getRootNode",
  "id",
  "ids",
  "name",
  "onHoverChange",
  "onValueChange",
  "required",
  "readOnly",
  "translations",
  "value",
  "defaultValue",
])
export const splitProps = createSplitProps<RatingGroupProps>(props)

export const itemProps = createProps<ItemProps>()(["index"])
export const splitItemProps = createSplitProps<ItemProps>(itemProps)
