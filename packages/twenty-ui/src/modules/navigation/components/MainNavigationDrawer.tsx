import { useRecoilValue } from 'recoil';

import { currentWorkspaceState } from '@twenty-modules/auth/states/currentWorkspaceState';
import { MainNavigationDrawerFixedItems } from '@twenty-modules/navigation/components/MainNavigationDrawerFixedItems';
import { MainNavigationDrawerScrollableItems } from '@twenty-modules/navigation/components/MainNavigationDrawerScrollableItems';
import { SupportDropdown } from '@twenty-modules/support/components/SupportDropdown';
import { NavigationDrawer } from '@twenty-modules/ui/navigation/navigation-drawer/components/NavigationDrawer';
import { NavigationDrawerFixedContent } from '@twenty-modules/ui/navigation/navigation-drawer/components/NavigationDrawerFixedContent';
import { NavigationDrawerScrollableContent } from '@twenty-modules/ui/navigation/navigation-drawer/components/NavigationDrawerScrollableContent';

export const MainNavigationDrawer = ({ className }: { className?: string }) => {
  const currentWorkspace = useRecoilValue(currentWorkspaceState);

  return (
    <NavigationDrawer
      className={className}
      title={currentWorkspace?.displayName ?? ''}
    >
      <NavigationDrawerFixedContent>
        <MainNavigationDrawerFixedItems />
      </NavigationDrawerFixedContent>

      <NavigationDrawerScrollableContent>
        <MainNavigationDrawerScrollableItems />
      </NavigationDrawerScrollableContent>

      <NavigationDrawerFixedContent>
        <SupportDropdown />
      </NavigationDrawerFixedContent>
    </NavigationDrawer>
  );
};
