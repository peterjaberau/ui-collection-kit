import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Foundations / Theme",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { ThemeBasic as Basic } from "../compositions/examples/theme-basic"
export { ThemeNested as Nested } from "../compositions/examples/theme-nested"
export { ThemeWithPortalled as Portalled } from "../compositions/examples/theme-with-portalled"
