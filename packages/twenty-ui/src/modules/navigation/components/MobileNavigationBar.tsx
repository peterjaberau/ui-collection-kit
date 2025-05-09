import { useCommandMenu } from '@twenty-modules/command-menu/hooks/useCommandMenu';
import { useOpenRecordsSearchPageInCommandMenu } from '@twenty-modules/command-menu/hooks/useOpenRecordsSearchPageInCommandMenu';
import { isCommandMenuOpenedState } from '@twenty-modules/command-menu/states/isCommandMenuOpenedState';
import { useOpenSettingsMenu } from '@twenty-modules/navigation/hooks/useOpenSettings';
import { isNavigationDrawerExpandedState } from '@twenty-modules/ui/navigation/states/isNavigationDrawerExpanded';
import { useRecoilState } from 'recoil';
import {
  IconComponent,
  IconList,
  IconSearch,
  IconSettings,
} from '@twenty-ui/display';
import { NavigationBar } from '@twenty-ui/navigation';
import { useIsSettingsPage } from '../hooks/useIsSettingsPage';
import { currentMobileNavigationDrawerState } from '../states/currentMobileNavigationDrawerState';

type NavigationBarItemName = 'main' | 'search' | 'tasks' | 'settings';

export const MobileNavigationBar = () => {
  const [isCommandMenuOpened] = useRecoilState(isCommandMenuOpenedState);
  const { closeCommandMenu } = useCommandMenu();
  const { openRecordsSearchPage } = useOpenRecordsSearchPageInCommandMenu();
  const isSettingsPage = useIsSettingsPage();
  const [isNavigationDrawerExpanded, setIsNavigationDrawerExpanded] =
    useRecoilState(isNavigationDrawerExpandedState);
  const [currentMobileNavigationDrawer, setCurrentMobileNavigationDrawer] =
    useRecoilState(currentMobileNavigationDrawerState);
  const { openSettingsMenu } = useOpenSettingsMenu();

  const activeItemName = isNavigationDrawerExpanded
    ? currentMobileNavigationDrawer
    : isCommandMenuOpened
      ? 'search'
      : isSettingsPage
        ? 'settings'
        : 'main';

  const items: {
    name: NavigationBarItemName;
    Icon: IconComponent;
    onClick: () => void;
  }[] = [
    {
      name: 'main',
      Icon: IconList,
      onClick: () => {
        closeCommandMenu();
        setIsNavigationDrawerExpanded(
          (previousIsOpen) => activeItemName !== 'main' || !previousIsOpen,
        );
        setCurrentMobileNavigationDrawer('main');
      },
    },
    {
      name: 'search',
      Icon: IconSearch,
      onClick: openRecordsSearchPage,
    },
    {
      name: 'settings',
      Icon: IconSettings,
      onClick: () => {
        closeCommandMenu();
        openSettingsMenu();
      },
    },
  ];

  return <NavigationBar activeItemName={activeItemName} items={items} />;
};
