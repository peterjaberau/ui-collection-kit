import { ExtendedAggregateOperations } from '@twenty-modules/object-record/record-table/types/ExtendedAggregateOperations';
import { createFamilyState } from '@twenty-modules/ui/utilities/state/utils/createFamilyState';

export const viewFieldAggregateOperationState = createFamilyState<
  ExtendedAggregateOperations | null | undefined,
  { viewFieldId: string }
>({
  key: 'viewFieldAggregateOperationState',
  defaultValue: null,
});
