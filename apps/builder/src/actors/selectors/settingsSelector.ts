import { getActor } from "./utils"

export const settingsSelector = (system: any) => {
  const getSettingsActor = getActor("settings", system)
  const getSettingsState = getSettingsActor?.getSnapshot()
  const getSettingsContext = getSettingsContext?.context

  return {
    getSettingsActor,
    getSettingsState,
    getSettingsContext,
  }
}
