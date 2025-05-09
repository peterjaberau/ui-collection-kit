import { RecordFilter } from '@twenty-modules/object-record/record-filter/types/RecordFilter';
import { ViewFilter } from '@twenty-modules/views/types/ViewFilter';

export const mapRecordFilterToViewFilter = (
  recordFilter: RecordFilter,
): ViewFilter => {
  return {
    __typename: 'ViewFilter',
    displayValue: recordFilter.displayValue,
    fieldMetadataId: recordFilter.fieldMetadataId,
    id: recordFilter.id,
    operand: recordFilter.operand,
    value: recordFilter.value,
    positionInViewFilterGroup: recordFilter.positionInRecordFilterGroup,
    viewFilterGroupId: recordFilter.recordFilterGroupId,
    subFieldName: recordFilter.subFieldName,
  };
};
