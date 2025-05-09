import { getOperationName } from '@apollo/client/utilities';
import { Meta, StoryObj } from '@storybook/react';
import { HttpResponse, graphql } from 'msw';

import { AppPath } from '@twenty-modules/types/AppPath';
import { GET_CURRENT_USER } from '@twenty-modules/users/graphql/queries/getCurrentUser';
import { OnboardingStatus } from '@twenty-ui/front/generated/graphql';
import { PaymentSuccess } from '@twenty-ui/front/pages/onboarding/PaymentSuccess';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { mockedOnboardingUserData } from '@twenty-ui/front/testing/mock-data/users';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Pages/Onboarding/PaymentSuccess',
  component: PaymentSuccess,
  decorators: [PageDecorator],
  args: { routePath: AppPath.PlanRequiredSuccess },
  parameters: {
    msw: {
      handlers: [
        graphql.query(getOperationName(GET_CURRENT_USER) ?? '', () => {
          return HttpResponse.json({
            data: {
              currentUser: mockedOnboardingUserData(
                OnboardingStatus.WORKSPACE_ACTIVATION,
              ),
            },
          });
        }),
        graphqlMocks.handlers,
      ],
    },
  },
};

export default meta;

export type Story = StoryObj<typeof PaymentSuccess>;

export const Default: Story = {
};
