import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
import type { SwitchProps } from "./switch.types"

export const props = createProps<SwitchProps>()([
  "checked",
  "defaultChecked",
  "dir",
  "disabled",
  "form",
  "getRootNode",
  "id",
  "ids",
  "invalid",
  "label",
  "name",
  "onCheckedChange",
  "readOnly",
  "required",
  "value",
])

export const splitProps = createSplitProps<Partial<SwitchProps>>(props)
