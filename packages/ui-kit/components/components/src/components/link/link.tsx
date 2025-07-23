"use client"

import { type HTMLUIKitProps, type RecipeProps, type UnstyledProp, createRecipeContext } from "../../styled-system"

const { withContext, PropsProvider } = createRecipeContext({
  key: "link",
})

export interface LinkBaseProps extends RecipeProps<"link">, UnstyledProp {}

export interface LinkProps extends HTMLUIKitProps<"a", LinkBaseProps> {}

export const Link = withContext<HTMLAnchorElement, LinkProps>("a")

export const LinkPropsProvider = PropsProvider as React.Provider<LinkProps>
