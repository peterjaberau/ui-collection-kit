/* @license Enterprise */

import { SettingsListCard } from '@twenty-modules/settings/components/SettingsListCard';
import { SettingsSSOIdentityProviderRowRightContainer } from '@twenty-modules/settings/security/components/SSO/SettingsSSOIdentityProviderRowRightContainer';
import { SSOIdentitiesProvidersState } from '@twenty-modules/settings/security/states/SSOIdentitiesProvidersState';
import { guessSSOIdentityProviderIconByUrl } from '@twenty-modules/settings/security/utils/guessSSOIdentityProviderIconByUrl';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { useRecoilValue } from 'recoil';
import { useNavigateSettings } from '@twenty-ui/front/hooks/useNavigateSettings';

export const SettingsSSOIdentitiesProvidersListCardWrapper = () => {
  const navigate = useNavigateSettings();

  const SSOIdentitiesProviders = useRecoilValue(SSOIdentitiesProvidersState);

  return (
    <SettingsListCard
      items={SSOIdentitiesProviders}
      getItemLabel={(SSOIdentityProvider) =>
        `${SSOIdentityProvider.name} - ${SSOIdentityProvider.type}`
      }
      RowIconFn={(SSOIdentityProvider) =>
        guessSSOIdentityProviderIconByUrl(SSOIdentityProvider.issuer)
      }
      RowRightComponent={({ item: SSOIdp }) => (
        <SettingsSSOIdentityProviderRowRightContainer SSOIdp={SSOIdp} />
      )}
      hasFooter
      footerButtonLabel="Add SSO Identity Provider"
      onFooterButtonClick={() => navigate(SettingsPath.NewSSOIdentityProvider)}
    />
  );
};
