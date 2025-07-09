import { useSelector } from '@xstate/react'
import { useLayoutActor } from './useLayoutActor'


export function useEdgePanelActor({ id }: any) {
  const { getPanelActor } = useLayoutActor()
  const edgePanelActorRef = getPanelActor({id: id});

  const edgePanelState: any = useSelector(edgePanelActorRef, state => state)
  const sendToEdgePanel = edgePanelActorRef.send

  const fireTogglePin = () => sendToEdgePanel({ type: 'TOGGLE_PIN' })
  const fireResize = (value: any) => sendToEdgePanel({ type: "RESIZE", value });

  // const { pinned, size, position, minSize = 100 } = edgePanelState.context



  return {
    edgePanelActorRef,
    edgePanelState,
    sendToEdgePanel,

    fireTogglePin,
    fireResize,

    // pinned,
    // size,
    // position,
    // minSize
  }
}
