import { parseColor, type Color } from "@ui-collection-kit/color-utils"

export const parse = (colorString: string): Color => {
  return parseColor(colorString)
}
