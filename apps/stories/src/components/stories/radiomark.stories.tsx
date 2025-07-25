import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Radiomark",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { RadiomarkBasic as Basic } from "../compositions/examples/radiomark-basic"
export { RadiomarkVariants as Variants } from "../compositions/examples/radiomark-variants"
