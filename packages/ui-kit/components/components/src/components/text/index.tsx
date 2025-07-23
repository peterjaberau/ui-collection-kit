"use client"

import type { Assign } from "@ui-kit/base"
import { type HTMLUIKitProps, type RecipeProps, createRecipeContext } from "../../styled-system"

const { withContext, PropsProvider } = createRecipeContext({
  key: "text",
})

export interface TextProps extends Assign<HTMLUIKitProps<"p">, RecipeProps<"text">> {}

export const Text = withContext<HTMLParagraphElement, TextProps>("p")

export const TextPropsProvider = PropsProvider as React.Provider<TextProps>
