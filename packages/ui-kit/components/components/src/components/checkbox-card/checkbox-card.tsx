"use client"

import type { Assign } from "@ui-kit/base"
import {
  Checkbox as ArkCheckbox,
  useCheckboxContext,
} from "@ui-kit/base/checkbox"
import { forwardRef } from "react"
import {
  type HTMLUIKitProps,
  type SlotRecipeProps,
  type UnstyledProp,
  uikit,
  createSlotRecipeContext,
} from "../../styled-system"
import { Checkmark } from "../checkmark"

////////////////////////////////////////////////////////////////////////////////////

const {
  withProvider,
  withContext,
  useStyles: useCheckboxCardStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "checkboxCard" })

export { useCheckboxCardStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface CheckboxCardRootProviderBaseProps
  extends Assign<
      ArkCheckbox.RootProviderBaseProps,
      SlotRecipeProps<"checkboxCard">
    >,
    UnstyledProp {}

export interface CheckboxCardRootProviderProps
  extends HTMLUIKitProps<"label", CheckboxCardRootProviderBaseProps> {}

export const CheckboxCardRootProvider = withProvider<
  HTMLLabelElement,
  CheckboxCardRootProviderProps
>(ArkCheckbox.RootProvider, "root", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface CheckboxCardRootBaseProps
  extends Assign<ArkCheckbox.RootBaseProps, SlotRecipeProps<"checkboxCard">>,
    UnstyledProp {}

export interface CheckboxCardRootProps
  extends HTMLUIKitProps<"label", CheckboxCardRootBaseProps> {}

export const CheckboxCardRoot = withProvider<
  HTMLLabelElement,
  CheckboxCardRootProps
>(ArkCheckbox.Root, "root", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export const CheckboxCardRootPropsProvider =
  PropsProvider as React.Provider<CheckboxCardRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface CheckboxCardLabelProps
  extends HTMLUIKitProps<"span", ArkCheckbox.LabelBaseProps> {}

export const CheckboxCardLabel = withContext<
  HTMLElement,
  CheckboxCardLabelProps
>(ArkCheckbox.Label, "label", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface CheckboxCardDescriptionProps extends HTMLUIKitProps<"div"> {}

export const CheckboxCardDescription = forwardRef<
  HTMLDivElement,
  CheckboxCardDescriptionProps
>(function CheckboxCardDescription(props, ref) {
  const styles = useCheckboxCardStyles()
  const api = useCheckboxContext()
  return (
    <uikit.div
      ref={ref}
      {...props}
      css={[styles.description, props.css]}
      data-disabled={api.disabled ? "" : undefined}
      data-state={api.checked ? "checked" : "unchecked"}
    />
  )
})

////////////////////////////////////////////////////////////////////////////////////

export interface CheckboxCardControlProps
  extends HTMLUIKitProps<"div", ArkCheckbox.ControlBaseProps> {}

export const CheckboxCardControl = withContext<
  HTMLDivElement,
  CheckboxCardControlProps
>(ArkCheckbox.Control, "control", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface CheckboxCardContentProps extends HTMLUIKitProps<"div"> {}

export const CheckboxCardContent = withContext<
  HTMLDivElement,
  CheckboxCardContentProps
>("div", "content")

////////////////////////////////////////////////////////////////////////////////////

export interface CheckboxCardIndicatorProps extends HTMLUIKitProps<"svg"> {}

export const CheckboxCardIndicator = forwardRef<
  SVGSVGElement,
  CheckboxCardIndicatorProps
>(function CheckboxCardIndicator(props, ref) {
  const api = useCheckboxContext()
  const styles = useCheckboxCardStyles()
  return (
    <Checkmark
      ref={ref}
      checked={api.checked}
      indeterminate={api.indeterminate}
      disabled={api.disabled}
      unstyled
      {...props}
      css={[styles.indicator, props.css]}
    />
  )
})

////////////////////////////////////////////////////////////////////////////////////

export interface CheckboxCardAddonProps extends HTMLUIKitProps<"div"> {}

export const CheckboxCardAddon = withContext<
  HTMLElement,
  CheckboxCardAddonProps
>("div", "addon")

////////////////////////////////////////////////////////////////////////////////////

export const CheckboxCardContext = ArkCheckbox.Context
export const CheckboxCardHiddenInput = ArkCheckbox.HiddenInput

export interface CheckboxCardCheckedChangeDetails
  extends ArkCheckbox.CheckedChangeDetails {}
