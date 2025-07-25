import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Toggle Tip",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { ToggleTipBasic as Basic } from "../compositions/examples/toggle-tip-basic"
export { ToggleTipInfoTip as InfoTip } from "../compositions/examples/toggle-tip-info-tip"
