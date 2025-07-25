import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Form Dialog",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { FormDialogMarkup } from "../examples/form-dialog/form-dialog.markup"
export { FormDialogPurejsx } from "../examples/form-dialog/form-dialog.purejsx"
export { FormDialogSchema } from "../examples/form-dialog/form-dialog.schema"
