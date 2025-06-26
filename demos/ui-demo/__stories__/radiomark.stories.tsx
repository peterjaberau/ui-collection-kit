import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Radiomark",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { RadiomarkBasic as Basic } from "../__compositions__/examples/components/radiomark/radiomark-basic"
export { RadiomarkVariants as Variants } from "../__compositions__/examples/components/radiomark/radiomark-variants"
