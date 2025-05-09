import { currentRecordSortsComponentState } from '@twenty-modules/object-record/record-sort/states/currentRecordSortsComponentState';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';
import { getSnapshotValue } from '@twenty-modules/ui/utilities/state/utils/getSnapshotValue';
import { usePersistViewSortRecords } from '@twenty-modules/views/hooks/internal/usePersistViewSortRecords';
import { useGetCurrentViewOnly } from '@twenty-modules/views/hooks/useGetCurrentViewOnly';
import { getViewSortsToCreate } from '@twenty-modules/views/utils/getViewSortsToCreate';
import { getViewSortsToDelete } from '@twenty-modules/views/utils/getViewSortsToDelete';
import { getViewSortsToUpdate } from '@twenty-modules/views/utils/getViewSortsToUpdate';
import { mapRecordSortToViewSort } from '@twenty-modules/views/utils/mapRecordSortToViewSort';
import { useRecoilCallback } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useSaveRecordSortsToViewSorts = () => {
  const {
    createViewSortRecords,
    updateViewSortRecords,
    deleteViewSortRecords,
  } = usePersistViewSortRecords();

  const { currentView } = useGetCurrentViewOnly();

  const currentRecordSortsCallbackState = useRecoilComponentCallbackStateV2(
    currentRecordSortsComponentState,
  );

  const saveRecordSortsToViewSorts = useRecoilCallback(
    ({ snapshot }) =>
      async () => {
        if (!isDefined(currentView)) {
          return;
        }

        const currentViewSorts = currentView?.viewSorts ?? [];

        const currentRecordSorts = getSnapshotValue(
          snapshot,
          currentRecordSortsCallbackState,
        );

        const newViewSorts = currentRecordSorts.map(mapRecordSortToViewSort);

        const viewSortsToCreate = getViewSortsToCreate(
          currentViewSorts,
          newViewSorts,
        );

        const viewSortsToDelete = getViewSortsToDelete(
          currentViewSorts,
          newViewSorts,
        );

        const viewSortsToUpdate = getViewSortsToUpdate(
          currentViewSorts,
          newViewSorts,
        );

        const viewSortIdsToDelete = viewSortsToDelete.map(
          (viewSort) => viewSort.id,
        );

        await createViewSortRecords(viewSortsToCreate, currentView);
        await updateViewSortRecords(viewSortsToUpdate);
        await deleteViewSortRecords(viewSortIdsToDelete);
      },
    [
      createViewSortRecords,
      deleteViewSortRecords,
      updateViewSortRecords,
      currentRecordSortsCallbackState,
      currentView,
    ],
  );

  return {
    saveRecordSortsToViewSorts,
  };
};
