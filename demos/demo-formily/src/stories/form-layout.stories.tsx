import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Form Layout",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { FormLayoutMarkup } from "../examples/form-layout/form-layout.markup"
export { FormLayoutPurejsx } from "../examples/form-layout/form-layout.purejsx"
export { FormLayoutSchema } from "../examples/form-layout/form-layout.schema"
