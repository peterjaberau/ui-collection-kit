import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Array Cards",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { ArrayCardsMarkup as Markup } from '../examples/array-cards/array-cards.markup'
export { ArrayCardsSchema as Schema } from '../examples/array-cards/array-cards.schema'
export { ArrayCardsLinkage as Linkage } from '../examples/array-cards/array-cards.linkage'
export { ArrayCardsLinkageSchema as LinkageSchema } from '../examples/array-cards/array-cards.linkage-schema'
