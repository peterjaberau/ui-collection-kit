import * as slider from "@ui-collection-kit/slider"
import { normalizeProps, useMachine } from "@ui-collection-kit/react"
import { useId } from "react"

export function Slider(props: any) {
  const service = useMachine(slider.machine, {
    id: useId(),
    min: -50,
    max: 50,
    defaultValue: [20],
    ...props.controls,
  })

  const api = slider.connect(service, normalizeProps)

  return (
    <div {...api.getRootProps()}>
      <div>
        <label {...api.getLabelProps()}>Quantity</label>
        <output {...api.getValueTextProps()}>
          <b>{api.value.at(0)}</b>
        </output>
      </div>

      <div {...api.getControlProps()}>
        <div {...api.getTrackProps()}>
          <div {...api.getRangeProps()} />
        </div>
        {api.value.map((_, index) => (
          <div key={index} {...api.getThumbProps({ index })}>
            <input {...api.getHiddenInputProps({ index })} />
          </div>
        ))}
      </div>
    </div>
  )
}
