import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Time Picker",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { TimePickerMarkup } from "../examples/time-picker/Markup"
export { TimePickerPureJsx } from "../examples/time-picker/PureJsx"
export { TimePickerSchema } from "../examples/time-picker/Schema"
