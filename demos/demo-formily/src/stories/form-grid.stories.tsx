import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Form Grid",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { FormGridMarkup } from "../examples/form-grid/Markup"
export { FormGridNative } from "../examples/form-grid/Native"
export { FormGridQueryForm } from "../examples/form-grid/QueryForm"
export { FormGridSchema } from "../examples/form-grid/Schema"
