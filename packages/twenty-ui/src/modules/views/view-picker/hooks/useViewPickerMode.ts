import { useRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentStateV2';
import { viewPickerModeComponentState } from '@twenty-modules/views/view-picker/states/viewPickerModeComponentState';

export const useViewPickerMode = (viewBarComponentId?: string) => {
  const [viewPickerMode, setViewPickerMode] = useRecoilComponentStateV2(
    viewPickerModeComponentState,
    viewBarComponentId,
  );

  return {
    viewPickerMode,
    setViewPickerMode,
  };
};
