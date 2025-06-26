import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Tooltip",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { TooltipBasic as Basic } from "../__compositions__/examples/components/tooltip/tooltip-basic"
export { TooltipControlled as Controlled } from "../__compositions__/examples/components/tooltip/tooltip-controlled"
export { TooltipControlledMultiple as ControlledMultiple } from "../__compositions__/examples/components/tooltip/tooltip-controlled-multiple"
export { TooltipMultiple as Multiple } from "../__compositions__/examples/components/tooltip/tooltip-multiple"
export { TooltipWithArrow as Arrow } from "../__compositions__/examples/components/tooltip/tooltip-with-arrow"
export { TooltipWithAvatar as WithAvatar } from "../__compositions__/examples/components/tooltip/tooltip-with-avatar"
export { TooltipWithCheckbox as WithCheckbox } from "../__compositions__/examples/components/tooltip/tooltip-with-checkbox"
export { TooltipWithCustomBg as CustomBg } from "../__compositions__/examples/components/tooltip/tooltip-with-custom-bg"
export { TooltipWithDelay as Delay } from "../__compositions__/examples/components/tooltip/tooltip-with-delay"
export { TooltipWithDialog as WithDialog } from "../__compositions__/examples/components/tooltip/tooltip-with-dialog"
export { TooltipWithDisabled as Disabled } from "../__compositions__/examples/components/tooltip/tooltip-with-disabled"
export { TooltipWithInteractive as Interactive } from "../__compositions__/examples/components/tooltip/tooltip-with-interactive"
export { TooltipWithMenuItem as WithMenuItem } from "../__compositions__/examples/components/tooltip/tooltip-with-menu-item"
export { TooltipWithMenuTrigger as WithMenuTrigger } from "../__compositions__/examples/components/tooltip/tooltip-with-menu-trigger"
export { TooltipWithOffset as Offset } from "../__compositions__/examples/components/tooltip/tooltip-with-offset"
export { TooltipWithPlacement as Placement } from "../__compositions__/examples/components/tooltip/tooltip-with-placement"
export { TooltipWithStore as WithStore } from "../__compositions__/examples/components/tooltip/tooltip-with-store"
export { TooltipWithSwitch as WithSwitch } from "../__compositions__/examples/components/tooltip/tooltip-with-switch"
export { TooltipWithTab as WithTab } from "../__compositions__/examples/components/tooltip/tooltip-with-tab"
