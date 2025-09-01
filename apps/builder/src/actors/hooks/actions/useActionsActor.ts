import { useSelector } from '@xstate/react';
import { useRootActor } from '../useRootActor';

export function useActionsActor() {
  const { rootActorRef } = useRootActor();

  const actionsActorRef = rootActorRef.system.get('actions');
  const sendToActions = actionsActorRef.send;

  const actionsState: any = useSelector(actionsActorRef, (state) => state);
  const actionsContext = actionsState.context;

  const executeAction = (payload: any) => {
    sendToActions({ type: 'EXECUTE_TRIGGER_REQUEST', payload: payload });
  };


  return {
    actionsActorRef,
    sendToActions,

    actionsState,
    actionsContext,

    executeAction,



  };
}
