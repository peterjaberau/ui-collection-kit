import { defineRecipe } from '@chakra-ui/react'

import { badgeRecipe } from '../badge/badge.recipe'

const { variants, defaultVariants } = badgeRecipe

export const codeRecipe = defineRecipe({
  className: 'chakra-code',
  base: {
    fontFamily: 'mono',
    alignItems: 'center',
    display: 'inline-flex',
    borderRadius: 'indicator.md',
  },
  variants,
  defaultVariants,
})
