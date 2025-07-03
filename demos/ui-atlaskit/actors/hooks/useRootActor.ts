import { useSelector } from '@xstate/react'
import { GlobalContext } from '../provider'



export function useRootActor() {
  const rootActorRef = GlobalContext.useActorRef().system.get('root');
  const rootState = useSelector(rootActorRef, state => state)
  const sendToRoot = rootActorRef.send

  return {
    rootActorRef,
    rootState,
    sendToRoot
  }
}
