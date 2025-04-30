import * as menu from "@ui-collection-kit/menu"
import { normalizeProps, useMachine } from "@ui-collection-kit/react"
import { useId } from "react"

const data = [
  { label: "Edit", value: "edit" },
  { label: "Delete", value: "delete" },
  { label: "Export", value: "export" },
  { label: "Duplicate", value: "duplicate" },
]

type ContextMenuProps = {
  controls: {}
}

export function ContextMenu(props: ContextMenuProps) {
  const service = useMachine(menu.machine, {
    id: useId(),
    ...props.controls,
  })

  const api = menu.connect(service, normalizeProps)

  return (
    <div>
      <div {...api.getContextTriggerProps()}>
        <div>Open context menu</div>
      </div>
      <div {...api.getPositionerProps()}>
        <ul {...api.getContentProps()}>
          {data.map((item) => (
            <li key={item.value} {...api.getItemProps({ value: item.value })}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
