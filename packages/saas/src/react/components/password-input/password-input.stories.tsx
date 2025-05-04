import { Stack } from '@chakra-ui/react'

import { PasswordInput } from './index'

export default {
  title: 'SaasUI/Components/PasswordInput',
  component: PasswordInput,
}

export const Basic = () => {
  return <PasswordInput />
}

export const Sizes = () => {
  return (
    <Stack gap="4">
      <PasswordInput size="xs" />
      <PasswordInput size="sm" />
      <PasswordInput size="md" />
    </Stack>
  )
}
