import { useCommandMenu } from '@twenty-modules/command-menu/hooks/useCommandMenu';
import { viewableRecordIdComponentState } from '@twenty-modules/command-menu/pages/record-page/states/viewableRecordIdComponentState';
import { viewableRecordNameSingularComponentState } from '@twenty-modules/command-menu/pages/record-page/states/viewableRecordNameSingularComponentState';
import { commandMenuNavigationMorphItemByPageState } from '@twenty-modules/command-menu/states/commandMenuNavigationMorphItemsState';
import { CommandMenuPages } from '@twenty-modules/command-menu/types/CommandMenuPages';
import { MAIN_CONTEXT_STORE_INSTANCE_ID } from '@twenty-modules/context-store/constants/MainContextStoreInstanceId';
import { contextStoreCurrentObjectMetadataItemIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentObjectMetadataItemIdComponentState';
import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { contextStoreCurrentViewTypeComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewTypeComponentState';
import { contextStoreNumberOfSelectedRecordsComponentState } from '@twenty-modules/context-store/states/contextStoreNumberOfSelectedRecordsComponentState';
import { contextStoreTargetedRecordsRuleComponentState } from '@twenty-modules/context-store/states/contextStoreTargetedRecordsRuleComponentState';
import { ContextStoreViewType } from '@twenty-modules/context-store/types/ContextStoreViewType';
import { objectMetadataItemFamilySelector } from '@twenty-modules/object-metadata/states/objectMetadataItemFamilySelector';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { getIconColorForObjectType } from '@twenty-modules/object-metadata/utils/getIconColorForObjectType';
import { viewableRecordIdState } from '@twenty-modules/object-record/record-right-drawer/states/viewableRecordIdState';
import { useRunWorkflowRunOpeningInCommandMenuSideEffects } from '@twenty-modules/workflow/hooks/useRunWorkflowRunOpeningInCommandMenuSideEffects';
import { useTheme } from '@emotion/react';
import { t } from '@lingui/core/macro';
import { useRecoilCallback } from 'recoil';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';
import { useIcons } from '@twenty-ui/display';
import { v4 } from 'uuid';

export const useOpenRecordInCommandMenu = () => {
  const theme = useTheme();
  const { getIcon } = useIcons();

  const { navigateCommandMenu } = useCommandMenu();
  const { runWorkflowRunOpeningInCommandMenuSideEffects } =
    useRunWorkflowRunOpeningInCommandMenuSideEffects();

  const openRecordInCommandMenu = useRecoilCallback(
    ({ set, snapshot }) => {
      return ({
        recordId,
        objectNameSingular,
        isNewRecord = false,
      }: {
        recordId: string;
        objectNameSingular: string;
        isNewRecord?: boolean;
      }) => {
        const pageComponentInstanceId = v4();

        set(
          viewableRecordNameSingularComponentState.atomFamily({
            instanceId: pageComponentInstanceId,
          }),
          objectNameSingular,
        );
        set(
          viewableRecordIdComponentState.atomFamily({
            instanceId: pageComponentInstanceId,
          }),
          recordId,
        );
        set(viewableRecordIdState, recordId);

        const objectMetadataItem = snapshot
          .getLoadable(
            objectMetadataItemFamilySelector({
              objectName: objectNameSingular,
              objectNameType: 'singular',
            }),
          )
          .getValue();

        if (!objectMetadataItem) {
          throw new Error(
            `No object metadata item found for object name ${objectNameSingular}`,
          );
        }

        set(
          contextStoreCurrentObjectMetadataItemIdComponentState.atomFamily({
            instanceId: pageComponentInstanceId,
          }),
          objectMetadataItem.id,
        );

        set(
          contextStoreTargetedRecordsRuleComponentState.atomFamily({
            instanceId: pageComponentInstanceId,
          }),
          {
            mode: 'selection',
            selectedRecordIds: [recordId],
          },
        );

        set(
          contextStoreNumberOfSelectedRecordsComponentState.atomFamily({
            instanceId: pageComponentInstanceId,
          }),
          1,
        );

        set(
          contextStoreCurrentViewTypeComponentState.atomFamily({
            instanceId: pageComponentInstanceId,
          }),
          ContextStoreViewType.ShowPage,
        );

        set(
          contextStoreCurrentViewIdComponentState.atomFamily({
            instanceId: pageComponentInstanceId,
          }),
          snapshot
            .getLoadable(
              contextStoreCurrentViewIdComponentState.atomFamily({
                instanceId: MAIN_CONTEXT_STORE_INSTANCE_ID,
              }),
            )
            .getValue(),
        );

        const currentMorphItems = snapshot
          .getLoadable(commandMenuNavigationMorphItemByPageState)
          .getValue();

        const morphItemToAdd = {
          objectMetadataId: objectMetadataItem.id,
          recordId,
        };

        const newMorphItems = new Map(currentMorphItems);
        newMorphItems.set(pageComponentInstanceId, morphItemToAdd);

        set(commandMenuNavigationMorphItemByPageState, newMorphItems);

        const Icon = objectMetadataItem?.icon
          ? getIcon(objectMetadataItem.icon)
          : getIcon('IconList');

        const IconColor = getIconColorForObjectType({
          objectType: objectMetadataItem.nameSingular,
          theme,
        });

        const capitalizedObjectNameSingular = capitalize(objectNameSingular);

        navigateCommandMenu({
          page: CommandMenuPages.ViewRecord,
          pageTitle: isNewRecord
            ? t`New ${capitalizedObjectNameSingular}`
            : capitalizedObjectNameSingular,
          pageIcon: Icon,
          pageIconColor: IconColor,
          pageId: pageComponentInstanceId,
          resetNavigationStack: false,
        });

        if (objectNameSingular === CoreObjectNameSingular.WorkflowRun) {
          runWorkflowRunOpeningInCommandMenuSideEffects({
            objectMetadataItem,
            recordId,
          });
        }
      };
    },
    [
      getIcon,
      navigateCommandMenu,
      runWorkflowRunOpeningInCommandMenuSideEffects,
      theme,
    ],
  );

  return {
    openRecordInCommandMenu,
  };
};
