import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useUpdateOneRecord } from '@twenty-modules/object-record/hooks/useUpdateOneRecord';
import { GraphQLView } from '@twenty-modules/views/types/GraphQLView';
import { useRecoilCallback } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useUpdateView = () => {
  const { updateOneRecord } = useUpdateOneRecord({
    objectNameSingular: CoreObjectNameSingular.View,
  });

  const updateView = useRecoilCallback(
    () => async (view: Partial<GraphQLView>) => {
      if (isDefined(view.id)) {
        await updateOneRecord({
          idToUpdate: view.id,
          updateOneRecordInput: view,
        });
      }
    },
    [updateOneRecord],
  );

  return {
    updateView,
  };
};
