import { useUpsertObjectFilterDropdownCurrentFilter } from '@twenty-modules/object-record/object-filter-dropdown/hooks/useUpsertObjectFilterDropdownCurrentFilter';
import { fieldMetadataItemUsedInDropdownComponentSelector } from '@twenty-modules/object-record/object-filter-dropdown/states/fieldMetadataItemUsedInDropdownComponentSelector';
import { objectFilterDropdownCurrentRecordFilterComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownCurrentRecordFilterComponentState';
import { useCreateRecordFilterFromObjectFilterDropdownCurrentStates } from '@twenty-modules/object-record/record-filter/hooks/useCreateRecordFilterFromObjectFilterDropdownCurrentStates';
import { RecordFilter } from '@twenty-modules/object-record/record-filter/types/RecordFilter';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useApplyObjectFilterDropdownFilterValue = () => {
  const objectFilterDropdownCurrentRecordFilter = useRecoilComponentValueV2(
    objectFilterDropdownCurrentRecordFilterComponentState,
  );

  const objectFilterDropdownFilterNotYetCreated = !isDefined(
    objectFilterDropdownCurrentRecordFilter,
  );

  const fieldMetadataItemUsedInDropdown = useRecoilComponentValueV2(
    fieldMetadataItemUsedInDropdownComponentSelector,
  );

  const { createRecordFilterFromObjectFilterDropdownCurrentStates } =
    useCreateRecordFilterFromObjectFilterDropdownCurrentStates();

  const { upsertObjectFilterDropdownCurrentFilter } =
    useUpsertObjectFilterDropdownCurrentFilter();

  const applyObjectFilterDropdownFilterValue = (
    newFilterValue: string,
    newDisplayValue?: string,
  ) => {
    if (objectFilterDropdownFilterNotYetCreated) {
      if (!isDefined(fieldMetadataItemUsedInDropdown)) {
        throw new Error(
          `Field metadata item is not defined in object filter dropdown when setting a filter value to create it, this should not happen.`,
        );
      }

      const { newRecordFilterFromObjectFilterDropdownStates } =
        createRecordFilterFromObjectFilterDropdownCurrentStates(
          fieldMetadataItemUsedInDropdown,
        );

      const newCurrentRecordFilter = {
        ...newRecordFilterFromObjectFilterDropdownStates,
        value: newFilterValue,
        displayValue: newDisplayValue ?? newFilterValue,
      } satisfies RecordFilter;

      upsertObjectFilterDropdownCurrentFilter(newCurrentRecordFilter);
    } else {
      const newCurrentRecordFilter = {
        ...objectFilterDropdownCurrentRecordFilter,
        value: newFilterValue,
        displayValue: newDisplayValue ?? newFilterValue,
      } satisfies RecordFilter;

      upsertObjectFilterDropdownCurrentFilter(newCurrentRecordFilter);
    }
  };

  return {
    applyObjectFilterDropdownFilterValue,
  };
};
