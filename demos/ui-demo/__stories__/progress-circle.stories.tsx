import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Progress Circle",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { ProgressCircleBasic as Basic } from "../__compositions__/examples/components/progress/progress-circle-basic"
export { ProgressCircleIndeterminate as Indeterminate } from "../__compositions__/examples/components/progress/progress-circle-indeterminate"
export { ProgressCircleWithColors as Colors } from "../__compositions__/examples/components/progress/progress-circle-with-colors"
export { ProgressCircleWithRangeColor as RangeColor } from "../__compositions__/examples/components/progress/progress-circle-with-range-color"
export { ProgressCircleWithRoundCap as RoundCap } from "../__compositions__/examples/components/progress/progress-circle-with-round-cap"
export { ProgressCircleWithSizes as Sizes } from "../__compositions__/examples/components/progress/progress-circle-with-sizes"
export { ProgressCircleWithThickness as CustomThickness } from "../__compositions__/examples/components/progress/progress-circle-with-thickness"
export { ProgressCircleWithValueText as ValueText } from "../__compositions__/examples/components/progress/progress-circle-with-value-text"
