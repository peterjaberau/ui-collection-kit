import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Form Tab",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { FormTabMarkup } from "../examples/form-tab/form-tab.markup"
export { FormTabSchema } from "../examples/form-tab/form-tab.schema"
