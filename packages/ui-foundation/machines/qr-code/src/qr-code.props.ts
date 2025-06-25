import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
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
