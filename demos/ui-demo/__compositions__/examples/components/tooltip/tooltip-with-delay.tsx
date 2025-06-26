import { Button } from "@chakra-ui/react"
import { Tooltip } from "@ui-collection-kit/ui"

export const TooltipWithDelay = () => {
  return (
    <Tooltip
      content="This is the tooltip content"
      openDelay={500}
      closeDelay={100}
    >
      <Button variant="outline" size="sm">
        Delay (open: 500ms, close: 100ms)
      </Button>
    </Tooltip>
  )
}
