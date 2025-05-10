import { defineTokens } from '@chakra-ui/react'

import { scaleToken } from '../utils'

export const fontSizes = defineTokens.fontSizes({
  '2xs': { value: scaleToken('0.675rem') },
  xs: { value: scaleToken('0.75rem') },
  sm: { value: scaleToken('.875rem') },
  md: { value: scaleToken('1rem') },
  lg: { value: scaleToken('1.125rem') },
  xl: { value: scaleToken('1.5rem') },
  '2xl': { value: scaleToken('1.25rem') },
  '3xl': { value: scaleToken('1.5rem') },
  '4xl': { value: scaleToken('2rem') },
  '5xl': { value: scaleToken('2.5rem') },
  '6xl': { value: scaleToken('3rem') },
  '7xl': { value: scaleToken('3.5rem') },
  '8xl': { value: scaleToken('4.5rem') },
  '9xl': { value: scaleToken('6rem') },
})
