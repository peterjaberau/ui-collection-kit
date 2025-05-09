import { InformationBanner } from '@twenty-modules/information-banner/components/InformationBanner';
import { useAccountToReconnect } from '@twenty-modules/information-banner/hooks/useAccountToReconnect';
import { InformationBannerKeys } from '@twenty-modules/information-banner/types/InformationBannerKeys';
import { useTriggerApisOAuth } from '@twenty-modules/settings/accounts/hooks/useTriggerApiOAuth';
import { IconRefresh } from '@twenty-ui/display';

export const InformationBannerReconnectAccountInsufficientPermissions = () => {
  const { accountToReconnect } = useAccountToReconnect(
    InformationBannerKeys.ACCOUNTS_TO_RECONNECT_INSUFFICIENT_PERMISSIONS,
  );

  const { triggerApisOAuth } = useTriggerApisOAuth();

  if (!accountToReconnect) {
    return null;
  }

  return (
    <InformationBanner
      message={`Sync lost with mailbox ${accountToReconnect?.handle}. Please
    reconnect for updates:`}
      buttonTitle="Reconnect"
      buttonIcon={IconRefresh}
      buttonOnClick={() => triggerApisOAuth(accountToReconnect.provider)}
    />
  );
};
