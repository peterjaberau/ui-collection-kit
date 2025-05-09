import { SETTINGS_COMPOSITE_FIELD_TYPE_CONFIGS } from '@twenty-modules/settings/data-model/constants/SettingsCompositeFieldTypeConfigs';
import { CompositeFieldSubFieldName } from '@twenty-modules/settings/data-model/types/CompositeFieldSubFieldName';
import { COMPOSITE_FIELD_TYPES } from '@twenty-modules/settings/data-model/types/CompositeFieldType';

export const isValidSubFieldName = (
  subFieldName: string,
): subFieldName is CompositeFieldSubFieldName => {
  const allSubFields = COMPOSITE_FIELD_TYPES.flatMap(
    (compositeFieldType) =>
      SETTINGS_COMPOSITE_FIELD_TYPE_CONFIGS[compositeFieldType].subFields,
  );

  return allSubFields.includes(subFieldName as any);
};
