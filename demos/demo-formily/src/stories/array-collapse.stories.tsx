import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Array Collapse",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { ArrayCollapseMarkup } from '../examples/array-collapse/array-collapse-markup'
export { ArrayCollapseSchema } from '../examples/array-collapse/array-collapse-schema'
export { ArrayCollapseLinkage } from '../examples/array-collapse/array-collapse-linkage'
export { ArrayCollapseLinkageSchema } from '../examples/array-collapse/array-collapse-linkage-schema'
