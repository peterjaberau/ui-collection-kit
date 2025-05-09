import { currentRecordFiltersComponentState } from '@twenty-modules/object-record/record-filter/states/currentRecordFiltersComponentState';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';
import { getSnapshotValue } from '@twenty-modules/ui/utilities/state/utils/getSnapshotValue';
import { usePersistViewFilterRecords } from '@twenty-modules/views/hooks/internal/usePersistViewFilterRecords';
import { useGetCurrentViewOnly } from '@twenty-modules/views/hooks/useGetCurrentViewOnly';
import { getViewFiltersToCreate } from '@twenty-modules/views/utils/getViewFiltersToCreate';
import { getViewFiltersToDelete } from '@twenty-modules/views/utils/getViewFiltersToDelete';
import { getViewFiltersToUpdate } from '@twenty-modules/views/utils/getViewFiltersToUpdate';
import { mapRecordFilterToViewFilter } from '@twenty-modules/views/utils/mapRecordFilterToViewFilter';
import { useRecoilCallback } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useSaveRecordFiltersToViewFilters = () => {
  const {
    createViewFilterRecords,
    updateViewFilterRecords,
    deleteViewFilterRecords,
  } = usePersistViewFilterRecords();

  const { currentView } = useGetCurrentViewOnly();

  const currentRecordFiltersCallbackState = useRecoilComponentCallbackStateV2(
    currentRecordFiltersComponentState,
  );

  const saveRecordFiltersToViewFilters = useRecoilCallback(
    ({ snapshot }) =>
      async () => {
        if (!isDefined(currentView)) {
          return;
        }

        const currentViewFilters = currentView?.viewFilters ?? [];

        const currentRecordFilters = getSnapshotValue(
          snapshot,
          currentRecordFiltersCallbackState,
        );

        const newViewFilters = currentRecordFilters.map(
          mapRecordFilterToViewFilter,
        );

        const viewFiltersToCreate = getViewFiltersToCreate(
          currentViewFilters,
          newViewFilters,
        );

        const viewFiltersToDelete = getViewFiltersToDelete(
          currentViewFilters,
          newViewFilters,
        );

        const viewFiltersToUpdate = getViewFiltersToUpdate(
          currentViewFilters,
          newViewFilters,
        );

        const viewFilterIdsToDelete = viewFiltersToDelete.map(
          (viewFilter) => viewFilter.id,
        );

        await createViewFilterRecords(viewFiltersToCreate, currentView);
        await updateViewFilterRecords(viewFiltersToUpdate);
        await deleteViewFilterRecords(viewFilterIdsToDelete);
      },
    [
      createViewFilterRecords,
      deleteViewFilterRecords,
      updateViewFilterRecords,
      currentRecordFiltersCallbackState,
      currentView,
    ],
  );

  return {
    saveRecordFiltersToViewFilters,
  };
};
