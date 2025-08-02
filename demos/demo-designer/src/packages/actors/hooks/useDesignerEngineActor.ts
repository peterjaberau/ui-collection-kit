import { useSelector } from "@xstate/react"
import { useDesignerActor } from "./useDesignerActor"

export function useDesignerEngineActor() {
  const { designerActorRef } = useDesignerActor()

  const designerEngineRef = designerActorRef.system.get("designer-engine")
  const designerEngineState: any = useSelector(designerEngineRef, (state) => state)
  const sendToDesignerEngine = designerEngineRef.send

  const designerEngine = designerEngineState.context.engine

  return {
    designerEngineRef,
    designerEngineState,
    sendToDesignerEngine,

    designerEngine,
  }
}
