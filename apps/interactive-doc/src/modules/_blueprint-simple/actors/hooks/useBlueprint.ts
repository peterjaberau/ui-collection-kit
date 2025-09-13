import { useSelector } from "@xstate/react"
import { BlueprintContext } from "../blueprint.provider"

export function useBlueprint() {
  const blueprintRef = BlueprintContext.useActorRef()
  const blueprintState = useSelector(blueprintRef, (state) => state)
  const blueprintContext = blueprintState.context
  const sendToBlueprint = blueprintRef.send

  return {
    blueprintRef,
    blueprintState,
    blueprintContext,
    sendToBlueprint,
  }
}
