"use client"

import type { Assign } from "@ui-kit/base"
import { Accordion as ArkAccordion } from "@ui-kit/base/accordion"
import {
  type HTMLUIKitProps,
  type SlotRecipeProps,
  type UnstyledProp,
  createSlotRecipeContext,
} from "../../styled-system"
import { ChevronDownIcon } from "../icons"

////////////////////////////////////////////////////////////////////////////////////

const {
  withProvider,
  withContext,
  useStyles: useAccordionStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "accordion" })

export { useAccordionStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface AccordionRootProviderBaseProps
  extends Assign<ArkAccordion.RootProviderBaseProps, SlotRecipeProps<"accordion">>,
    UnstyledProp {}

export interface AccordionRootProviderProps extends HTMLUIKitProps<"div", AccordionRootProviderBaseProps> {}

export const AccordionRootProvider = withProvider<HTMLDivElement, AccordionRootProviderProps>(
  ArkAccordion.RootProvider,
  "root",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface AccordionRootBaseProps
  extends Assign<ArkAccordion.RootBaseProps, SlotRecipeProps<"accordion">>,
    UnstyledProp {}

export interface AccordionRootProps extends HTMLUIKitProps<"div", AccordionRootBaseProps> {}

export const AccordionRoot = withProvider<HTMLDivElement, AccordionRootProps>(ArkAccordion.Root, "root", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export const AccordionPropsProvider = PropsProvider as React.Provider<ArkAccordion.RootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface AccordionItemProps extends HTMLUIKitProps<"div", ArkAccordion.ItemBaseProps> {}

export const AccordionItem = withContext<HTMLDivElement, AccordionItemProps>(ArkAccordion.Item, "item", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface AccordionItemContentProps extends HTMLUIKitProps<"div", ArkAccordion.ItemContentBaseProps> {}

export const AccordionItemContent = withContext<HTMLDivElement, AccordionItemContentProps>(
  ArkAccordion.ItemContent,
  "itemContent",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface AccordionItemBodyProps extends HTMLUIKitProps<"div"> {}

export const AccordionItemBody = withContext<HTMLDivElement, AccordionItemBodyProps>("div", "itemBody")

////////////////////////////////////////////////////////////////////////////////////

export interface AccordionItemTriggerProps extends HTMLUIKitProps<"button", ArkAccordion.ItemTriggerBaseProps> {}

export const AccordionItemTrigger = withContext<HTMLButtonElement, AccordionItemTriggerProps>(
  ArkAccordion.ItemTrigger,
  "itemTrigger",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface AccordionItemIndicatorProps extends HTMLUIKitProps<"button", ArkAccordion.ItemIndicatorBaseProps> {}

export const AccordionItemIndicator = withContext<HTMLDivElement, AccordionItemIndicatorProps>(
  ArkAccordion.ItemIndicator,
  "itemIndicator",
  {
    forwardAsChild: true,
    defaultProps: {
      children: <ChevronDownIcon />,
    },
  },
)

////////////////////////////////////////////////////////////////////////////////////

export const AccordionContext = ArkAccordion.Context
export const AccordionItemContext = ArkAccordion.ItemContext

export interface AccordionFocusChangeDetails extends ArkAccordion.FocusChangeDetails {}

export interface AccordionValueChangeDetails extends ArkAccordion.ValueChangeDetails {}
