import { RecordFilter } from '@twenty-modules/object-record/record-filter/types/RecordFilter';
import { compareStrictlyExceptForNullAndUndefined } from '@twenty-ui/front/utils/compareStrictlyExceptForNullAndUndefined';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const shouldReplaceFilter = (
  oldFilter: Pick<
    RecordFilter,
    'id' | 'fieldMetadataId' | 'recordFilterGroupId'
  >,
  newFilter: Pick<
    RecordFilter,
    'id' | 'fieldMetadataId' | 'recordFilterGroupId'
  >,
) => {
  const isNewFilterAdvancedFilter = isDefined(newFilter.recordFilterGroupId);

  if (isNewFilterAdvancedFilter) {
    return newFilter.id === oldFilter.id;
  } else {
    return (
      compareStrictlyExceptForNullAndUndefined(
        newFilter.fieldMetadataId,
        oldFilter.fieldMetadataId,
      ) && !isDefined(oldFilter.recordFilterGroupId)
    );
  }
};
