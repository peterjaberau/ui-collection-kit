import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Input",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { InputBasic as Basic } from "../__compositions__/examples/components/input/input-basic"
export { InputSizeTable as Sizes } from "../__compositions__/examples/components/input/input-size-table"
export { InputVariantTable as Variants } from "../__compositions__/examples/components/input/input-variant-table"
export { InputWithCardDetails as CardDetails } from "../__compositions__/examples/components/input/input-with-card-details"
export { InputWithCardNumber as CardNumber } from "../__compositions__/examples/components/input/input-with-card-number"
export { InputWithCharacterCounter as CharacterCounter } from "../__compositions__/examples/components/input/input-with-character-counter"
export { InputWithClearButton as ClearButton } from "../__compositions__/examples/components/input/input-with-clear-button"
export { InputWithEndAddon as EndAddon } from "../__compositions__/examples/components/input/input-with-end-addon"
export { InputWithEndButton as EndButton } from "../__compositions__/examples/components/input/input-with-end-button"
export { InputWithEndIcon as EndIcon } from "../__compositions__/examples/components/input/input-with-end-icon"
export { InputWithEndText as EndText } from "../__compositions__/examples/components/input/input-with-end-text"
export { InputWithErrorText as ErrorText } from "../__compositions__/examples/components/input/input-with-error-text"
export { InputWithField as Field } from "../__compositions__/examples/components/input/input-with-field"
export { InputWithFloatingLabel as FloatingLabel } from "../__compositions__/examples/components/input/input-with-floating-label"
export { InputWithFocusErrorColor as FocusErrorColor } from "../__compositions__/examples/components/input/input-with-focus-error-color"
export { InputWithHelperText as HelperText } from "../__compositions__/examples/components/input/input-with-helper-text"
export { InputWithHookForm as HookForm } from "../__compositions__/examples/components/input/input-with-hook-form"
export { InputWithKbd as Kbd } from "../__compositions__/examples/components/input/input-with-kbd"
export { InputWithMask as Mask } from "../__compositions__/examples/components/input/input-with-mask"
export { InputWithSelect as Select } from "../__compositions__/examples/components/input/input-with-select"
export { InputWithStartAddon as StartAddon } from "../__compositions__/examples/components/input/input-with-start-addon"
export { InputWithStartAndEndAddon as StartAndEndAddon } from "../__compositions__/examples/components/input/input-with-start-and-end-addon"
export { InputWithStartAndEndText as StartAndEndText } from "../__compositions__/examples/components/input/input-with-start-and-end-text"
export { InputWithStartElementEndAddon as StartElementEndAddon } from "../__compositions__/examples/components/input/input-with-start-element-end-addon"
export { InputWithStartIcon as StartIcon } from "../__compositions__/examples/components/input/input-with-start-icon"
export { InputWithStartText as StartText } from "../__compositions__/examples/components/input/input-with-start-text"
