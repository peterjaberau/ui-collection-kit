import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Toggle Tip",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { ToggleTipBasic as Basic } from "../__compositions__/examples/components/toggle/toggle-tip-basic"
export { ToggleTipInfoTip as InfoTip } from "../__compositions__/examples/components/toggle/toggle-tip-info-tip"
