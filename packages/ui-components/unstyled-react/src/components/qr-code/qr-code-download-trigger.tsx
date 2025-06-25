import type { DownloadTriggerProps } from '@ui-collection-kit/qr-code'
import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useQrCodeContext } from './use-qr-code-context'

export interface QrCodeDownloadTriggerBaseProps extends DownloadTriggerProps, PolymorphicProps {}
export interface QrCodeDownloadTriggerProps extends HTMLProps<'button'>, QrCodeDownloadTriggerBaseProps {}

export const QrCodeDownloadTrigger = forwardRef<HTMLButtonElement, QrCodeDownloadTriggerProps>((props, ref) => {
  const [downloadTriggerProps, localProps] = createSplitProps<DownloadTriggerProps>()(props, [
    'fileName',
    'mimeType',
    'quality',
  ])
  const qrCode = useQrCodeContext()
  const mergedProps = mergeProps(qrCode.getDownloadTriggerProps(downloadTriggerProps), localProps)

  return <ark.button {...mergedProps} ref={ref} />
})

QrCodeDownloadTrigger.displayName = 'QrCodeDownloadTrigger'
