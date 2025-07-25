import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Progress",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { ProgressBasic as Basic } from "../compositions/examples/progress-basic"
export { ProgressComposition as Composition } from "../compositions/examples/progress-composition"
export { ProgressSizeTable as Sizes } from "../compositions/examples/progress-size-table"
export { ProgressVariantTable as Variants } from "../compositions/examples/progress-variant-table"
export { ProgressWithAnimatedStripes as AnimatedStripes } from "../compositions/examples/progress-with-animated-stripes"
export { ProgressWithColors as Colors } from "../compositions/examples/progress-with-colors"
export { ProgressWithInlineLabel as InlineLabel } from "../compositions/examples/progress-with-inline-label"
export { ProgressWithLabel as Label } from "../compositions/examples/progress-with-label"
export { ProgressWithLabelInfo as LabelInfo } from "../compositions/examples/progress-with-label-info"
export { ProgressWithStripes as Stripes } from "../compositions/examples/progress-with-stripes"
