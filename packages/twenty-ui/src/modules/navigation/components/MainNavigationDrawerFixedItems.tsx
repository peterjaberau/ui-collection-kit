import { useOpenRecordsSearchPageInCommandMenu } from '@twenty-modules/command-menu/hooks/useOpenRecordsSearchPageInCommandMenu';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { NavigationDrawerItem } from '@twenty-modules/ui/navigation/navigation-drawer/components/NavigationDrawerItem';
import { isNavigationDrawerExpandedState } from '@twenty-modules/ui/navigation/states/isNavigationDrawerExpanded';
import { navigationDrawerExpandedMemorizedState } from '@twenty-modules/ui/navigation/states/navigationDrawerExpandedMemorizedState';
import { navigationMemorizedUrlState } from '@twenty-modules/ui/navigation/states/navigationMemorizedUrlState';
import { useLingui } from '@lingui/react/macro';
import { useLocation } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { IconSearch, IconSettings } from '@twenty-ui/display';
import { useIsMobile } from '@twenty-ui/utilities';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';

export const MainNavigationDrawerFixedItems = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const setNavigationMemorizedUrl = useSetRecoilState(
    navigationMemorizedUrlState,
  );

  const [isNavigationDrawerExpanded, setIsNavigationDrawerExpanded] =
    useRecoilState(isNavigationDrawerExpandedState);
  const setNavigationDrawerExpandedMemorized = useSetRecoilState(
    navigationDrawerExpandedMemorizedState,
  );

  const { t } = useLingui();

  const { openRecordsSearchPage } = useOpenRecordsSearchPageInCommandMenu();
  return (
    !isMobile && (
      <>
        <NavigationDrawerItem
          label={t`Search`}
          Icon={IconSearch}
          onClick={openRecordsSearchPage}
          keyboard={['/']}
        />
        <NavigationDrawerItem
          label={t`Settings`}
          to={getSettingsPath(SettingsPath.ProfilePage)}
          onClick={() => {
            setNavigationDrawerExpandedMemorized(isNavigationDrawerExpanded);
            setIsNavigationDrawerExpanded(true);
            setNavigationMemorizedUrl(location.pathname + location.search);
          }}
          Icon={IconSettings}
        />
      </>
    )
  );
};
