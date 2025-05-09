import { CompositeFieldType } from '@twenty-modules/settings/data-model/types/CompositeFieldType';
import { FieldType } from '@twenty-modules/settings/data-model/types/FieldType';
import { ExcludeLiteral } from '@twenty-ui/front/types/ExcludeLiteral';

export type NonCompositeFieldType = ExcludeLiteral<
  FieldType,
  CompositeFieldType
>;
