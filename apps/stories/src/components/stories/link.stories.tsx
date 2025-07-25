import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Typography / Link",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { LinkBasic as Basic } from "../compositions/examples/link-basic"
export { LinkVariantTable as Variants } from "../compositions/examples/link-variant-table"
export { LinkWithinText as WithinText } from "../compositions/examples/link-within-text"
