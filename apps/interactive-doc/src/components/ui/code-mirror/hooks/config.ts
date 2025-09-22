import { useConfigStore } from "../store/use"
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
export function useSetting(category: any, key: any) {
  return [
    useConfigStore().getSetting(category, key),
    useStable((value: any) => {
      useConfigStore()
        .getState()
        [ACTIONS[category]]({
          [key]: value,
        })
    }),
  ] as const
}
