import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
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
