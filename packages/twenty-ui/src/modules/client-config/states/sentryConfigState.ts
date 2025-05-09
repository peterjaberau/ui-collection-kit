import { Sentry } from '@twenty-ui/front/generated/graphql';
import { createState } from '@twenty-ui/utilities';

export const sentryConfigState = createState<Sentry | null>({
  key: 'sentryConfigState',
  defaultValue: null,
});
