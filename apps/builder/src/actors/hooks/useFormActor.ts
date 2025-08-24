import { useSelector } from "@xstate/react"
import { useRootActor } from "./useRootActor"

export function useFormActor() {
  const { rootActorRef } = useRootActor()

  const formActorRef = rootActorRef.system.get("form")
  const sendToFormActor = formActorRef.send

  const formState: any = useSelector(formActorRef, (state) => state)
  const formContext = formState.context


  return {
    formActorRef,
    sendToFormActor,

    formState,
    formContext,
  }
}
