import { SETTINGS_NON_COMPOSITE_FIELD_TYPE_CONFIGS } from '@twenty-modules/settings/data-model/constants/SettingsNonCompositeFieldTypeConfigs';
import { SettingsNonCompositeFieldType } from '@twenty-modules/settings/data-model/types/SettingsNonCompositeFieldType';

export const getSettingsNonCompositeFieldTypeLabel = (
  settingsNonCompositeFieldType: SettingsNonCompositeFieldType,
) => {
  return SETTINGS_NON_COMPOSITE_FIELD_TYPE_CONFIGS[
    settingsNonCompositeFieldType
  ].label;
};
