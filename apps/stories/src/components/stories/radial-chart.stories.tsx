import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Charts / Radial Chart",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export { RadialChartBasic as Basic } from "../compositions/examples/charts/radial-chart-basic"
export { RadialChartWithLegend as Legend } from "../compositions/examples/charts/radial-chart-with-legend"
export { RadialChartWithLabel as Label } from "../compositions/examples/charts/radial-chart-with-label"
