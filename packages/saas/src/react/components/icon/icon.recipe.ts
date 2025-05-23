import { defineRecipe } from '@chakra-ui/react'

export const iconRecipe = defineRecipe({
  className: 'chakra-icon',
  base: {
    display: 'inline-block',
    lineHeight: '1em',
    flexShrink: '0',
    color: 'currentcolor',
    verticalAlign: 'middle',
    width: 'var(--icon-size)',
    height: 'var(--icon-size)',
  },

  variants: {
    size: {
      inherit: { '--icon-size': '1em' },
      xs: { '--icon-size': 'sizes.3' },
      sm: { '--icon-size': 'sizes.4' },
      md: { '--icon-size': 'sizes.5' },
      lg: { '--icon-size': 'sizes.6' },
      xl: { '--icon-size': 'sizes.7' },
      '2xl': { '--icon-size': 'sizes.8' },
    },
  },

  defaultVariants: {
    size: 'inherit',
  },
})
