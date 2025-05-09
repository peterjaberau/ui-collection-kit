import { useRecoilCallback } from 'recoil';

import { getActionMenuDropdownIdFromActionMenuId } from '@twenty-modules/action-menu/utils/getActionMenuDropdownIdFromActionMenuId';
import { getActionMenuIdFromRecordIndexId } from '@twenty-modules/action-menu/utils/getActionMenuIdFromRecordIndexId';
import { recordIndexAllRecordIdsComponentSelector } from '@twenty-modules/object-record/record-index/states/selectors/recordIndexAllRecordIdsComponentSelector';
import { hasUserSelectedAllRowsComponentState } from '@twenty-modules/object-record/record-table/record-table-row/states/hasUserSelectedAllRowsFamilyState';
import { isRowSelectedComponentFamilyState } from '@twenty-modules/object-record/record-table/record-table-row/states/isRowSelectedComponentFamilyState';
import { RecordTableComponentInstanceContext } from '@twenty-modules/object-record/record-table/states/context/RecordTableComponentInstanceContext';
import { isDropdownOpenComponentState } from '@twenty-modules/ui/layout/dropdown/states/isDropdownOpenComponentState';
import { getSnapshotValue } from '@twenty-modules/ui/utilities/recoil-scope/utils/getSnapshotValue';
import { useAvailableComponentInstanceIdOrThrow } from '@twenty-modules/ui/utilities/state/component-state/hooks/useAvailableComponentInstanceIdOrThrow';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';
import { extractComponentState } from '@twenty-modules/ui/utilities/state/component-state/utils/extractComponentState';

export const useResetTableRowSelection = (recordTableId?: string) => {
  const recordTableIdFromContext = useAvailableComponentInstanceIdOrThrow(
    RecordTableComponentInstanceContext,
    recordTableId,
  );

  const recordIndexAllRecordIdsSelector = useRecoilComponentCallbackStateV2(
    recordIndexAllRecordIdsComponentSelector,
    recordTableIdFromContext,
  );

  const isRowSelectedFamilyState = useRecoilComponentCallbackStateV2(
    isRowSelectedComponentFamilyState,
    recordTableIdFromContext,
  );

  const hasUserSelectedAllRowsState = useRecoilComponentCallbackStateV2(
    hasUserSelectedAllRowsComponentState,
    recordTableIdFromContext,
  );

  const isActionMenuDropdownOpenState = extractComponentState(
    isDropdownOpenComponentState,
    getActionMenuDropdownIdFromActionMenuId(
      getActionMenuIdFromRecordIndexId(recordTableIdFromContext),
    ),
  );

  return useRecoilCallback(
    ({ set, snapshot }) =>
      () => {
        const allRecordIds = getSnapshotValue(
          snapshot,
          recordIndexAllRecordIdsSelector,
        );

        for (const recordId of allRecordIds) {
          set(isRowSelectedFamilyState(recordId), false);
        }

        set(hasUserSelectedAllRowsState, false);

        set(isActionMenuDropdownOpenState, false);
      },
    [
      recordIndexAllRecordIdsSelector,
      hasUserSelectedAllRowsState,
      isActionMenuDropdownOpenState,
      isRowSelectedFamilyState,
    ],
  );
};
