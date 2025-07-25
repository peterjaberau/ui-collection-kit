import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Typography / Mark",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { MarkBasic as Basic } from "../compositions/examples/mark-basic"
export { MarkWithVariants as Variants } from "../compositions/examples/mark-with-variants"
