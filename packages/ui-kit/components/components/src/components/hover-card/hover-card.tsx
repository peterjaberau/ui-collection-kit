"use client"

import type { Assign } from "@ui-kit/base"
import { HoverCard as ArkHoverCard } from "@ui-kit/base/hover-card"
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
  useStyles: useHoverCardStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "hoverCard" })

export { useHoverCardStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface HoverCardRootProviderBaseProps
  extends Assign<ArkHoverCard.RootProviderBaseProps, SlotRecipeProps<"hoverCard">>,
    UnstyledProp {}

export interface HoverCardRootProviderProps extends HoverCardRootProviderBaseProps {
  children: React.ReactNode
}

export const HoverCardRootProvider = withRootProvider<HoverCardRootProviderProps>(ArkHoverCard.RootProvider)

////////////////////////////////////////////////////////////////////////////////////

export interface HoverCardRootBaseProps
  extends Assign<ArkHoverCard.RootBaseProps, SlotRecipeProps<"hoverCard">>,
    UnstyledProp {}

export interface HoverCardRootProps extends HoverCardRootBaseProps {
  children: React.ReactNode
}

export const HoverCardRoot = withRootProvider<HoverCardRootProps>(ArkHoverCard.Root)

////////////////////////////////////////////////////////////////////////////////////

export const HoverCardPropsProvider = PropsProvider as React.Provider<HoverCardRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface HoverCardTriggerProps extends HTMLUIKitProps<"button", ArkHoverCard.TriggerBaseProps> {}

export const HoverCardTrigger = withContext<HTMLButtonElement, HoverCardTriggerProps>(ArkHoverCard.Trigger, "trigger", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface HoverCardPositionerProps extends HTMLUIKitProps<"div", ArkHoverCard.PositionerBaseProps> {}

export const HoverCardPositioner = withContext<HTMLDivElement, HoverCardPositionerProps>(
  ArkHoverCard.Positioner,
  "positioner",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface HoverCardContentProps extends HTMLUIKitProps<"section", ArkHoverCard.ContentBaseProps> {}

export const HoverCardContent = withContext<HTMLDivElement, HoverCardContentProps>(ArkHoverCard.Content, "content", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface HoverCardArrowTipProps extends HTMLUIKitProps<"div", ArkHoverCard.ArrowTipBaseProps> {}

export const HoverCardArrowTip = withContext<HTMLDivElement, HoverCardArrowTipProps>(
  ArkHoverCard.ArrowTip,
  "arrowTip",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface HoverCardArrowProps extends HTMLUIKitProps<"div", ArkHoverCard.ArrowBaseProps> {}

export const HoverCardArrow = withContext<HTMLDivElement, HoverCardArrowProps>(ArkHoverCard.Arrow, "arrow", {
  forwardAsChild: true,
  defaultProps: { children: <HoverCardArrowTip /> },
})

////////////////////////////////////////////////////////////////////////////////////

export const HoverCardContext = ArkHoverCard.Context

export interface HoverCardOpenChangeDetails extends ArkHoverCard.OpenChangeDetails {}
