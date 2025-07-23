"use client"

import { forwardRef } from "react"
import { type HTMLUIKitProps, type RecipeProps, uikit, useRecipe } from "../../styled-system"

export interface SkipNavLinkProps extends HTMLUIKitProps<"a">, RecipeProps<"skipNavLink"> {}

export const fallbackId = "uikit-skip-nav"

/**
 * Renders a link that remains hidden until focused to skip to the main content.
 *
 * @see Docs #/docs/components/skip-nav
 */
export const SkipNavLink = forwardRef<HTMLAnchorElement, SkipNavLinkProps>(function SkipNavLink(props, ref) {
  const recipe = useRecipe({ key: "skipNavLink", recipe: props.recipe })
  const [variantProps, localProps] = recipe.splitVariantProps(props)
  const styles = recipe(variantProps)

  localProps.id ||= fallbackId

  return <uikit.a {...localProps} ref={ref} href={`#${localProps.id}`} css={[styles, props.css]} />
})
