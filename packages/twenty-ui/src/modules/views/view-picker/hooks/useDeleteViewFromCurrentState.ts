import { useRecoilCallback, useRecoilValue } from 'recoil';

import { useContextStoreObjectMetadataItemOrThrow } from '@twenty-modules/context-store/hooks/useContextStoreObjectMetadataItemOrThrow';
import { prefetchViewsFromObjectMetadataItemFamilySelector } from '@twenty-modules/prefetch/states/selector/prefetchViewsFromObjectMetadataItemFamilySelector';
import { getSnapshotValue } from '@twenty-modules/ui/utilities/recoil-scope/utils/getSnapshotValue';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';
import { useChangeView } from '@twenty-modules/views/hooks/useChangeView';
import { useDeleteView } from '@twenty-modules/views/hooks/useDeleteView';
import { useGetCurrentViewOnly } from '@twenty-modules/views/hooks/useGetCurrentViewOnly';
import { useCloseAndResetViewPicker } from '@twenty-modules/views/view-picker/hooks/useCloseAndResetViewPicker';
import { viewPickerIsDirtyComponentState } from '@twenty-modules/views/view-picker/states/viewPickerIsDirtyComponentState';
import { viewPickerIsPersistingComponentState } from '@twenty-modules/views/view-picker/states/viewPickerIsPersistingComponentState';
import { viewPickerReferenceViewIdComponentState } from '@twenty-modules/views/view-picker/states/viewPickerReferenceViewIdComponentState';

export const useDeleteViewFromCurrentState = (viewBarInstanceId?: string) => {
  const { closeAndResetViewPicker } = useCloseAndResetViewPicker();

  const viewPickerIsPersistingCallbackState = useRecoilComponentCallbackStateV2(
    viewPickerIsPersistingComponentState,
    viewBarInstanceId,
  );

  const viewPickerIsDirtyCallbackState = useRecoilComponentCallbackStateV2(
    viewPickerIsDirtyComponentState,
    viewBarInstanceId,
  );

  const viewPickerReferenceViewIdCallbackState =
    useRecoilComponentCallbackStateV2(
      viewPickerReferenceViewIdComponentState,
      viewBarInstanceId,
    );

  const { objectMetadataItem } = useContextStoreObjectMetadataItemOrThrow();

  const viewsOnCurrentObject = useRecoilValue(
    prefetchViewsFromObjectMetadataItemFamilySelector({
      objectMetadataItemId: objectMetadataItem.id,
    }),
  );

  const { currentView } = useGetCurrentViewOnly();

  const { changeView } = useChangeView();

  const { deleteView } = useDeleteView();

  const deleteViewFromCurrentState = useRecoilCallback(
    ({ set, snapshot }) =>
      async () => {
        set(viewPickerIsPersistingCallbackState, true);
        closeAndResetViewPicker();
        set(viewPickerIsDirtyCallbackState, false);

        const viewPickerReferenceViewId = getSnapshotValue(
          snapshot,
          viewPickerReferenceViewIdCallbackState,
        );

        const shouldChangeView = viewPickerReferenceViewId === currentView?.id;

        if (shouldChangeView) {
          changeView(
            viewsOnCurrentObject.filter(
              (view) => view.id !== viewPickerReferenceViewId,
            )[0].id,
          );
        }

        await deleteView(viewPickerReferenceViewId);
      },
    [
      currentView,
      closeAndResetViewPicker,
      changeView,
      deleteView,
      viewPickerIsDirtyCallbackState,
      viewPickerIsPersistingCallbackState,
      viewPickerReferenceViewIdCallbackState,
      viewsOnCurrentObject,
    ],
  );

  return {
    deleteViewFromCurrentState,
  };
};
