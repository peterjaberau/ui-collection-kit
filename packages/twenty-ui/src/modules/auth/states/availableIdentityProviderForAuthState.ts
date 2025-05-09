import { UserExists } from '@twenty-ui/front/generated/graphql';
import { createState } from '@twenty-ui/utilities';

export const availableSSOIdentityProvidersForAuthState = createState<
  NonNullable<UserExists['availableWorkspaces']>[0]['sso']
>({
  key: 'availableSSOIdentityProvidersForAuth',
  defaultValue: [],
});
