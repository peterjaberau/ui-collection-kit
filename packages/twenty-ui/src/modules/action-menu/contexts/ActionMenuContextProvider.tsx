import { ActionMenuContextType } from '@twenty-modules/action-menu/contexts/ActionMenuContext';
import { ActionMenuContextProviderWorkflowObjects } from '@twenty-modules/action-menu/contexts/ActionMenuContextProviderWorkflowObjects';
import { ActionMenuContextProviderWorkflowsEnabled } from '@twenty-modules/action-menu/contexts/ActionMenuContextProviderWorkflowsEnabled';
import { ActionMenuContextProviderWorkflowsNotEnabled } from '@twenty-modules/action-menu/contexts/ActionMenuContextProviderWorkflowsNotEnabled';
import { contextStoreCurrentObjectMetadataItemIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentObjectMetadataItemIdComponentState';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useIsFeatureEnabled } from '@twenty-modules/workspace/hooks/useIsFeatureEnabled';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { FeatureFlagKey } from '@twenty-ui/front/generated-metadata/graphql';

export const ActionMenuContextProvider = ({
  children,
  isInRightDrawer,
  displayType,
  actionMenuType,
}: Omit<ActionMenuContextType, 'actions'> & {
  children: React.ReactNode;
}) => {
  const isWorkflowEnabled = useIsFeatureEnabled(
    FeatureFlagKey.IsWorkflowEnabled,
  );

  const contextStoreCurrentObjectMetadataItemId = useRecoilComponentValueV2(
    contextStoreCurrentObjectMetadataItemIdComponentState,
  );

  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  const objectMetadataItem = objectMetadataItems.find(
    (objectMetadataItem) =>
      objectMetadataItem.id === contextStoreCurrentObjectMetadataItemId,
  );

  const isWorkflowObject =
    objectMetadataItem?.nameSingular === CoreObjectNameSingular.Workflow ||
    objectMetadataItem?.nameSingular === CoreObjectNameSingular.WorkflowRun ||
    objectMetadataItem?.nameSingular === CoreObjectNameSingular.WorkflowVersion;

  if (isWorkflowEnabled && isDefined(objectMetadataItem) && isWorkflowObject) {
    return (
      <ActionMenuContextProviderWorkflowObjects
        isInRightDrawer={isInRightDrawer}
        displayType={displayType}
        actionMenuType={actionMenuType}
        objectMetadataItem={objectMetadataItem}
      >
        {children}
      </ActionMenuContextProviderWorkflowObjects>
    );
  }

  if (
    isWorkflowEnabled &&
    isDefined(objectMetadataItem) &&
    (actionMenuType === 'command-menu' ||
      actionMenuType === 'command-menu-show-page-action-menu-dropdown')
  ) {
    return (
      <ActionMenuContextProviderWorkflowsEnabled
        isInRightDrawer={isInRightDrawer}
        displayType={displayType}
        actionMenuType={actionMenuType}
        objectMetadataItem={objectMetadataItem}
      >
        {children}
      </ActionMenuContextProviderWorkflowsEnabled>
    );
  }

  return (
    <ActionMenuContextProviderWorkflowsNotEnabled
      isInRightDrawer={isInRightDrawer}
      displayType={displayType}
      actionMenuType={actionMenuType}
      objectMetadataItem={objectMetadataItem}
    >
      {children}
    </ActionMenuContextProviderWorkflowsNotEnabled>
  );
};
