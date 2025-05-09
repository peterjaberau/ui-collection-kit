import { RecordTitleCellContainerType } from '@twenty-modules/object-record/record-title-cell/types/RecordTitleCellContainerType';

export const getRecordTitleCellId = (
  recordId: string,
  fieldMetadataId: string,
  containerType: RecordTitleCellContainerType,
) => {
  return `${recordId}-${fieldMetadataId}-${containerType}`;
};
