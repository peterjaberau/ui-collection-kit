import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Action Bar",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { ActionBarBasic as Basic } from "../compositions/examples/action-bar-basic"
export { ActionBarWithCloseTrigger as CloseTrigger } from "../compositions/examples/action-bar-with-close-trigger"
export { ActionBarWithDialog as WithDialog } from "../compositions/examples/action-bar-with-dialog"
