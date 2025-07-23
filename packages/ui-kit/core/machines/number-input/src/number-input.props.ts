import { createProps } from "@ui-kit/core-types"
import { createSplitProps } from "@ui-kit/core-utils"
import type { NumberInputProps } from "./number-input.types"

export const props = createProps<NumberInputProps>()([
  "allowMouseWheel",
  "allowOverflow",
  "clampValueOnBlur",
  "dir",
  "disabled",
  "focusInputOnChange",
  "form",
  "formatOptions",
  "getRootNode",
  "id",
  "ids",
  "inputMode",
  "invalid",
  "locale",
  "max",
  "min",
  "name",
  "onFocusChange",
  "onValueChange",
  "onValueInvalid",
  "pattern",
  "required",
  "readOnly",
  "spinOnPress",
  "step",
  "translations",
  "value",
  "defaultValue",
])
export const splitProps = createSplitProps<Partial<NumberInputProps>>(props)
