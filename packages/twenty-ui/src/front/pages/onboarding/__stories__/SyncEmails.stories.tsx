import { AppPath } from '@twenty-modules/types/AppPath';
import { getOperationName } from '@apollo/client/utilities';
import { Meta, StoryObj } from '@storybook/react';
import { HttpResponse, graphql } from 'msw';

import { OnboardingStatus } from '@twenty-ui/front/generated/graphql';
import { GET_CURRENT_USER } from '@twenty-ui/front/modules/users/graphql/queries/getCurrentUser';
import { SyncEmails } from '@twenty-ui/front/pages/onboarding/SyncEmails';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { mockedOnboardingUserData } from '@twenty-ui/front/testing/mock-data/users';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Pages/Onboarding/SyncEmails',
  component: SyncEmails,
  decorators: [PageDecorator],
  args: { routePath: AppPath.SyncEmails },
  parameters: {
    msw: {
      handlers: [
        graphql.query(getOperationName(GET_CURRENT_USER) ?? '', () => {
          return HttpResponse.json({
            data: {
              currentUser: mockedOnboardingUserData(
                OnboardingStatus.SYNC_EMAIL,
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

export type Story = StoryObj<typeof SyncEmails>;

export const Default: Story = {
};
