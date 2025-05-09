import { InformationBanner } from '@twenty-modules/information-banner/components/InformationBanner';
import { useAccountToReconnect } from '@twenty-modules/information-banner/hooks/useAccountToReconnect';
import { InformationBannerKeys } from '@twenty-modules/information-banner/types/InformationBannerKeys';
import { useTriggerApisOAuth } from '@twenty-modules/settings/accounts/hooks/useTriggerApiOAuth';
import { IconRefresh } from '@twenty-ui/display';

export const InformationBannerReconnectAccountEmailAliases = () => {
  const { accountToReconnect } = useAccountToReconnect(
    InformationBannerKeys.ACCOUNTS_TO_RECONNECT_EMAIL_ALIASES,
  );

  const { triggerApisOAuth } = useTriggerApisOAuth();

  if (!accountToReconnect) {
    return null;
  }

  return (
    <InformationBanner
      message={`Please reconnect your mailbox ${accountToReconnect?.handle} to update your email aliases:`}
      buttonTitle="Reconnect"
      buttonIcon={IconRefresh}
      buttonOnClick={() => triggerApisOAuth(accountToReconnect.provider)}
    />
  );
};
