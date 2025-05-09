import { useRecoilCallback } from 'recoil';

import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';
import { usePersistViewGroupRecords } from '@twenty-modules/views/hooks/internal/usePersistViewGroupRecords';
import { useGetViewFromPrefetchState } from '@twenty-modules/views/hooks/useGetViewFromPrefetchState';
import { ViewGroup } from '@twenty-modules/views/types/ViewGroup';
import { isDeeplyEqual } from '@twenty-ui/front/utils/isDeeplyEqual';
import { isUndefinedOrNull } from '@twenty-ui/front/utils/isUndefinedOrNull';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useSaveCurrentViewGroups = () => {
  const { createViewGroupRecords, updateViewGroupRecords } =
    usePersistViewGroupRecords();

  const { getViewFromPrefetchState } = useGetViewFromPrefetchState();

  const currentViewIdCallbackState = useRecoilComponentCallbackStateV2(
    contextStoreCurrentViewIdComponentState,
  );

  const saveViewGroup = useRecoilCallback(
    ({ snapshot }) =>
      async (viewGroupToSave: ViewGroup) => {
        const currentViewId = snapshot
          .getLoadable(currentViewIdCallbackState)
          .getValue();

        if (!currentViewId) {
          return;
        }

        const view = getViewFromPrefetchState(currentViewId);

        if (isUndefinedOrNull(view)) {
          return;
        }

        const currentViewGroups = view.viewGroups;

        const existingField = currentViewGroups.find(
          (currentViewGroup) =>
            currentViewGroup.fieldValue === viewGroupToSave.fieldValue,
        );

        if (isUndefinedOrNull(existingField)) {
          return;
        }

        if (
          isDeeplyEqual(
            {
              position: existingField.position,
              isVisible: existingField.isVisible,
            },
            {
              position: viewGroupToSave.position,
              isVisible: viewGroupToSave.isVisible,
            },
          )
        ) {
          return;
        }

        await updateViewGroupRecords([
          { ...viewGroupToSave, id: existingField.id },
        ]);
      },
    [
      currentViewIdCallbackState,
      getViewFromPrefetchState,
      updateViewGroupRecords,
    ],
  );

  const saveViewGroups = useRecoilCallback(
    ({ snapshot }) =>
      async (viewGroupsToSave: ViewGroup[]) => {
        const currentViewId = snapshot
          .getLoadable(currentViewIdCallbackState)
          .getValue();

        if (!currentViewId) {
          return;
        }

        const view = await getViewFromPrefetchState(currentViewId);

        if (isUndefinedOrNull(view)) {
          return;
        }

        const currentViewGroups = view.viewGroups;

        const viewGroupsToUpdate = viewGroupsToSave
          .map((viewGroupToSave) => {
            const existingField = currentViewGroups.find(
              (currentViewGroup) =>
                currentViewGroup.fieldValue === viewGroupToSave.fieldValue,
            );

            if (isUndefinedOrNull(existingField)) {
              return undefined;
            }

            if (
              isDeeplyEqual(
                {
                  position: existingField.position,
                  isVisible: existingField.isVisible,
                },
                {
                  position: viewGroupToSave.position,
                  isVisible: viewGroupToSave.isVisible,
                },
              )
            ) {
              return undefined;
            }

            return { ...viewGroupToSave, id: existingField.id };
          })
          .filter(isDefined);

        const viewGroupsToCreate = viewGroupsToSave.filter(
          (viewFieldToSave) =>
            !currentViewGroups.some(
              (currentViewGroup) =>
                currentViewGroup.fieldValue === viewFieldToSave.fieldValue,
            ),
        );

        await Promise.all([
          createViewGroupRecords({ viewGroupsToCreate, viewId: view.id }),
          updateViewGroupRecords(viewGroupsToUpdate),
        ]);
      },
    [
      createViewGroupRecords,
      currentViewIdCallbackState,
      getViewFromPrefetchState,
      updateViewGroupRecords,
    ],
  );

  return {
    saveViewGroup,
    saveViewGroups,
  };
};
