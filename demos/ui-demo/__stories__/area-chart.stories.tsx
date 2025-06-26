import { Box } from "@chakra-ui/react"

export default {
  title: "Charts / Area Chart",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export { AreaChartBasic as Basic } from "../__compositions__/examples/charts/area-chart-basic"
export { AreaChartFillWithValue as FillWithValue } from "../__compositions__/examples/charts/area-chart-fill-with-value"
export { AreaChartPercent as Percent } from "../__compositions__/examples/charts/area-chart-percent"
export { AreaChartWithAxisLabel as AxisLabel } from "../__compositions__/examples/charts/area-chart-with-axis-label"
export { AreaChartWithDashedArea as DashedArea } from "../__compositions__/examples/charts/area-chart-with-dashed-area"
export { AreaChartWithDots as Dots } from "../__compositions__/examples/charts/area-chart-with-dots"
export { AreaChartWithGradient as Gradient } from "../__compositions__/examples/charts/area-chart-with-gradient"
export { AreaChartWithNulls as Nulls } from "../__compositions__/examples/charts/area-chart-with-nulls"
export { AreaChartWithPointLabel as PointLabel } from "../__compositions__/examples/charts/area-chart-with-point-label"
export { AreaChartWithReferenceArea as ReferenceArea } from "../__compositions__/examples/charts/area-chart-with-reference-area"
export { AreaChartWithReferenceLines as ReferenceLines } from "../__compositions__/examples/charts/area-chart-with-reference-lines"
export { AreaChartWithTypes as Types } from "../__compositions__/examples/charts/area-chart-with-types"
export { AreaChartWithValueAxis as ValueAxis } from "../__compositions__/examples/charts/area-chart-with-value-axis"
