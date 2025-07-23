export {
  QrCodeRoot,
  QrCodeRootProvider,
  QrCodeFrame,
  QrCodePattern,
  QrCodeOverlay,
  QrCodePropsProvider,
  useQrCodeStyles,
} from "./qr-code"

export type { QrCodeRootProps, QrCodeFrameProps, QrCodePatternProps, QrCodeOverlayProps } from "./qr-code"

export { useQrCode, useQrCodeContext } from "@ui-kit/base/qr-code"
export type { UseQrCodeProps, UseQrCodeReturn } from "@ui-kit/base/qr-code"

export * as QrCode from "./namespace"
