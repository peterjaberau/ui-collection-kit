import * as pinInput from "@ui-collection-kit/pin-input"
import { normalizeProps, useMachine } from "@ui-collection-kit/react"
import { useId } from "react"

export function PinInput(props: any) {
  const service = useMachine(pinInput.machine, {
    id: useId(),
    ...props.controls,
  })

  const api = pinInput.connect(service, normalizeProps)

  return (
    <div>
      <div {...api.getRootProps()}>
        {[1, 2, 3].map((_, index) => (
          <input key={index} {...api.getInputProps({ index })} />
        ))}
      </div>
      <button onClick={api.clearValue}>Clear</button>
    </div>
  )
}
