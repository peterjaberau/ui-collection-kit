import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Typography / Code",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { CodeBasic as Basic } from "../compositions/examples/code-basic"
export { CodeWithColors as Colors } from "../compositions/examples/code-with-colors"
export { CodeSizeTable as Sizes } from "../compositions/examples/code-size-table"
export { CodeVariantTable as Variants } from "../compositions/examples/code-variant-table"
