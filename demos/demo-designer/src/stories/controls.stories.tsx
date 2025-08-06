import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Designer / Controls",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { ButtonDecorator } from '../examples/controls/button.decorator'
export { AlertDecorator } from '../examples/controls/alert.decorator'
export { BadgeDecorator } from '../examples/controls/badge.decorator'
export { FieldDecorator } from '../examples/controls/field.decorator'
export { FieldSetDecorator } from '../examples/controls/fieldset.decorator'
export { InputDecorator } from '../examples/controls/input.decorator'
