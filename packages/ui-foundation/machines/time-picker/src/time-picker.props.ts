import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
import type { TimePickerProps } from "./time-picker.types"

export const props = createProps<TimePickerProps>()([
  "dir",
  "disabled",
  "disableLayer",
  "getRootNode",
  "id",
  "ids",
  "locale",
  "max",
  "min",
  "name",
  "onFocusChange",
  "onOpenChange",
  "onValueChange",
  "open",
  "placeholder",
  "positioning",
  "readOnly",
  "steps",
  "value",
  "allowSeconds",
  "defaultValue",
  "defaultOpen",
])

export const splitProps = createSplitProps<TimePickerProps>(props)
