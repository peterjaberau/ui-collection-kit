import * as menu from "@ui-collection-kit/menu"
import { normalizeProps, useMachine, Portal } from "@ui-collection-kit/react"
import { useId } from "react"

const data = [
  { label: "Edit", value: "edit" },
  { label: "Delete", value: "delete" },
  { label: "Export", value: "export" },
  { label: "Duplicate", value: "duplicate" },
]

type MenuProps = {
  controls: {}
}

export function Menu(props: MenuProps) {
  const service = useMachine(menu.machine, {
    id: useId(),
    ...props.controls,
  })

  const api = menu.connect(service, normalizeProps)

  return (
    <div>
      <button {...api.getTriggerProps()}>
        Actions <span {...api.getIndicatorProps()}>▾</span>
      </button>
      <Portal>
        <div {...api.getPositionerProps()}>
          <ul {...api.getContentProps()}>
            {data.map((item) => (
              <li key={item.value} {...api.getItemProps({ value: item.value })}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </Portal>
    </div>
  )
}
