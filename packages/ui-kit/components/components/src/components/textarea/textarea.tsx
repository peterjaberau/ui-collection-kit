"use client"

import { Field } from "@ui-kit/base/field"
import { type HTMLUIKitProps, type RecipeProps, type UnstyledProp, createRecipeContext } from "../../styled-system"

const { withContext, PropsProvider } = createRecipeContext({
  key: "textarea",
})

export interface TextareaBaseProps extends RecipeProps<"textarea">, Field.TextareaBaseProps, UnstyledProp {}

export interface TextareaProps extends HTMLUIKitProps<"textarea", TextareaBaseProps> {}

export const Textarea = withContext<HTMLTextAreaElement, TextareaProps>(Field.Textarea)

export const TextareaPropsProvider = PropsProvider as React.Provider<TextareaProps>
