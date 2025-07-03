'use client';
import {
  AppSwitcher,
  AtlassianNavigation,
  Help
} from '@atlaskit/atlassian-navigation';

const DefaultAppSwitcher = () => <AppSwitcher tooltip='Switch to...' />;

export default function Page() {
  return (
    <AtlassianNavigation
      label='site'
      renderProductHome={() => null}
      renderHelp={() => <Help tooltip="Get help" />}
      renderAppSwitcher={DefaultAppSwitcher}
      primaryItems={[]}
    />
  );
}
