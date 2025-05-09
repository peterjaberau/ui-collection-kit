import { Action } from '@twenty-modules/action-menu/actions/components/Action';
import { useContextStoreObjectMetadataItemOrThrow } from '@twenty-modules/context-store/hooks/useContextStoreObjectMetadataItemOrThrow';
import { useCreateNewIndexRecord } from '@twenty-modules/object-record/record-table/hooks/useCreateNewIndexRecord';

export const CreateNewTableRecordNoSelectionRecordAction = () => {
  const { objectMetadataItem } = useContextStoreObjectMetadataItemOrThrow();

  const { createNewIndexRecord } = useCreateNewIndexRecord({
    objectMetadataItem,
  });

  return (
    <Action onClick={() => createNewIndexRecord()} preventCommandMenuClosing />
  );
};
