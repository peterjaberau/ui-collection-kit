import { SettingsNavigationDrawerItems } from '@twenty-modules/settings/components/SettingsNavigationDrawerItems';
import { NavigationDrawer } from '@twenty-modules/ui/navigation/navigation-drawer/components/NavigationDrawer';
import { NavigationDrawerFixedContent } from '@twenty-modules/ui/navigation/navigation-drawer/components/NavigationDrawerFixedContent';
import { NavigationDrawerScrollableContent } from '@twenty-modules/ui/navigation/navigation-drawer/components/NavigationDrawerScrollableContent';
import { isAdvancedModeEnabledState } from '@twenty-modules/ui/navigation/navigation-drawer/states/isAdvancedModeEnabledState';
import { useLingui } from '@lingui/react/macro';
import { useRecoilState } from 'recoil';
import { AdvancedSettingsToggle } from '@twenty-ui/navigation';

export const SettingsNavigationDrawer = ({
  className,
}: {
  className?: string;
}) => {
  const { t } = useLingui();
  const [isAdvancedModeEnabled, setIsAdvancedModeEnabled] = useRecoilState(
    isAdvancedModeEnabledState,
  );

  return (
    <NavigationDrawer className={className} title={t`Exit Settings`}>
      <NavigationDrawerScrollableContent>
        <SettingsNavigationDrawerItems />
      </NavigationDrawerScrollableContent>

      <NavigationDrawerFixedContent>
        <AdvancedSettingsToggle
          isAdvancedModeEnabled={isAdvancedModeEnabled}
          setIsAdvancedModeEnabled={setIsAdvancedModeEnabled}
          label={t`Advanced:`}
        />
      </NavigationDrawerFixedContent>
    </NavigationDrawer>
  );
};
