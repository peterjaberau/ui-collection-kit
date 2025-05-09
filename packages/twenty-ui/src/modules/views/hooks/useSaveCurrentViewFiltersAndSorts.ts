import { useSaveRecordFilterGroupsToViewFilterGroups } from '@twenty-modules/views/hooks/useSaveRecordFilterGroupsToViewFilterGroups';
import { useSaveRecordFiltersToViewFilters } from '@twenty-modules/views/hooks/useSaveRecordFiltersToViewFilters';
import { useSaveRecordSortsToViewSorts } from '@twenty-modules/views/hooks/useSaveRecordSortsToViewSorts';

export const useSaveCurrentViewFiltersAndSorts = () => {
  const { saveRecordFilterGroupsToViewFilterGroups } =
    useSaveRecordFilterGroupsToViewFilterGroups();

  const { saveRecordFiltersToViewFilters } =
    useSaveRecordFiltersToViewFilters();

  const { saveRecordSortsToViewSorts } = useSaveRecordSortsToViewSorts();

  const saveCurrentViewFilterAndSorts = async () => {
    await saveRecordSortsToViewSorts();
    await saveRecordFiltersToViewFilters();
    await saveRecordFilterGroupsToViewFilterGroups();
  };

  return {
    saveCurrentViewFilterAndSorts,
  };
};
