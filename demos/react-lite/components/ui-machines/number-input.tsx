import * as numberInput from "@ui-collection-kit/number-input"
import { normalizeProps, useMachine } from "@ui-collection-kit/react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { useId } from "react"

export function NumberInput(props: any) {
  const service = useMachine(numberInput.machine, {
    id: useId(),
    ...props.controls,
  })

  const api = numberInput.connect(service, normalizeProps)

  return (
    <div {...api.getRootProps()}>
      <label {...api.getLabelProps()}>Enter number:</label>
      <div>
        <input {...api.getInputProps()} />
        <div>
          <button {...api.getIncrementTriggerProps()}>
            <BiChevronUp />
          </button>
          <button {...api.getDecrementTriggerProps()}>
            <BiChevronDown />
          </button>
        </div>
      </div>
    </div>
  )
}
