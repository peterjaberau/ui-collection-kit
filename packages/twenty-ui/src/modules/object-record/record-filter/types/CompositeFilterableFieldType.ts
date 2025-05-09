import { FilterableFieldType } from '@twenty-modules/object-record/record-filter/types/FilterableFieldType';
import { CompositeFieldType } from '@twenty-modules/settings/data-model/types/CompositeFieldType';

export type CompositeFilterableFieldType = FilterableFieldType &
  CompositeFieldType;
