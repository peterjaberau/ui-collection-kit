import { useRedirect } from '@twenty-modules/domain-manager/hooks/useRedirect';
import { InformationBanner } from '@twenty-modules/information-banner/components/InformationBanner';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { useBillingPortalSessionQuery } from '@twenty-ui/front/generated/graphql';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const InformationBannerFailPaymentInfo = () => {
  const { redirect } = useRedirect();

  const { data, loading } = useBillingPortalSessionQuery({
    variables: {
      returnUrlPath: getSettingsPath(SettingsPath.Billing),
    },
  });

  const openBillingPortal = () => {
    if (isDefined(data) && isDefined(data.billingPortalSession.url)) {
      redirect(data.billingPortalSession.url);
    }
  };

  return (
    <InformationBanner
      variant="danger"
      message={'Last payment failed. Please update your billing details.'}
      buttonTitle="Update"
      buttonOnClick={() => openBillingPortal()}
      isButtonDisabled={loading || !isDefined(data)}
    />
  );
};
