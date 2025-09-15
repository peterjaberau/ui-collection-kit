import { useSelector } from "@xstate/react"
import { useFlexLayout } from "./useFlexLayout"

export function useFlexLayoutInstance() {
  const { flexLayoutRef } = useFlexLayout()

  const flexLayoutInstanceRef = flexLayoutRef.system.get('flex-layout-instance')
  const flexLayoutInstanceState = useSelector(flexLayoutInstanceRef, (state) => state)
  const flexLayoutInstanceContext = flexLayoutInstanceState.context
  const sendToFlexLayoutInstance = flexLayoutInstanceRef.send

  const stateValue = flexLayoutInstanceState.value

  const layoutModel = flexLayoutInstanceContext.layout?.model

  // pure guards
  const isReady = flexLayoutInstanceState.matches('ready')

  // mixin guards
  const canLayoutRender = isReady && layoutModel


  //actions
  const doAction = (type, event) =>
    sendToFlexLayoutInstance({
      type: `${type}Event`,
      payload: event,
    })

  return {
    flexLayoutInstanceRef,
    flexLayoutInstanceState,
    flexLayoutInstanceContext,
    sendToFlexLayoutInstance,

    layoutModel,
    canLayoutRender,
    doAction
  }
}
