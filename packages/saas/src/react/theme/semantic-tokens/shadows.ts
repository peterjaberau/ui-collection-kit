import { defineSemanticTokens } from '@chakra-ui/react'

export const semanticShadows = defineSemanticTokens.shadows({
  xs: {
    value: {
      _light:
        '0 1px 2px 0 #0a0d1408',
      _dark: '0 1px 2px 0 #0a0d1408',
    },
  },
  sm: {
    value: {
      _light:
        '0 2px 4px #1b1c1d0a',
      _dark: '0 2px 4px #1b1c1d0a',
    },
  },
  md: {
    value: {
      _light:
        '0 16px 32px -12px #0e121b1a',
      _dark: '0 16px 32px -12px #0e121b1a',
    },
  },
  lg: {
    value: {
      _light:
        '0px 8px 16px {colors.gray.900/5}, 0px 0px 4px {colors.gray.900/5}',
      _dark: '0px 8px 16px {black/30}, 0px 0px 1px inset {colors.gray.300/5}',
    },
  },
  xl: {
    value: {
      _light:
        '0px 16px 24px {colors.gray.900/5}, 0px 0px 5px {colors.gray.900/5}',
      _dark: '0px 16px 24px {black/30}, 0px 0px 1px inset {colors.gray.300/5}',
    },
  },
  '2xl': {
    value: {
      _light:
        '0px 24px 40px {colors.gray.900/10}, 0px 0px 6px {colors.gray.900/5}',
      _dark: '0px 24px 40px {black/30}, 0px 0px 1px inset {colors.gray.300/5}',
    },
  },
  inner: {
    value: {
      _light: 'inset 0 2px 4px 0 {black/5}',
      _dark: 'inset 0 2px 4px 0 black',
    },
  },
  inset: {
    value: {
      _light: 'inset 0 1px 2px 0 {black/5}',
      _dark:
        'inset 0 -1px 2px 0 {colors.gray.300/4}, inset 0 0 0 1px {colors.gray.300/4}',
    },
  },
})


/*shadows are only xs, s, md
* custom shadow
* shadow for different variants buttons
* */