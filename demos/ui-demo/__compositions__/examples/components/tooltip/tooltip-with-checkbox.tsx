import { Checkbox } from "@chakra-ui/react"
import { Tooltip } from "@ui-collection-kit/ui"
import { useId } from "react"

export const TooltipWithCheckbox = () => {
  const id = useId()
  return (
    <Tooltip ids={{ trigger: id }} content="This is the tooltip content">
      <Checkbox.Root ids={{ root: id }}>
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>Welcome</Checkbox.Label>
      </Checkbox.Root>
    </Tooltip>
  )
}
