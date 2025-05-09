import { currentRecordFilterGroupsComponentState } from '@twenty-modules/object-record/record-filter-group/states/currentRecordFilterGroupsComponentState';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';
import { getSnapshotValue } from '@twenty-modules/ui/utilities/state/utils/getSnapshotValue';
import { usePersistViewFilterGroupRecords } from '@twenty-modules/views/hooks/internal/usePersistViewFilterGroupRecords';
import { useGetCurrentViewOnly } from '@twenty-modules/views/hooks/useGetCurrentViewOnly';
import { getViewFilterGroupsToCreate } from '@twenty-modules/views/utils/getViewFilterGroupsToCreate';
import { getViewFilterGroupsToDelete } from '@twenty-modules/views/utils/getViewFilterGroupsToDelete';
import { getViewFilterGroupsToUpdate } from '@twenty-modules/views/utils/getViewFilterGroupsToUpdate';
import { mapRecordFilterGroupToViewFilterGroup } from '@twenty-modules/views/utils/mapRecordFilterGroupToViewFilterGroup';
import { useRecoilCallback } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useSaveRecordFilterGroupsToViewFilterGroups = () => {
  const {
    createViewFilterGroupRecords,
    updateViewFilterGroupRecords,
    deleteViewFilterGroupRecords,
  } = usePersistViewFilterGroupRecords();

  const { currentView } = useGetCurrentViewOnly();

  const currentRecordFilterGroupsCallbackState =
    useRecoilComponentCallbackStateV2(currentRecordFilterGroupsComponentState);

  const saveRecordFilterGroupsToViewFilterGroups = useRecoilCallback(
    ({ snapshot }) =>
      async () => {
        if (!isDefined(currentView)) {
          return;
        }

        const currentViewFilterGroups = currentView?.viewFilterGroups ?? [];

        const currentRecordFilterGroups = getSnapshotValue(
          snapshot,
          currentRecordFilterGroupsCallbackState,
        );

        const newViewFilterGroups = currentRecordFilterGroups.map(
          (recordFilterGroup) =>
            mapRecordFilterGroupToViewFilterGroup({
              recordFilterGroup,
              view: currentView,
            }),
        );

        const viewFilterGroupsToCreate = getViewFilterGroupsToCreate(
          currentViewFilterGroups,
          newViewFilterGroups,
        );

        const viewFilterGroupsToDelete = getViewFilterGroupsToDelete(
          currentViewFilterGroups,
          newViewFilterGroups,
        );

        const viewFilterGroupsToUpdate = getViewFilterGroupsToUpdate(
          currentViewFilterGroups,
          newViewFilterGroups,
        );

        const viewFilterGroupIdsToDelete = viewFilterGroupsToDelete.map(
          (viewFilterGroup) => viewFilterGroup.id,
        );

        await createViewFilterGroupRecords(
          viewFilterGroupsToCreate,
          currentView,
        );
        await updateViewFilterGroupRecords(viewFilterGroupsToUpdate);
        await deleteViewFilterGroupRecords(viewFilterGroupIdsToDelete);
      },
    [
      createViewFilterGroupRecords,
      deleteViewFilterGroupRecords,
      updateViewFilterGroupRecords,
      currentRecordFilterGroupsCallbackState,
      currentView,
    ],
  );

  return {
    saveRecordFilterGroupsToViewFilterGroups,
  };
};
