import { Box } from "@chakra-ui/react"

export default {
  title: "Charts / Radial Chart",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export { RadialChartBasic as Basic } from "../__compositions__/examples/charts/radial-chart-basic"
export { RadialChartWithLegend as Legend } from "../__compositions__/examples/charts/radial-chart-with-legend"
export { RadialChartWithLabel as Label } from "../__compositions__/examples/charts/radial-chart-with-label"
