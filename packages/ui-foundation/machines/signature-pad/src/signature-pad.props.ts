import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
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
