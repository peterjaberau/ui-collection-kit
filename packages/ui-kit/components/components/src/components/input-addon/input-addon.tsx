"use client"

import { forwardRef } from "react"
import {
  EMPTY_SLOT_STYLES,
  type HTMLUIKitProps,
  type RecipeProps,
  type UnstyledProp,
  uikit,
  useRecipe,
} from "../../styled-system"

export interface InputAddonProps extends HTMLUIKitProps<"div">, RecipeProps<"inputAddon">, UnstyledProp {}

export const InputAddon = forwardRef<HTMLDivElement, InputAddonProps>(function InputAddon({ unstyled, ...props }, ref) {
  const recipe = useRecipe({ key: "inputAddon", recipe: props.recipe })
  const [variantProps, localProps] = recipe.splitVariantProps(props)
  const styles = unstyled ? EMPTY_SLOT_STYLES : recipe(variantProps)
  return <uikit.div ref={ref} {...localProps} css={[styles, props.css]} />
})
