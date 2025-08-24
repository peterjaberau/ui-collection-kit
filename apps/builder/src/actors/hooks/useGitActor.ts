import { useSelector } from '@xstate/react';
import { useRootActor } from './useRootActor';

export function useGitActor() {
  const { rootActorRef } = useRootActor();

  const gitActorRef = rootActorRef.system.get('git');
  const sendToGit = gitActorRef.send;

  const gitState: any = useSelector(gitActorRef, (state) => state);
  const gitContext = gitState.context;

  const gitArtifacts = gitContext.artifacts;
  const gitGlobal = gitContext.global;

  return {
    gitActorRef,
    sendToGit,

    gitState,
    gitContext,

    gitArtifacts,
    gitGlobal,

  };
}
