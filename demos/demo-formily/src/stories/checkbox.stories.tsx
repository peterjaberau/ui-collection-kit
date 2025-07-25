import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Checkbox",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { CheckboxMarkup } from "../examples/checkbox/Markup"
export { CheckboxPureJsx } from "../examples/checkbox/PureJsx"
export { CheckboxSchema } from "../examples/checkbox/Schema"
