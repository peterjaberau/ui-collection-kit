import { RecordFilter } from '@twenty-modules/object-record/record-filter/types/RecordFilter';

import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';

import { getFilterTypeFromFieldType } from '@twenty-modules/object-metadata/utils/formatFieldMetadataItemsAsFilterDefinitions';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { ViewFilter } from '../types/ViewFilter';

export const mapViewFiltersToFilters = (
  viewFilters: ViewFilter[],
  availableFieldMetadataItems: FieldMetadataItem[],
): RecordFilter[] => {
  return viewFilters
    .map((viewFilter) => {
      const availableFieldMetadataItem = availableFieldMetadataItems.find(
        (fieldMetadataItem) =>
          fieldMetadataItem.id === viewFilter.fieldMetadataId,
      );

      if (!isDefined(availableFieldMetadataItem)) {
        // Todo: we we don't throw an error yet as we have race condition on view change
        return undefined;
      }

      const filterType = getFilterTypeFromFieldType(
        availableFieldMetadataItem.type,
      );

      return {
        id: viewFilter.id,
        fieldMetadataId: viewFilter.fieldMetadataId,
        value: viewFilter.value,
        displayValue: viewFilter.displayValue,
        operand: viewFilter.operand,
        recordFilterGroupId: viewFilter.viewFilterGroupId,
        positionInRecordFilterGroup: viewFilter.positionInViewFilterGroup,
        label: availableFieldMetadataItem.label,
        type: filterType,
        subFieldName: viewFilter.subFieldName,
      } satisfies RecordFilter;
    })
    .filter(isDefined);
};
