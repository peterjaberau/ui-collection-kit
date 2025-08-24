import { useSelector } from "@xstate/react"
import { RootActorContext } from "../rootActor.provider"

export function useRootActor() {
  const rootActorRef = RootActorContext.useActorRef()
  const sendToRoot = rootActorRef.send

  const rootState: any = useSelector(rootActorRef, (state) => state)
  const rootContext = rootState.context

  return {
    rootActorRef,
    sendToRoot,

    rootState,
    rootContext,
  }
}
