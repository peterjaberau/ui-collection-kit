import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Typography / Link",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { LinkBasic as Basic } from "../__compositions__/examples/components/link/link-basic"
export { LinkVariantTable as Variants } from "../__compositions__/examples/components/link/link-variant-table"
export { LinkWithinText as WithinText } from "../__compositions__/examples/components/link/link-within-text"
