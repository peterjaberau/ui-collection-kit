import { Box } from "@chakra-ui/react"

export default {
  title: "Charts / Bar Chart",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export { BarChartBarColor as BarColor } from "../__compositions__/examples/charts/bar-chart-bar-color"
export { BarChartBasic as Basic } from "../__compositions__/examples/charts/bar-chart-basic"
export { BarChartCandlestick as Candlestick } from "../__compositions__/examples/charts/bar-chart-candlestick"
export { BarChartComposition as Composition } from "../__compositions__/examples/charts/bar-chart-composition"
export { BarChartFillWithValue as FillWithValue } from "../__compositions__/examples/charts/bar-chart-fill-with-value"
export { BarChartHistogram as Histogram } from "../__compositions__/examples/charts/bar-chart-histogram"
export { BarChartHorizontal as Horizontal } from "../__compositions__/examples/charts/bar-chart-horizontal"
export { BarChartLegendPosition as LegendPosition } from "../__compositions__/examples/charts/bar-chart-legend-position"
export { BarChartMultiple as Multiple } from "../__compositions__/examples/charts/bar-chart-multiple"
export { BarChartPercent as Percent } from "../__compositions__/examples/charts/bar-chart-percent"
export { BarChartRange as Range } from "../__compositions__/examples/charts/bar-chart-range"
export { BarChartRounded as Rounded } from "../__compositions__/examples/charts/bar-chart-rounded"
export { BarChartStacked as Stacked } from "../__compositions__/examples/charts/bar-chart-stacked"
export { BarChartStackedMix as StackedMix } from "../__compositions__/examples/charts/bar-chart-stacked-mix"
export { BarChartWithAvatarTicks as AvatarTicks } from "../__compositions__/examples/charts/bar-chart-with-avatar-ticks"
export { BarChartWithBarLabel as BarLabel } from "../__compositions__/examples/charts/bar-chart-with-bar-label"
export { BarChartWithFormatter as Formatter } from "../__compositions__/examples/charts/bar-chart-with-formatter"
export { BarChartWithNoGap as NoGap } from "../__compositions__/examples/charts/bar-chart-with-no-gap"
export { BarChartWithReferenceLines as ReferenceLines } from "../__compositions__/examples/charts/bar-chart-with-reference-lines"
