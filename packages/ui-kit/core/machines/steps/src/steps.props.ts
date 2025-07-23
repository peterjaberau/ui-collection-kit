import { createProps } from "@ui-kit/core-types"
import { createSplitProps } from "@ui-kit/core-utils"
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
