import { createProps } from "@ui-kit/core-types"
import { createSplitProps } from "@ui-kit/core-utils"
import type { SignaturePadProps } from "./signature-pad.types"

export const props = createProps<SignaturePadProps>()([
  "dir",
  "disabled",
  "drawing",
  "getRootNode",
  "id",
  "ids",
  "name",
  "onDraw",
  "onDrawEnd",
  "readOnly",
  "required",
  "translations",
])

export const splitProps = createSplitProps<Partial<SignaturePadProps>>(props)
