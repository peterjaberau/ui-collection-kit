import { COMMAND_MENU_COMPONENT_INSTANCE_ID } from '@twenty-modules/command-menu/constants/CommandMenuComponentInstanceId';
import { COMMAND_MENU_PREVIOUS_COMPONENT_INSTANCE_ID } from '@twenty-modules/command-menu/constants/CommandMenuPreviousComponentInstanceId';
import { useCopyContextStoreStates } from '@twenty-modules/command-menu/hooks/useCopyContextStoreAndActionMenuStates';
import { commandMenuPageInfoState } from '@twenty-modules/command-menu/states/commandMenuPageInfoState';
import { hasUserSelectedCommandState } from '@twenty-modules/command-menu/states/hasUserSelectedCommandState';
import { contextStoreCurrentViewTypeComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewTypeComponentState';
import { contextStoreFiltersComponentState } from '@twenty-modules/context-store/states/contextStoreFiltersComponentState';
import { contextStoreNumberOfSelectedRecordsComponentState } from '@twenty-modules/context-store/states/contextStoreNumberOfSelectedRecordsComponentState';
import { contextStoreTargetedRecordsRuleComponentState } from '@twenty-modules/context-store/states/contextStoreTargetedRecordsRuleComponentState';
import { ContextStoreViewType } from '@twenty-modules/context-store/types/ContextStoreViewType';
import { useRecoilCallback } from 'recoil';

export const useSetGlobalCommandMenuContext = () => {
  const { copyContextStoreStates } = useCopyContextStoreStates();

  const setGlobalCommandMenuContext = useRecoilCallback(
    ({ set }) => {
      return () => {
        copyContextStoreStates({
          instanceIdToCopyFrom: COMMAND_MENU_COMPONENT_INSTANCE_ID,
          instanceIdToCopyTo: COMMAND_MENU_PREVIOUS_COMPONENT_INSTANCE_ID,
        });

        set(
          contextStoreTargetedRecordsRuleComponentState.atomFamily({
            instanceId: COMMAND_MENU_COMPONENT_INSTANCE_ID,
          }),
          {
            mode: 'selection',
            selectedRecordIds: [],
          },
        );

        set(
          contextStoreNumberOfSelectedRecordsComponentState.atomFamily({
            instanceId: COMMAND_MENU_COMPONENT_INSTANCE_ID,
          }),
          0,
        );

        set(
          contextStoreFiltersComponentState.atomFamily({
            instanceId: COMMAND_MENU_COMPONENT_INSTANCE_ID,
          }),
          [],
        );

        set(
          contextStoreCurrentViewTypeComponentState.atomFamily({
            instanceId: COMMAND_MENU_COMPONENT_INSTANCE_ID,
          }),
          ContextStoreViewType.Table,
        );

        set(commandMenuPageInfoState, {
          title: undefined,
          Icon: undefined,
          instanceId: '',
        });

        set(hasUserSelectedCommandState, false);
      };
    },
    [copyContextStoreStates],
  );

  return {
    setGlobalCommandMenuContext,
  };
};
