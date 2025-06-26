import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Popover",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { PopoverBasic as Basic } from "../__compositions__/examples/components/popover/popover-basic"
export { PopoverControlled as Controlled } from "../__compositions__/examples/components/popover/popover-controlled"
export { PopoverInDialog as InDialog } from "../__compositions__/examples/components/popover/popover-in-dialog"
export { PopoverLazyMounted as LazyMounted } from "../__compositions__/examples/components/popover/popover-lazy-mounted"
export { PopoverNested as Nested } from "../__compositions__/examples/components/popover/popover-nested"
export { PopoverSizeTable as Sizes } from "../__compositions__/examples/components/popover/popover-size-table"
export { PopoverWithCustomBg as CustomBg } from "../__compositions__/examples/components/popover/popover-with-custom-bg"
export { PopoverWithForm as Form } from "../__compositions__/examples/components/popover/popover-with-form"
export { PopoverWithInitialFocus as InitialFocus } from "../__compositions__/examples/components/popover/popover-with-initial-focus"
export { PopoverWithOffset as Offset } from "../__compositions__/examples/components/popover/popover-with-offset"
export { PopoverWithPlacement as Placement } from "../__compositions__/examples/components/popover/popover-with-placement"
export { PopoverWithSameWidth as SameWidth } from "../__compositions__/examples/components/popover/popover-with-same-width"
