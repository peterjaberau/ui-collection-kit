/* @license Enterprise */

import { SSOIdentityProvider } from '@twenty-modules/settings/security/types/SSOIdentityProvider';
import { createState } from '@twenty-ui/utilities';

export const SSOIdentitiesProvidersState = createState<
  Omit<SSOIdentityProvider, '__typename'>[]
>({
  key: 'SSOIdentitiesProvidersState',
  defaultValue: [],
});
