import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Toggle",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { ToggleBasic as Basic } from "../__compositions__/examples/components/toggle/toggle-basic"
export { ToggleControlled as Controlled } from "../__compositions__/examples/components/toggle/toggle-controlled"
export { ToggleWithIndicator as Indicator } from "../__compositions__/examples/components/toggle/toggle-with-indicator"
export { ToggleWithPressedIcon as PressedIcon } from "../__compositions__/examples/components/toggle/toggle-with-pressed-icon"
