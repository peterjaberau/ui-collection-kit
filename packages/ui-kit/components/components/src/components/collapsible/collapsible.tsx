"use client"

import type { Assign } from "@ui-kit/base"
import { Collapsible as ArkCollapsible } from "@ui-kit/base/collapsible"
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
  useStyles: useCollapsibleStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "collapsible" })

export { useCollapsibleStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface CollapsibleRootProviderBaseProps
  extends Assign<
      ArkCollapsible.RootProviderBaseProps,
      SlotRecipeProps<"collapsible">
    >,
    UnstyledProp {}

export interface CollapsibleRootProviderProps
  extends HTMLUIKitProps<"div", CollapsibleRootProviderBaseProps> {}

export const CollapsibleRootProvider = withProvider<
  HTMLDivElement,
  CollapsibleRootProviderProps
>(ArkCollapsible.RootProvider, "root", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface CollapsibleRootBaseProps
  extends Assign<ArkCollapsible.RootBaseProps, SlotRecipeProps<"collapsible">>,
    UnstyledProp {}

export interface CollapsibleRootProps
  extends HTMLUIKitProps<"div", CollapsibleRootBaseProps> {}

export const CollapsibleRoot = withProvider<
  HTMLDivElement,
  CollapsibleRootProps
>(ArkCollapsible.Root, "root", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export const CollapsiblePropsProvider =
  PropsProvider as React.Provider<CollapsibleRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface CollapsibleTriggerProps
  extends HTMLUIKitProps<"button", ArkCollapsible.TriggerBaseProps> {}

export const CollapsibleTrigger = withContext<
  HTMLButtonElement,
  CollapsibleTriggerProps
>(ArkCollapsible.Trigger, "trigger", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface CollapsibleContentProps
  extends HTMLUIKitProps<"div", ArkCollapsible.ContentBaseProps> {}

export const CollapsibleContent = withContext<
  HTMLDivElement,
  CollapsibleContentProps
>(ArkCollapsible.Content, "content", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export const CollapsibleContext = ArkCollapsible.Context

export interface CollapsibleOpenChangeDetails
  extends ArkCollapsible.OpenChangeDetails {}
