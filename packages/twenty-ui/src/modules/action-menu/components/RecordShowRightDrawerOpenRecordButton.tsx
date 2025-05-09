import { ActionMenuComponentInstanceContext } from '@twenty-modules/action-menu/states/contexts/ActionMenuComponentInstanceContext';
import { getRightDrawerActionMenuDropdownIdFromActionMenuId } from '@twenty-modules/action-menu/utils/getRightDrawerActionMenuDropdownIdFromActionMenuId';
import { useCommandMenu } from '@twenty-modules/command-menu/hooks/useCommandMenu';
import { CommandMenuPageComponentInstanceContext } from '@twenty-modules/command-menu/states/contexts/CommandMenuPageComponentInstanceContext';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { getLinkToShowPage } from '@twenty-modules/object-metadata/utils/getLinkToShowPage';
import { recordStoreFamilyState } from '@twenty-modules/object-record/record-store/states/recordStoreFamilyState';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { AppPath } from '@twenty-modules/types/AppPath';
import { useDropdownV2 } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdownV2';
import { getShowPageTabListComponentId } from '@twenty-modules/ui/layout/show-page/utils/getShowPageTabListComponentId';
import { activeTabIdComponentState } from '@twenty-modules/ui/layout/tab/states/activeTabIdComponentState';
import { useScopedHotkeys } from '@twenty-modules/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { AppHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/types/AppHotkeyScope';
import { useAvailableComponentInstanceIdOrThrow } from '@twenty-modules/ui/utilities/state/component-state/hooks/useAvailableComponentInstanceIdOrThrow';
import { useComponentInstanceStateContext } from '@twenty-modules/ui/utilities/state/component-state/hooks/useComponentInstanceStateContext';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import styled from '@emotion/styled';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { useNavigateApp } from '@twenty-ui/front/hooks/useNavigateApp';
import { Button } from '@twenty-ui/input';
import { IconBrowserMaximize } from '@twenty-ui/display';
import { getOsControlSymbol } from '@twenty-ui/utilities';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

type RecordShowRightDrawerOpenRecordButtonProps = {
  objectNameSingular: string;
  recordId: string;
};

export const RecordShowRightDrawerOpenRecordButton = ({
  objectNameSingular,
  recordId,
}: RecordShowRightDrawerOpenRecordButtonProps) => {
  const record = useRecoilValue<ObjectRecord | null>(
    recordStoreFamilyState(recordId),
  );
  const { closeCommandMenu } = useCommandMenu();

  const commandMenuPageComponentInstance = useComponentInstanceStateContext(
    CommandMenuPageComponentInstanceContext,
  );

  const tabListComponentId = getShowPageTabListComponentId({
    pageId: commandMenuPageComponentInstance?.instanceId,
    targetObjectId: recordId,
  });

  const activeTabIdInRightDrawer = useRecoilComponentValueV2(
    activeTabIdComponentState,
    tabListComponentId,
  );

  const tabListComponentIdInRecordPage = getShowPageTabListComponentId({
    targetObjectId: recordId,
  });

  const setActiveTabIdInRecordPage = useSetRecoilComponentStateV2(
    activeTabIdComponentState,
    tabListComponentIdInRecordPage,
  );

  const navigate = useNavigateApp();

  const actionMenuId = useAvailableComponentInstanceIdOrThrow(
    ActionMenuComponentInstanceContext,
  );

  const { closeDropdown } = useDropdownV2();

  const handleOpenRecord = useCallback(() => {
    const tabIdToOpen =
      activeTabIdInRightDrawer === 'home'
        ? objectNameSingular === CoreObjectNameSingular.Note ||
          objectNameSingular === CoreObjectNameSingular.Task
          ? 'richText'
          : 'timeline'
        : activeTabIdInRightDrawer;

    setActiveTabIdInRecordPage(tabIdToOpen);

    navigate(AppPath.RecordShowPage, {
      objectNameSingular,
      objectRecordId: recordId,
    });

    closeDropdown(
      getRightDrawerActionMenuDropdownIdFromActionMenuId(actionMenuId),
    );

    closeCommandMenu();
  }, [
    actionMenuId,
    activeTabIdInRightDrawer,
    closeCommandMenu,
    closeDropdown,
    navigate,
    objectNameSingular,
    recordId,
    setActiveTabIdInRecordPage,
  ]);

  useScopedHotkeys(
    ['ctrl+Enter,meta+Enter'],
    handleOpenRecord,
    AppHotkeyScope.CommandMenuOpen,
    [closeCommandMenu, navigate, objectNameSingular, recordId],
  );

  if (!isDefined(record)) {
    return null;
  }

  const to = getLinkToShowPage(objectNameSingular, record);

  return (
    <StyledLink to={to} onClick={closeCommandMenu}>
      <Button
        title="Open"
        variant="primary"
        accent="blue"
        size="medium"
        Icon={IconBrowserMaximize}
        hotkeys={[getOsControlSymbol(), '⏎']}
      />
    </StyledLink>
  );
};
