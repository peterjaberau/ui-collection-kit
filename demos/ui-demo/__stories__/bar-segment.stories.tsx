import { Box } from "@chakra-ui/react"

export default {
  title: "Charts / Bar Segment",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export { BarSegmentBasic as Basic } from "../__compositions__/examples/charts/bar-segment-basic"
export { BarSegmentWithReference as Reference } from "../__compositions__/examples/charts/bar-segment-with-reference"
export { BarSegmentWithLegend as Legend } from "../__compositions__/examples/charts/bar-segment-with-legend"
export { BarSegmentWithBarSize as BarSize } from "../__compositions__/examples/charts/bar-segment-with-bar-size"
export { BarSegmentWithTooltip as Tooltip } from "../__compositions__/examples/charts/bar-segment-with-tooltip"
