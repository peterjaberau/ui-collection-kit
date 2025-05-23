import * as floating from "@ui-collection-kit/floating-panel"
import { normalizeProps, useMachine, Portal } from "@ui-collection-kit/react"
import { LuArrowDownLeft, LuMaximize2, LuMinus, LuX } from "react-icons/lu"
import { useId } from "react"

export function FloatingPanel(props: { controls: any }) {
  const service = useMachine(floating.machine, {
    id: useId(),
    ...props.controls,
  })

  const api = floating.connect(service, normalizeProps)

  return (
    <>
      <button {...api.getTriggerProps()}>Open Panel</button>
      {api.open && (
        <Portal>
          <div {...api.getPositionerProps()}>
            <div {...api.getContentProps()}>
              <div {...api.getDragTriggerProps()}>
                <div {...api.getHeaderProps()}>
                  <p {...api.getTitleProps()}>Variables</p>
                  <div {...api.getControlProps()}>
                    <button
                      {...api.getStageTriggerProps({ stage: "minimized" })}
                    >
                      <LuMinus />
                    </button>
                    <button
                      {...api.getStageTriggerProps({ stage: "maximized" })}
                    >
                      <LuMaximize2 />
                    </button>
                    <button {...api.getStageTriggerProps({ stage: "default" })}>
                      <LuArrowDownLeft />
                    </button>
                    <button {...api.getCloseTriggerProps()}>
                      <LuX />
                    </button>
                  </div>
                </div>
              </div>
              <div {...api.getBodyProps()}>
                <label>
                  <span>Font Family</span>
                  <select defaultValue="sans-serif">
                    <option value="sans-serif">Sans Serif</option>
                    <option value="serif">Serif</option>
                    <option value="monospace">Monospace</option>
                  </select>
                </label>

                <label>
                  <span>Font Size</span>
                  <input type="number" defaultValue={16} />
                </label>
              </div>

              <div {...api.getResizeTriggerProps({ axis: "n" })} />
              <div {...api.getResizeTriggerProps({ axis: "e" })} />
              <div {...api.getResizeTriggerProps({ axis: "w" })} />
              <div {...api.getResizeTriggerProps({ axis: "s" })} />
              <div {...api.getResizeTriggerProps({ axis: "ne" })} />
              <div {...api.getResizeTriggerProps({ axis: "se" })} />
              <div {...api.getResizeTriggerProps({ axis: "sw" })} />
              <div {...api.getResizeTriggerProps({ axis: "nw" })} />
            </div>
          </div>
        </Portal>
      )}
    </>
  )
}
