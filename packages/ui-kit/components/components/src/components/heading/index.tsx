"use client"

import type { Assign } from "@ui-kit/base"
import { type HTMLUIKitProps, type RecipeProps, createRecipeContext } from "../../styled-system"

const { withContext, PropsProvider } = createRecipeContext({
  key: "heading",
})

export interface HeadingProps extends Assign<HTMLUIKitProps<"h2">, RecipeProps<"heading">> {}

export const Heading = withContext<HTMLHeadingElement, HeadingProps>("h2")

export const HeadingPropsProvider = PropsProvider as React.Provider<HeadingProps>
