import { useIsSettingsDrawer } from '@twenty-modules/navigation/hooks/useIsSettingsDrawer';

import { MainNavigationDrawer } from '@twenty-modules/navigation/components/MainNavigationDrawer';
import { SettingsNavigationDrawer } from '@twenty-modules/navigation/components/SettingsNavigationDrawer';

export type AppNavigationDrawerProps = {
  className?: string;
};

export const AppNavigationDrawer = ({
  className,
}: AppNavigationDrawerProps) => {
  const isSettingsDrawer = useIsSettingsDrawer();

  return isSettingsDrawer ? (
    <SettingsNavigationDrawer className={className} />
  ) : (
    <MainNavigationDrawer className={className} />
  );
};
