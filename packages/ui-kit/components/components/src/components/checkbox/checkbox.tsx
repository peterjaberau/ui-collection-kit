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
  useStyles: useCheckboxStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "checkbox" })

export { useCheckboxStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface CheckboxRootProviderBaseProps
  extends Assign<
      ArkCheckbox.RootProviderBaseProps,
      SlotRecipeProps<"checkbox">
    >,
    UnstyledProp {}

export interface CheckboxRootProviderProps
  extends HTMLUIKitProps<"div", CheckboxRootProviderBaseProps> {}

export const CheckboxRootProvider = withProvider<
  HTMLDivElement,
  CheckboxRootProviderProps
>(ArkCheckbox.RootProvider, "root", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface CheckboxRootBaseProps
  extends Assign<ArkCheckbox.RootBaseProps, SlotRecipeProps<"checkbox">>,
    UnstyledProp {}

export interface CheckboxRootProps
  extends HTMLUIKitProps<"label", CheckboxRootBaseProps> {}

export const CheckboxRoot = withProvider<HTMLLabelElement, CheckboxRootProps>(
  ArkCheckbox.Root,
  "root",
  { forwardAsChild: true },
)

export const CheckboxPropsProvider =
  PropsProvider as React.Provider<CheckboxRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface CheckboxLabelProps
  extends HTMLUIKitProps<"span", ArkCheckbox.LabelBaseProps> {}

export const CheckboxLabel = withContext<HTMLElement, CheckboxLabelProps>(
  ArkCheckbox.Label,
  "label",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface CheckboxIndicatorProps extends HTMLUIKitProps<"svg"> {
  checked?: React.ReactElement | undefined
  indeterminate?: React.ReactElement | undefined
}

export const CheckboxIndicator = forwardRef<
  SVGSVGElement,
  CheckboxIndicatorProps
>(function CheckboxIndicator(props, ref) {
  const { checked, indeterminate, ...rest } = props

  const api = useCheckboxContext()
  const styles = useCheckboxStyles()

  if (checked && api.checked) {
    return (
      <uikit.svg
        ref={ref}
        asChild
        {...rest}
        css={[styles.indicator, props.css]}
      >
        {checked}
      </uikit.svg>
    )
  }

  if (indeterminate && api.indeterminate) {
    return (
      <uikit.svg
        ref={ref}
        asChild
        {...rest}
        css={[styles.indicator, props.css]}
      >
        {indeterminate}
      </uikit.svg>
    )
  }

  return (
    <Checkmark
      ref={ref}
      checked={api.checked}
      indeterminate={api.indeterminate}
      disabled={api.disabled}
      unstyled
      {...rest}
      css={[styles.indicator, props.css]}
    />
  )
})

////////////////////////////////////////////////////////////////////////////////////

export interface CheckboxControlProps
  extends HTMLUIKitProps<"div", ArkCheckbox.ControlBaseProps> {}

export const CheckboxControl = withContext<HTMLElement, CheckboxControlProps>(
  ArkCheckbox.Control,
  "control",
  {
    forwardAsChild: true,
    defaultProps: { children: <CheckboxIndicator /> },
  },
)

////////////////////////////////////////////////////////////////////////////////////

export interface CheckboxGroupProps
  extends HTMLUIKitProps<"div", ArkCheckbox.GroupBaseProps> {}

export const CheckboxGroup = uikit(
  ArkCheckbox.Group,
  {
    base: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
    },
  },
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export const CheckboxContext = ArkCheckbox.Context
export const CheckboxHiddenInput = ArkCheckbox.HiddenInput

export interface CheckboxCheckedChangeDetails
  extends ArkCheckbox.CheckedChangeDetails {}
