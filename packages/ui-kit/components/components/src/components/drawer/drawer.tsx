"use client"

import type { Assign } from "@ui-kit/base"
import { Dialog as ArkDialog, useDialogContext } from "@ui-kit/base/dialog"
import { forwardRef } from "react"
import {
  type HTMLUIKitProps,
  type SlotRecipeProps,
  type UnstyledProp,
  uikit,
  createSlotRecipeContext,
} from "../../styled-system"

////////////////////////////////////////////////////////////////////////////////////

const {
  withRootProvider,
  withContext,
  useStyles: useDrawerStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "drawer" })

export { useDrawerStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface DrawerRootProviderBaseProps
  extends Assign<ArkDialog.RootProviderBaseProps, SlotRecipeProps<"drawer">>,
    UnstyledProp {}

export interface DrawerRootProviderProps extends DrawerRootProviderBaseProps {
  children: React.ReactNode
}

export const DrawerRootProvider = withRootProvider<DrawerRootProviderProps>(ArkDialog.RootProvider, {
  defaultProps: { unmountOnExit: true, lazyMount: true },
})

////////////////////////////////////////////////////////////////////////////////////

export interface DrawerRootBaseProps extends Assign<ArkDialog.RootBaseProps, SlotRecipeProps<"drawer">>, UnstyledProp {}

export interface DrawerRootProps extends DrawerRootBaseProps {
  children: React.ReactNode
}

export const DrawerRoot = withRootProvider<DrawerRootProps>(ArkDialog.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true },
})

////////////////////////////////////////////////////////////////////////////////////

export const DrawerRootPropsProvider = PropsProvider as React.Provider<DrawerRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface DrawerTriggerProps extends HTMLUIKitProps<"button", ArkDialog.TriggerBaseProps> {}

export const DrawerTrigger = withContext<HTMLButtonElement, DrawerTriggerProps>(ArkDialog.Trigger, "trigger", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface DrawerPositionerProps extends HTMLUIKitProps<"div", ArkDialog.PositionerBaseProps> {}

export const DrawerPositioner = withContext<HTMLDivElement, DrawerPositionerProps>(ArkDialog.Positioner, "positioner", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface DrawerContentProps extends HTMLUIKitProps<"section", ArkDialog.ContentBaseProps> {}

export const DrawerContent = withContext<HTMLDivElement, DrawerContentProps>(ArkDialog.Content, "content", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface DrawerDescriptionProps extends HTMLUIKitProps<"p", ArkDialog.DescriptionBaseProps> {}

export const DrawerDescription = withContext<HTMLDivElement, DrawerDescriptionProps>(
  ArkDialog.Description,
  "description",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface DrawerTitleProps extends HTMLUIKitProps<"h2", ArkDialog.TitleBaseProps> {}

export const DrawerTitle = withContext<HTMLDivElement, DrawerTitleProps>(ArkDialog.Title, "title", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface DrawerCloseTriggerProps extends HTMLUIKitProps<"button", ArkDialog.CloseTriggerBaseProps> {}

export const DrawerCloseTrigger = withContext<HTMLButtonElement, DrawerCloseTriggerProps>(
  ArkDialog.CloseTrigger,
  "closeTrigger",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface DrawerActionTriggerProps extends HTMLUIKitProps<"button"> {}

export const DrawerActionTrigger = forwardRef<HTMLButtonElement, DrawerActionTriggerProps>(
  function DrawerActionTrigger(props, ref) {
    const drawer = useDialogContext()
    return <uikit.button {...props} ref={ref} onClick={() => drawer.setOpen(false)} />
  },
)

////////////////////////////////////////////////////////////////////////////////////

export interface DrawerBackdropProps extends HTMLUIKitProps<"div", ArkDialog.BackdropBaseProps> {}

export const DrawerBackdrop = withContext<HTMLDivElement, DrawerBackdropProps>(ArkDialog.Backdrop, "backdrop", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface DrawerBodyProps extends HTMLUIKitProps<"div"> {}

export const DrawerBody = withContext<HTMLDivElement, DrawerBodyProps>("div", "body")

////////////////////////////////////////////////////////////////////////////////////

export interface DrawerFooterProps extends HTMLUIKitProps<"footer"> {}

export const DrawerFooter = withContext<HTMLDivElement, DrawerFooterProps>("div", "footer")

////////////////////////////////////////////////////////////////////////////////////

export interface DrawerHeaderProps extends HTMLUIKitProps<"div"> {}

export const DrawerHeader = withContext<HTMLDivElement, DrawerHeaderProps>("div", "header")

////////////////////////////////////////////////////////////////////////////////////

export const DrawerContext = ArkDialog.Context

export interface DrawerOpenChangeDetails extends ArkDialog.OpenChangeDetails {}
