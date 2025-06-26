import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Foundations / System",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { SystemAlertRecipe as AlertRecipe } from "../__compositions__/examples/system/alert-recipe"
export { SystemColorPalette as ColorPalette } from "../__compositions__/examples/system/color-palette"
export { SystemFlexRecipe as FlexRecipe } from "../__compositions__/examples/system/flex-recipe"
export { SystemInlineRecipe as InlineRecipe } from "../__compositions__/examples/system/inline-recipe"
export { SystemInlineSlotRecipe as InlineSlotRecipe } from "../__compositions__/examples/system/inline-slot-recipe"
export { SystemWithAnimation as Animation } from "../__compositions__/examples/system/with-animation"
export { SystemWithAsChild as AsChild } from "../__compositions__/examples/system/with-as-child"
export { WithCompoundBoolean as CompoundBoolean } from "../__compositions__/examples/system/with-compound-boolean"
export { WithCompoundColorPalette as CompoundColorPalette } from "../__compositions__/examples/system/with-compound-color-palette"
export { SystemWithUseRecipe as UseRecipe } from "../__compositions__/examples/system/with-use-recipe"
export { SystemWithUseSlotRecipe as UseSlotRecipe } from "../__compositions__/examples/system/with-use-slot-recipe"
