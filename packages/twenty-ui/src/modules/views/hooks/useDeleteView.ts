import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useDeleteOneRecord } from '@twenty-modules/object-record/hooks/useDeleteOneRecord';
import { useRecoilCallback } from 'recoil';

export const useDeleteView = () => {
  const { deleteOneRecord } = useDeleteOneRecord({
    objectNameSingular: CoreObjectNameSingular.View,
  });

  const deleteView = useRecoilCallback(
    () => async (viewId: string) => {
      await deleteOneRecord(viewId);
    },
    [deleteOneRecord],
  );

  return { deleteView };
};
