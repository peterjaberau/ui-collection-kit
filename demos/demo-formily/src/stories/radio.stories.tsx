import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Radio",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { RadioMarkup } from "../examples/radio/Markup"
export { RadioPureJsx } from "../examples/radio/PureJsx"
export { RadioSchema } from "../examples/radio/Schema"
