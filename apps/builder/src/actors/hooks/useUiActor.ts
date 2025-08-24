import { useSelector } from '@xstate/react';
import { useRootActor } from './useRootActor';

export function useUiActor() {
  const { rootActorRef } = useRootActor();

  const uiActorRef = rootActorRef.system.get('ui');
  const uiActorState: any = useSelector(uiActorRef, (state) => state);
  const uiContext = uiActorState.context;
  const sendToUiActor = uiActorRef.send;

  const uiActorContext = uiContext;



  const currentApplication = uiActorState.context.applications.currentApplication;

  return {
    uiActorRef,
    uiActorState,
    uiActorContext,
    sendToUiActor,

    currentApplication

  };
}
