"use client"

import {
  type HTMLUIKitProps,
  type RecipeProps,
  type UnstyledProp,
  createRecipeContext,
} from "../../styled-system"

const { withContext, PropsProvider } = createRecipeContext({
  key: "container",
})

export interface ContainerBaseProps
  extends RecipeProps<"container">,
    UnstyledProp {}

export interface ContainerProps
  extends HTMLUIKitProps<"div", ContainerBaseProps> {}

export const Container = withContext<HTMLDivElement, ContainerProps>("div")

export const ContainerPropsProvider =
  PropsProvider as React.Provider<ContainerBaseProps>
