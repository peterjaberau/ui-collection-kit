import { getOperationName } from '@apollo/client/utilities';
import { Meta, StoryObj } from '@storybook/react';
import { HttpResponse, graphql } from 'msw';

import { BILLING_BASE_PRODUCT_PRICES } from '@twenty-modules/billing/graphql/billingBaseProductPrices';
import { AppPath } from '@twenty-modules/types/AppPath';
import { GET_CURRENT_USER } from '@twenty-modules/users/graphql/queries/getCurrentUser';
import {
  BillingPlanKey,
  OnboardingStatus,
  SubscriptionInterval,
} from '@twenty-ui/front/generated/graphql';
import { ChooseYourPlan } from '@twenty-ui/front/pages/onboarding/ChooseYourPlan';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { mockedOnboardingUserData } from '@twenty-ui/front/testing/mock-data/users';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Pages/Onboarding/ChooseYourPlan',
  component: ChooseYourPlan,
  decorators: [PageDecorator],
  args: { routePath: AppPath.PlanRequired },
  parameters: {
    msw: {
      handlers: [
        graphql.query(getOperationName(GET_CURRENT_USER) ?? '', () => {
          return HttpResponse.json({
            data: {
              currentUser: mockedOnboardingUserData(
                OnboardingStatus.PLAN_REQUIRED,
              ),
            },
          });
        }),
        graphql.query(
          getOperationName(BILLING_BASE_PRODUCT_PRICES) ?? '',
          () => {
            return HttpResponse.json({
              data: {
                plans: [
                  {
                    planKey: BillingPlanKey.PRO,
                    baseProduct: {
                      prices: [
                        {
                          __typename: 'BillingPriceLicensedDTO',
                          unitAmount: 900,
                          stripePriceId: 'monthly8usd',
                          recurringInterval: SubscriptionInterval.Month,
                        },
                      ],
                    },
                  },
                ],
              },
            });
          },
        ),
        ...graphqlMocks.handlers,
      ],
    },
  },
};

export default meta;

export type Story = StoryObj<typeof ChooseYourPlan>;

export const Default: Story = {
};
