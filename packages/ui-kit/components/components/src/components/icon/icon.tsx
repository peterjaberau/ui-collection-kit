"use client"

import * as React from "react"
import { type HTMLUIKitProps, type RecipeProps, uikit, createRecipeContext } from "../../styled-system"
import { cx } from "../../utils"

const { useRecipeResult, PropsProvider } = createRecipeContext({ key: "icon" })

export interface IconProps extends HTMLUIKitProps<"svg">, RecipeProps<"icon"> {}

/**
 * The Icon component renders as an svg element to help define your own custom components.
 *
 * @see Docs #/docs/components/icon#using-the-icon-component
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(function Icon(props, ref) {
  const { styles, className, props: otherProps } = useRecipeResult({ asChild: !props.as, ...props })
  return (
    <uikit.svg
      ref={ref}
      focusable={false}
      aria-hidden="true"
      {...otherProps}
      css={[styles, props.css]}
      className={cx(className, props.className)}
    />
  )
})

export const IconPropsProvider = PropsProvider as React.Provider<IconProps>
