import { getOperationName } from '@apollo/client/utilities';
import { Meta, StoryObj } from '@storybook/react';
import { HttpResponse, graphql } from 'msw';

import { GET_CURRENT_USER } from '@twenty-modules/users/graphql/queries/getCurrentUser';
import { GET_WORKSPACE_FROM_INVITE_HASH } from '@twenty-modules/workspace/graphql/queries/getWorkspaceFromInviteHash';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';

import { AppPath } from '@twenty-modules/types/AppPath';
import { SignInUp } from '../SignInUp';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Refactor Pages/Auth/Invite',
  component: SignInUp,
  decorators: [PageDecorator],
  args: {
    routePath: AppPath.Invite,
    routeParams: { ':workspaceInviteHash': 'my-hash' },
  },
  parameters: {
    msw: {
      handlers: [
        graphql.query(
          getOperationName(GET_WORKSPACE_FROM_INVITE_HASH) ?? '',
          () => {
            return HttpResponse.json({
              data: {
                findWorkspaceFromInviteHash: {
                  __typename: 'Workspace',
                  id: '20202020-91f0-46d0-acab-cb5afef3cc3b',
                  displayName: 'Twenty dev',
                  logo: null,
                  allowImpersonation: false,
                },
              },
            });
          },
        ),
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
