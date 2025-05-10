import { defineTokens } from '@chakra-ui/react'

export const letterSpacings = defineTokens.letterSpacings({
  tighter: { value: '-0.006' },
  tight: { value: '-0.011em' },
  wide: { value: '0.015em' },
  wider: { value: '0.01em' },
  widest: { value: '0em' },
})
