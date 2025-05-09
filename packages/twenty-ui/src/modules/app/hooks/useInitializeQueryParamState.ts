import { useRecoilCallback } from 'recoil';

import { isQueryParamInitializedState } from '@twenty-modules/app/states/isQueryParamInitializedState';
import { billingCheckoutSessionState } from '@twenty-modules/auth/states/billingCheckoutSessionState';
import { BillingCheckoutSession } from '@twenty-modules/auth/types/billingCheckoutSession.type';
import { BILLING_CHECKOUT_SESSION_DEFAULT_VALUE } from '@twenty-modules/billing/constants/BillingCheckoutSessionDefaultValue';

// Initialize state that are hydrated from query parameters
// We used to use recoil-sync to do this, but it was causing issues with Firefox
export const useInitializeQueryParamState = () => {
  const initializeQueryParamState = useRecoilCallback(
    ({ set, snapshot }) =>
      () => {
        const isInitialized = snapshot
          .getLoadable(isQueryParamInitializedState)
          .getValue();

        if (!isInitialized) {
          const handlers = {
            billingCheckoutSession: (value: string) => {
              try {
                const parsedValue = JSON.parse(decodeURIComponent(value));

                if (
                  typeof parsedValue === 'object' &&
                  parsedValue !== null &&
                  'plan' in parsedValue &&
                  'interval' in parsedValue &&
                  'requirePaymentMethod' in parsedValue
                ) {
                  set(
                    billingCheckoutSessionState,
                    parsedValue as BillingCheckoutSession,
                  );
                }
              } catch (error) {
                // eslint-disable-next-line no-console
                console.error(
                  'Failed to parse billingCheckoutSession from URL',
                  error,
                );
                set(
                  billingCheckoutSessionState,
                  BILLING_CHECKOUT_SESSION_DEFAULT_VALUE,
                );
              }
            },
          };

          const queryParams = new URLSearchParams(window.location.search);

          for (const [paramName, handler] of Object.entries(handlers)) {
            const value = queryParams.get(paramName);
            if (value !== null) {
              handler(value);
            }
          }

          set(isQueryParamInitializedState, true);
        }
      },
    [],
  );

  return { initializeQueryParamState };
};
