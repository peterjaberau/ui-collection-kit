"use client"

import type { Assign } from "@ui-kit/base"
import { ark } from "@ui-kit/base/factory"
import { Fieldset } from "@ui-kit/base/fieldset"
import { type HTMLUIKitProps, type SlotRecipeProps, createSlotRecipeContext } from "../../styled-system"

const { withProvider, withContext } = createSlotRecipeContext({
  key: "fieldset",
})

interface FieldsetRootBaseProps extends Assign<Fieldset.RootBaseProps, SlotRecipeProps<"fieldset">> {}

export interface FieldsetRootProps extends HTMLUIKitProps<"fieldset", FieldsetRootBaseProps> {}

export const FieldsetRoot = withProvider<HTMLFieldSetElement, FieldsetRootProps>(Fieldset.Root, "root")

export interface FieldsetErrorTextProps extends HTMLUIKitProps<"span", Fieldset.ErrorTextBaseProps> {}

export const FieldsetErrorText = withContext<HTMLSpanElement, FieldsetErrorTextProps>(Fieldset.ErrorText, "errorText")

export interface FieldsetHelperTextProps extends HTMLUIKitProps<"span", Fieldset.HelperTextBaseProps> {}

export const FieldsetHelperText = withContext<HTMLSpanElement, FieldsetHelperTextProps>(
  Fieldset.HelperText,
  "helperText",
)

export interface FieldsetLegendProps extends HTMLUIKitProps<"legend", Fieldset.LegendBaseProps> {}

export const FieldsetLegend = withContext<HTMLLegendElement, FieldsetLegendProps>(Fieldset.Legend, "legend")

export interface FieldsetContentProps extends HTMLUIKitProps<"div"> {}

export const FieldsetContent = withContext<HTMLDivElement, FieldsetContentProps>(ark.div, "content")

export const FieldsetContext = Fieldset.Context
