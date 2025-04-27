import { QrCode } from '..'

export const ErrorCorrection = () => {
  return (
    <QrCode.Root defaultValue="http://ark-ui.com" encoding={{ ecc: 'H' }}>
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
    </QrCode.Root>
  )
}
