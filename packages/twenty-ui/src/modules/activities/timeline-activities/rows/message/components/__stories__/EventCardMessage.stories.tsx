import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { HttpResponse, graphql } from 'msw';

import { TimelineActivityContext } from '@twenty-modules/activities/timeline-activities/contexts/TimelineActivityContext';
import { EventCardMessage } from '@twenty-modules/activities/timeline-activities/rows/message/components/EventCardMessage';
import { ComponentDecorator } from '@twenty-ui/testing';
import { ObjectMetadataItemsDecorator } from '@twenty-ui/front/testing/decorators/ObjectMetadataItemsDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';

const meta: Meta<typeof EventCardMessage> = {
  title: 'Modules/TimelineActivities/Rows/Message/EventCardMessage',
  component: EventCardMessage,
  decorators: [
    ComponentDecorator,
    ObjectMetadataItemsDecorator,
    SnackBarDecorator,
    (Story) => {
      return (
        <TimelineActivityContext.Provider value={{ recordId: 'mock-id' }}>
          <Story />
        </TimelineActivityContext.Provider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof EventCardMessage>;

export const Default: Story = {
  args: {
    messageId: '1',
    authorFullName: 'John Doe',
  },
  parameters: {
    msw: {
      handlers: [
        graphql.query('FindOneMessage', () => {
          return HttpResponse.json({
            data: {
              message: {
                id: '1',
                subject: 'Mock title',
                text: 'Mock body',
                messageParticipants: [],
              },
            },
          });
        }),
      ],
    },
  },
};

export const NotShared: Story = {
  args: {
    messageId: '1',
    authorFullName: 'John Doe',
  },
  parameters: {
    msw: {
      handlers: [
        graphql.query('FindOneMessage', () => {
          return HttpResponse.json({
            errors: [
              {
                message: 'Forbidden',
                extensions: {
                  code: 'FORBIDDEN',
                },
              },
            ],
          });
        }),
      ],
    },
  },
};
