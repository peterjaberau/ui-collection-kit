import { AuthProviders } from '@twenty-ui/front/generated/graphql';
import { createState } from '@twenty-ui/utilities';

export const workspaceAuthProvidersState = createState<AuthProviders | null>({
  key: 'workspaceAuthProvidersState',
  defaultValue: null,
});
