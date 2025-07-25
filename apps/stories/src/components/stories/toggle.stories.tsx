import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Toggle",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { ToggleBasic as Basic } from "../compositions/examples/toggle-basic"
export { ToggleControlled as Controlled } from "../compositions/examples/toggle-controlled"
export { ToggleWithIndicator as Indicator } from "../compositions/examples/toggle-with-indicator"
export { ToggleWithPressedIcon as PressedIcon } from "../compositions/examples/toggle-with-pressed-icon"
