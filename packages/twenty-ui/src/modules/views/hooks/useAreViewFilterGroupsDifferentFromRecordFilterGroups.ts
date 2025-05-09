import { currentRecordFilterGroupsComponentState } from '@twenty-modules/object-record/record-filter-group/states/currentRecordFilterGroupsComponentState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useGetCurrentViewOnly } from '@twenty-modules/views/hooks/useGetCurrentViewOnly';
import { getViewFilterGroupsToCreate } from '@twenty-modules/views/utils/getViewFilterGroupsToCreate';
import { getViewFilterGroupsToDelete } from '@twenty-modules/views/utils/getViewFilterGroupsToDelete';
import { getViewFilterGroupsToUpdate } from '@twenty-modules/views/utils/getViewFilterGroupsToUpdate';
import { mapRecordFilterGroupToViewFilterGroup } from '@twenty-modules/views/utils/mapRecordFilterGroupToViewFilterGroup';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useAreViewFilterGroupsDifferentFromRecordFilterGroups = () => {
  const { currentView } = useGetCurrentViewOnly();

  const currentRecordFilterGroups = useRecoilComponentValueV2(
    currentRecordFilterGroupsComponentState,
  );

  const currentViewFilterGroups = currentView?.viewFilterGroups ?? [];

  const viewFilterGroupsFromCurrentRecordFilterGroups = isDefined(currentView)
    ? currentRecordFilterGroups.map((recordFilterGroup) =>
        mapRecordFilterGroupToViewFilterGroup({
          recordFilterGroup,
          view: currentView,
        }),
      )
    : [];

  const viewFilterGroupsToCreate = getViewFilterGroupsToCreate(
    currentViewFilterGroups,
    viewFilterGroupsFromCurrentRecordFilterGroups,
  );

  const viewFilterGroupsToDelete = getViewFilterGroupsToDelete(
    currentViewFilterGroups,
    viewFilterGroupsFromCurrentRecordFilterGroups,
  );

  const viewFilterGroupsToUpdate = getViewFilterGroupsToUpdate(
    currentViewFilterGroups,
    viewFilterGroupsFromCurrentRecordFilterGroups,
  );

  const viewFilterGroupsAreDifferentFromRecordFilterGroups =
    viewFilterGroupsToCreate.length > 0 ||
    viewFilterGroupsToDelete.length > 0 ||
    viewFilterGroupsToUpdate.length > 0;

  return {
    viewFilterGroupsAreDifferentFromRecordFilterGroups,
  };
};
