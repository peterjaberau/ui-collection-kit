import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Action Bar",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { ActionBarBasic as Basic } from "../__compositions__/examples/components/action-bar/action-bar-basic"
export { ActionBarWithCloseTrigger as CloseTrigger } from "../__compositions__/examples/components/action-bar/action-bar-with-close-trigger"
export { ActionBarWithDialog as WithDialog } from "../__compositions__/examples/components/action-bar/action-bar-with-dialog"
