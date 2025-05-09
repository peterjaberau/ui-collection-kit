import { useRecordTableRowContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableRowContext';
import { RecordTableTd } from '@twenty-modules/object-record/record-table/record-table-cell/components/RecordTableTd';
import { visibleTableColumnsComponentSelector } from '@twenty-modules/object-record/record-table/states/selectors/visibleTableColumnsComponentSelector';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';

export const RecordTableCellsEmpty = () => {
  const { isSelected } = useRecordTableRowContextOrThrow();

  const visibleTableColumns = useRecoilComponentValueV2(
    visibleTableColumnsComponentSelector,
  );

  return visibleTableColumns.map((column) => (
    <RecordTableTd isSelected={isSelected} key={column.fieldMetadataId} />
  ));
};
