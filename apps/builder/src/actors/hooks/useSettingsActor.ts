import { useSelector } from '@xstate/react';
import { useRootActor } from './useRootActor';

export function useSettingsActor() {
  const { rootActorRef } = useRootActor();

  const settingsActorRef = rootActorRef.system.get('settings');
  const sendToSettings = settingsActorRef.send;

  const settingsState: any = useSelector(settingsActorRef, (state) => state);
  const settingsContext = settingsState.context;

  const settingsIsLoading = settingsContext.isLoading;
  const settingsIsSaving = settingsContext.isSaving;
  const settingsIsRestarting = settingsContext.isRestarting;
  const settingsShowReleaseNotes = settingsContext.showReleaseNotes;
  const settingsIsRestartFailed = settingsContext.isRestartFailed;
  const settingsConfig = settingsContext.config;


  return {
    settingsActorRef,
    sendToSettings,

    settingsState,
    settingsContext,

    settingsIsLoading,
    settingsIsSaving,
    settingsIsRestarting,
    settingsShowReleaseNotes,
    settingsIsRestartFailed,
    settingsConfig,


  };
}
