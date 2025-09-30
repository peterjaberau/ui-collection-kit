import { useActors } from "../../hooks/useActors"

export const dragShadowSelector = () => {
  const { currentAppDragShadowActorRef: dragShadowRef } = useActors()
  const dragShadowState = dragShadowRef?.getSnapshot()
  const dragShadowContext = dragShadowState?.context

  return {
    dragShadowRef,
    dragShadowState,
    dragShadowContext,
  }
}
