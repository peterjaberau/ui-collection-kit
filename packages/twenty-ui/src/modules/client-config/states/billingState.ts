import { Billing } from '@twenty-ui/front/generated/graphql';
import { createState } from '@twenty-ui/utilities';

export const billingState = createState<Billing | null>({
  key: 'billingState',
  defaultValue: null,
});
