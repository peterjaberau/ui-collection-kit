import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Hooks / createOverlay",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { OverlayBasic as Basic } from "../compositions/examples/overlay-basic"
export { OverlayWithAlert as Alert } from "../compositions/examples/overlay-with-alert"
export { OverlayWithReturnValue as ReturnValue } from "../compositions/examples/overlay-with-return-value"
export { OverlayWithUpdate as Update } from "../compositions/examples/overlay-with-update"
export { OverlayWithDrawer as Drawer } from "../compositions/examples/overlay-with-drawer"
