import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Color Picker",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { ColorPickerBasic as Basic } from "../__compositions__/examples/components/color-picker/color-picker-basic"
export { ColorPickerChangeEnd as ChangeEnd } from "../__compositions__/examples/components/color-picker/color-picker-change-end"
export { ColorPickerChannelSliderOnly as ChannelSliderOnly } from "../__compositions__/examples/components/color-picker/color-picker-channel-slider-only"
export { ColorPickerControlled as Controlled } from "../__compositions__/examples/components/color-picker/color-picker-controlled"
export { ColorPickerWithHookForm as HookForm } from "../__compositions__/examples/components/color-picker/color-picker-with-hook-form"
export { ColorPickerInline as Inline } from "../__compositions__/examples/components/color-picker/color-picker-inline"
export { ColorPickerInputOnly as InputOnly } from "../__compositions__/examples/components/color-picker/color-picker-input-only"
export { ColorPickerSwatchOnly as SwatchOnly } from "../__compositions__/examples/components/color-picker/color-picker-swatch-only"
export { ColorPickerTriggerOnly as TriggerOnly } from "../__compositions__/examples/components/color-picker/color-picker-trigger-only"
export { ColorPickerWithChannelInput as ChannelInput } from "../__compositions__/examples/components/color-picker/color-picker-with-channel-input"
export { ColorPickerWithDisabled as Disabled } from "../__compositions__/examples/components/color-picker/color-picker-with-disabled"
export { ColorPickerWithFitContent as FitContent } from "../__compositions__/examples/components/color-picker/color-picker-with-fit-content"
export { ColorPickerWithFormat as Format } from "../__compositions__/examples/components/color-picker/color-picker-with-format"
export { ColorPickerWithReadonly as Readonly } from "../__compositions__/examples/components/color-picker/color-picker-with-readonly"
export { ColorPickerWithSaveSwatch as SaveSwatch } from "../__compositions__/examples/components/color-picker/color-picker-with-save-swatch"
export { ColorPickerWithSizes as Sizes } from "../__compositions__/examples/components/color-picker/color-picker-with-sizes"
export { ColorPickerWithSwatchAndInput as SwatchAndInput } from "../__compositions__/examples/components/color-picker/color-picker-with-swatch-and-input"
export { ColorPickerWithSwatches as Swatches } from "../__compositions__/examples/components/color-picker/color-picker-with-swatches"
export { ColorPickerWithSwatchesAndTrigger as SwatchesAndTrigger } from "../__compositions__/examples/components/color-picker/color-picker-with-swatches-and-trigger"
export { ColorPickerWithTriggerInInput as TriggerInInput } from "../__compositions__/examples/components/color-picker/color-picker-with-trigger-in-input"
export { ColorPickerWithVariants as Variants } from "../__compositions__/examples/components/color-picker/color-picker-with-variants"
