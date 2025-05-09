import { useGetButtonIcon } from '@twenty-modules/object-record/record-field/hooks/useGetButtonIcon';
import { useIsFieldInputOnly } from '@twenty-modules/object-record/record-field/hooks/useIsFieldInputOnly';
import { RecordTableCellContext } from '@twenty-modules/object-record/record-table/contexts/RecordTableCellContext';
import { RecordTableCellButton } from '@twenty-modules/object-record/record-table/record-table-cell/components/RecordTableCellButton';
import { useOpenRecordTableCellFromCell } from '@twenty-modules/object-record/record-table/record-table-cell/hooks/useOpenRecordTableCellFromCell';
import { useContext } from 'react';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { IconArrowUpRight, IconPencil } from '@twenty-ui/display';

export const RecordTableCellEditButton = () => {
  const { cellPosition } = useContext(RecordTableCellContext);

  const { openTableCell } = useOpenRecordTableCellFromCell();

  const isFieldInputOnly = useIsFieldInputOnly();
  const isFirstColumn = cellPosition.column === 0;
  const customButtonIcon = useGetButtonIcon();

  const buttonIcon = isFirstColumn
    ? IconArrowUpRight
    : isDefined(customButtonIcon)
      ? customButtonIcon
      : IconPencil;

  const handleButtonClick = () => {
    if (!isFieldInputOnly && isFirstColumn) {
      openTableCell(undefined, false, true);
    } else {
      openTableCell();
    }
  };

  return (
    <RecordTableCellButton onClick={handleButtonClick} Icon={buttonIcon} />
  );
};
