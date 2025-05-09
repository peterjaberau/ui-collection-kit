import { RecordFilter } from '@twenty-modules/object-record/record-filter/types/RecordFilter';
import { compareStrictlyExceptForNullAndUndefined } from '@twenty-ui/front/utils/compareStrictlyExceptForNullAndUndefined';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const findDuplicateRecordFilterInNonAdvancedRecordFilters = ({
  recordFilters,
  fieldMetadataItemId,
  subFieldName,
}: {
  recordFilters: RecordFilter[];
  fieldMetadataItemId: string;
  subFieldName?: string | null | undefined;
}): RecordFilter | undefined => {
  const duplicateFilterInCurrentRecordFilters = recordFilters
    .filter((recordFilter) => !isDefined(recordFilter.recordFilterGroupId))
    .find(
      (recordFilter) =>
        compareStrictlyExceptForNullAndUndefined(
          recordFilter.fieldMetadataId,
          fieldMetadataItemId,
        ) &&
        compareStrictlyExceptForNullAndUndefined(
          recordFilter.subFieldName,
          subFieldName,
        ),
    );

  return duplicateFilterInCurrentRecordFilters;
};
