import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Password",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { PasswordMarkup } from "../examples/password/Markup"
export { PasswordPureJsx } from "../examples/password/PureJsx"
export { PasswordSchema } from "../examples/password/Schema"
