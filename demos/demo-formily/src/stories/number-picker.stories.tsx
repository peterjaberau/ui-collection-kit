import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Number Picker",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { NumberPickerMarkup } from "../examples/number-picker/Markup"
export { NumberPickerPureJsx } from "../examples/number-picker/PureJsx"
export { NumberPickerSchema } from "../examples/number-picker/Schema"
