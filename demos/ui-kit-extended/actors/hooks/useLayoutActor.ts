import { useSelector } from '@xstate/react'
import { GlobalContext } from '../provider'



export function useLayoutActor() {
  const layoutActorRef = GlobalContext.useActorRef().system.get('layout');
  const layoutState: any = useSelector(layoutActorRef, state => state)
  const sendToLayout = layoutActorRef.send


  const panels = layoutState.context.panels

  //id: "top" | "bottom" | "left" | "right"
  const getPanelActor = ({ id }: any) => {
    return panels.find((panel: any) => panel.id === id)
  }

  const layoutProfile = layoutState.context.profile

  const isReady = layoutState.context.isReady || false

  return {
    layoutActorRef,
    layoutState,
    layoutProfile,
    sendToLayout,
    panels,

    getPanelActor,
    isReady
  }
}
