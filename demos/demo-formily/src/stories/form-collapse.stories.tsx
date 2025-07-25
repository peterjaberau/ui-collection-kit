import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Form Collapse",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { FormCollapseMarkup } from "../examples/form-collapse/form-collapse.markup"
export { FormCollapseSchema } from "../examples/form-collapse/form-collapse.schema"
