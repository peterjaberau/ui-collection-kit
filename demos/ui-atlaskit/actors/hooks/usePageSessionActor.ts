import { useSelector } from '@xstate/react'
import { GlobalContext } from '../provider'



export function usePageSessionActor() {
  const pageSessionActorRef = GlobalContext.useActorRef().system.get('page-session');
  const pageSessionState = useSelector(pageSessionActorRef, state => state)
  const sendToPageSession = pageSessionActorRef.send

  return {
    pageSessionActorRef,
    pageSessionState,
    sendToPageSession
  }
}
