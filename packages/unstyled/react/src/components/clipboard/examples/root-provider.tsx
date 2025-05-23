import { Clipboard, useClipboard } from '..'
import { CheckIcon, ClipboardCopyIcon } from 'lucide-react'

export const RootProvider = () => {
  const clipboard = useClipboard({ value: 'https://ark-ui.com' })

  return (
    <>
      <button onClick={() => clipboard.copy()}>Copy</button>

      <Clipboard.RootProvider value={clipboard}>
        <Clipboard.Label>Copy this link</Clipboard.Label>
        <Clipboard.Control>
          <Clipboard.Input />
          <Clipboard.Trigger>
            <Clipboard.Indicator copied={<CheckIcon />}>
              <ClipboardCopyIcon />
            </Clipboard.Indicator>
          </Clipboard.Trigger>
        </Clipboard.Control>
      </Clipboard.RootProvider>
    </>
  )
}
