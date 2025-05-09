import { EventRowMainObjectUpdated } from '@twenty-modules/activities/timeline-activities/rows/main-object/components/EventRowMainObjectUpdated';
import { TimelineActivity } from '@twenty-modules/activities/timeline-activities/types/TimelineActivity';
import { Meta, StoryObj } from '@storybook/react';

import { ObjectMetadataItemsDecorator } from '@twenty-ui/front/testing/decorators/ObjectMetadataItemsDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';
import { generatedMockObjectMetadataItems } from '@twenty-ui/front/testing/mock-data/generatedMockObjectMetadataItems';
import { ComponentDecorator, RouterDecorator } from '@twenty-ui/testing';

const meta: Meta<typeof EventRowMainObjectUpdated> = {
  title: 'Refactor Modules/TimelineActivities/Rows/MainObject/EventRowMainObjectUpdated',
  component: EventRowMainObjectUpdated,
  args: {
    authorFullName: 'John Doe',
    labelIdentifierValue: 'Mock',
    event: {
      id: '1',
      name: 'mock.updated',
      properties: {
        diff: {
          jobTitle: {
            after: 'mock job title',
            before: '',
          },
          linkedinLink: {
            after: {
              url: 'mock.linkedin',
              label: 'mock linkedin url',
            },
            before: {
              url: '',
              label: '',
            },
          },
        },
      },
    } as TimelineActivity,
    mainObjectMetadataItem: generatedMockObjectMetadataItems.find(
      (item) => item.nameSingular === 'person',
    ),
  },
  decorators: [
    ComponentDecorator,
    ObjectMetadataItemsDecorator,
    SnackBarDecorator,
    RouterDecorator,
  ],
};

export default meta;
type Story = StoryObj<typeof EventRowMainObjectUpdated>;

export const Default: Story = {};
