import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Layout / AspectRatio",
  decorators: [
    (Story: any) => (
      <Box p="4">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { AspectRatioResponsive as Responsive } from "../compositions/examples/aspect-ratio-responsive"
export { AspectRatioWithImage as Image } from "../compositions/examples/aspect-ratio-with-image"
export { AspectRatioWithMap as Map } from "../compositions/examples/aspect-ratio-with-map"
export { AspectRatioWithVideo as Video } from "../compositions/examples/aspect-ratio-with-video"
