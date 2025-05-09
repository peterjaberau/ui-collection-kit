import { useIsSettingsPage } from '@twenty-modules/navigation/hooks/useIsSettingsPage';
import { useRecoilValue } from 'recoil';
import { currentMobileNavigationDrawerState } from '@twenty-modules/navigation/states/currentMobileNavigationDrawerState';
import { useIsMobile } from '@twenty-modules/ui/utilities/responsive/hooks/useIsMobile';

export const useIsSettingsDrawer = () => {
  const isMobile = useIsMobile();
  const isSettingsPage = useIsSettingsPage();
  const currentMobileNavigationDrawer = useRecoilValue(
    currentMobileNavigationDrawerState,
  );
  return isMobile
    ? currentMobileNavigationDrawer === 'settings'
    : isSettingsPage;
};
