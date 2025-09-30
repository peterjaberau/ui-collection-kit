import { useActors } from "../../hooks/useActors"

export const cursorSelector = () => {
  const { currentAppCursorActorRef: cursorRef } = useActors()
  const cursorState = cursorRef?.getSnapshot()
  const cursorContext = cursorState?.context

  return {
    cursorRef,
    cursorState,
    cursorContext,
  }
}
