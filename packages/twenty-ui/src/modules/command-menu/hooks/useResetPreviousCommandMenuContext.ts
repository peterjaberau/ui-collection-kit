import { COMMAND_MENU_COMPONENT_INSTANCE_ID } from '@twenty-modules/command-menu/constants/CommandMenuComponentInstanceId';
import { COMMAND_MENU_PREVIOUS_COMPONENT_INSTANCE_ID } from '@twenty-modules/command-menu/constants/CommandMenuPreviousComponentInstanceId';
import { useCopyContextStoreStates } from '@twenty-modules/command-menu/hooks/useCopyContextStoreAndActionMenuStates';
import { useResetContextStoreStates } from '@twenty-modules/command-menu/hooks/useResetContextStoreStates';

export const useResetPreviousCommandMenuContext = () => {
  const { copyContextStoreStates } = useCopyContextStoreStates();
  const { resetContextStoreStates } = useResetContextStoreStates();

  const resetPreviousCommandMenuContext = () => {
    copyContextStoreStates({
      instanceIdToCopyFrom: COMMAND_MENU_PREVIOUS_COMPONENT_INSTANCE_ID,
      instanceIdToCopyTo: COMMAND_MENU_COMPONENT_INSTANCE_ID,
    });
    resetContextStoreStates(COMMAND_MENU_PREVIOUS_COMPONENT_INSTANCE_ID);
  };

  return {
    resetPreviousCommandMenuContext,
  };
};
