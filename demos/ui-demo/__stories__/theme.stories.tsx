import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Foundations / Theme",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { ThemeBasic as Basic } from "../__compositions__/examples/components/theme/theme-basic"
export { ThemeNested as Nested } from "../__compositions__/examples/components/theme/theme-nested"
export { ThemeWithPortalled as Portalled } from "../__compositions__/examples/components/theme/theme-with-portalled"
