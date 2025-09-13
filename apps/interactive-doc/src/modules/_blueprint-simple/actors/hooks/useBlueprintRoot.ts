import { useSelector } from "@xstate/react"
import { useBlueprint } from "./useBlueprint"

export const useBlueprintRoot = () => {
  const { blueprintRef } = useBlueprint()

  const blueprintRootRef = blueprintRef.system.get("blueprint-root")

  const blueprintState: any = useSelector(blueprintRootRef, (state) => state)
  const blueprintContext = blueprintState.context

  const sendToBlueprintRoot = blueprintRef.send

  return {
    blueprintRootRef,
    blueprintState,
    blueprintContext,
    sendToBlueprintRoot,
  }
}
