import { useGetCurrentViewOnly } from '@twenty-modules/views/hooks/useGetCurrentViewOnly';
import { ViewFilterOperand } from '@twenty-modules/views/types/ViewFilterOperand';
import { getFilterTypeFromFieldType } from '@twenty-modules/object-metadata/utils/formatFieldMetadataItemsAsFilterDefinitions';
import { RecordFilter } from '@twenty-modules/object-record/record-filter/types/RecordFilter';
import { FieldMetadataType } from '@ui-collection-kit/twenty-shared/src/types';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useGetViewGroupsFilters = (): RecordFilter[] => {
  const { currentView } = useGetCurrentViewOnly();

  return (
    currentView?.viewGroups
      .filter((recordGroup) => !recordGroup.isVisible)
      .map((recordGroup) => {
        return {
          id: recordGroup.id,
          fieldMetadataId: recordGroup.fieldMetadataId,
          value: JSON.stringify([recordGroup.fieldValue]),
          operand: ViewFilterOperand.IsNot,
          displayValue: '',
          type: getFilterTypeFromFieldType(FieldMetadataType.SELECT),
          label: '',
        };
      })
      .filter(isDefined) || []
  );
};
