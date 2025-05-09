import { RecordTableCellSkeletonLoader } from '@twenty-modules/object-record/record-table/record-table-cell/components/RecordTableCellSkeletonLoader';
import { RecordTableTd } from '@twenty-modules/object-record/record-table/record-table-cell/components/RecordTableTd';

export const RecordTableCellLoading = () => {
  return (
    <RecordTableTd>
      <RecordTableCellSkeletonLoader />
    </RecordTableTd>
  );
};
