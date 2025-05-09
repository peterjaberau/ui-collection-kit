import { useRecoilValue } from 'recoil';

import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { useCreateOneRecord } from '@twenty-modules/object-record/hooks/useCreateOneRecord';
import { useDeleteOneRecord } from '@twenty-modules/object-record/hooks/useDeleteOneRecord';
import { useUpdateOneRecord } from '@twenty-modules/object-record/hooks/useUpdateOneRecord';
import { RecordBoard } from '@twenty-modules/object-record/record-board/components/RecordBoard';
import { RecordBoardContext } from '@twenty-modules/object-record/record-board/contexts/RecordBoardContext';
import { RecordIndexRemoveSortingModal } from '@twenty-modules/object-record/record-index/components/RecordIndexRemoveSortingModal';
import { recordIndexKanbanFieldMetadataIdState } from '@twenty-modules/object-record/record-index/states/recordIndexKanbanFieldMetadataIdState';

type RecordIndexBoardContainerProps = {
  recordBoardId: string;
  viewBarId: string;
  objectNameSingular: string;
};

export const RecordIndexBoardContainer = ({
  recordBoardId,
  objectNameSingular,
}: RecordIndexBoardContainerProps) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const recordIndexKanbanFieldMetadataId = useRecoilValue(
    recordIndexKanbanFieldMetadataIdState,
  );

  const selectFieldMetadataItem = objectMetadataItem.fields.find(
    (field) => field.id === recordIndexKanbanFieldMetadataId,
  );

  const { deleteOneRecord } = useDeleteOneRecord({ objectNameSingular });
  const { updateOneRecord } = useUpdateOneRecord({ objectNameSingular });
  const { createOneRecord } = useCreateOneRecord({
    objectNameSingular,
    shouldMatchRootQueryFilter: true,
  });

  if (!selectFieldMetadataItem) {
    return;
  }

  return (
    <RecordBoardContext.Provider
      value={{
        objectMetadataItem,
        selectFieldMetadataItem,
        createOneRecord,
        updateOneRecord,
        deleteOneRecord,
        recordBoardId,
      }}
    >
      <RecordBoard />
      <RecordIndexRemoveSortingModal />
    </RecordBoardContext.Provider>
  );
};
