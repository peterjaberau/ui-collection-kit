import { NonCompositeFieldType } from '@twenty-modules/settings/data-model/types/NonCompositeFieldType';
import { SettingsFieldType } from '@twenty-modules/settings/data-model/types/SettingsFieldType';

export type SettingsNonCompositeFieldType = Extract<
  NonCompositeFieldType,
  SettingsFieldType
>;
