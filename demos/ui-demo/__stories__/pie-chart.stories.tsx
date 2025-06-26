import { Box } from "@chakra-ui/react"

export default {
  title: "Charts / Pie Chart",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export { PieChartBasic as Basic } from "../__compositions__/examples/charts/pie-chart-basic"
export { PieChartNoStroke as NoStroke } from "../__compositions__/examples/charts/pie-chart-no-stroke"
export { PieChartWithLabelInside as LabelInside } from "../__compositions__/examples/charts/pie-chart-with-label-inside"
export { PieChartWithLabelOutside as LabelOutside } from "../__compositions__/examples/charts/pie-chart-with-label-outside"
export { PieChartWithLegend as Legend } from "../__compositions__/examples/charts/pie-chart-with-legend"
export { PieChartWithPointLabel as PointLabel } from "../__compositions__/examples/charts/pie-chart-with-point-label"
export { PieChartWithStartAngle as StartAngle } from "../__compositions__/examples/charts/pie-chart-with-start-angle"
