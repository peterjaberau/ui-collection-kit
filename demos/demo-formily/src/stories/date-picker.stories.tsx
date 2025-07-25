import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Date Picker",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { DatePickerMarkup } from "../examples/date-picker/Markup"
export { DatePickerPureJsx } from "../examples/date-picker/PureJsx"
export { DatePickerSchema } from "../examples/date-picker/Schema"
