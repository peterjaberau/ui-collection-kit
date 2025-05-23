import { normalizeProps, useMachine } from "@ui-collection-kit/react"
import * as tagsInput from "@ui-collection-kit/tags-input"
import { useId } from "react"

export function TagsInput(props: any) {
  const service = useMachine(tagsInput.machine, {
    id: useId(),
    defaultValue: ["React", "Vue"],
    ...props.controls,
  })

  const api = tagsInput.connect(service, normalizeProps)

  return (
    <div {...api.getRootProps()}>
      <label {...api.getLabelProps()}>Enter frameworks:</label>
      <div {...api.getControlProps()}>
        {api.value.map((value, index) => {
          const opt = { index, value }
          return (
            <span key={index} {...api.getItemProps(opt)}>
              <div {...api.getItemPreviewProps(opt)}>
                <span>{value}</span>
                <button {...api.getItemDeleteTriggerProps(opt)}>
                  &#x2715;
                </button>
              </div>
              <input {...api.getItemInputProps(opt)} />
            </span>
          )
        })}
        <input placeholder="Add tag..." {...api.getInputProps()} />
      </div>
    </div>
  )
}
