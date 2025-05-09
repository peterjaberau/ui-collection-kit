import { useRecoilCallback } from 'recoil';

import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';
import { usePersistViewFieldRecords } from '@twenty-modules/views/hooks/internal/usePersistViewFieldRecords';
import { useGetViewFromPrefetchState } from '@twenty-modules/views/hooks/useGetViewFromPrefetchState';
import { isPersistingViewFieldsState } from '@twenty-modules/views/states/isPersistingViewFieldsState';
import { ViewField } from '@twenty-modules/views/types/ViewField';
import { isDeeplyEqual } from '@twenty-ui/front/utils/isDeeplyEqual';
import { isUndefinedOrNull } from '@twenty-ui/front/utils/isUndefinedOrNull';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useSaveCurrentViewFields = () => {
  const { createViewFieldRecords, updateViewFieldRecords } =
    usePersistViewFieldRecords();

  const { getViewFromPrefetchState } = useGetViewFromPrefetchState();

  const currentViewIdCallbackState = useRecoilComponentCallbackStateV2(
    contextStoreCurrentViewIdComponentState,
  );

  const saveViewFields = useRecoilCallback(
    ({ set, snapshot }) =>
      async (viewFieldsToSave: ViewField[]) => {
        const currentViewId = snapshot
          .getLoadable(currentViewIdCallbackState)
          .getValue();

        if (!currentViewId) {
          return;
        }

        set(isPersistingViewFieldsState, true);

        const view = await getViewFromPrefetchState(currentViewId);

        if (isUndefinedOrNull(view)) {
          return;
        }

        const currentViewFields = view.viewFields;

        const viewFieldsToUpdate = viewFieldsToSave
          .map((viewFieldToSave) => {
            const existingField = currentViewFields.find(
              (currentViewField) =>
                currentViewField.fieldMetadataId ===
                viewFieldToSave.fieldMetadataId,
            );

            if (isUndefinedOrNull(existingField)) {
              return undefined;
            }

            if (
              isDeeplyEqual(
                {
                  position: existingField.position,
                  size: existingField.size,
                  isVisible: existingField.isVisible,
                },
                {
                  position: viewFieldToSave.position,
                  size: viewFieldToSave.size,
                  isVisible: viewFieldToSave.isVisible,
                },
              )
            ) {
              return undefined;
            }

            return { ...viewFieldToSave, id: existingField.id };
          })
          .filter(isDefined);

        const viewFieldsToCreate = viewFieldsToSave.filter(
          (viewFieldToSave) =>
            !currentViewFields.some(
              (currentViewField) =>
                currentViewField.fieldMetadataId ===
                viewFieldToSave.fieldMetadataId,
            ),
        );

        await Promise.all([
          createViewFieldRecords(viewFieldsToCreate, view),
          updateViewFieldRecords(viewFieldsToUpdate),
        ]);

        set(isPersistingViewFieldsState, false);
      },
    [
      createViewFieldRecords,
      currentViewIdCallbackState,
      getViewFromPrefetchState,
      updateViewFieldRecords,
    ],
  );

  return {
    saveViewFields,
  };
};
