import { useContextStoreObjectMetadataItemOrThrow } from '@twenty-modules/context-store/hooks/useContextStoreObjectMetadataItemOrThrow';
import { getBasePathToShowPage } from '@twenty-modules/object-metadata/utils/getBasePathToShowPage';
import { recordIndexAllRecordIdsComponentSelector } from '@twenty-modules/object-record/record-index/states/selectors/recordIndexAllRecordIdsComponentSelector';
import { RecordTableCellContext } from '@twenty-modules/object-record/record-table/contexts/RecordTableCellContext';
import { RecordTableRowContextProvider } from '@twenty-modules/object-record/record-table/contexts/RecordTableRowContext';
import { RecordTableCellFieldContextWrapper } from '@twenty-modules/object-record/record-table/record-table-cell/components/RecordTableCellFieldContextWrapper';
import { visibleTableColumnsComponentSelector } from '@twenty-modules/object-record/record-table/states/selectors/visibleTableColumnsComponentSelector';
import { TableCellPosition } from '@twenty-modules/object-record/record-table/types/TableCellPosition';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import ReactDOM from 'react-dom';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const RecordTableCellPortalWrapper = ({
  position,
  children,
}: {
  position: TableCellPosition;
  children: React.ReactNode;
}) => {
  const anchorElement = document.body.querySelector<HTMLAnchorElement>(
    `#record-table-cell-${position.column}-${position.row}`,
  );

  const allRecordIds = useRecoilComponentValueV2(
    recordIndexAllRecordIdsComponentSelector,
  );

  const { objectMetadataItem } = useContextStoreObjectMetadataItemOrThrow();

  const visibleTableColumns = useRecoilComponentValueV2(
    visibleTableColumnsComponentSelector,
  );

  const recordId = allRecordIds.at(position.row);
  if (!isDefined(anchorElement) || !isDefined(recordId)) {
    return null;
  }

  return ReactDOM.createPortal(
    <RecordTableRowContextProvider
      value={{
        recordId,
        rowIndex: position.row,
        isSelected: false,
        inView: true,
        pathToShowPage:
          getBasePathToShowPage({
            objectNameSingular: objectMetadataItem.nameSingular,
          }) + recordId,
        objectNameSingular: objectMetadataItem.nameSingular,
      }}
    >
      <RecordTableCellContext.Provider
        value={{
          columnDefinition: visibleTableColumns[position.column],
          cellPosition: position,
        }}
      >
        <RecordTableCellFieldContextWrapper>
          {children}
        </RecordTableCellFieldContextWrapper>
      </RecordTableCellContext.Provider>
    </RecordTableRowContextProvider>,
    anchorElement,
  );
};
