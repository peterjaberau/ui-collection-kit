import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Select",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { SelectMarkupAsync } from "../examples/select/MarkupAsync"
export { SelectMarkupAsyncLinkage } from "../examples/select/MarkupAsyncLinkage"
export { SelectMarkupSync } from "../examples/select/MarkupSync"
export { SelectPureJsxAsync } from "../examples/select/PureJsxAsync"
export { SelectPureJsxSync } from "../examples/select/PureJsxSync"
export { SelectSchemaAsync } from "../examples/select/SchemaAsync"
export { SelectSchemaSync } from "../examples/select/SchemaSync"
