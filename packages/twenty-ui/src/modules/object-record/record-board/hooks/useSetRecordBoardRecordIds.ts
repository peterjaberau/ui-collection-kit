import { useRecoilCallback } from 'recoil';

import { recordGroupDefinitionFamilyState } from '@twenty-modules/object-record/record-group/states/recordGroupDefinitionFamilyState';
import { recordGroupFieldMetadataComponentState } from '@twenty-modules/object-record/record-group/states/recordGroupFieldMetadataComponentState';
import { visibleRecordGroupIdsComponentFamilySelector } from '@twenty-modules/object-record/record-group/states/selectors/visibleRecordGroupIdsComponentFamilySelector';
import { recordIndexRecordIdsByGroupComponentFamilyState } from '@twenty-modules/object-record/record-index/states/recordIndexRecordIdsByGroupComponentFamilyState';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { sortRecordsByPosition } from '@twenty-modules/object-record/utils/sortRecordsByPosition';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';
import { getSnapshotValue } from '@twenty-modules/ui/utilities/state/utils/getSnapshotValue';
import { ViewType } from '@twenty-modules/views/types/ViewType';
import { isDeeplyEqual } from '@twenty-ui/front/utils/isDeeplyEqual';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useSetRecordBoardRecordIds = (recordBoardId?: string) => {
  const visibleRecordGroupIdsFamilySelector = useRecoilComponentCallbackStateV2(
    visibleRecordGroupIdsComponentFamilySelector,
  );

  const recordGroupFieldMetadataState = useRecoilComponentCallbackStateV2(
    recordGroupFieldMetadataComponentState,
    recordBoardId,
  );

  const recordIndexRecordIdsByGroupFamilyState =
    useRecoilComponentCallbackStateV2(
      recordIndexRecordIdsByGroupComponentFamilyState,
      recordBoardId,
    );

  const setRecordIds = useRecoilCallback(
    ({ set, snapshot }) =>
      (records: ObjectRecord[]) => {
        const recordGroupIds = getSnapshotValue(
          snapshot,
          visibleRecordGroupIdsFamilySelector(ViewType.Kanban),
        );

        for (const recordGroupId of recordGroupIds) {
          const recordGroup = getSnapshotValue(
            snapshot,
            recordGroupDefinitionFamilyState(recordGroupId),
          );

          const existingRecordGroupRowIds = getSnapshotValue(
            snapshot,
            recordIndexRecordIdsByGroupFamilyState(recordGroupId),
          );

          const recordGroupFieldMetadata = getSnapshotValue(
            snapshot,
            recordGroupFieldMetadataState,
          );

          if (!isDefined(recordGroupFieldMetadata)) {
            return;
          }

          const recordGroupRowIds = records
            .filter(
              (record) =>
                record[recordGroupFieldMetadata.name] === recordGroup?.value,
            )
            .sort(sortRecordsByPosition)
            .map((record) => record.id);

          if (!isDeeplyEqual(existingRecordGroupRowIds, recordGroupRowIds)) {
            set(
              recordIndexRecordIdsByGroupFamilyState(recordGroupId),
              recordGroupRowIds,
            );
          }
        }
      },
    [
      visibleRecordGroupIdsFamilySelector,
      recordIndexRecordIdsByGroupFamilyState,
      recordGroupFieldMetadataState,
    ],
  );

  return {
    setRecordIds,
  };
};
