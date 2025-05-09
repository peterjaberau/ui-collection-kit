import { RecordBoardColumnHeader } from '@twenty-modules/object-record/record-board/record-board-column/components/RecordBoardColumnHeader';
import { RecordBoardColumnContext } from '@twenty-modules/object-record/record-board/record-board-column/contexts/RecordBoardColumnContext';
import { recordGroupDefinitionFamilyState } from '@twenty-modules/object-record/record-group/states/recordGroupDefinitionFamilyState';
import { recordIndexRecordIdsByGroupComponentFamilyState } from '@twenty-modules/object-record/record-index/states/recordIndexRecordIdsByGroupComponentFamilyState';
import { useRecoilComponentFamilyValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentFamilyValueV2';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type RecordBoardColumnHeaderWrapperProps = {
  columnId: string;
};

export const RecordBoardColumnHeaderWrapper = ({
  columnId,
}: RecordBoardColumnHeaderWrapperProps) => {
  const recordGroupDefinition = useRecoilValue(
    recordGroupDefinitionFamilyState(columnId),
  );

  const recordIdsByGroup = useRecoilComponentFamilyValueV2(
    recordIndexRecordIdsByGroupComponentFamilyState,
    columnId,
  );

  if (!isDefined(recordGroupDefinition)) {
    return null;
  }

  return (
    <RecordBoardColumnContext.Provider
      value={{
        columnId,
        columnDefinition: recordGroupDefinition,
        recordIds: recordIdsByGroup,
      }}
    >
      <RecordBoardColumnHeader />
    </RecordBoardColumnContext.Provider>
  );
};
