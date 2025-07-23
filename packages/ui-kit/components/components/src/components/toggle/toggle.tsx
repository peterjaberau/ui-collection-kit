"use client"

import type { Assign } from "@ui-kit/base"
import { Toggle as ArkToggle } from "@ui-kit/base/toggle"
import {
  type HTMLUIKitProps,
  type SlotRecipeProps,
  type UnstyledProp,
  createSlotRecipeContext,
} from "../../styled-system"

////////////////////////////////////////////////////////////////////////////////////

const {
  withProvider,
  withContext,
  useStyles: useToggleStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "toggle" })

export { useToggleStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface ToggleRootProviderBaseProps
  extends Assign<ArkToggle.RootBaseProps, SlotRecipeProps<"toggle">>,
    UnstyledProp {}

export interface ToggleRootProviderProps extends HTMLUIKitProps<"button", ToggleRootProviderBaseProps> {}

export const ToggleRootProvider = withProvider<HTMLButtonElement, ToggleRootProviderProps>(ArkToggle.Root, "root", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface ToggleRootBaseProps extends Assign<ArkToggle.RootBaseProps, SlotRecipeProps<"toggle">>, UnstyledProp {}

export interface ToggleRootProps extends HTMLUIKitProps<"button", ToggleRootBaseProps> {}

export const ToggleRoot = withProvider<HTMLButtonElement, ToggleRootProps>(ArkToggle.Root, "root", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export const TogglePropsProvider = PropsProvider as React.Provider<ToggleRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface ToggleIndicatorProps extends HTMLUIKitProps<"div", ArkToggle.IndicatorBaseProps> {}

export const ToggleIndicator = withContext<HTMLButtonElement, ToggleIndicatorProps>(ArkToggle.Indicator, "indicator", {
  forwardAsChild: true,
  defaultProps: { _empty: { display: "none" } },
})

////////////////////////////////////////////////////////////////////////////////////

export const ToggleContext = ArkToggle.Context
