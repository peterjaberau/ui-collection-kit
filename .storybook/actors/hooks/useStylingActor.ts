import { useSelector } from '@xstate/react'
import { GlobalContext } from '../provider'



export function useStylingActor() {
  const stylingActorRef = GlobalContext.useActorRef().system.get('styling');
  const stylingState: any = useSelector(stylingActorRef, state => state)
  const sendToStyling = stylingActorRef.send


  const defaultStyle = stylingState.context.library['default']

  const active = stylingState.context.active
  const activeStyleDef = stylingState.context.library[active] || defaultStyle


  const getStyleByName = (name: string) => {
    return stylingState.context.library[name] || defaultStyle
  }


  return {
    stylingActorRef,
    stylingState,
    sendToStyling,

    active,
    activeStyleDef,
    getStyleByName,
    defaultStyle
  }
}
