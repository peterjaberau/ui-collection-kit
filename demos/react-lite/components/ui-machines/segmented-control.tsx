import * as radio from "@ui-collection-kit/radio-group"
import { normalizeProps, useMachine } from "@ui-collection-kit/react"
import { useId } from "react"

const items = [
  { label: "React", value: "react" },
  { label: "Angular", value: "ng" },
  { label: "Vue", value: "vue" },
]

type SegmentedControlProps = {
  controls: {
    disabled: boolean
  }
}

export function SegmentedControl(props: SegmentedControlProps) {
  const service = useMachine(radio.machine, {
    id: useId(),
    defaultValue: "react",
    orientation: "horizontal",
    ...props.controls,
  })

  const api = radio.connect(service, normalizeProps)

  return (
    <div className="segmented-control">
      <div {...api.getRootProps()}>
        <div {...api.getIndicatorProps()} />
        {items.map((opt) => (
          <label key={opt.value} {...api.getItemProps({ value: opt.value })}>
            <span {...api.getItemTextProps({ value: opt.value })}>
              {opt.label}
            </span>
            <input {...api.getItemHiddenInputProps({ value: opt.value })} />
          </label>
        ))}
      </div>
    </div>
  )
}
