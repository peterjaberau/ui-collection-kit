import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
import type { AngleSliderProps } from "./angle-slider.types"

export const props = createProps<AngleSliderProps>()([
  "dir",
  "disabled",
  "getRootNode",
  "id",
  "ids",
  "invalid",
  "name",
  "onValueChange",
  "onValueChangeEnd",
  "readOnly",
  "step",
  "value",
  "defaultValue",
])

export const splitProps = createSplitProps<Partial<AngleSliderProps>>(props)
