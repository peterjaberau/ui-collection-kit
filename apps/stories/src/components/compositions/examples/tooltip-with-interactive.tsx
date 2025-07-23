import { Button } from "@chakra-ui/react"
import { Tooltip } from "@ui-kit/components"

export const TooltipWithInteractive = () => {
  return (
    <Tooltip content="This is the tooltip content" interactive>
      <Button variant="outline" size="sm">
        Hover me
      </Button>
    </Tooltip>
  )
}
