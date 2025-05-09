import { SubscriptionInterval } from '@twenty-ui/front/generated-metadata/graphql';
import { BillingPlanKey } from '@twenty-ui/front/generated/graphql';

export type BillingCheckoutSession = {
  plan: BillingPlanKey;
  interval: SubscriptionInterval;
  requirePaymentMethod: boolean;
};
