import { createProps } from "@ui-kit/core-types"
import { createSplitProps } from "@ui-kit/core-utils"
import type { ProgressProps } from "./progress.types"

export const props = createProps<ProgressProps>()([
  "dir",
  "getRootNode",
  "id",
  "ids",
  "max",
  "min",
  "orientation",
  "translations",
  "value",
  "onValueChange",
  "defaultValue",
  "formatOptions",
  "locale",
])

export const splitProps = createSplitProps<Partial<ProgressProps>>(props)
