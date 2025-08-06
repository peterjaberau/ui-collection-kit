import {
  type RecipeProps as ChakraRecipeProps,
  type SlotRecipeProps as ChakraSlotRecipeProps,
  type RecipeDefinition,
} from '@chakra-ui/react'

export type RecipeProps<T, DefaultRecipe> =
  ChakraRecipeProps<T> extends { recipe?: RecipeDefinition }
    ? ChakraRecipeProps<T> & DefaultRecipe
    : ChakraRecipeProps<T>

export type SlotRecipeProps<T, DefaultSlotRecipe> =
  ChakraSlotRecipeProps<T> extends { variant?: any }
    ? ChakraSlotRecipeProps<T>
    : ChakraSlotRecipeProps<T> & DefaultSlotRecipe

