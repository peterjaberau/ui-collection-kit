import { Action } from '@twenty-modules/action-menu/actions/components/Action';
import { useContextStoreObjectMetadataItemOrThrow } from '@twenty-modules/context-store/hooks/useContextStoreObjectMetadataItemOrThrow';
import { useOpenObjectRecordsSpreadsheetImportDialog } from '@twenty-modules/object-record/spreadsheet-import/hooks/useOpenObjectRecordsSpreadsheetImportDialog';

export const ImportRecordsNoSelectionRecordAction = () => {
  const { objectMetadataItem } = useContextStoreObjectMetadataItemOrThrow();

  const { openObjectRecordsSpreadsheetImportDialog } =
    useOpenObjectRecordsSpreadsheetImportDialog(
      objectMetadataItem.nameSingular,
    );

  return <Action onClick={openObjectRecordsSpreadsheetImportDialog} />;
};
