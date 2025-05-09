import { getOperationName } from '@apollo/client/utilities';
import { Meta, StoryObj } from '@storybook/react';
import { HttpResponse, graphql } from 'msw';

import { GET_CURRENT_USER } from '@twenty-modules/users/graphql/queries/getCurrentUser';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';

import { AppPath } from '@twenty-modules/types/AppPath';
import { SignInUp } from '../SignInUp';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Pages/Auth/SignInUp',
  component: SignInUp,
  decorators: [PageDecorator],
  args: { routePath: AppPath.SignInUp },
  parameters: {
    msw: {
      handlers: [
        graphql.query(getOperationName(GET_CURRENT_USER) ?? '', () => {
          return HttpResponse.json({
            data: null,
            errors: [
              {
                message: 'Unauthorized',
                extensions: {
                  code: 'UNAUTHENTICATED',
                  response: {
                    statusCode: 401,
                    message: 'Unauthorized',
                  },
                },
              },
            ],
          });
        }),
        graphqlMocks.handlers,
      ],
    },
    cookie: '',
  },
};

export default meta;

export type Story = StoryObj<typeof SignInUp>;

export const Default: Story = {
};
