import { getOperationName } from '@apollo/client/utilities';
import { Meta, StoryObj } from '@storybook/react';
import { HttpResponse, graphql } from 'msw';

import { GET_CURRENT_USER } from '@twenty-modules/users/graphql/queries/getCurrentUser';
import {
  OnboardingStatus,
  ValidatePasswordResetTokenDocument,
} from '@twenty-ui/front/generated/graphql';
import { PasswordReset } from '@twenty-ui/front/pages/auth/PasswordReset';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { mockedOnboardingUserData } from '@twenty-ui/front/testing/mock-data/users';

const mockedOnboardingUsersData = mockedOnboardingUserData(
  OnboardingStatus.COMPLETED,
);

const meta: Meta<PageDecoratorArgs> = {
  title: 'Pages/Auth/PasswordReset',
  component: PasswordReset,
  decorators: [PageDecorator],
  args: {
    routePath: '/reset-password/:passwordResetToken',
    routeParams: { ':passwordResetToken': 'MOCKED_TOKEN' },
  },
  parameters: {
    msw: {
      handlers: [
        graphql.query(
          getOperationName(ValidatePasswordResetTokenDocument) ?? '',
          () => {
            return HttpResponse.json({
              data: {
                validatePasswordResetToken: {
                  id: mockedOnboardingUsersData.id,
                  email: mockedOnboardingUsersData.email,
                },
              },
            });
          },
        ),
        graphql.query(getOperationName(GET_CURRENT_USER) ?? '', () => {
          return HttpResponse.json({
            data: {
              currentUser: mockedOnboardingUsersData,
            },
          });
        }),
        graphqlMocks.handlers,
      ],
    },
  },
};

export default meta;

export type Story = StoryObj<typeof PasswordReset>;

export const Default: Story = {
};
