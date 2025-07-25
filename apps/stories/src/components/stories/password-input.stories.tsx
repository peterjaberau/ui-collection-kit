import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Password Input",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { PasswordInputBasic as Basic } from "../compositions/examples/password-input-basic"
export { PasswordInputControlled as Controlled } from "../compositions/examples/password-input-controlled"
export { PasswordInputControlledVisibility as ControlledVisibility } from "../compositions/examples/password-input-controlled-visibility"
export { PasswordInputWithHookForm as HookForm } from "../compositions/examples/password-input-with-hook-form"
export { PasswordInputWithSizes as Sizes } from "../compositions/examples/password-input-with-sizes"
export { PasswordInputWithStrengthIndicator as StrengthIndicator } from "../compositions/examples/password-input-with-strength-indicator"
