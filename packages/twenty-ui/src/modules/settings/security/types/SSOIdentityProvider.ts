/* @license Enterprise */

import { SSOIdentitiesProvidersParamsSchema } from '@twenty-modules/settings/security/validation-schemas/SSOIdentityProviderSchema';
import { z } from 'zod';
import {
  IdentityProviderType,
  SsoIdentityProviderStatus,
} from '@twenty-ui/front/generated/graphql';

export type SSOIdentityProvider = {
  __typename: 'SSOIdentityProvider';
  id: string;
  type: IdentityProviderType;
  issuer: string;
  name?: string | null;
  status: SsoIdentityProviderStatus;
};

export type SettingSecurityNewSSOIdentityFormValues = z.infer<
  typeof SSOIdentitiesProvidersParamsSchema
>;
