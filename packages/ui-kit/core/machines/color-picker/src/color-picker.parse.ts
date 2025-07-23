import { parseColor, type Color } from "@ui-kit/core-color-utils"

export const parse = (colorString: string): Color => {
  return parseColor(colorString)
}
