import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useDeleteOneRecord } from '@twenty-modules/object-record/hooks/useDeleteOneRecord';

export const useDeleteFavoriteFolder = () => {
  const { deleteOneRecord } = useDeleteOneRecord({
    objectNameSingular: CoreObjectNameSingular.FavoriteFolder,
  });

  const deleteFavoriteFolder = async (folderId: string): Promise<void> => {
    await deleteOneRecord(folderId);
  };

  return {
    deleteFavoriteFolder,
  };
};
