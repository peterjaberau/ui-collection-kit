import { CompositeFieldType } from '@twenty-modules/settings/data-model/types/CompositeFieldType';
import { SettingsFieldType } from '@twenty-modules/settings/data-model/types/SettingsFieldType';

export type SettingsCompositeFieldType = Extract<
  SettingsFieldType,
  CompositeFieldType
>;
