import * as progress from "@ui-collection-kit/progress"
import { normalizeProps, useMachine } from "@ui-collection-kit/react"
import { useId } from "react"

export function ProgressLinear(props: any) {
  const service = useMachine(progress.machine, {
    id: useId(),
    ...props.controls,
  })

  const api = progress.connect(service, normalizeProps)

  return (
    <div>
      <div {...api.getRootProps()}>
        <div {...api.getLabelProps()}>Upload progress</div>
        <div {...api.getTrackProps()}>
          <div {...api.getRangeProps()} />
        </div>
        <div {...api.getValueTextProps()}>{api.valueAsString}</div>
      </div>

      <div>
        <button onClick={() => api.setValue((api.value ?? 0) - 20)}>
          Decrease
        </button>

        <button onClick={() => api.setValue((api.value ?? 0) + 20)}>
          Increase
        </button>

        <button onClick={() => api.setValue(null)}>Indeterminate</button>
      </div>
    </div>
  )
}
