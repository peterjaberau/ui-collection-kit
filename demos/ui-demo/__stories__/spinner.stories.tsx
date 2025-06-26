import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Spinner",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { SpinnerBasic as Basic } from "../__compositions__/examples/components/spinner/spinner-basic"
export { SpinnerCustomColor as CustomColor } from "../__compositions__/examples/components/spinner/spinner-custom-color"
export { SpinnerSizeTable as Sizes } from "../__compositions__/examples/components/spinner/spinner-size-table"
export { SpinnerWithCustomSpeed as CustomSpeed } from "../__compositions__/examples/components/spinner/spinner-with-custom-speed"
export { SpinnerWithCustomThickness as CustomThickness } from "../__compositions__/examples/components/spinner/spinner-with-custom-thickness"
export { SpinnerWithTrackColor as TrackColor } from "../__compositions__/examples/components/spinner/spinner-with-track-color"
export { SpinnerWithLabel as Label } from "../__compositions__/examples/components/spinner/spinner-with-label"
export { SpinnerWithOverlay as Overlay } from "../__compositions__/examples/components/spinner/spinner-with-overlay"
