import { Button } from "@chakra-ui/react"
import { Tooltip } from "@ui-collection-kit/ui"

export const TooltipWithPlacement = () => {
  return (
    <Tooltip
      content="This is the tooltip content"
      positioning={{ placement: "right-end" }}
    >
      <Button variant="outline" size="sm">
        Hover me
      </Button>
    </Tooltip>
  )
}
