import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Progress",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { ProgressBasic as Basic } from "../__compositions__/examples/components/progress/progress-basic"
export { ProgressComposition as Composition } from "../__compositions__/examples/components/progress/progress-composition"
export { ProgressSizeTable as Sizes } from "../__compositions__/examples/components/progress/progress-size-table"
export { ProgressVariantTable as Variants } from "../__compositions__/examples/components/progress/progress-variant-table"
export { ProgressWithAnimatedStripes as AnimatedStripes } from "../__compositions__/examples/components/progress/progress-with-animated-stripes"
export { ProgressWithColors as Colors } from "../__compositions__/examples/components/progress/progress-with-colors"
export { ProgressWithInlineLabel as InlineLabel } from "../__compositions__/examples/components/progress/progress-with-inline-label"
export { ProgressWithLabel as Label } from "../__compositions__/examples/components/progress/progress-with-label"
export { ProgressWithLabelInfo as LabelInfo } from "../__compositions__/examples/components/progress/progress-with-label-info"
export { ProgressWithStripes as Stripes } from "../__compositions__/examples/components/progress/progress-with-stripes"
