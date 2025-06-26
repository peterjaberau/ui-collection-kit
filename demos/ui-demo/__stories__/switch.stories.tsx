import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Switch",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { SwitchBasic as Basic } from "../__compositions__/examples/components/switch/switch-basic"
export { SwitchControlled as Controlled } from "../__compositions__/examples/components/switch/switch-controlled"
export { SwitchWithSizes as Sizes } from "../__compositions__/examples/components/switch/switch-with-sizes"
export { SwitchSizeTable as SizeTable } from "../__compositions__/examples/components/switch/switch-size-table"
export { SwitchVariantTable as Variants } from "../__compositions__/examples/components/switch/switch-variant-table"
export { SwitchWithDisabled as Disabled } from "../__compositions__/examples/components/switch/switch-with-disabled"
export { SwitchWithHookForm as HookForm } from "../__compositions__/examples/components/switch/switch-with-hook-form"
export { SwitchWithInvalid as Invalid } from "../__compositions__/examples/components/switch/switch-with-invalid"
export { SwitchWithThumbIndicator as ThumbIndicator } from "../__compositions__/examples/components/switch/switch-with-thumb-indicator"
export { SwitchWithTooltip as Tooltip } from "../__compositions__/examples/components/switch/switch-with-tooltip"
export { SwitchWithTrackIndicator as TrackIndicator } from "../__compositions__/examples/components/switch/switch-with-track-indicator"
