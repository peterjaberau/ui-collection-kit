import { useRunWorkflowRecordAgnosticActions } from '@twenty-modules/action-menu/actions/record-agnostic-actions/run-workflow-actions/hooks/useRunWorkflowRecordAgnosticActions';
import {
  ActionMenuContext,
  ActionMenuContextType,
} from '@twenty-modules/action-menu/contexts/ActionMenuContext';
import { useRegisteredActions } from '@twenty-modules/action-menu/hooks/useRegisteredActions';
import { useShouldActionBeRegisteredParams } from '@twenty-modules/action-menu/hooks/useShouldActionBeRegisteredParams';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { useWorkflowWithCurrentVersion } from '@twenty-modules/workflow/hooks/useWorkflowWithCurrentVersion';

export const ActionMenuContextProviderWorkflowObjects = ({
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

  const runWorkflowRecordAgnosticActions =
    useRunWorkflowRecordAgnosticActions();

  return (
    <ActionMenuContext.Provider
      value={{
        isInRightDrawer,
        displayType,
        actionMenuType,
        actions: [...actions, ...runWorkflowRecordAgnosticActions],
      }}
    >
      {children}
    </ActionMenuContext.Provider>
  );
};
