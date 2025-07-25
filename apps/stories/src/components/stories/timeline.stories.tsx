import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Timeline",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { TimelineAlternating as Alternating } from "../compositions/examples/timeline-alternating"
export { TimelineBasic as Basic } from "../compositions/examples/timeline-basic"
export { TimelineComposition as Composition } from "../compositions/examples/timeline-composition"
export { TimelineWithContentBefore as ContentBefore } from "../compositions/examples/timeline-with-content-before"
export { TimelineWithSizes as Sizes } from "../compositions/examples/timeline-with-sizes"
export { TimelineWithVariants as Variants } from "../compositions/examples/timeline-with-variants"
