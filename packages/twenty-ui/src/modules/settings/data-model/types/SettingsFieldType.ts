import { FieldType } from '@twenty-modules/settings/data-model/types/FieldType';
import { SettingsExcludedFieldType } from '@twenty-modules/settings/data-model/types/SettingsExcludedFieldType';
import { ExcludeLiteral } from '@twenty-ui/front/types/ExcludeLiteral';

export type SettingsFieldType = ExcludeLiteral<
  FieldType,
  SettingsExcludedFieldType
>;
