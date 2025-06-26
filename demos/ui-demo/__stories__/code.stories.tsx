import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Typography / Code",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { CodeBasic as Basic } from "../__compositions__/examples/components/code/code-basic"
export { CodeWithColors as Colors } from "../__compositions__/examples/components/code/code-with-colors"
export { CodeSizeTable as Sizes } from "../__compositions__/examples/components/code/code-size-table"
export { CodeVariantTable as Variants } from "../__compositions__/examples/components/code/code-variant-table"
