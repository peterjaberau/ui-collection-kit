import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Transfer",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { TransferMarkup } from "../examples/transfer/Markup"
export { TransferPurejsx } from "../examples/transfer/PureJsx"
