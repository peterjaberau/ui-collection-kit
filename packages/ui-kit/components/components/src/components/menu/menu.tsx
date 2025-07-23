"use client"

import type { Assign } from "@ui-kit/base"
import { Menu as ArkMenu } from "@ui-kit/base/menu"
import {
  type HTMLUIKitProps,
  type SlotRecipeProps,
  type UnstyledProp,
  createSlotRecipeContext,
} from "../../styled-system"
import { CheckIcon } from "../icons"

////////////////////////////////////////////////////////////////////////////////////

const {
  withRootProvider,
  withContext,
  useStyles: useMenuStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "menu" })

export { useMenuStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface MenuRootProviderBaseProps
  extends Assign<ArkMenu.RootProviderBaseProps, SlotRecipeProps<"menu">>,
    UnstyledProp {}

export interface MenuRootProviderProps extends MenuRootProviderBaseProps {
  children: React.ReactNode
}

export const MenuRootProvider = withRootProvider<MenuRootProviderProps>(ArkMenu.RootProvider)

////////////////////////////////////////////////////////////////////////////////////

export interface MenuRootBaseProps extends Assign<ArkMenu.RootBaseProps, SlotRecipeProps<"menu">>, UnstyledProp {}

export interface MenuRootProps extends MenuRootBaseProps {
  children: React.ReactNode
}

export const MenuRoot = withRootProvider<MenuRootProps>(ArkMenu.Root, {
  defaultProps: { lazyMount: true, unmountOnExit: true },
})

////////////////////////////////////////////////////////////////////////////////////

export const MenuPropsProvider = PropsProvider as React.Provider<MenuRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface MenuTriggerProps extends HTMLUIKitProps<"button", ArkMenu.TriggerBaseProps> {}

export const MenuTrigger = withContext<HTMLButtonElement, MenuTriggerProps>(ArkMenu.Trigger, "trigger", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface MenuContextTriggerProps extends HTMLUIKitProps<"div", ArkMenu.ContextTriggerBaseProps> {}

export const MenuContextTrigger = withContext<HTMLElement, MenuContextTriggerProps>(
  ArkMenu.ContextTrigger,
  "contextTrigger",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface MenuPositionerProps extends HTMLUIKitProps<"div", ArkMenu.PositionerBaseProps> {}

export const MenuPositioner = withContext<HTMLDivElement, MenuPositionerProps>(ArkMenu.Positioner, "positioner", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface MenuSeparatorProps extends HTMLUIKitProps<"div", ArkMenu.SeparatorBaseProps> {}

export const MenuSeparator = withContext<HTMLDivElement, MenuSeparatorProps>(ArkMenu.Separator, "separator", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface MenuContentProps extends HTMLUIKitProps<"div", ArkMenu.ContentBaseProps> {}

export const MenuContent = withContext<HTMLDivElement, MenuContentProps>(ArkMenu.Content, "content", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface MenuArrowTipProps extends HTMLUIKitProps<"div", ArkMenu.ArrowTipBaseProps> {}

export const MenuArrowTip = withContext<HTMLDivElement, MenuArrowTipProps>(ArkMenu.ArrowTip, "arrowTip", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface MenuArrowProps extends HTMLUIKitProps<"div", ArkMenu.ArrowBaseProps> {}

export const MenuArrow = withContext<HTMLDivElement, MenuArrowProps>(ArkMenu.Arrow, "arrow", {
  forwardAsChild: true,
  defaultProps: { children: <MenuArrowTip /> },
})

////////////////////////////////////////////////////////////////////////////////////

export interface MenuIndicatorProps extends HTMLUIKitProps<"div", ArkMenu.IndicatorBaseProps> {}

export const MenuIndicator = withContext<HTMLDivElement, MenuIndicatorProps>(ArkMenu.Indicator, "indicator", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface MenuItemGroupProps extends HTMLUIKitProps<"div", ArkMenu.ItemGroupBaseProps> {}

export const MenuItemGroup = withContext<HTMLDivElement, MenuItemGroupProps>(ArkMenu.ItemGroup, "itemGroup", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface MenuItemGroupLabelProps extends HTMLUIKitProps<"div", ArkMenu.ItemGroupLabelBaseProps> {}

export const MenuItemGroupLabel = withContext<HTMLDivElement, MenuItemGroupLabelProps>(
  ArkMenu.ItemGroupLabel,
  "itemGroupLabel",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface MenuItemProps extends HTMLUIKitProps<"div", ArkMenu.ItemBaseProps> {}

export const MenuItem = withContext<HTMLDivElement, MenuItemProps>(ArkMenu.Item, "item", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface MenuTriggerItemProps extends HTMLUIKitProps<"div", ArkMenu.TriggerItemBaseProps> {}

export const MenuTriggerItem = withContext<HTMLDivElement, MenuTriggerItemProps>(ArkMenu.TriggerItem, "item", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface MenuItemTextProps extends HTMLUIKitProps<"div", ArkMenu.ItemTextBaseProps> {}

export const MenuItemText = withContext<HTMLDivElement, MenuItemTextProps>(ArkMenu.ItemText, "itemText", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface MenuItemCommandProps extends HTMLUIKitProps<"kbd"> {}

export const MenuItemCommand = withContext<HTMLElement, MenuItemCommandProps>("kbd", "itemCommand")

////////////////////////////////////////////////////////////////////////////////////

export interface MenuItemIndicatorProps extends HTMLUIKitProps<"div", ArkMenu.ItemIndicatorBaseProps> {}

export const MenuItemIndicator = withContext<HTMLDivElement, MenuItemIndicatorProps>(
  ArkMenu.ItemIndicator,
  "itemIndicator",
  {
    forwardAsChild: true,
    defaultProps: { children: <CheckIcon boxSize="4" /> },
  },
)

////////////////////////////////////////////////////////////////////////////////////

export interface MenuCheckboxItemProps extends HTMLUIKitProps<"div", ArkMenu.CheckboxItemBaseProps> {}

export const MenuCheckboxItem = withContext<HTMLDivElement, MenuCheckboxItemProps>(ArkMenu.CheckboxItem, "item", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface MenuRadioItemGroupProps extends HTMLUIKitProps<"div", ArkMenu.RadioItemGroupBaseProps> {}

export const MenuRadioItemGroup = withContext<HTMLDivElement, MenuRadioItemGroupProps>(
  ArkMenu.RadioItemGroup,
  "itemGroup",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface MenuRadioItemProps extends HTMLUIKitProps<"div", ArkMenu.RadioItemBaseProps> {}

export const MenuRadioItem = withContext<HTMLDivElement, MenuRadioItemProps>(ArkMenu.RadioItem, "item", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export const MenuContext = ArkMenu.Context
export const MenuItemContext = ArkMenu.ItemContext

export interface MenuOpenChangeDetails extends ArkMenu.OpenChangeDetails {}
export interface MenuSelectionDetails extends ArkMenu.SelectionDetails {}
export interface MenuHighlightChangeDetails extends ArkMenu.HighlightChangeDetails {}
