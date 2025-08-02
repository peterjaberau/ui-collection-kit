import { useSelector } from "@xstate/react"
import { useDesignerActor } from "./useDesignerActor"

export function useDesignerSchemasActor() {
  const { designerActorRef } = useDesignerActor()

  const designerSchemasRef = designerActorRef.system.get("designer-schemas")
  const designerSchemasState: any = useSelector(designerSchemasRef, (state) => state)
  const sendToDesignerSchemas = designerSchemasRef.send

  const widgets = designerSchemasState.context.widgets

  return {
    designerSchemasRef,
    designerSchemasState,
    sendToDesignerSchemas,

    widgets,
  }
}
