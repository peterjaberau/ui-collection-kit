import { PageHeaderActionMenuButtons } from '@twenty-modules/action-menu/components/PageHeaderActionMenuButtons';
import { RecordIndexActionMenuDropdown } from '@twenty-modules/action-menu/components/RecordIndexActionMenuDropdown';
import { ActionMenuContextProvider } from '@twenty-modules/action-menu/contexts/ActionMenuContextProvider';
import { contextStoreCurrentObjectMetadataItemIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentObjectMetadataItemIdComponentState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useIsMobile } from '@twenty-ui/utilities';

export const RecordIndexActionMenu = () => {
  const contextStoreCurrentObjectMetadataItemId = useRecoilComponentValueV2(
    contextStoreCurrentObjectMetadataItemIdComponentState,
  );

  const isMobile = useIsMobile();

  return (
    <>
      {contextStoreCurrentObjectMetadataItemId && (
        <>
          <ActionMenuContextProvider
            isInRightDrawer={false}
            displayType="button"
            actionMenuType="index-page-action-menu"
          >
            {!isMobile && <PageHeaderActionMenuButtons />}
          </ActionMenuContextProvider>
          <ActionMenuContextProvider
            isInRightDrawer={false}
            displayType="dropdownItem"
            actionMenuType="index-page-action-menu-dropdown"
          >
            <RecordIndexActionMenuDropdown />
          </ActionMenuContextProvider>
        </>
      )}
    </>
  );
};
