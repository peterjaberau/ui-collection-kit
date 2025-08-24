import { useSelector } from '@xstate/react';
import { useRootActor } from './useRootActor';

export function useGitActor() {
  const { rootActorRef } = useRootActor();

  const gitActorRef = rootActorRef.system.get('git');
  const gitActorState: any = useSelector(gitActorRef, (state) => state);
  const sendToGitActor = gitActorRef.send;

  return {
    gitActorRef,
    gitActorState,
    sendToGitActor,

  };
}
