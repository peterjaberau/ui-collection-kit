"use client"

import type { Assign } from "@ui-kit/base"
import { Tabs as ArkTabs } from "@ui-kit/base/tabs"
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
  useStyles: useTabsStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "tabs" })

export { useTabsStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface TabsRootProviderBaseProps
  extends Assign<ArkTabs.RootProviderBaseProps, SlotRecipeProps<"tabs">>,
    UnstyledProp {}

export interface TabsRootProviderProps
  extends HTMLUIKitProps<"div", TabsRootProviderBaseProps> {}

export const TabsRootProvider = withProvider<
  HTMLDivElement,
  TabsRootProviderProps
>(ArkTabs.RootProvider, "root", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface TabsRootBaseProps
  extends Assign<ArkTabs.RootBaseProps, SlotRecipeProps<"tabs">>,
    UnstyledProp {}

export interface TabsRootProps
  extends HTMLUIKitProps<"div", TabsRootBaseProps> {}

export const TabsRoot = withProvider<HTMLDivElement, TabsRootProps>(
  ArkTabs.Root,
  "root",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export const TabsPropsProvider =
  PropsProvider as React.Provider<TabsRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface TabsTriggerProps
  extends HTMLUIKitProps<"button", ArkTabs.TriggerBaseProps> {}

export const TabsTrigger = withContext<HTMLButtonElement, TabsTriggerProps>(
  ArkTabs.Trigger,
  "trigger",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface TabsContentProps
  extends HTMLUIKitProps<"div", ArkTabs.ContentBaseProps> {}

export const TabsContent = withContext<HTMLDivElement, TabsContentProps>(
  ArkTabs.Content,
  "content",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface TabsContentGroupProps extends HTMLUIKitProps<"div"> {}

export const TabsContentGroup = withContext<
  HTMLDivElement,
  TabsContentGroupProps
>("div", "contentGroup")

////////////////////////////////////////////////////////////////////////////////////

export interface TabsListProps
  extends HTMLUIKitProps<"div", ArkTabs.ListBaseProps> {}

export const TabsList = withContext<HTMLDivElement, TabsListProps>(
  ArkTabs.List,
  "list",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface TabsIndicatorProps
  extends HTMLUIKitProps<"div", ArkTabs.ListBaseProps> {}

export const TabsIndicator = withContext<HTMLDivElement, TabsIndicatorProps>(
  ArkTabs.Indicator,
  "indicator",
  { forwardAsChild: true },
)
