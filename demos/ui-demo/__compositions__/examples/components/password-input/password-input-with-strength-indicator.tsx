import { Stack } from "@chakra-ui/react"
import {
  PasswordInput,
  PasswordStrengthMeter,
} from "@ui-collection-kit/ui"

export const PasswordInputWithStrengthIndicator = () => {
  return (
    <Stack maxW="300px">
      <PasswordInput />
      <PasswordStrengthMeter value={2} />
    </Stack>
  )
}
