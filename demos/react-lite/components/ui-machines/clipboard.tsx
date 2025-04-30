import * as clipboard from "@ui-collection-kit/clipboard"
import { normalizeProps, useMachine } from "@ui-collection-kit/react"
import { useId } from "react"
import { HiCheck, HiOutlineClipboard } from "react-icons/hi"

type Props = {
  controls: {
    value: string
    timeout: number
  }
}

export function Clipboard(props: Props) {
  const service = useMachine(clipboard.machine, {
    id: useId(),
    ...props.controls,
  })

  const api = clipboard.connect(service, normalizeProps)

  return (
    <div {...api.getRootProps()}>
      <label {...api.getLabelProps()}>Copy this link</label>
      <div {...api.getControlProps()}>
        <input {...api.getInputProps()} />
        <button {...api.getTriggerProps()}>
          {api.copied ? <HiCheck /> : <HiOutlineClipboard />}
        </button>
      </div>
    </div>
  )
}
