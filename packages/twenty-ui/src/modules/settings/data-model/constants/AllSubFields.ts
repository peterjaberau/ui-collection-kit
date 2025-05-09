import { SETTINGS_COMPOSITE_FIELD_TYPE_CONFIGS } from '@twenty-modules/settings/data-model/constants/SettingsCompositeFieldTypeConfigs';
import { COMPOSITE_FIELD_TYPES } from '@twenty-modules/settings/data-model/types/CompositeFieldType';

export const ALL_SUB_FIELDS = COMPOSITE_FIELD_TYPES.flatMap(
  (compositeFieldType) =>
    SETTINGS_COMPOSITE_FIELD_TYPE_CONFIGS[compositeFieldType].subFields,
);
