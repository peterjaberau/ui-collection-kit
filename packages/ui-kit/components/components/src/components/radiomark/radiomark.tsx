"use client"

import { forwardRef } from "react"
import {
  EMPTY_STYLES,
  type HTMLUIKitProps,
  type RecipeProps,
  type UnstyledProp,
  uikit,
  useRecipe,
} from "../../styled-system"
import { dataAttr } from "../../utils"

export interface RadiomarkProps
  extends HTMLUIKitProps<"span", RecipeProps<"radiomark">>,
    UnstyledProp {
  /**
   * Whether the checkmark is checked
   */
  checked?: boolean | undefined
  /**
   * Whether the checkmark is disabled
   */
  disabled?: boolean | undefined
}

export const Radiomark = forwardRef<HTMLSpanElement, RadiomarkProps>(
  function Radiomark(props, ref) {
    const recipe = useRecipe({ key: "radiomark", recipe: props.recipe })
    const [variantProps, restProps] = recipe.splitVariantProps(props)

    const { checked, disabled, unstyled, children, ...rest } = restProps

    const styles = unstyled ? EMPTY_STYLES : recipe(variantProps)

    const sharedProps = {
      ref,
      "data-checked": dataAttr(checked),
      "data-disabled": dataAttr(disabled),
      ...rest,
      css: [styles, props.css],
    }

    return (
      <uikit.span {...sharedProps}>
        {checked && <span className="dot" />}
      </uikit.span>
    )
  },
)
