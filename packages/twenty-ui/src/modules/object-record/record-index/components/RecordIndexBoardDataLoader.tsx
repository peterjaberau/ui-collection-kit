import { useRecoilValue } from 'recoil';

import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { recordGroupIdsComponentState } from '@twenty-modules/object-record/record-group/states/recordGroupIdsComponentState';
import { RecordIndexBoardColumnLoaderEffect } from '@twenty-modules/object-record/record-index/components/RecordIndexBoardColumnLoaderEffect';
import { recordIndexKanbanFieldMetadataIdState } from '@twenty-modules/object-record/record-index/states/recordIndexKanbanFieldMetadataIdState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';

type RecordIndexBoardDataLoaderProps = {
  objectNameSingular: string;
  recordBoardId: string;
};

export const RecordIndexBoardDataLoader = ({
  objectNameSingular,
  recordBoardId,
}: RecordIndexBoardDataLoaderProps) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const recordGroupIds = useRecoilComponentValueV2(
    recordGroupIdsComponentState,
  );

  const recordIndexKanbanFieldMetadataId = useRecoilValue(
    recordIndexKanbanFieldMetadataIdState,
  );

  const recordIndexKanbanFieldMetadataItem = objectMetadataItem.fields.find(
    (field) => field.id === recordIndexKanbanFieldMetadataId,
  );

  return (
    <>
      {recordGroupIds.map((recordGroupId, index) => (
        <RecordIndexBoardColumnLoaderEffect
          objectNameSingular={objectNameSingular}
          boardFieldMetadataId={recordIndexKanbanFieldMetadataId}
          recordBoardId={recordBoardId}
          columnId={recordGroupId}
          key={index}
        />
      ))}
      {recordIndexKanbanFieldMetadataItem?.isNullable && (
        <RecordIndexBoardColumnLoaderEffect
          objectNameSingular={objectNameSingular}
          boardFieldMetadataId={recordIndexKanbanFieldMetadataId}
          recordBoardId={recordBoardId}
          columnId={'no-value'}
        />
      )}
    </>
  );
};
