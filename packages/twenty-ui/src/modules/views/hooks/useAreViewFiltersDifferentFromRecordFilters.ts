import { currentRecordFiltersComponentState } from '@twenty-modules/object-record/record-filter/states/currentRecordFiltersComponentState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useGetCurrentViewOnly } from '@twenty-modules/views/hooks/useGetCurrentViewOnly';
import { getViewFiltersToCreate } from '@twenty-modules/views/utils/getViewFiltersToCreate';
import { getViewFiltersToDelete } from '@twenty-modules/views/utils/getViewFiltersToDelete';
import { getViewFiltersToUpdate } from '@twenty-modules/views/utils/getViewFiltersToUpdate';
import { mapRecordFilterToViewFilter } from '@twenty-modules/views/utils/mapRecordFilterToViewFilter';
import { useMemo } from 'react';

export const useAreViewFiltersDifferentFromRecordFilters = () => {
  const { currentView } = useGetCurrentViewOnly();
  const currentRecordFilters = useRecoilComponentValueV2(
    currentRecordFiltersComponentState,
  );

  const viewFiltersAreDifferentFromRecordFilters = useMemo(() => {
    const currentViewFilters = currentView?.viewFilters ?? [];
    const viewFiltersFromCurrentRecordFilters = currentRecordFilters.map(
      mapRecordFilterToViewFilter,
    );

    const viewFiltersToCreate = getViewFiltersToCreate(
      currentViewFilters,
      viewFiltersFromCurrentRecordFilters,
    );

    const viewFiltersToDelete = getViewFiltersToDelete(
      currentViewFilters,
      viewFiltersFromCurrentRecordFilters,
    );

    const viewFiltersToUpdate = getViewFiltersToUpdate(
      currentViewFilters,
      viewFiltersFromCurrentRecordFilters,
    );

    const filtersHaveChanged =
      viewFiltersToCreate.length > 0 ||
      viewFiltersToDelete.length > 0 ||
      viewFiltersToUpdate.length > 0;

    return filtersHaveChanged;
  }, [currentRecordFilters, currentView]);

  return { viewFiltersAreDifferentFromRecordFilters };
};
