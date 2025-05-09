import { Meta, StoryObj } from '@storybook/react';
import { HttpResponse, graphql } from 'msw';

import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import {
  allMockPersonRecords,
  peopleQueryResult,
} from '@twenty-ui/front/testing/mock-data/people';
import { mockedWorkspaceMemberData } from '@twenty-ui/front/testing/mock-data/users';

import { RecordShowPage } from '../RecordShowPage';

const personRecord = allMockPersonRecords[0];
const meta: Meta<PageDecoratorArgs> = {
  title: 'Refactor Pages/ObjectRecord/RecordShowPage',
  component: RecordShowPage,
  args: {
    routePath: '/object/:objectNameSingular/:objectRecordId',
    routeParams: {
      ':objectNameSingular': 'person',
      ':objectRecordId': personRecord.id,
    },
  },
  parameters: {
    msw: {
      handlers: [
        graphql.query('FindManyPeople', () => {
          return HttpResponse.json({
            data: peopleQueryResult,
          });
        }),
        graphql.query('FindOnePerson', () => {
          return HttpResponse.json({
            data: {
              person: personRecord,
            },
          });
        }),
        graphql.query('FindOneworkspaceMember', () => {
          return HttpResponse.json({
            data: {
              workspaceMember: mockedWorkspaceMemberData,
            },
          });
        }),
        graphqlMocks.handlers,
      ],
    },
  },
};

export default meta;

export type Story = StoryObj<typeof RecordShowPage>;

export const Default: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  decorators: [PageDecorator],
};
