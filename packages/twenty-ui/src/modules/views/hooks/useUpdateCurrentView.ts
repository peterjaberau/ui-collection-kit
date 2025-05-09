import { useRecoilCallback } from 'recoil';

import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useUpdateOneRecord } from '@twenty-modules/object-record/hooks/useUpdateOneRecord';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';
import { GraphQLView } from '@twenty-modules/views/types/GraphQLView';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useUpdateCurrentView = () => {
  const currentViewIdCallbackState = useRecoilComponentCallbackStateV2(
    contextStoreCurrentViewIdComponentState,
  );

  const { updateOneRecord } = useUpdateOneRecord({
    objectNameSingular: CoreObjectNameSingular.View,
  });

  const updateCurrentView = useRecoilCallback(
    ({ snapshot }) =>
      async (view: Partial<GraphQLView>) => {
        const currentViewId = snapshot
          .getLoadable(currentViewIdCallbackState)
          .getValue();

        if (isDefined(currentViewId)) {
          await updateOneRecord({
            idToUpdate: currentViewId,
            updateOneRecordInput: view,
          });
        }
      },
    [currentViewIdCallbackState, updateOneRecord],
  );

  return {
    updateCurrentView,
  };
};
