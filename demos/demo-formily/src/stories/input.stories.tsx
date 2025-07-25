import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Input",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { InputMarkup } from "../examples/input/Markup"
export { InputPureJsx } from "../examples/input/PureJsx"
export { InputSchema } from "../examples/input/Schema"
