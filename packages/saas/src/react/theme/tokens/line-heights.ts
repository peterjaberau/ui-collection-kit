import { defineTokens } from '@chakra-ui/react'

import { scaleToken } from '../utils'

export const lineHeights = defineTokens.lineHeights({
  shorter: { value: scaleToken('1') },
  short: { value: scaleToken('1.25') },
  moderate: { value: scaleToken('1.5') },
  tall: { value: scaleToken('2') },
  taller: { value: scaleToken('4') },
  '3': { value: scaleToken('1rem') },
  '4': { value: scaleToken('1.25rem') },
  '5': { value: scaleToken('1.5rem') },
  '6': { value: scaleToken('2rem') },
  '7': { value: scaleToken('2.5rem') },
  '8': { value: scaleToken('3rem') },
  '9': { value: scaleToken('3.5rem') },
  '10': { value: scaleToken('4rem') },
})
