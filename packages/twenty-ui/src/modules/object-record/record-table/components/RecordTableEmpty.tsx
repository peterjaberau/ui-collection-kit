import { StyledTable } from '@twenty-modules/object-record/record-table/components/RecordTableStyles';
import { RecordTableEmptyState } from '@twenty-modules/object-record/record-table/empty-state/components/RecordTableEmptyState';
import { RecordTableHeader } from '@twenty-modules/object-record/record-table/record-table-header/components/RecordTableHeader';

export interface RecordTableEmptyProps {
  tableBodyRef: React.RefObject<HTMLTableElement>;
  hasRecordGroups: boolean;
}

export const RecordTableEmpty = ({ tableBodyRef }: RecordTableEmptyProps) => (
  <>
    <StyledTable ref={tableBodyRef}>
      <RecordTableHeader />
    </StyledTable>
    <RecordTableEmptyState />
  </>
);
