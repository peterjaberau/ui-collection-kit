import { RecordTableBodyContextProvider } from '@twenty-modules/object-record/record-table/contexts/RecordTableBodyContext';
import { useRecordTableContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableContext';
import { useHandleContainerMouseEnter } from '@twenty-modules/object-record/record-table/hooks/internal/useHandleContainerMouseEnter';
import { useRecordTableMoveFocus } from '@twenty-modules/object-record/record-table/hooks/useRecordTableMoveFocus';
import { useCloseRecordTableCellInGroup } from '@twenty-modules/object-record/record-table/record-table-cell/hooks/internal/useCloseRecordTableCellInGroup';
import { useMoveHoverToCurrentCell } from '@twenty-modules/object-record/record-table/record-table-cell/hooks/useMoveHoverToCurrentCell';
import {
  OpenTableCellArgs,
  useOpenRecordTableCellV2,
} from '@twenty-modules/object-record/record-table/record-table-cell/hooks/useOpenRecordTableCellV2';
import { useTriggerActionMenuDropdown } from '@twenty-modules/object-record/record-table/record-table-cell/hooks/useTriggerActionMenuDropdown';
import { MoveFocusDirection } from '@twenty-modules/object-record/record-table/types/MoveFocusDirection';
import { TableCellPosition } from '@twenty-modules/object-record/record-table/types/TableCellPosition';
import { ReactNode } from 'react';

type RecordTableRecordGroupBodyContextProviderProps = {
  recordGroupId: string;
  children?: ReactNode;
};

export const RecordTableRecordGroupBodyContextProvider = ({
  children,
}: RecordTableRecordGroupBodyContextProviderProps) => {
  const { recordTableId } = useRecordTableContextOrThrow();

  const { openTableCell } = useOpenRecordTableCellV2(recordTableId);

  const handleOpenTableCell = (args: OpenTableCellArgs) => {
    openTableCell(args);
  };

  const { moveFocus } = useRecordTableMoveFocus(recordTableId);

  const handleMoveFocus = (direction: MoveFocusDirection) => {
    moveFocus(direction);
  };

  const { closeTableCellInGroup } = useCloseRecordTableCellInGroup();

  const handlecloseTableCellInGroup = () => {
    closeTableCellInGroup();
  };

  const { moveHoverToCurrentCell } = useMoveHoverToCurrentCell(recordTableId);

  const handleMoveHoverToCurrentCell = (cellPosition: TableCellPosition) => {
    moveHoverToCurrentCell(cellPosition);
  };

  const { triggerActionMenuDropdown } = useTriggerActionMenuDropdown({
    recordTableId,
  });

  const handleActionMenuDropdown = (
    event: React.MouseEvent,
    recordId: string,
  ) => {
    triggerActionMenuDropdown(event, recordId);
  };

  const { handleContainerMouseEnter } = useHandleContainerMouseEnter({
    recordTableId,
  });

  return (
    <RecordTableBodyContextProvider
      value={{
        onOpenTableCell: handleOpenTableCell,
        onMoveFocus: handleMoveFocus,
        onCloseTableCell: handlecloseTableCellInGroup,
        onMoveHoverToCurrentCell: handleMoveHoverToCurrentCell,
        onActionMenuDropdownOpened: handleActionMenuDropdown,
        onCellMouseEnter: handleContainerMouseEnter,
      }}
    >
      {children}
    </RecordTableBodyContextProvider>
  );
};
