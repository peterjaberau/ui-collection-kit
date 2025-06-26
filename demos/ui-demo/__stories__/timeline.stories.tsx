import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Timeline",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { TimelineAlternating as Alternating } from "../__compositions__/examples/components/timeline/timeline-alternating"
export { TimelineBasic as Basic } from "../__compositions__/examples/components/timeline/timeline-basic"
export { TimelineComposition as Composition } from "../__compositions__/examples/components/timeline/timeline-composition"
export { TimelineWithContentBefore as ContentBefore } from "../__compositions__/examples/components/timeline/timeline-with-content-before"
export { TimelineWithSizes as Sizes } from "../__compositions__/examples/components/timeline/timeline-with-sizes"
export { TimelineWithVariants as Variants } from "../__compositions__/examples/components/timeline/timeline-with-variants"
