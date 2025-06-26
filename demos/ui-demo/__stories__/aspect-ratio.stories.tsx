import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Layout / AspectRatio",
  decorators: [
    (Story) => (
      <Box p="4">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { AspectRatioResponsive as Responsive } from "../__compositions__/examples/components/aspect-ratio/aspect-ratio-responsive"
export { AspectRatioWithImage as Image } from "../__compositions__/examples/components/aspect-ratio/aspect-ratio-with-image"
export { AspectRatioWithMap as Map } from "../__compositions__/examples/components/aspect-ratio/aspect-ratio-with-map"
export { AspectRatioWithVideo as Video } from "../__compositions__/examples/components/aspect-ratio/aspect-ratio-with-video"
