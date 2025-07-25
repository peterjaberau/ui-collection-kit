import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Array Table",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { ArrayTableMarkup } from "../examples/array-table/array-table.markup"
export { ArrayTableSchema } from "../examples/array-table/array-table.schema"
export { ArrayTableLinkage } from "../examples/array-table/array-table.linkage"
export { ArrayTableLinkageSchema } from "../examples/array-table/array-table.linkage-schema"
