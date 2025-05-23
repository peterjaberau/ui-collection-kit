import { Decorator } from '@storybook/react';

import { SnackBarProviderScope } from '@twenty-modules/ui/feedback/snack-bar-manager/scopes/SnackBarProviderScope';

export const SnackBarDecorator: Decorator = (Story) => (
  <SnackBarProviderScope snackBarManagerScopeId="snack-bar-manager">
    <Story />
  </SnackBarProviderScope>
);
