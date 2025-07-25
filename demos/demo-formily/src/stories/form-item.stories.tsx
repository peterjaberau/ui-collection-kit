import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Form Item",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { FormItemMarkup } from "../examples/form-item/form-item.markup"
export { FormItemPurejsx } from "../examples/form-item/form-item.purejsx"
export { FormItemSchema } from "../examples/form-item/form-item.schema"
