import { useSelector } from '@xstate/react';
import { useRootActor } from './useRootActor';

export function useLintingActor() {
  const { rootActorRef } = useRootActor();

  const lintingActorRef = rootActorRef.system.get('linting');
  const lintingActorState: any = useSelector(lintingActorRef, (state) => state);
  const sendToLintingActor = lintingActorRef.send;

  return {
    lintingActorRef,
    lintingActorState,
    sendToLintingActor,

  };
}
