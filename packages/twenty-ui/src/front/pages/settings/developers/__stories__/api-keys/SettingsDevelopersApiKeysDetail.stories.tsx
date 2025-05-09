import { Meta, StoryObj } from '@storybook/react';
import { HttpResponse, graphql } from 'msw';

import { SettingsDevelopersApiKeyDetail } from '@twenty-ui/front/pages/settings/developers/api-keys/SettingsDevelopersApiKeyDetail';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { sleep } from '@twenty-ui/front/utils/sleep';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Refactor Pages/Settings/ApiKeys/SettingsDevelopersApiKeyDetail',
  component: SettingsDevelopersApiKeyDetail,
  decorators: [PageDecorator],
  args: {
    routePath: '/settings/developers/api-keys/:apiKeyId',
    routeParams: {
      ':apiKeyId': 'f7c6d736-8fcd-4e9c-ab99-28f6a9031570',
    },
  },
  parameters: {
    msw: {
      handlers: [
        ...graphqlMocks.handlers,
        graphql.query('FindOneApiKey', () => {
          return HttpResponse.json({
            data: {
              apiKey: {
                __typename: 'ApiKey',
                id: 'f7c6d736-8fcd-4e9c-ab99-28f6a9031570',
                revokedAt: null,
                expiresAt: '2024-03-10T09:23:10.511Z',
                name: 'sfsfdsf',
                updatedAt: '2024-02-24T10:23:10.673Z',
                createdAt: '2024-02-24T10:23:10.673Z',
              },
            },
          });
        }),
      ],
    },
  },
};
export default meta;

export type Story = StoryObj<typeof SettingsDevelopersApiKeyDetail>;

export const Default: Story = {
};

export const RegenerateApiKey: Story = {
};

export const DeleteApiKey: Story = {
};
