import { useRunWorkflowRecordActions } from '@twenty-modules/action-menu/actions/record-actions/run-workflow-actions/hooks/useRunWorkflowRecordActions';
import { useRunWorkflowRecordAgnosticActions } from '@twenty-modules/action-menu/actions/record-agnostic-actions/run-workflow-actions/hooks/useRunWorkflowRecordAgnosticActions';
import {
  ActionMenuContext,
  ActionMenuContextType,
} from '@twenty-modules/action-menu/contexts/ActionMenuContext';
import { useRegisteredActions } from '@twenty-modules/action-menu/hooks/useRegisteredActions';
import { useShouldActionBeRegisteredParams } from '@twenty-modules/action-menu/hooks/useShouldActionBeRegisteredParams';
import { contextStoreTargetedRecordsRuleComponentState } from '@twenty-modules/context-store/states/contextStoreTargetedRecordsRuleComponentState';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useWorkflowWithCurrentVersion } from '@twenty-modules/workflow/hooks/useWorkflowWithCurrentVersion';

export const ActionMenuContextProviderWorkflowsEnabled = ({
  objectMetadataItem,
  isInRightDrawer,
  displayType,
  actionMenuType,
  children,
}: {
  objectMetadataItem: ObjectMetadataItem;
  isInRightDrawer: ActionMenuContextType['isInRightDrawer'];
  displayType: ActionMenuContextType['displayType'];
  actionMenuType: ActionMenuContextType['actionMenuType'];
  children: React.ReactNode;
}) => {
  const params = useShouldActionBeRegisteredParams({
    objectMetadataItem,
  });

  const workflowWithCurrentVersion = useWorkflowWithCurrentVersion(
    params.selectedRecord?.id,
  );

  const shouldBeRegisteredParams = {
    ...params,
    workflowWithCurrentVersion,
  };

  const actions = useRegisteredActions(shouldBeRegisteredParams);

  const contextStoreTargetedRecordsRule = useRecoilComponentValueV2(
    contextStoreTargetedRecordsRuleComponentState,
  );

  const isSingleRecordSelection =
    contextStoreTargetedRecordsRule.mode === 'selection' &&
    contextStoreTargetedRecordsRule.selectedRecordIds.length === 1;

  const runWorkflowRecordActions = useRunWorkflowRecordActions({
    objectMetadataItem,
    skip: !isSingleRecordSelection,
  });

  const runWorkflowRecordAgnosticActions =
    useRunWorkflowRecordAgnosticActions();

  return (
    <ActionMenuContext.Provider
      value={{
        isInRightDrawer,
        displayType,
        actionMenuType,
        actions: [
          ...actions,
          ...runWorkflowRecordActions,
          ...runWorkflowRecordAgnosticActions,
        ],
      }}
    >
      {children}
    </ActionMenuContext.Provider>
  );
};
