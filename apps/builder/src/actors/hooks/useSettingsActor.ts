import { useSelector } from '@xstate/react';
import { useRootActor } from './useRootActor';

export function useSettingsActor() {
  const { rootActorRef } = useRootActor();

  const settingsActorRef = rootActorRef.system.get('settings');
  const settingsActorState: any = useSelector(settingsActorRef, (state) => state);
  const sendToSettingsActor = settingsActorRef.send;

  return {
    settingsActorRef,
    settingsActorState,
    sendToSettingsActor,

  };
}
