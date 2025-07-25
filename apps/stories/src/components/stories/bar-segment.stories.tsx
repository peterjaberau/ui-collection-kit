import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Charts / Bar Segment",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export { BarSegmentBasic as Basic } from "../compositions/examples/charts/bar-segment-basic"
export { BarSegmentWithReference as Reference } from "../compositions/examples/charts/bar-segment-with-reference"
export { BarSegmentWithLegend as Legend } from "../compositions/examples/charts/bar-segment-with-legend"
export { BarSegmentWithBarSize as BarSize } from "../compositions/examples/charts/bar-segment-with-bar-size"
export { BarSegmentWithTooltip as Tooltip } from "../compositions/examples/charts/bar-segment-with-tooltip"
