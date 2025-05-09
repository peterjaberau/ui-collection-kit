import { billingCheckoutSessionState } from '@twenty-modules/auth/states/billingCheckoutSessionState';
import { BILLING_CHECKOUT_SESSION_DEFAULT_VALUE } from '@twenty-modules/billing/constants/BillingCheckoutSessionDefaultValue';
import { useRecoilCallback } from 'recoil';

export const useBuildSearchParamsFromUrlSyncedStates = () => {
  const buildSearchParamsFromUrlSyncedStates = useRecoilCallback(
    ({ snapshot }) =>
      async () => {
        const billingCheckoutSession = snapshot
          .getLoadable(billingCheckoutSessionState)
          .getValue();

        const output = {
          ...(billingCheckoutSession !== BILLING_CHECKOUT_SESSION_DEFAULT_VALUE
            ? {
                billingCheckoutSession: JSON.stringify(billingCheckoutSession),
              }
            : {}),
        };

        return output;
      },
    [],
  );

  return {
    buildSearchParamsFromUrlSyncedStates,
  };
};
