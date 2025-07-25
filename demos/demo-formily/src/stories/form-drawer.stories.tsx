import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Form Drawer",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { FormDrawerMarkup } from "../examples/form-drawer/form-drawer.markup"
export { FormDrawerPurejsx } from "../examples/form-drawer/form-drawer.purejsx"
export { FormDrawerSchema } from "../examples/form-drawer/form-drawer.schema"
