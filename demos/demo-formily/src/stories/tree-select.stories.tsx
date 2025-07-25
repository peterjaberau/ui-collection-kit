import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Tree Select",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { TreeSelectMarkup } from "../examples/tree-select/tree-select.markup"
export { TreeSelectMarkupAsync } from "../examples/tree-select/tree-select.markup.async"
export { TreeSelectPurejsx } from "../examples/tree-select/tree-select.purejsx"
export { TreeSelectPurejsxAsync } from "../examples/tree-select/tree-select.purejsx.async"
export { TreeSelectSchema } from "../examples/tree-select/tree-select.schema"
export { TreeSelectSchemaAsync } from "../examples/tree-select/tree-select.schema.async"
