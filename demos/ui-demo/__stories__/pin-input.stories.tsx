import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / PinInput",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { PinInputAlphanumeric as Alphanumeric } from "../__compositions__/examples/components/pin-input/pin-input-alphanumeric"
export { PinInputAttached as Attached } from "../__compositions__/examples/components/pin-input/pin-input-attached"
export { PinInputBasic as Basic } from "../__compositions__/examples/components/pin-input/pin-input-basic"
export { PinInputControlled as Controlled } from "../__compositions__/examples/components/pin-input/pin-input-controlled"
export { PinInputWithField as WithField } from "../__compositions__/examples/components/pin-input/pin-input-with-field"
export { PinInputWithHookForm as WithHookForm } from "../__compositions__/examples/components/pin-input/pin-input-with-hook-form"
export { PinInputWithMask as WithMask } from "../__compositions__/examples/components/pin-input/pin-input-with-mask"
export { PinInputWithOtp as WithOtp } from "../__compositions__/examples/components/pin-input/pin-input-with-otp"
export { PinInputWithPlaceholder as WithPlaceholder } from "../__compositions__/examples/components/pin-input/pin-input-with-placeholder"
export { PinInputWithSizes as Sizes } from "../__compositions__/examples/components/pin-input/pin-input-with-sizes"
export { PinInputWithStore as WithStore } from "../__compositions__/examples/components/pin-input/pin-input-with-store"
