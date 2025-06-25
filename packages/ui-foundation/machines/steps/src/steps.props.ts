import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
import type { StepsProps } from "./steps.types"

export const props = createProps<StepsProps>()([
  "count",
  "dir",
  "getRootNode",
  "id",
  "ids",
  "linear",
  "onStepChange",
  "onStepComplete",
  "orientation",
  "step",
  "defaultStep",
])

export const splitProps = createSplitProps<Partial<StepsProps>>(props)
