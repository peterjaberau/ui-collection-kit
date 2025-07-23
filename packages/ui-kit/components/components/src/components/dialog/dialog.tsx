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
  useStyles: useDialogStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "dialog" })

export { useDialogStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface DialogRootProviderBaseProps
  extends Assign<ArkDialog.RootProviderProps, SlotRecipeProps<"dialog">>,
    UnstyledProp {}

export interface DialogRootProviderProps extends DialogRootProviderBaseProps {
  children: React.ReactNode
}

export const DialogRootProvider = withRootProvider<DialogRootProviderProps>(
  ArkDialog.RootProvider,
  {
    defaultProps: { unmountOnExit: true, lazyMount: true },
  },
)

////////////////////////////////////////////////////////////////////////////////////

export interface DialogRootBaseProps
  extends Assign<ArkDialog.RootProps, SlotRecipeProps<"dialog">>,
    UnstyledProp {}

export interface DialogRootProps extends DialogRootBaseProps {
  children: React.ReactNode
}

export const DialogRoot = withRootProvider<DialogRootProps>(ArkDialog.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true },
})

////////////////////////////////////////////////////////////////////////////////////

export const DialogPropsProvider =
  PropsProvider as React.Provider<DialogRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface DialogTriggerProps
  extends HTMLUIKitProps<"button", ArkDialog.TriggerBaseProps> {}

export const DialogTrigger = withContext<HTMLButtonElement, DialogTriggerProps>(
  ArkDialog.Trigger,
  "trigger",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface DialogPositionerProps
  extends HTMLUIKitProps<"div", ArkDialog.PositionerBaseProps> {}

export const DialogPositioner = withContext<
  HTMLDivElement,
  DialogPositionerProps
>(ArkDialog.Positioner, "positioner", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface DialogContentProps
  extends HTMLUIKitProps<"section", ArkDialog.ContentBaseProps> {}

export const DialogContent = withContext<HTMLDivElement, DialogContentProps>(
  ArkDialog.Content,
  "content",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface DialogDescriptionProps
  extends HTMLUIKitProps<"p", ArkDialog.DescriptionBaseProps> {}

export const DialogDescription = withContext<
  HTMLDivElement,
  DialogDescriptionProps
>(ArkDialog.Description, "description", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface DialogTitleProps
  extends HTMLUIKitProps<"h2", ArkDialog.TitleBaseProps> {}

export const DialogTitle = withContext<HTMLDivElement, DialogTitleProps>(
  ArkDialog.Title,
  "title",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface DialogCloseTriggerProps
  extends HTMLUIKitProps<"button", ArkDialog.CloseTriggerBaseProps> {}

export const DialogCloseTrigger = withContext<
  HTMLButtonElement,
  DialogCloseTriggerProps
>(ArkDialog.CloseTrigger, "closeTrigger", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface DialogActionTriggerProps extends HTMLUIKitProps<"button"> {}

export const DialogActionTrigger = forwardRef<
  HTMLButtonElement,
  DialogActionTriggerProps
>(function DialogActionTrigger(props, ref) {
  const dialog = useDialogContext()
  return (
    <uikit.button {...props} ref={ref} onClick={() => dialog.setOpen(false)} />
  )
})

////////////////////////////////////////////////////////////////////////////////////

export interface DialogBackdropProps
  extends HTMLUIKitProps<"div", ArkDialog.BackdropBaseProps> {}

export const DialogBackdrop = withContext<HTMLDivElement, DialogBackdropProps>(
  ArkDialog.Backdrop,
  "backdrop",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface DialogBodyProps extends HTMLUIKitProps<"div"> {}

export const DialogBody = withContext<HTMLDivElement, DialogBodyProps>(
  "div",
  "body",
)

////////////////////////////////////////////////////////////////////////////////////

export interface DialogFooterProps extends HTMLUIKitProps<"footer"> {}

export const DialogFooter = withContext<HTMLDivElement, DialogFooterProps>(
  "div",
  "footer",
)

////////////////////////////////////////////////////////////////////////////////////

export interface DialogHeaderProps extends HTMLUIKitProps<"div"> {}

export const DialogHeader = withContext<HTMLDivElement, DialogHeaderProps>(
  "div",
  "header",
)

////////////////////////////////////////////////////////////////////////////////////

export const DialogContext = ArkDialog.Context

export interface DialogOpenChangeDetails extends ArkDialog.OpenChangeDetails {}
