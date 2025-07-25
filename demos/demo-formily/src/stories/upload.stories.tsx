import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Upload",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { UploadMarkup } from "../examples/upload/upload.markup"
export { UploadPurejsx } from "../examples/upload/upload.purejsx"
export { UploadSchema } from "../examples/upload/upload.schema"
