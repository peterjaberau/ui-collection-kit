import { Meta, StoryObj } from '@storybook/react';
import { HttpResponse, graphql } from 'msw';

import { SettingsDevelopersWebhooksDetail } from '@twenty-ui/front/pages/settings/developers/webhooks/components/SettingsDevelopersWebhookDetail';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Pages/Settings/Webhooks/SettingsDevelopersWebhooksDetail',
  component: SettingsDevelopersWebhooksDetail,
  decorators: [PageDecorator],
  args: {
    routePath: '/settings/developers/webhooks/:webhookId',
    routeParams: { ':webhookId': '1234' },
  },
  parameters: {
    msw: {
      handlers: [
        graphql.query('FindOneWebhook', () => {
          return HttpResponse.json({
            data: {
              webhook: {
                id: '1',
                createdAt: '2021-08-27T12:00:00Z',
                targetUrl: 'https://example.com/webhook',
                description: 'A Sample Description',
                updatedAt: '2021-08-27T12:00:00Z',
                operation: 'created',
                __typename: 'Webhook',
              },
            },
          });
        }),
        graphqlMocks.handlers,
      ],
    },
  },
};

export default meta;

export type Story = StoryObj<typeof SettingsDevelopersWebhooksDetail>;

export const Default: Story = {
};
