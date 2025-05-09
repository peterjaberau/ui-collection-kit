import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useUpdateOneRecord } from '@twenty-modules/object-record/hooks/useUpdateOneRecord';

export const useRenameFavoriteFolder = () => {
  const { updateOneRecord: updateFavoriteFolder } = useUpdateOneRecord({
    objectNameSingular: CoreObjectNameSingular.FavoriteFolder,
  });

  const renameFavoriteFolder = async (
    folderId: string,
    newName: string,
  ): Promise<void> => {
    if (!newName) {
      return;
    }

    await updateFavoriteFolder({
      idToUpdate: folderId,
      updateOneRecordInput: {
        name: newName,
      },
    });
  };

  return {
    renameFavoriteFolder,
  };
};
