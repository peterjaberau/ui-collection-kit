import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Color Mode",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { ColorModeBasic as Basic } from "../compositions/examples/color-mode-basic"
export { ColorModeForced as Forced } from "../compositions/examples/color-mode-forced"
export { ColorModeIconButton as IconButton } from "../compositions/examples/color-mode-icon-button"
export { ColorModeValue as Value } from "../compositions/examples/color-mode-value"
export { ColorModeValueFallback as ValueFallback } from "../compositions/examples/color-mode-value-fallback"
