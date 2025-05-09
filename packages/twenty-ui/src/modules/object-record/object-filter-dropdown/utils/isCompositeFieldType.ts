import {
  COMPOSITE_FIELD_TYPES,
  CompositeFieldType,
} from '@twenty-modules/settings/data-model/types/CompositeFieldType';
import { FieldType } from '@twenty-modules/settings/data-model/types/FieldType';

export const isCompositeFieldType = (
  type: FieldType,
): type is CompositeFieldType => COMPOSITE_FIELD_TYPES.includes(type as any);
