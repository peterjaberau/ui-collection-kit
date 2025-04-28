import { QrCode } from '..'

export const Basic = () => {
  return (
    <QrCode.Root defaultValue="http://ark-ui.com">
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
      <QrCode.DownloadTrigger fileName="qr-code.png" mimeType="image/png">
        Download
      </QrCode.DownloadTrigger>
    </QrCode.Root>
  )
}
