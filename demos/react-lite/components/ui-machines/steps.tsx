import * as steps from "@ui-collection-kit/steps"
import { useMachine, normalizeProps } from "@ui-collection-kit/react"
import { useId } from "react"

const stepsData = [
  { title: "Step 1" },
  { title: "Step 2" },
  { title: "Step 3" },
]

export function Steps(props: any) {
  const context = props.controls

  const service = useMachine(steps.machine, {
    id: useId(),
    count: stepsData.length,
    ...props.controls,
  })

  const api = steps.connect(service, normalizeProps)

  return (
    <div {...api.getRootProps()}>
      <div {...api.getListProps()}>
        {stepsData.map((step, index) => (
          <div key={index} {...api.getItemProps({ index })}>
            <button {...api.getTriggerProps({ index })}>
              <div {...api.getIndicatorProps({ index })}>{index + 1}</div>
              <span>{step.title}</span>
            </button>
            <div {...api.getSeparatorProps({ index })} />
          </div>
        ))}
      </div>

      {stepsData.map((step, index) => (
        <div key={index} {...api.getContentProps({ index })}>
          {step.title}
        </div>
      ))}

      <div {...api.getContentProps({ index: stepsData.length })}>
        Complete - Thank you 🎉
      </div>

      <div>
        <button {...api.getPrevTriggerProps()}>Back</button>
        <button {...api.getNextTriggerProps()}>Next</button>
      </div>
    </div>
  )
}
