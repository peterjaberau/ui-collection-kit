"use client"

import { Field as ArkField } from "@ui-kit/base/field"
import {
  type HTMLUIKitProps,
  type RecipeProps,
  type UnstyledProp,
  createRecipeContext,
} from "../../styled-system"

const { withContext, PropsProvider } = createRecipeContext({
  key: "input",
})

export interface InputBaseProps extends RecipeProps<"input">, UnstyledProp {}

export interface InputProps extends HTMLUIKitProps<"input", InputBaseProps> {}

export const Input = withContext<HTMLInputElement, InputProps>(ArkField.Input)

export const InputPropsProvider = PropsProvider as React.Provider<InputProps>
