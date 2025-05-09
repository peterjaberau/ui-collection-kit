import { CompositeFilterableFieldType } from '@twenty-modules/object-record/record-filter/types/CompositeFilterableFieldType';
import { FILTERABLE_FIELD_TYPES } from '@twenty-modules/object-record/record-filter/types/FilterableFieldType';
import { COMPOSITE_FIELD_TYPES } from '@twenty-modules/settings/data-model/types/CompositeFieldType';
import { FieldType } from '@twenty-modules/settings/data-model/types/FieldType';

export const isCompositeFilterableFieldType = (
  type: FieldType,
): type is CompositeFilterableFieldType =>
  FILTERABLE_FIELD_TYPES.includes(type as any) &&
  COMPOSITE_FIELD_TYPES.includes(type as any);
