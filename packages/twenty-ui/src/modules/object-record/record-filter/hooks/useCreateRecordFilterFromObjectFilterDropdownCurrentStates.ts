import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { getFilterTypeFromFieldType } from '@twenty-modules/object-metadata/utils/formatFieldMetadataItemsAsFilterDefinitions';
import { fieldMetadataItemUsedInDropdownComponentSelector } from '@twenty-modules/object-record/object-filter-dropdown/states/fieldMetadataItemUsedInDropdownComponentSelector';
import { selectedOperandInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/selectedOperandInDropdownComponentState';
import { subFieldNameUsedInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/subFieldNameUsedInDropdownComponentState';
import { RecordFilter } from '@twenty-modules/object-record/record-filter/types/RecordFilter';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { v4 } from 'uuid';

export const useCreateRecordFilterFromObjectFilterDropdownCurrentStates =
  () => {
    const fieldMetadataItemUsedInDropdown = useRecoilComponentValueV2(
      fieldMetadataItemUsedInDropdownComponentSelector,
    );

    const selectedOperandInDropdown = useRecoilComponentValueV2(
      selectedOperandInDropdownComponentState,
    );

    const subFieldNameUsedInDropdown = useRecoilComponentValueV2(
      subFieldNameUsedInDropdownComponentState,
    );

    const createRecordFilterFromObjectFilterDropdownCurrentStates = (
      fieldMetadataItem: FieldMetadataItem,
    ) => {
      if (!isDefined(fieldMetadataItemUsedInDropdown)) {
        throw new Error(
          `Field metadata item used in dropdown is not defined when creating a record filter from object filter dropdown current states, this should not happen.`,
        );
      }

      const filterType = getFilterTypeFromFieldType(
        fieldMetadataItemUsedInDropdown.type,
      );

      if (!isDefined(selectedOperandInDropdown)) {
        throw new Error(
          `Selected operand in dropdown is not defined when creating a record filter from object filter dropdown current states, this should not happen.`,
        );
      }

      const newRecordFilterFromObjectFilterDropdownStates: RecordFilter = {
        id: v4(),
        fieldMetadataId: fieldMetadataItemUsedInDropdown?.id,
        operand: selectedOperandInDropdown,
        displayValue: '',
        label: fieldMetadataItem.label,
        type: filterType,
        value: '',
        subFieldName: subFieldNameUsedInDropdown,
      };

      return { newRecordFilterFromObjectFilterDropdownStates };
    };

    return {
      createRecordFilterFromObjectFilterDropdownCurrentStates,
    };
  };
