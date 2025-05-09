import { FieldType } from '@twenty-modules/settings/data-model/types/FieldType';
import { PickLiteral } from '@twenty-ui/front/types/PickLiteral';

export type SettingsExcludedFieldType = PickLiteral<
  FieldType,
  'POSITION' | 'TS_VECTOR' | 'RICH_TEXT' | 'RICH_TEXT_V2'
>;
