import { BillingCheckoutSession } from '@twenty-modules/auth/types/billingCheckoutSession.type';
import {
  BillingPlanKey,
  SubscriptionInterval,
} from '@twenty-ui/front/generated-metadata/graphql';

export const BILLING_CHECKOUT_SESSION_DEFAULT_VALUE: BillingCheckoutSession = {
  plan: BillingPlanKey.PRO,
  interval: SubscriptionInterval.Month,
  requirePaymentMethod: true,
};
