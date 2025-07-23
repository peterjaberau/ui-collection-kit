"use client"

import type { Assign } from "@ui-kit/base"
import { QrCode as ArkQrCode } from "@ui-kit/base/qr-code"
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
  useStyles: useQrCodeStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "qrCode" })

export { useQrCodeStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface QrCodeRootBaseProps extends Assign<ArkQrCode.RootBaseProps, SlotRecipeProps<"qrCode">>, UnstyledProp {}

export interface QrCodeRootProps extends HTMLUIKitProps<"div", QrCodeRootBaseProps> {}

export const QrCodeRoot = withProvider<HTMLDivElement, QrCodeRootProps>(ArkQrCode.Root, "root", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface QrCodeRootProviderBaseProps
  extends Assign<ArkQrCode.RootProviderBaseProps, SlotRecipeProps<"qrCode">>,
    UnstyledProp {}

export interface QrCodeRootProviderProps extends HTMLUIKitProps<"div", QrCodeRootProviderBaseProps> {}

export const QrCodeRootProvider = withProvider<HTMLDivElement, QrCodeRootProviderProps>(
  ArkQrCode.RootProvider,
  "root",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export const QrCodePropsProvider = PropsProvider as React.Provider<QrCodeRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface QrCodePatternProps extends HTMLUIKitProps<"path"> {}

export const QrCodePattern = withContext<SVGPathElement, QrCodePatternProps>(ArkQrCode.Pattern, "pattern", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface QrCodeFrameProps extends HTMLUIKitProps<"svg"> {}

export const QrCodeFrame = withContext<SVGSVGElement, QrCodeFrameProps>(ArkQrCode.Frame, "frame", {
  forwardAsChild: true,
  defaultProps: { children: <QrCodePattern /> },
})

////////////////////////////////////////////////////////////////////////////////////

export interface QrCodeOverlayProps extends HTMLUIKitProps<"div"> {}

export const QrCodeOverlay = withContext<HTMLDivElement, QrCodeOverlayProps>(ArkQrCode.Overlay, "overlay", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface QrCodeDownloadTriggerProps extends HTMLUIKitProps<"button", ArkQrCode.DownloadTriggerBaseProps> {}

export const QrCodeDownloadTrigger = withContext<HTMLButtonElement, QrCodeDownloadTriggerProps>(
  ArkQrCode.DownloadTrigger,
  "downloadTrigger",
  { forwardAsChild: true },
)
