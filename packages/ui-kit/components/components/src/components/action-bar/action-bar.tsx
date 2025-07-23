"use client"

import type { Assign } from "@ui-kit/base"
import { Popover as ArkPopover } from "@ui-kit/base/popover"
import {
  type HTMLUIKitProps,
  type SlotRecipeProps,
  type UnstyledProp,
  createSlotRecipeContext,
} from "../../styled-system"

////////////////////////////////////////////////////////////////////////////////////

const {
  withRootProvider,
  withContext,
  useStyles: useActionBarStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "actionBar" })

export { useActionBarStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface ActionBarRootProviderBaseProps
  extends Assign<ArkPopover.RootProviderBaseProps, SlotRecipeProps<"actionBar">>,
    UnstyledProp {}

export interface ActionBarRootProviderProps extends ActionBarRootProviderBaseProps {}

export const ActionBarRootProvider = withRootProvider<ActionBarRootProviderBaseProps>(ArkPopover.RootProvider, {
  defaultProps: {
    lazyMount: true,
    unmountOnExit: true,
  },
})

////////////////////////////////////////////////////////////////////////////////////

export interface ActionBarRootBaseProps
  extends Assign<ArkPopover.RootBaseProps, SlotRecipeProps<"actionBar">>,
    UnstyledProp {}

export interface ActionBarRootProps extends Omit<ActionBarRootBaseProps, "positioning"> {
  children: React.ReactNode
}

export const ActionBarRoot = withRootProvider<ActionBarRootProps>(ArkPopover.Root, {
  defaultProps: {
    autoFocus: false,
    lazyMount: true,
    unmountOnExit: true,
  },
})

////////////////////////////////////////////////////////////////////////////////////

export const ActionBarPropsProvider = PropsProvider as React.Provider<ActionBarRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface ActionBarPositionerProps extends HTMLUIKitProps<"div"> {}

export const ActionBarPositioner = withContext<HTMLDivElement, ActionBarPositionerProps>("div", "positioner", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface ActionBarContentProps extends HTMLUIKitProps<"div", ArkPopover.ContentBaseProps> {}

export const ActionBarContent = withContext<HTMLDivElement, ActionBarContentProps>(ArkPopover.Content, "content", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface ActionBarSeparatorProps extends HTMLUIKitProps<"div"> {}

export const ActionBarSeparator = withContext<HTMLDivElement, ActionBarSeparatorProps>("div", "separator")

////////////////////////////////////////////////////////////////////////////////////

export interface ActionBarSelectionTriggerProps extends HTMLUIKitProps<"button"> {}

export const ActionBarSelectionTrigger = withContext<HTMLButtonElement, ActionBarSelectionTriggerProps>(
  "button",
  "selectionTrigger",
)

////////////////////////////////////////////////////////////////////////////////////

export interface ActionBarCloseTriggerProps extends HTMLUIKitProps<"button", ArkPopover.CloseTriggerProps> {}

export const ActionBarCloseTrigger = withContext<HTMLButtonElement, ActionBarCloseTriggerProps>(
  ArkPopover.CloseTrigger,
  "closeTrigger",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export const ActionBarContext = ArkPopover.Context

export interface ActionBarOpenChangeDetails extends ArkPopover.OpenChangeDetails {}
