import { ApprovedAccessDomain } from '@twenty-ui/front/generated/graphql';
import { createState } from '@twenty-ui/utilities';

export const approvedAccessDomainsState = createState<
  Omit<ApprovedAccessDomain, '__typename'>[]
>({
  key: 'ApprovedAccessDomainsState',
  defaultValue: [],
});
