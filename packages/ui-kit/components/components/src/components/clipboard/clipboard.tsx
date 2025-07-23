"use client"

import type { Assign } from "@ui-kit/base"
import { Clipboard as ArkClipboard } from "@ui-kit/base/clipboard"
import { forwardRef } from "react"
import {
  type HTMLUIKitProps,
  type SlotRecipeProps,
  type UnstyledProp,
  createSlotRecipeContext,
} from "../../styled-system"
import { CheckIcon, CopyIcon } from "../icons"

////////////////////////////////////////////////////////////////////////////////////

const {
  withProvider,
  withContext,
  useStyles: useClipboardStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "clipboard" })

export { useClipboardStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface ClipboardRootProviderBaseProps
  extends Assign<ArkClipboard.RootProviderBaseProps, SlotRecipeProps<"clipboard">>,
    UnstyledProp {}

export interface ClipboardRootProviderProps extends HTMLUIKitProps<"div", ClipboardRootProviderBaseProps> {}

export const ClipboardRootProvider = withProvider<HTMLDivElement, ClipboardRootProviderProps>(
  ArkClipboard.RootProvider,
  "root",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface ClipboardRootBaseProps
  extends Assign<ArkClipboard.RootBaseProps, SlotRecipeProps<"clipboard">>,
    UnstyledProp {}

export interface ClipboardRootProps extends HTMLUIKitProps<"div", ClipboardRootBaseProps> {}

export const ClipboardRoot = withProvider<HTMLDivElement, ClipboardRootProps>(ArkClipboard.Root, "root", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export const ClipboardPropsProvider = PropsProvider as React.Provider<ClipboardRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface ClipboardTriggerProps extends HTMLUIKitProps<"button", ArkClipboard.TriggerProps> {}

export const ClipboardTrigger = withContext<HTMLButtonElement, ClipboardTriggerProps>(ArkClipboard.Trigger, "trigger", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface ClipboardControlProps extends HTMLUIKitProps<"div", ArkClipboard.ControlProps> {}

export const ClipboardControl = withContext<HTMLDivElement, ClipboardControlProps>(ArkClipboard.Control, "control", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface ClipboardIndicatorProps extends HTMLUIKitProps<"div", ArkClipboard.IndicatorProps> {}

export const ClipboardIndicator = withContext<HTMLDivElement, ClipboardIndicatorProps>(
  ArkClipboard.Indicator,
  "indicator",
  {
    forwardAsChild: true,
    defaultProps: {
      copied: <CheckIcon boxSize="1em" />,
      children: <CopyIcon boxSize="1em" />,
    },
  },
)

////////////////////////////////////////////////////////////////////////////////////

export interface ClipboardInputProps extends HTMLUIKitProps<"input", ArkClipboard.InputProps> {}

export const ClipboardInput = withContext<HTMLInputElement, ClipboardInputProps>(ArkClipboard.Input, "input", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface ClipboardLabelProps extends HTMLUIKitProps<"label", ArkClipboard.LabelProps> {}

export const ClipboardLabel = withContext<HTMLLabelElement, ClipboardLabelProps>(ArkClipboard.Label, "label", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export const ClipboardContext = ArkClipboard.Context

export interface ClipboardCopyStatusDetails extends ArkClipboard.CopyStatusDetails {}

////////////////////////////////////////////////////////////////////////////////////

export interface ClipboardValueTextProps extends HTMLUIKitProps<"div", ArkClipboard.ValueTextProps> {}

export const ClipboardValueText = withContext<HTMLDivElement, ClipboardValueTextProps>(
  ArkClipboard.ValueText,
  "valueText",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export const ClipboardCopyText = forwardRef<HTMLDivElement, ClipboardIndicatorProps>(
  function ClipboardCopyText(props, ref) {
    return (
      <ClipboardIndicator copied="Copied" {...props} ref={ref}>
        Copy
      </ClipboardIndicator>
    )
  },
)
