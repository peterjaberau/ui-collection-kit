import { useSelector } from "@xstate/react"
import { useSystem } from "./useSystem"

export function useDraggablePanel() {
  const { systemActorRef } = useSystem()
  const draggablePanelActorRef = systemActorRef.system.get("draggable-panel")
  const draggablePanelState: any = useSelector(draggablePanelActorRef, (state) => state)
  const sendToDraggablePanel = draggablePanelActorRef.send

  const panel = draggablePanelState.context.panel
  const header = draggablePanelState.context.header
  const body = draggablePanelState.context.body
  const footer = draggablePanelState.context.footer
  const container = draggablePanelState.context.container

  const getIsExpand = (isHovering?: any) => {
    if (panel.pin) return true;
    if (isHovering && !panel.expand) {
      return true;
    } else if (!isHovering && panel.expand) {
      return false;
    }
  }

  const reversedPlacement = reversePlacement(panel.placement)

  return {
    draggablePanelActorRef,
    draggablePanelState,
    sendToDraggablePanel,

    panel,
    header,
    body,
    footer,
    container,

    getIsExpand,
    reversedPlacement
  }
}

export const reversePlacement = (placement: any) => {
  switch (placement) {
    case 'bottom': {
      return 'top';
    }
    case 'top': {
      return 'bottom';
    }
    case 'right': {
      return 'left';
    }
    case 'left': {
      return 'right';
    }
  }
};
