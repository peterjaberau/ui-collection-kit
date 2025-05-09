import { CommandMenuContextRecordsChip } from '@twenty-modules/command-menu/components/CommandMenuContextRecordsChip';
import { CommandMenuItem } from '@twenty-modules/command-menu/components/CommandMenuItem';
import { COMMAND_MENU_PREVIOUS_COMPONENT_INSTANCE_ID } from '@twenty-modules/command-menu/constants/CommandMenuPreviousComponentInstanceId';
import { RESET_CONTEXT_TO_SELECTION } from '@twenty-modules/command-menu/constants/ResetContextToSelection';
import { useResetPreviousCommandMenuContext } from '@twenty-modules/command-menu/hooks/useResetPreviousCommandMenuContext';
import { contextStoreCurrentObjectMetadataItemIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentObjectMetadataItemIdComponentState';
import { contextStoreTargetedRecordsRuleComponentState } from '@twenty-modules/context-store/states/contextStoreTargetedRecordsRuleComponentState';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { SelectableListItem } from '@twenty-modules/ui/layout/selectable-list/components/SelectableListItem';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { t } from '@lingui/core/macro';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { IconArrowBackUp } from '@twenty-ui/display';

export const ResetContextToSelectionCommandButton = () => {
  const contextStoreTargetedRecordsRule = useRecoilComponentValueV2(
    contextStoreTargetedRecordsRuleComponentState,
    'command-menu-previous',
  );

  const contextStoreCurrentObjectMetadataItemId = useRecoilComponentValueV2(
    contextStoreCurrentObjectMetadataItemIdComponentState,
    'command-menu-previous',
  );

  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  const objectMetadataItem = objectMetadataItems.find(
    (objectMetadataItem) =>
      objectMetadataItem.id === contextStoreCurrentObjectMetadataItemId,
  );

  const { resetPreviousCommandMenuContext } =
    useResetPreviousCommandMenuContext();

  if (
    !isDefined(objectMetadataItem) ||
    (contextStoreTargetedRecordsRule.mode === 'selection' &&
      contextStoreTargetedRecordsRule.selectedRecordIds.length === 0)
  ) {
    return null;
  }

  return (
    <SelectableListItem
      itemId={RESET_CONTEXT_TO_SELECTION}
      onEnter={resetPreviousCommandMenuContext}
    >
      <CommandMenuItem
        id={RESET_CONTEXT_TO_SELECTION}
        Icon={IconArrowBackUp}
        label={t`Reset to`}
        RightComponent={
          <CommandMenuContextRecordsChip
            objectMetadataItemId={objectMetadataItem.id}
            instanceId={COMMAND_MENU_PREVIOUS_COMPONENT_INSTANCE_ID}
          />
        }
        onClick={resetPreviousCommandMenuContext}
      />
    </SelectableListItem>
  );
};
