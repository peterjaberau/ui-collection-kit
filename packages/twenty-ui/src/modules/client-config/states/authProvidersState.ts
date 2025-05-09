import { AuthProviders } from '@twenty-ui/front/generated/graphql';
import { createState } from '@twenty-ui/utilities';

export const authProvidersState = createState<AuthProviders>({
  key: 'authProvidersState',
  defaultValue: {
    google: true,
    magicLink: false,
    password: true,
    microsoft: false,
    sso: [],
  },
});
