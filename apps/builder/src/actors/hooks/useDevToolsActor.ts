import { useSelector } from '@xstate/react';
import { useRootActor } from './useRootActor';

export function useDevToolsActor() {
  const { rootActorRef } = useRootActor();

  const devToolsActorRef = rootActorRef.system.get('dev-tools');
  const sendToDevTools = devToolsActorRef.send;



  const devToolsState: any = useSelector(devToolsActorRef, (state) => state);
  const devToolsContext = devToolsState.context;

  const fire = ({ path = '-', payload = {} }: { path?: string; payload?: any }) => {
    sendToDevTools({ type: 'INSPECT', path, payload });
  };


  return {
    devToolsActorRef,
    sendToDevTools,

    devToolsState,
    devToolsContext,


    fire,

  };
}
