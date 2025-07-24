import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Array Items",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { ArrayItemsMarkup as Markup } from '../examples/array-items/array-items.markup'
export { ArrayItemsSchema as Schema } from '../examples/array-items/array-items.schema'
export { ArrayItemsLinkage as Linkage } from '../examples/array-items/array-items.linkage'
export { ArrayItemsLinkageSchema as LinkageSchema } from '../examples/array-items/array-items.linkage-schema'
