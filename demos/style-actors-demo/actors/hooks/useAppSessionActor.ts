import { useSelector } from '@xstate/react'
import { GlobalContext } from '../provider'



export function useAppSessionActor() {
  const appSessionActorRef = GlobalContext.useActorRef().system.get('app-session');
  const appSessionState = useSelector(appSessionActorRef, state => state)
  const sendToAppSession = appSessionActorRef.send

  return {
    appSessionActorRef,
    appSessionState,
    sendToAppSession
  }
}
