import { CommandMenuActionMenuDropdown } from '@twenty-modules/action-menu/components/CommandMenuActionMenuDropdown';
import { ActionMenuContextProvider } from '@twenty-modules/action-menu/contexts/ActionMenuContextProvider';
import { contextStoreCurrentObjectMetadataItemIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentObjectMetadataItemIdComponentState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';

export const RecordShowRightDrawerActionMenu = () => {
  const contextStoreCurrentObjectMetadataItemId = useRecoilComponentValueV2(
    contextStoreCurrentObjectMetadataItemIdComponentState,
  );

  return (
    <>
      {contextStoreCurrentObjectMetadataItemId && (
        <ActionMenuContextProvider
          isInRightDrawer={true}
          displayType="dropdownItem"
          actionMenuType="command-menu-show-page-action-menu-dropdown"
        >
          <CommandMenuActionMenuDropdown />
        </ActionMenuContextProvider>
      )}
    </>
  );
};
