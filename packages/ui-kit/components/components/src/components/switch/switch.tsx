"use client"

import type { Assign } from "@ui-kit/base"
import { Switch as ArkSwitch, useSwitchContext } from "@ui-kit/base/switch"
import { forwardRef } from "react"
import {
  type HTMLUIKitProps,
  type SlotRecipeProps,
  type UnstyledProp,
  uikit,
  createSlotRecipeContext,
} from "../../styled-system"
import { dataAttr } from "../../utils"

////////////////////////////////////////////////////////////////////////////////////

const {
  withProvider,
  withContext,
  useStyles: useSwitchStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "switch" })

export { useSwitchStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface SwitchRootProviderBaseProps
  extends Assign<ArkSwitch.RootProviderBaseProps, SlotRecipeProps<"switch">>,
    UnstyledProp {}

export interface SwitchRootProviderProps extends HTMLUIKitProps<"label", SwitchRootProviderBaseProps> {}

export const SwitchRootProvider = withProvider<HTMLLabelElement, SwitchRootProviderProps>(
  ArkSwitch.RootProvider,
  "root",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface SwitchRootBaseProps extends Assign<ArkSwitch.RootBaseProps, SlotRecipeProps<"switch">>, UnstyledProp {}

export interface SwitchRootProps extends HTMLUIKitProps<"label", SwitchRootBaseProps> {}

export const SwitchRoot = withProvider<HTMLLabelElement, SwitchRootProps>(ArkSwitch.Root, "root", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export const SwitchPropsProvider = PropsProvider as React.Provider<SwitchRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface SwitchLabelProps extends HTMLUIKitProps<"span", ArkSwitch.LabelBaseProps> {}

export const SwitchLabel = withContext<HTMLSpanElement, SwitchLabelProps>(ArkSwitch.Label, "label", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface SwitchThumbProps extends HTMLUIKitProps<"span", ArkSwitch.ThumbBaseProps> {}

export const SwitchThumb = withContext<HTMLSpanElement, SwitchThumbProps>(ArkSwitch.Thumb, "thumb", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface SwitchControlProps extends HTMLUIKitProps<"span", ArkSwitch.ControlBaseProps> {}

export const SwitchControl = withContext<HTMLSpanElement, SwitchControlProps>(ArkSwitch.Control, "control", {
  forwardAsChild: true,
  defaultProps: { children: <SwitchThumb /> },
})

////////////////////////////////////////////////////////////////////////////////////

export interface SwitchIndicatorProps extends HTMLUIKitProps<"span"> {
  fallback?: React.ReactNode | undefined
}

export const SwitchIndicator = forwardRef<HTMLSpanElement, SwitchIndicatorProps>(function SwitchIndicator(props, ref) {
  const api = useSwitchContext()
  const styles = useSwitchStyles()
  const { fallback, children, ...rest } = props
  return (
    <uikit.span ref={ref} data-checked={dataAttr(api.checked)} {...rest} css={[styles.indicator, props.css]}>
      {api.checked ? children : fallback}
    </uikit.span>
  )
})

////////////////////////////////////////////////////////////////////////////////////

export interface SwitchThumbIndicatorProps extends HTMLUIKitProps<"span"> {
  fallback?: React.ReactNode | undefined
}

export const SwitchThumbIndicator = forwardRef<HTMLSpanElement, SwitchThumbIndicatorProps>(
  function SwitchThumbIndicator(props, ref) {
    const api = useSwitchContext()
    const { fallback, children, ...rest } = props
    return (
      <uikit.span ref={ref} data-checked={dataAttr(api.checked)} {...rest}>
        {api.checked ? children : fallback}
      </uikit.span>
    )
  },
)

////////////////////////////////////////////////////////////////////////////////////

export const SwitchContext = ArkSwitch.Context
export const SwitchHiddenInput = ArkSwitch.HiddenInput

export interface SwitchCheckedChangeDetails extends ArkSwitch.CheckedChangeDetails {}
