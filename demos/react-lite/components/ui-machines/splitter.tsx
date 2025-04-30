import { normalizeProps, useMachine } from "@ui-collection-kit/react"
import * as splitter from "@ui-collection-kit/splitter"
import { useId } from "react"

export function Splitter(props: any) {
  const service = useMachine(splitter.machine, {
    id: useId(),
    panels: [{ id: "a" }, { id: "b" }],
    defaultSize: [50, 50],
    ...props.controls,
  })

  const api = splitter.connect(service, normalizeProps)

  return (
    <div {...api.getRootProps()}>
      <div {...api.getPanelProps({ id: "a" })}>
        <p>A</p>
      </div>
      <div {...api.getResizeTriggerProps({ id: "a:b" })} />
      <div {...api.getPanelProps({ id: "b" })}>
        <p>B</p>
      </div>
    </div>
  )
}
