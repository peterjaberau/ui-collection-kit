import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Styled / Charts / Donut Chart",

} 

export { DonutChartBasic as Basic } from "../__compositions__/examples/charts/donut-chart-basic"
export { DonutChartWithPointLabel as PointLabel } from "../__compositions__/examples/charts/donut-chart-with-point-label"
export { DonutChartWithCenteredText as CenteredText } from "../__compositions__/examples/charts/donut-chart-with-centered-text"
export { DonutChartWithAnglePadding as AnglePadding } from "../__compositions__/examples/charts/donut-chart-with-angle-padding"
export { DonutChartWithStartAndEndAngle as StartAndEndAngle } from "../__compositions__/examples/charts/donut-chart-with-start-and-end-angle"
export { DonutChartWithDetachedSegment as DetachedSegment } from "../__compositions__/examples/charts/donut-chart-with-detached-segment"
export { DonutChartWithOtherLabel as OtherLabel } from "../__compositions__/examples/charts/donut-chart-with-other-label"
