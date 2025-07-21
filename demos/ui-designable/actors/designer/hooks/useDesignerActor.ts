import { useSelector } from "@xstate/react"
import { DesignerActorContext } from '../designer.provider';

export function useDesignerActor() {
  const designerActorRef = DesignerActorContext.useActorRef()
  const designerActorState = useSelector(designerActorRef, (state) => state)
  const sendToDesignerActor = designerActorRef.send

  return {
    designerActorRef,
    designerActorState,
    sendToDesignerActor
  }
}
