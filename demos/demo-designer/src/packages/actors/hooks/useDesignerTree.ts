import { useSelector } from "@xstate/react"
import { useDesignerActor } from "./useDesignerActor"

export function useDesignerTree() {
  const { designerActorRef } = useDesignerActor()

  const designerTreeRef = designerActorRef.system.get("designer-tree")
  const designerTree: any = useSelector(designerTreeRef, (state) => state)
  const sendToDesignerTree = designerTreeRef.send

  const updateTree = (tree: any) => {
    sendToDesignerTree({
      type: "update:tree",
      params: { tree },
    })
  }

  const getTree = designerTree.context.tree
  const getIcons = designerTree.context.icons
  const getBehaviors = designerTree.context.behaviors

  const isLoading = designerTree.matches("loading")
  const isReady = designerTree.matches("ready")

  return {
    designerTreeRef,
    designerTree,
    sendToDesignerTree,

    getTree,
    updateTree,

    isLoading,
    isReady,
  }
}
