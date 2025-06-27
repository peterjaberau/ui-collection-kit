import { useSelector } from '@xstate/react'
import { GlobalContext } from '../provider'



export function useGlobalSessionActor() {
  const globalSessionActorRef = GlobalContext.useActorRef().system.get('global-session');
  const globalSessionState = useSelector(globalSessionActorRef, state => state)
  const sendToGlobalSession = globalSessionActorRef.send

  return {
    globalSessionActorRef,
    globalSessionState,
    sendToGlobalSession
  }
}
