import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
import type { CheckboxProps } from "./checkbox.types"

export const props = createProps<CheckboxProps>()([
  "defaultChecked",
  "checked",
  "dir",
  "disabled",
  "form",
  "getRootNode",
  "id",
  "ids",
  "invalid",
  "name",
  "onCheckedChange",
  "readOnly",
  "required",
  "value",
])
export const splitProps = createSplitProps<CheckboxProps>(props)
