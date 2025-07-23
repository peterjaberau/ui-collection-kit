import { createProps } from "@ui-kit/core-types"
import { createSplitProps } from "@ui-kit/core-utils"
import type { QrCodeProps } from "./qr-code.types"

export const props = createProps<QrCodeProps>()([
  "ids",
  "defaultValue",
  "value",
  "id",
  "encoding",
  "dir",
  "getRootNode",
  "onValueChange",
  "pixelSize",
])

export const splitProps = createSplitProps<Partial<QrCodeProps>>(props)
