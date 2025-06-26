import { Box } from "@chakra-ui/react"

export default {
  title: "Charts / Scatter Chart",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export { ScatterChartBasic as Basic } from "../__compositions__/examples/charts/scatter-chart-basic"
export { ScatterChartLegend as Legend } from "../__compositions__/examples/charts/scatter-chart-legend"
export { ScatterChartMultiple as Multiple } from "../__compositions__/examples/charts/scatter-chart-multiple"
export { ScatterChartConnectDots as ConnectDots } from "../__compositions__/examples/charts/scatter-chart-connect-dots"
export { ScatterChartTrendLine as TrendLine } from "../__compositions__/examples/charts/scatter-chart-trend-line"
