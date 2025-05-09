import { getSnapshotValue } from '@twenty-modules/ui/utilities/recoil-scope/utils/getSnapshotValue';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';
import { useChangeView } from '@twenty-modules/views/hooks/useChangeView';
import { useUpdateView } from '@twenty-modules/views/hooks/useUpdateView';
import { useCloseAndResetViewPicker } from '@twenty-modules/views/view-picker/hooks/useCloseAndResetViewPicker';
import { viewPickerInputNameComponentState } from '@twenty-modules/views/view-picker/states/viewPickerInputNameComponentState';
import { viewPickerIsDirtyComponentState } from '@twenty-modules/views/view-picker/states/viewPickerIsDirtyComponentState';
import { viewPickerIsPersistingComponentState } from '@twenty-modules/views/view-picker/states/viewPickerIsPersistingComponentState';
import { viewPickerReferenceViewIdComponentState } from '@twenty-modules/views/view-picker/states/viewPickerReferenceViewIdComponentState';
import { viewPickerSelectedIconComponentState } from '@twenty-modules/views/view-picker/states/viewPickerSelectedIconComponentState';
import { useRecoilCallback } from 'recoil';

export const useUpdateViewFromCurrentState = () => {
  const { closeAndResetViewPicker } = useCloseAndResetViewPicker();

  const viewPickerInputNameCallbackState = useRecoilComponentCallbackStateV2(
    viewPickerInputNameComponentState,
  );

  const viewPickerSelectedIconCallbackState = useRecoilComponentCallbackStateV2(
    viewPickerSelectedIconComponentState,
  );

  const viewPickerIsPersistingCallbackState = useRecoilComponentCallbackStateV2(
    viewPickerIsPersistingComponentState,
  );

  const viewPickerIsDirtyCallbackState = useRecoilComponentCallbackStateV2(
    viewPickerIsDirtyComponentState,
  );

  const viewPickerReferenceViewIdCallbackState =
    useRecoilComponentCallbackStateV2(viewPickerReferenceViewIdComponentState);

  const { updateView } = useUpdateView();
  const { changeView } = useChangeView();

  const updateViewFromCurrentState = useRecoilCallback(
    ({ set, snapshot }) =>
      async () => {
        set(viewPickerIsPersistingCallbackState, true);
        set(viewPickerIsDirtyCallbackState, false);
        closeAndResetViewPicker();

        const viewPickerReferenceViewId = getSnapshotValue(
          snapshot,
          viewPickerReferenceViewIdCallbackState,
        );
        const viewPickerInputName = getSnapshotValue(
          snapshot,
          viewPickerInputNameCallbackState,
        );
        const viewPickerSelectedIcon = getSnapshotValue(
          snapshot,
          viewPickerSelectedIconCallbackState,
        );

        await updateView({
          id: viewPickerReferenceViewId,
          name: viewPickerInputName,
          icon: viewPickerSelectedIcon,
        });
        changeView(viewPickerReferenceViewId);
      },
    [
      viewPickerIsPersistingCallbackState,
      viewPickerIsDirtyCallbackState,
      closeAndResetViewPicker,
      viewPickerReferenceViewIdCallbackState,
      viewPickerInputNameCallbackState,
      viewPickerSelectedIconCallbackState,
      updateView,
      changeView,
    ],
  );

  return {
    updateViewFromCurrentState,
  };
};
