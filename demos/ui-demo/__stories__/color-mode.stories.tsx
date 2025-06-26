import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Color Mode",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { ColorModeBasic as Basic } from "../__compositions__/examples/components/color-mode/color-mode-basic"
export { ColorModeForced as Forced } from "../__compositions__/examples/components/color-mode/color-mode-forced"
export { ColorModeIconButton as IconButton } from "../__compositions__/examples/components/color-mode/color-mode-icon-button"
export { ColorModeValue as Value } from "../__compositions__/examples/components/color-mode/color-mode-value"
export { ColorModeValueFallback as ValueFallback } from "../__compositions__/examples/components/color-mode/color-mode-value-fallback"
