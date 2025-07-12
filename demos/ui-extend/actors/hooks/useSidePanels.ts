import { useSelector } from "@xstate/react"
import { useSystem } from "./useSystem"

export function useSidePanels() {
  const { systemActorRef } = useSystem()
  const sidePanelsActorRef = systemActorRef.system.get("side-panels")
  const sidePanelsState: any = useSelector(sidePanelsActorRef, (state) => state)
  const sendToSidePanels = sidePanelsActorRef.send
  const sidePanels = sidePanelsState.context.panels

  const getSidePanelActorRef = (actorId) => {

    return sidePanelsState.children[actorId]
  }


  return {
    sidePanelsActorRef,
    sidePanelsState,
    sendToSidePanels,
    sidePanels,
    getSidePanelActorRef
  }
}
