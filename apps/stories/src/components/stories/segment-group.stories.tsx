import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Segment Group",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { SegmentedControlBasic as Basic } from "../compositions/examples/segmented-control-basic"
export { SegmentedControlControlled as Controlled } from "../compositions/examples/segmented-control-controlled"
export { SegmentedControlInCard as Card } from "../compositions/examples/segmented-control-in-card"
export { SegmentedControlVertical as Vertical } from "../compositions/examples/segmented-control-vertical"
export { SegmentedControlWithDisabled as Disabled } from "../compositions/examples/segmented-control-with-disabled"
export { SegmentedControlWithDisabledItem as DisabledItem } from "../compositions/examples/segmented-control-with-disabled-item"
export { SegmentedControlWithHookForm as HookForm } from "../compositions/examples/segmented-control-with-hook-form"
export { SegmentedControlWithIcon as Icon } from "../compositions/examples/segmented-control-with-icon"
export { SegmentedControlWithSizes as Sizes } from "../compositions/examples/segmented-control-with-sizes"
