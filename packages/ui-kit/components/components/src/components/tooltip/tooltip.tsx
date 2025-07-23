"use client"

import type { Assign } from "@ui-kit/base"
import { Tooltip as ArkTooltip } from "@ui-kit/base/tooltip"
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
  useStyles: useTooltipStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "tooltip" })

export { useTooltipStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface TooltipRootProviderBaseProps
  extends Assign<ArkTooltip.RootProviderBaseProps, SlotRecipeProps<"tooltip">>,
    UnstyledProp {}

export interface TooltipRootProviderProps extends TooltipRootProviderBaseProps {
  children?: React.ReactNode | undefined
}

export const TooltipRootProvider = withRootProvider<TooltipRootProviderProps>(ArkTooltip.RootProvider)

////////////////////////////////////////////////////////////////////////////////////

export interface TooltipRootBaseProps
  extends Assign<ArkTooltip.RootBaseProps, SlotRecipeProps<"tooltip">>,
    UnstyledProp {}

export interface TooltipRootProps extends TooltipRootBaseProps {
  children?: React.ReactNode | undefined
}

export const TooltipRoot = withRootProvider<TooltipRootProps>(ArkTooltip.Root, {
  defaultProps: { lazyMount: true, unmountOnExit: true },
})

////////////////////////////////////////////////////////////////////////////////////

export const TooltipPropsProvider = PropsProvider as React.Provider<TooltipRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface TooltipTriggerProps extends HTMLUIKitProps<"button", ArkTooltip.TriggerProps> {}

export const TooltipTrigger = withContext<HTMLButtonElement, TooltipTriggerProps>(ArkTooltip.Trigger, "trigger", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface TooltipPositionerProps extends HTMLUIKitProps<"div", ArkTooltip.PositionerProps> {}

export const TooltipPositioner = withContext<HTMLDivElement, TooltipPositionerProps>(
  ArkTooltip.Positioner,
  "positioner",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface TooltipContentProps extends HTMLUIKitProps<"section", ArkTooltip.ContentProps> {}

export const TooltipContent = withContext<HTMLDivElement, TooltipContentProps>(ArkTooltip.Content, "content", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface TooltipArrowTipProps extends HTMLUIKitProps<"div", ArkTooltip.ArrowTipProps> {}

export const TooltipArrowTip = withContext<HTMLDivElement, TooltipArrowTipProps>(ArkTooltip.ArrowTip, "arrowTip", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface TooltipArrowProps extends HTMLUIKitProps<"div", ArkTooltip.ArrowProps> {}

export const TooltipArrow = withContext<HTMLDivElement, TooltipArrowProps>(ArkTooltip.Arrow, "arrow", {
  forwardAsChild: true,
  defaultProps: { children: <TooltipArrowTip /> },
})

////////////////////////////////////////////////////////////////////////////////////

export const TooltipContext = ArkTooltip.Context

export interface TooltipOpenChangeDetails extends ArkTooltip.OpenChangeDetails {}
