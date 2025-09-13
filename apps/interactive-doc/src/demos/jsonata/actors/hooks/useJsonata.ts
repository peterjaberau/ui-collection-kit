import { useSelector } from "@xstate/react"
import { JsonataContext } from "../jsonata.provider"

export function useJsonata() {
  const jsonataRef = JsonataContext.useActorRef()
  const jsonataState = useSelector(jsonataRef, (state) => state)
  const jsonataContext = jsonataState.context
  const sendToJsonata = jsonataRef.send

  return {
    jsonataRef,
    jsonataState,
    jsonataContext,
    sendToJsonata,
  }
}
