import { useSelector } from '@xstate/react';
import { useRootActor } from './useRootActor';

export function useFormActor() {
  const { rootActorRef } = useRootActor();

  const formActorRef = rootActorRef.system.get('form');
  const formActorState: any = useSelector(formActorRef, (state) => state);
  const sendToFormActor = formActorRef.send;

  return {
    formActorRef,
    formActorState,
    sendToFormActor,

  };
}
