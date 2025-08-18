import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra Pro / Dividers",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { DividerWithButton as WithButton } from "../../compositions/examples/pro/divider-with-button"
export {DividerWithButtonGroup as WithButtonGroup} from "../../compositions/examples/pro/divider-with-button-group"
export { DividerWithIconButton as WithIconButton } from "../../compositions/examples/pro/divider-with-icon-button"
export { DividerWithText as WithText } from "../../compositions/examples/pro/divider-with-text"
