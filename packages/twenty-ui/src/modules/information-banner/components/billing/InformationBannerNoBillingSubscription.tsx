import { BILLING_CHECKOUT_SESSION_DEFAULT_VALUE } from '@twenty-modules/billing/constants/BillingCheckoutSessionDefaultValue';
import { useHandleCheckoutSession } from '@twenty-modules/billing/hooks/useHandleCheckoutSession';
import { InformationBanner } from '@twenty-modules/information-banner/components/InformationBanner';

export const InformationBannerNoBillingSubscription = () => {
  const { handleCheckoutSession, isSubmitting } = useHandleCheckoutSession({
    recurringInterval: BILLING_CHECKOUT_SESSION_DEFAULT_VALUE.interval,
    plan: BILLING_CHECKOUT_SESSION_DEFAULT_VALUE.plan,
    requirePaymentMethod: true,
  });

  return (
    <InformationBanner
      variant="danger"
      message={`Your workspace does not have an active subscription`}
      buttonTitle="Subscribe"
      buttonOnClick={() => handleCheckoutSession()}
      isButtonDisabled={isSubmitting}
    />
  );
};
