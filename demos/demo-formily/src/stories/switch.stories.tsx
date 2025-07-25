import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Switch",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { SwitchMarkup } from "../examples/switch/Markup"
export { SwitchPureJsx } from "../examples/switch/PureJsx"
export { SwitchSchema } from "../examples/switch/Schema"
