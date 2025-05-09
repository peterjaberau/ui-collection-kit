import { currentRecordSortsComponentState } from '@twenty-modules/object-record/record-sort/states/currentRecordSortsComponentState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useGetCurrentViewOnly } from '@twenty-modules/views/hooks/useGetCurrentViewOnly';
import { getViewSortsToCreate } from '@twenty-modules/views/utils/getViewSortsToCreate';
import { getViewSortsToDelete } from '@twenty-modules/views/utils/getViewSortsToDelete';
import { getViewSortsToUpdate } from '@twenty-modules/views/utils/getViewSortsToUpdate';
import { mapRecordSortToViewSort } from '@twenty-modules/views/utils/mapRecordSortToViewSort';
import { useMemo } from 'react';

export const useAreViewSortsDifferentFromRecordSorts = () => {
  const { currentView } = useGetCurrentViewOnly();
  const currentRecordSorts = useRecoilComponentValueV2(
    currentRecordSortsComponentState,
  );

  const viewSortsAreDifferentFromRecordSorts = useMemo(() => {
    const currentViewSorts = currentView?.viewSorts ?? [];
    const viewSortsFromCurrentRecordSorts = currentRecordSorts.map(
      mapRecordSortToViewSort,
    );

    const viewSortsToCreate = getViewSortsToCreate(
      currentViewSorts,
      viewSortsFromCurrentRecordSorts,
    );

    const viewSortsToDelete = getViewSortsToDelete(
      currentViewSorts,
      viewSortsFromCurrentRecordSorts,
    );

    const viewSortsToUpdate = getViewSortsToUpdate(
      currentViewSorts,
      viewSortsFromCurrentRecordSorts,
    );

    const sortsHaveChanged =
      viewSortsToCreate.length > 0 ||
      viewSortsToDelete.length > 0 ||
      viewSortsToUpdate.length > 0;

    return sortsHaveChanged;
  }, [currentRecordSorts, currentView]);

  return { viewSortsAreDifferentFromRecordSorts };
};
