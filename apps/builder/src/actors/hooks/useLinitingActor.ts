import { useSelector } from '@xstate/react';
import { useRootActor } from './useRootActor';

export function useLintingActor() {
  const { rootActorRef } = useRootActor();

  const lintingActorRef = rootActorRef.system.get('linting');
  const sendToLinting = lintingActorRef.send;

  const lintingState: any = useSelector(lintingActorRef, (state) => state);
  const lintingContext = lintingState.context;

  const lintingErrors = lintingContext.errors;

  return {
    lintingActorRef,
    sendToLinting,

    lintingState,
    lintingContext,

    lintingErrors,

  };
}
