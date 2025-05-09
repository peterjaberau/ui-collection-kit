import { ActionMenuComponentInstanceContext } from '@twenty-modules/action-menu/states/contexts/ActionMenuComponentInstanceContext';
import { CommandMenuOpenContainer } from '@twenty-modules/command-menu/components/CommandMenuOpenContainer';
import { COMMAND_MENU_COMPONENT_INSTANCE_ID } from '@twenty-modules/command-menu/constants/CommandMenuComponentInstanceId';
import { useCommandMenuCloseAnimationCompleteCleanup } from '@twenty-modules/command-menu/hooks/useCommandMenuCloseAnimationCompleteCleanup';
import { useCommandMenuHotKeys } from '@twenty-modules/command-menu/hooks/useCommandMenuHotKeys';
import { isCommandMenuOpenedState } from '@twenty-modules/command-menu/states/isCommandMenuOpenedState';
import { contextStoreCurrentObjectMetadataItemIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentObjectMetadataItemIdComponentState';
import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { ContextStoreComponentInstanceContext } from '@twenty-modules/context-store/states/contexts/ContextStoreComponentInstanceContext';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { RecordFilterGroupsComponentInstanceContext } from '@twenty-modules/object-record/record-filter-group/states/context/RecordFilterGroupsComponentInstanceContext';
import { RecordFiltersComponentInstanceContext } from '@twenty-modules/object-record/record-filter/states/context/RecordFiltersComponentInstanceContext';
import { RecordSortsComponentInstanceContext } from '@twenty-modules/object-record/record-sort/states/context/RecordSortsComponentInstanceContext';
import { getRecordIndexIdFromObjectNamePluralAndViewId } from '@twenty-modules/object-record/utils/getRecordIndexIdFromObjectNamePluralAndViewId';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { AnimatePresence } from 'framer-motion';
import { useRecoilValue } from 'recoil';

export const CommandMenuContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { commandMenuCloseAnimationCompleteCleanup } =
    useCommandMenuCloseAnimationCompleteCleanup();

  const isCommandMenuOpened = useRecoilValue(isCommandMenuOpenedState);

  const objectMetadataItemId = useRecoilComponentValueV2(
    contextStoreCurrentObjectMetadataItemIdComponentState,
    COMMAND_MENU_COMPONENT_INSTANCE_ID,
  );

  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  const objectMetadataItem = objectMetadataItems.find(
    (objectMetadataItem) => objectMetadataItem.id === objectMetadataItemId,
  );

  const currentViewId = useRecoilComponentValueV2(
    contextStoreCurrentViewIdComponentState,
    COMMAND_MENU_COMPONENT_INSTANCE_ID,
  );

  const recordIndexId = getRecordIndexIdFromObjectNamePluralAndViewId(
    objectMetadataItem?.namePlural ?? '',
    currentViewId ?? '',
  );

  useCommandMenuHotKeys();

  return (
    <RecordFilterGroupsComponentInstanceContext.Provider
      value={{ instanceId: recordIndexId }}
    >
      <RecordFiltersComponentInstanceContext.Provider
        value={{ instanceId: recordIndexId }}
      >
        <RecordSortsComponentInstanceContext.Provider
          value={{ instanceId: recordIndexId }}
        >
          <ContextStoreComponentInstanceContext.Provider
            value={{ instanceId: COMMAND_MENU_COMPONENT_INSTANCE_ID }}
          >
            <ActionMenuComponentInstanceContext.Provider
              value={{ instanceId: COMMAND_MENU_COMPONENT_INSTANCE_ID }}
            >
              <AnimatePresence
                mode="wait"
                onExitComplete={commandMenuCloseAnimationCompleteCleanup}
              >
                {isCommandMenuOpened && (
                  <CommandMenuOpenContainer>
                    {children}
                  </CommandMenuOpenContainer>
                )}
              </AnimatePresence>
            </ActionMenuComponentInstanceContext.Provider>
          </ContextStoreComponentInstanceContext.Provider>
        </RecordSortsComponentInstanceContext.Provider>
      </RecordFiltersComponentInstanceContext.Provider>
    </RecordFilterGroupsComponentInstanceContext.Provider>
  );
};
