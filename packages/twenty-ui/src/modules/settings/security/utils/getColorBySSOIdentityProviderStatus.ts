import { SsoIdentityProviderStatus } from '@twenty-ui/front/generated/graphql';
import { ThemeColor } from '@twenty-ui/theme';

export const getColorBySSOIdentityProviderStatus: Record<
  SsoIdentityProviderStatus,
  ThemeColor
> = {
  Active: 'green',
  Inactive: 'gray',
  Error: 'red',
};
