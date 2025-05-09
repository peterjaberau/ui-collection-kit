import { ActionModal } from '@twenty-modules/action-menu/actions/components/ActionModal';
import { useSelectedRecordIdOrThrow } from '@twenty-modules/action-menu/actions/record-actions/single-record/hooks/useSelectedRecordIdOrThrow';
import { useContextStoreObjectMetadataItemOrThrow } from '@twenty-modules/context-store/hooks/useContextStoreObjectMetadataItemOrThrow';
import { useDeleteFavorite } from '@twenty-modules/favorites/hooks/useDeleteFavorite';
import { useFavorites } from '@twenty-modules/favorites/hooks/useFavorites';
import { useDeleteOneRecord } from '@twenty-modules/object-record/hooks/useDeleteOneRecord';
import { useRecordTable } from '@twenty-modules/object-record/record-table/hooks/useRecordTable';
import { t } from '@lingui/core/macro';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const DeleteSingleRecordAction = () => {
  const { objectMetadataItem } = useContextStoreObjectMetadataItemOrThrow();

  const recordId = useSelectedRecordIdOrThrow();

  const { resetTableRowSelection } = useRecordTable({
    recordTableId: objectMetadataItem.namePlural,
  });

  const { deleteOneRecord } = useDeleteOneRecord({
    objectNameSingular: objectMetadataItem.nameSingular,
  });

  const { sortedFavorites: favorites } = useFavorites();
  const { deleteFavorite } = useDeleteFavorite();

  const handleDeleteClick = async () => {
    resetTableRowSelection();

    const foundFavorite = favorites?.find(
      (favorite) => favorite.recordId === recordId,
    );

    if (isDefined(foundFavorite)) {
      deleteFavorite(foundFavorite.id);
    }

    await deleteOneRecord(recordId);
  };

  return (
    <ActionModal
      title="Delete Record"
      subtitle={t`Are you sure you want to delete this record? It can be recovered from the Command menu.`}
      onConfirmClick={handleDeleteClick}
      confirmButtonText="Delete Record"
    />
  );
};
