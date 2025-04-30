import * as uiCollectionKitSwitch from "@ui-collection-kit/switch"
import { normalizeProps, useMachine } from "@ui-collection-kit/react"
import { useId } from "react"

type SwitchProps = {
  controls: {
    disabled: boolean
  }
}

export function Switch(props: SwitchProps) {
  const service = useMachine(uiCollectionKitSwitch.machine, {
    id: useId(),
    ...props.controls,
  })

  const api = uiCollectionKitSwitch.connect(service, normalizeProps)

  return (
    <div>
      <label {...api.getRootProps()}>
        <input {...api.getHiddenInputProps()} />
        <span {...api.getControlProps()}>
          <span {...api.getThumbProps()} />
        </span>
        <span {...api.getLabelProps()}>{api.checked ? "On" : "Off"}</span>
      </label>
    </div>
  )
}
