import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Badge",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { BadgeBasic as Basic } from "../compositions/examples/badge-basic"
export { BadgeSizeTable as Sizes } from "../compositions/examples/badge-size-table"
export { BadgeVariantTable as Variants } from "../compositions/examples/badge-variant-table"
export { BadgeWithContext as Context } from "../compositions/examples/badge-with-context"
export { BadgeWithGroup as Group } from "../compositions/examples/badge-with-group"
export { BadgeWithIcon as Icon } from "../compositions/examples/badge-with-icon"
