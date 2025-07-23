"use client"

import type { Assign } from "@ui-kit/base"
import { SegmentGroup as ArkSegmentGroup } from "@ui-kit/base/segment-group"
import { useMemo } from "react"
import {
  type HTMLUIKitProps,
  type SlotRecipeProps,
  type UnstyledProp,
  createSlotRecipeContext,
} from "../../styled-system"
import { For } from "../for"

////////////////////////////////////////////////////////////////////////////////////

const {
  withProvider,
  withContext,
  useStyles: useSegmentGroupStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "segmentGroup" })

export { useSegmentGroupStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface SegmentGroupRootProviderBaseProps
  extends Assign<
      ArkSegmentGroup.RootProviderBaseProps,
      SlotRecipeProps<"segmentGroup">
    >,
    UnstyledProp {}

export interface SegmentGroupRootProviderProps
  extends HTMLUIKitProps<"div", SegmentGroupRootProviderBaseProps> {}

export const SegmentGroupRootProvider = withProvider<
  HTMLDivElement,
  SegmentGroupRootProviderProps
>(ArkSegmentGroup.RootProvider, "root", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface SegmentGroupRootBaseProps
  extends Assign<
      ArkSegmentGroup.RootBaseProps,
      SlotRecipeProps<"segmentGroup">
    >,
    UnstyledProp {}

export interface SegmentGroupRootProps
  extends HTMLUIKitProps<"div", SegmentGroupRootBaseProps> {}

export const SegmentGroupRoot = withProvider<
  HTMLDivElement,
  SegmentGroupRootProps
>(ArkSegmentGroup.Root, "root", {
  forwardAsChild: true,
  forwardProps: ["orientation"],
  defaultProps: {
    orientation: "horizontal",
  },
})

////////////////////////////////////////////////////////////////////////////////////

export const SegmentGroupPropsProvider =
  PropsProvider as React.Provider<SegmentGroupRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface SegmentGroupItemProps
  extends HTMLUIKitProps<"label", ArkSegmentGroup.ItemBaseProps> {}

export const SegmentGroupItem = withContext<
  HTMLLabelElement,
  SegmentGroupItemProps
>(ArkSegmentGroup.Item, "item", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface SegmentGroupItemTextProps
  extends HTMLUIKitProps<"span", ArkSegmentGroup.ItemTextBaseProps> {}

export const SegmentGroupItemText = withContext<
  HTMLSpanElement,
  SegmentGroupItemTextProps
>(ArkSegmentGroup.ItemText, "itemText", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface SegmentGroupIndicatorProps
  extends HTMLUIKitProps<"div", ArkSegmentGroup.IndicatorBaseProps> {}

export const SegmentGroupIndicator = withContext<
  HTMLSpanElement,
  SegmentGroupIndicatorProps
>(ArkSegmentGroup.Indicator, "indicator", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

interface Item {
  value: string
  label: React.ReactNode
  disabled?: boolean | undefined
}

export interface SegmentGroupItemsProps
  extends Omit<SegmentGroupItemProps, "value"> {
  items: Array<string | Item>
}

function normalize(items: Array<string | Item>): Item[] {
  return items.map((item) => {
    if (typeof item === "string") return { value: item, label: item }
    return item
  })
}

export const SegmentGroupItems = (props: SegmentGroupItemsProps) => {
  const { items, ...rest } = props
  const data = useMemo(() => normalize(items), [items])
  return (
    <For each={data}>
      {(item) => (
        <SegmentGroupItem
          key={item.value}
          value={item.value}
          disabled={item.disabled}
          {...rest}
        >
          <SegmentGroupItemText>{item.label}</SegmentGroupItemText>
          <SegmentGroupItemHiddenInput />
        </SegmentGroupItem>
      )}
    </For>
  )
}

////////////////////////////////////////////////////////////////////////////////////

export const SegmentGroupItemHiddenInput = ArkSegmentGroup.ItemHiddenInput

export const SegmentGroupContext = ArkSegmentGroup.Context
export const SegmentGroupItemContext = ArkSegmentGroup.ItemContext

export interface SegmentGroupValueChangeDetails
  extends ArkSegmentGroup.ValueChangeDetails {}
