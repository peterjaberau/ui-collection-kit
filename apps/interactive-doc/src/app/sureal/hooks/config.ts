import { useConfigStore } from "../store/config"
import { useStable } from "./stable"

const ACTIONS = {
  behavior: "updateBehaviorSettings",
  appearance: "updateAppearanceSettings",
  templates: "updateTemplateSettings",
  serving: "updateServingSettings",
  cloud: "updateCloudSettings",
  gtm: "updateGtmSettings",
} as any

/**
 * Subscribe to a setting in the config store and
 * expose an updater function to change the setting.
 *
 * @param category The category of the setting.
 * @param key The key of the setting.
 */
export function useSetting(snapshot: any, { category, key }: any) {

  console.log({
    snapshot
  })

  return [
    snapshot?.context.settings[category][key],

    useStable((value: any) => {
      snapshot?.context.settings
      snapshot?.context[ACTIONS[category]]({ [key]: [value] })
    }),
  ] as const
}
