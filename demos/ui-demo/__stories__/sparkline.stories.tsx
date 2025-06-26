import { Box } from "@chakra-ui/react"

export default {
  title: "Charts / Sparkline",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export { SparklineBarChart as BarChart } from "../__compositions__/examples/charts/sparkline-bar-chart"
export { SparklineBasic as Basic } from "../__compositions__/examples/charts/sparkline-basic"
export { SparklineCompositionStock as Stock } from "../__compositions__/examples/charts/sparkline-composition-stock"
export { SparklineLineChart as LineChart } from "../__compositions__/examples/charts/sparkline-line-chart"
export { SparklineWithGradient as Gradient } from "../__compositions__/examples/charts/sparkline-with-gradient"
export { SparklineWithInteraction as Interaction } from "../__compositions__/examples/charts/sparkline-with-interaction"
export { SparklineWithReference as Reference } from "../__compositions__/examples/charts/sparkline-with-reference"
export { SparklineCompositionStat as Stat } from "../__compositions__/examples/charts/sparkline-composition-stat"
