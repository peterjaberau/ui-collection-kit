import { OnDragEndResponder } from '@hello-pangea/dnd';

import { useContextStoreObjectMetadataItemOrThrow } from '@twenty-modules/context-store/hooks/useContextStoreObjectMetadataItemOrThrow';
import { useSetRecordGroups } from '@twenty-modules/object-record/record-group/hooks/useSetRecordGroups';
import { recordGroupDefinitionFamilyState } from '@twenty-modules/object-record/record-group/states/recordGroupDefinitionFamilyState';
import { visibleRecordGroupIdsComponentFamilySelector } from '@twenty-modules/object-record/record-group/states/selectors/visibleRecordGroupIdsComponentFamilySelector';
import { RecordGroupDefinition } from '@twenty-modules/object-record/record-group/types/RecordGroupDefinition';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';
import { getSnapshotValue } from '@twenty-modules/ui/utilities/state/utils/getSnapshotValue';
import { useSaveCurrentViewGroups } from '@twenty-modules/views/hooks/useSaveCurrentViewGroups';
import { ViewType } from '@twenty-modules/views/types/ViewType';
import { mapRecordGroupDefinitionsToViewGroups } from '@twenty-modules/views/utils/mapRecordGroupDefinitionsToViewGroups';
import { useRecoilCallback } from 'recoil';
import { moveArrayItem } from '@twenty-ui/front/utils/array/moveArrayItem';
import { isDeeplyEqual } from '@twenty-ui/front/utils/isDeeplyEqual';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type UseRecordGroupHandlersParams = {
  viewBarId: string;
  viewType: ViewType;
};

export const useRecordGroupReorder = ({
  viewBarId,
  viewType,
}: UseRecordGroupHandlersParams) => {
  const { setRecordGroups } = useSetRecordGroups();
  const { objectMetadataItem } = useContextStoreObjectMetadataItemOrThrow();

  const visibleRecordGroupIdsFamilySelector = useRecoilComponentCallbackStateV2(
    visibleRecordGroupIdsComponentFamilySelector,
  );

  const { saveViewGroups } = useSaveCurrentViewGroups();

  const handleOrderChange: OnDragEndResponder = useRecoilCallback(
    ({ snapshot }) =>
      (result) => {
        if (!result.destination) {
          return;
        }

        const visibleRecordGroupIds = getSnapshotValue(
          snapshot,
          visibleRecordGroupIdsFamilySelector(viewType),
        );

        const reorderedVisibleRecordGroupIds = moveArrayItem(
          visibleRecordGroupIds,
          {
            fromIndex: result.source.index - 1,
            toIndex: result.destination.index - 1,
          },
        );

        if (
          isDeeplyEqual(visibleRecordGroupIds, reorderedVisibleRecordGroupIds)
        ) {
          return;
        }

        const updatedRecordGroups = reorderedVisibleRecordGroupIds.reduce<
          RecordGroupDefinition[]
        >((acc, recordGroupId, index) => {
          const recordGroupDefinition = getSnapshotValue(
            snapshot,
            recordGroupDefinitionFamilyState(recordGroupId),
          );

          if (!isDefined(recordGroupDefinition)) {
            return acc;
          }

          return [
            ...acc,
            {
              ...recordGroupDefinition,
              position: index,
            },
          ];
        }, []);

        setRecordGroups(updatedRecordGroups, viewBarId, objectMetadataItem.id);
        saveViewGroups(
          mapRecordGroupDefinitionsToViewGroups(updatedRecordGroups),
        );
      },
    [
      objectMetadataItem,
      saveViewGroups,
      setRecordGroups,
      viewBarId,
      viewType,
      visibleRecordGroupIdsFamilySelector,
    ],
  );

  return {
    handleOrderChange,
  };
};
