import { useSelector } from '@xstate/react'
import { GlobalContext } from '../provider'



export function useStylingActor() {
  const stylingActorRef = GlobalContext.useActorRef().system.get('styling');
  const stylingState: any = useSelector(stylingActorRef, state => state)
  const sendToStyling = stylingActorRef.send

  const active = stylingState.context.active

  const activeStyleDef = stylingState.context.library[active] || stylingState.context.library['default']

  console.log('active', active)
  console.log('activeStyleDef', activeStyleDef)




  return {
    stylingActorRef,
    stylingState,
    sendToStyling,

    active,
    activeStyleDef
  }
}
