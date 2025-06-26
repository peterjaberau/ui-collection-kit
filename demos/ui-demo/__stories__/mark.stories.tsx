import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Typography / Mark",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { MarkBasic as Basic } from "../__compositions__/examples/components/mark/mark-basic"
export { MarkWithVariants as Variants } from "../__compositions__/examples/components/mark/mark-with-variants"
