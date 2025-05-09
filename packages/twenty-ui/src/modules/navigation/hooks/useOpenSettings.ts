import { currentMobileNavigationDrawerState } from '@twenty-modules/navigation/states/currentMobileNavigationDrawerState';
import { isNavigationDrawerExpandedState } from '@twenty-modules/ui/navigation/states/isNavigationDrawerExpanded';
import { useSetRecoilState } from 'recoil';

export const useOpenSettingsMenu = () => {
  const setIsNavigationDrawerExpanded = useSetRecoilState(
    isNavigationDrawerExpandedState,
  );
  const setCurrentMobileNavigationDrawer = useSetRecoilState(
    currentMobileNavigationDrawerState,
  );

  const openSettingsMenu = () => {
    setIsNavigationDrawerExpanded(true);
    setCurrentMobileNavigationDrawer('settings');
  };

  return { openSettingsMenu };
};
