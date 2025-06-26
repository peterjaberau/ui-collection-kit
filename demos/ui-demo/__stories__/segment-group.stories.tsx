import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Segment Group",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { SegmentedControlBasic as Basic } from "../__compositions__/examples/components/segmented-control/segmented-control-basic"
export { SegmentedControlControlled as Controlled } from "../__compositions__/examples/components/segmented-control/segmented-control-controlled"
export { SegmentedControlInCard as Card } from "../__compositions__/examples/components/segmented-control/segmented-control-in-card"
export { SegmentedControlVertical as Vertical } from "../__compositions__/examples/components/segmented-control/segmented-control-vertical"
export { SegmentedControlWithDisabled as Disabled } from "../__compositions__/examples/components/segmented-control/segmented-control-with-disabled"
export { SegmentedControlWithDisabledItem as DisabledItem } from "../__compositions__/examples/components/segmented-control/segmented-control-with-disabled-item"
export { SegmentedControlWithHookForm as HookForm } from "../__compositions__/examples/components/segmented-control/segmented-control-with-hook-form"
export { SegmentedControlWithIcon as Icon } from "../__compositions__/examples/components/segmented-control/segmented-control-with-icon"
export { SegmentedControlWithSizes as Sizes } from "../__compositions__/examples/components/segmented-control/segmented-control-with-sizes"
