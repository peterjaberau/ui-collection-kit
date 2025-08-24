import { useSelector } from "@xstate/react"
import { RootActorContext } from "../rootActor.provider"

export function useRootActor() {
  const rootActorRef = RootActorContext.useActorRef()
  const rootActorState: any = useSelector(rootActorRef, (state) => state)
  const sendToRootActor = rootActorRef.send

  return {
    rootActorRef,
    rootActorState,
    sendToRootActor,
  }
}
