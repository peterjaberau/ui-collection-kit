import { getOperationName } from '@apollo/client/utilities';
import { Meta, StoryObj } from '@storybook/react';
import { HttpResponse, graphql } from 'msw';

import { Calendar } from '@twenty-modules/activities/calendar/components/Calendar';
import { getTimelineCalendarEventsFromCompanyId } from '@twenty-modules/activities/calendar/graphql/queries/getTimelineCalendarEventsFromCompanyId';
import { ObjectMetadataItemsDecorator } from '@twenty-ui/front/testing/decorators/ObjectMetadataItemsDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { mockedTimelineCalendarEvents } from '@twenty-ui/front/testing/mock-data/timeline-calendar-events';
import { ComponentDecorator } from '@twenty-ui/testing';

const meta: Meta<typeof Calendar> = {
  title: 'Refactor Modules/Activities/Calendar/Calendar',
  component: Calendar,
  decorators: [
    ComponentDecorator,
    ObjectMetadataItemsDecorator,
    SnackBarDecorator,
  ],
  parameters: {
    container: { width: 728 },
    msw: {
      handlers: [
        ...graphqlMocks.handlers,
        graphql.query(
          getOperationName(getTimelineCalendarEventsFromCompanyId) ?? '',
          ({ variables }) => {
            if (variables.page > 1) {
              return HttpResponse.json({
                data: {
                  getTimelineCalendarEventsFromCompanyId: {
                    __typename: 'TimelineCalendarEventsWithTotal',
                    totalNumberOfCalendarEvents: 3,
                    timelineCalendarEvents: [],
                  },
                },
              });
            }
            return HttpResponse.json({
              data: {
                getTimelineCalendarEventsFromCompanyId: {
                  __typename: 'TimelineCalendarEventsWithTotal',
                  totalNumberOfCalendarEvents: 3,
                  timelineCalendarEvents: mockedTimelineCalendarEvents,
                },
              },
            });
          },
        ),
      ],
    },
  },
  args: {
    targetableObject: {
      id: '1',
      targetObjectNameSingular: 'Company',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {};
