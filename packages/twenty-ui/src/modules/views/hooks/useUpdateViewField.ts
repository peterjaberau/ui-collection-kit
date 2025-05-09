import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useUpdateOneRecord } from '@twenty-modules/object-record/hooks/useUpdateOneRecord';
import { ViewField } from '@twenty-modules/views/types/ViewField';
import { useRecoilCallback } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useUpdateViewField = () => {
  const { updateOneRecord } = useUpdateOneRecord({
    objectNameSingular: CoreObjectNameSingular.ViewField,
  });

  const updateViewField = useRecoilCallback(
    () => async (viewField: Partial<ViewField>) => {
      if (isDefined(viewField.id)) {
        await updateOneRecord({
          idToUpdate: viewField.id,
          updateOneRecordInput: viewField,
        });
      }
    },
    [updateOneRecord],
  );

  return {
    updateViewField,
  };
};
