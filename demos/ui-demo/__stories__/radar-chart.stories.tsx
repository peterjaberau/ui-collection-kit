import { Box } from "@chakra-ui/react"

export default {
  title: "Charts / Radar Chart",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export { RadarChartBasic as Basic } from "../__compositions__/examples/charts/radar-chart-basic"
export { RadarChartLinesOnly as LinesOnly } from "../__compositions__/examples/charts/radar-chart-lines-only"
export { RadarChartMultiple as Multiple } from "../__compositions__/examples/charts/radar-chart-multiple"
export { RadarChartWithCircleGrid as CircleGrid } from "../__compositions__/examples/charts/radar-chart-with-circle-grid"
export { RadarChartWithDots as Dots } from "../__compositions__/examples/charts/radar-chart-with-dots"
export { RadarChartWithFilledGrid as FilledGrid } from "../__compositions__/examples/charts/radar-chart-with-filled-grid"
export { RadarChartWithPointLabel as PointLabel } from "../__compositions__/examples/charts/radar-chart-with-point-label"
export { RadarChartWithTooltip as Tooltip } from "../__compositions__/examples/charts/radar-chart-with-tooltip"
