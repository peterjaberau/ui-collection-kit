"use client"

import type { Assign } from "@ui-kit/base"
import {
  type HTMLUIKitProps,
  type RecipeProps,
  createRecipeContext,
} from "../../styled-system"

const { withContext, PropsProvider } = createRecipeContext({
  key: "mark",
})

export interface MarkProps
  extends Assign<HTMLUIKitProps<"mark">, RecipeProps<"mark">> {}

export const Mark = withContext<HTMLElement, MarkProps>("mark")

export const MarkPropsProvider = PropsProvider as React.Provider<MarkProps>
