"use client"

import type { Assign, CollectionItem } from "@ui-kit/base"
import { Select as ArkSelect } from "@ui-kit/base/select"
import type { JSX } from "react"
import {
  type HTMLUIKitProps,
  type SlotRecipeProps,
  type UnstyledProp,
  createSlotRecipeContext,
} from "../../styled-system"
import { CheckIcon, ChevronDownIcon, CloseIcon } from "../icons"

////////////////////////////////////////////////////////////////////////////////////

const {
  withProvider,
  withContext,
  useStyles: useSelectStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "select" })

export { useSelectStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface SelectRootProviderBaseProps<T extends CollectionItem = any>
  extends Assign<ArkSelect.RootProviderBaseProps<T>, SlotRecipeProps<"select">>,
    UnstyledProp {}

export interface SelectRootProviderProps<T extends CollectionItem = any>
  extends HTMLUIKitProps<"div", SelectRootProviderBaseProps<T>> {}

interface SelectRootProviderComponent {
  <T extends CollectionItem>(props: SelectRootProviderProps<T>): JSX.Element
}

export const SelectRootProvider = withProvider<HTMLDivElement, SelectRootProviderProps>(
  ArkSelect.RootProvider,
  "root",
  {
    forwardAsChild: true,
  },
) as SelectRootProviderComponent

////////////////////////////////////////////////////////////////////////////////////

export interface SelectRootBaseProps<T extends CollectionItem = any>
  extends Assign<ArkSelect.RootBaseProps<T>, SlotRecipeProps<"select">>,
    UnstyledProp {}

export interface SelectRootProps<T extends CollectionItem = any>
  extends HTMLUIKitProps<"div", SelectRootBaseProps<T>> {}

export interface SelectRootComponent {
  <T extends CollectionItem>(props: SelectRootProps<T> & React.RefAttributes<HTMLDivElement>): JSX.Element
}

export const SelectRoot = withProvider<HTMLDivElement, SelectRootProps>(ArkSelect.Root, "root", {
  forwardAsChild: true,
  defaultProps: { positioning: { sameWidth: true } },
}) as SelectRootComponent

////////////////////////////////////////////////////////////////////////////////////

export const SelectPropsProvider = PropsProvider as React.Provider<SelectRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface SelectTriggerProps extends HTMLUIKitProps<"button", ArkSelect.TriggerBaseProps> {}

export const SelectTrigger = withContext<HTMLButtonElement, SelectTriggerProps>(ArkSelect.Trigger, "trigger", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface SelectPositionerProps extends HTMLUIKitProps<"div", ArkSelect.PositionerBaseProps> {}

export const SelectPositioner = withContext<HTMLDivElement, SelectPositionerProps>(ArkSelect.Positioner, "positioner", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface SelectContentProps extends HTMLUIKitProps<"div", ArkSelect.ContentBaseProps> {}

export const SelectContent = withContext<HTMLDivElement, SelectContentProps>(ArkSelect.Content, "content", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface SelectValueTextProps extends HTMLUIKitProps<"span", ArkSelect.ValueTextBaseProps> {}

export const SelectValueText = withContext<HTMLSpanElement, SelectValueTextProps>(ArkSelect.ValueText, "valueText", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface SelectClearTriggerProps extends HTMLUIKitProps<"button", ArkSelect.ClearTriggerBaseProps> {}

export const SelectClearTrigger = withContext<HTMLButtonElement, SelectClearTriggerProps>(
  ArkSelect.ClearTrigger,
  "clearTrigger",
  {
    forwardAsChild: true,
    defaultProps: { children: <CloseIcon boxSize="1em" /> },
  },
)

////////////////////////////////////////////////////////////////////////////////////

export interface SelectItemGroupProps extends HTMLUIKitProps<"div", ArkSelect.ItemGroupBaseProps> {}

export const SelectItemGroup = withContext<HTMLDivElement, SelectItemGroupProps>(ArkSelect.ItemGroup, "itemGroup", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface SelectItemGroupLabelProps extends HTMLUIKitProps<"div", ArkSelect.ItemGroupLabelBaseProps> {}

export const SelectItemGroupLabel = withContext<HTMLDivElement, SelectItemGroupLabelProps>(
  ArkSelect.ItemGroupLabel,
  "itemGroupLabel",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface SelectItemProps extends HTMLUIKitProps<"div", ArkSelect.ItemBaseProps> {}

export const SelectItem = withContext<HTMLDivElement, SelectItemProps>(ArkSelect.Item, "item", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface SelectItemTextProps extends HTMLUIKitProps<"div", ArkSelect.ItemTextBaseProps> {}

export const SelectItemText = withContext<HTMLDivElement, SelectItemTextProps>(ArkSelect.ItemText, "itemText", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface SelectItemIndicatorProps extends HTMLUIKitProps<"div", ArkSelect.ItemIndicatorBaseProps> {}

export const SelectItemIndicator = withContext<HTMLDivElement, SelectItemIndicatorProps>(
  ArkSelect.ItemIndicator,
  "itemIndicator",
  {
    forwardAsChild: true,
    defaultProps: {
      children: <CheckIcon />,
    },
  },
)

////////////////////////////////////////////////////////////////////////////////////

export interface SelectIndicatorGroupProps extends HTMLUIKitProps<"div"> {}

export const SelectIndicatorGroup = withContext<HTMLDivElement, SelectIndicatorGroupProps>("div", "indicatorGroup")

////////////////////////////////////////////////////////////////////////////////////

export interface SelectIndicatorProps extends HTMLUIKitProps<"div", ArkSelect.ItemIndicatorBaseProps> {}

export const SelectIndicator = withContext<HTMLDivElement, SelectItemIndicatorProps>(ArkSelect.Indicator, "indicator", {
  forwardAsChild: true,
  defaultProps: {
    children: <ChevronDownIcon />,
  },
})

////////////////////////////////////////////////////////////////////////////////////

export interface SelectControlProps extends HTMLUIKitProps<"div", ArkSelect.ControlBaseProps> {}

export const SelectControl = withContext<HTMLDivElement, SelectControlProps>(ArkSelect.Control, "control", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface SelectLabelProps extends HTMLUIKitProps<"label", ArkSelect.LabelBaseProps> {}

export const SelectLabel = withContext<HTMLLabelElement, SelectLabelProps>(ArkSelect.Label, "label", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export const SelectContext = ArkSelect.Context
export const SelectHiddenSelect = ArkSelect.HiddenSelect
export const SelectItemContext = ArkSelect.ItemContext

export interface SelectHighlightChangeDetails<T extends CollectionItem = any>
  extends ArkSelect.HighlightChangeDetails<T> {}

export interface SelectValueChangeDetails<T extends CollectionItem = any> extends ArkSelect.ValueChangeDetails<T> {}

export interface SelectOpenChangeDetails extends ArkSelect.OpenChangeDetails {}
