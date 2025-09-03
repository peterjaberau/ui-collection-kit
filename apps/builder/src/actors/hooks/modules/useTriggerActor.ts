import { useSelector } from '@xstate/react';
import { useRootActor } from '../useRootActor';

export function useTriggerActor() {
  const { rootActorRef } = useRootActor();

  const triggerActorRef = rootActorRef.system.get('trigger');


  const sendToTrigger = triggerActorRef.send;

  const triggerState: any = useSelector(triggerActorRef, (state) => state);
  const triggerContext = triggerState.context;

  const trigger = (payload: any) => {
    sendToTrigger({ type: 'EXECUTE_TRIGGER_REQUEST', payload: payload });
  };


  return {
    triggerActorRef,
    sendToTrigger,

    triggerState,
    triggerContext,

    trigger,



  };
}
