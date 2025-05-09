import { ActionModal } from '@twenty-modules/action-menu/actions/components/ActionModal';
import { useSelectedRecordIdOrThrow } from '@twenty-modules/action-menu/actions/record-actions/single-record/hooks/useSelectedRecordIdOrThrow';
import { useContextStoreObjectMetadataItemOrThrow } from '@twenty-modules/context-store/hooks/useContextStoreObjectMetadataItemOrThrow';
import { useDestroyOneRecord } from '@twenty-modules/object-record/hooks/useDestroyOneRecord';
import { useRecordTable } from '@twenty-modules/object-record/record-table/hooks/useRecordTable';
import { AppPath } from '@twenty-modules/types/AppPath';
import { useNavigateApp } from '@twenty-ui/front/hooks/useNavigateApp';

export const DestroySingleRecordAction = () => {
  const { objectMetadataItem } = useContextStoreObjectMetadataItemOrThrow();

  const recordId = useSelectedRecordIdOrThrow();

  const navigateApp = useNavigateApp();

  const { resetTableRowSelection } = useRecordTable({
    recordTableId: objectMetadataItem.namePlural,
  });

  const { destroyOneRecord } = useDestroyOneRecord({
    objectNameSingular: objectMetadataItem.nameSingular,
  });

  const handleDeleteClick = async () => {
    resetTableRowSelection();

    await destroyOneRecord(recordId);
    navigateApp(AppPath.RecordIndexPage, {
      objectNamePlural: objectMetadataItem.namePlural,
    });
  };

  return (
    <ActionModal
      title="Permanently Destroy Record"
      subtitle="Are you sure you want to destroy this record? It cannot be recovered anymore."
      onConfirmClick={handleDeleteClick}
      confirmButtonText="Permanently Destroy Record"
    />
  );
};
