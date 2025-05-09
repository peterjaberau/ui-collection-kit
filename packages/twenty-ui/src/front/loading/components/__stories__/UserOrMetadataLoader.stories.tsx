import { getOperationName } from '@apollo/client/utilities';
import { Meta, StoryObj } from '@storybook/react';
import { HttpResponse, graphql } from 'msw';

import { GET_PUBLIC_WORKSPACE_DATA_BY_DOMAIN } from '@twenty-modules/auth/graphql/queries/getPublicWorkspaceDataByDomain';
import { GET_CLIENT_CONFIG } from '@twenty-modules/client-config/graphql/queries/getClientConfig';
import { FIND_MANY_OBJECT_METADATA_ITEMS } from '@twenty-modules/object-metadata/graphql/queries';
import { GET_CURRENT_USER } from '@twenty-modules/users/graphql/queries/getCurrentUser';
import { RecordIndexPage } from '@twenty-ui/front/pages/object-record/RecordIndexPage';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks, metadataGraphql } from '@twenty-ui/front/testing/graphqlMocks';
import { mockedClientConfig } from '@twenty-ui/front/testing/mock-data/config';
import { mockedPublicWorkspaceDataBySubdomain } from '@twenty-ui/front/testing/mock-data/publicWorkspaceDataBySubdomain';
import { mockedUserData } from '@twenty-ui/front/testing/mock-data/users';

const userMetadataLoaderMocks = {
  msw: {
    handlers: [
      graphql.query(getOperationName(GET_CURRENT_USER) ?? '', () => {
        return HttpResponse.json({
          data: {
            currentUser: mockedUserData,
          },
        });
      }),
      graphql.query(getOperationName(GET_CLIENT_CONFIG) ?? '', () => {
        return HttpResponse.json({
          data: {
            clientConfig: mockedClientConfig,
          },
        });
      }),
      graphql.query(
        getOperationName(GET_PUBLIC_WORKSPACE_DATA_BY_DOMAIN) ?? '',
        () => {
          return HttpResponse.json({
            data: {
              publicWorkspaceDataBySubdomain:
                mockedPublicWorkspaceDataBySubdomain,
            },
          });
        },
      ),
      metadataGraphql.query(
        getOperationName(FIND_MANY_OBJECT_METADATA_ITEMS) ?? '',
        () => {
          return HttpResponse.json({
            data: {
              objects: {
                // simulate no metadata items
                edges: [],
              },
            },
          });
        },
      ),
    ],
  },
};

const meta: Meta<PageDecoratorArgs> = {
  title: 'App/Loading/UserOrMetadataLoader',
  component: RecordIndexPage,
  args: {
    routePath: '/objects/:objectNamePlural',
    routeParams: {
      ':objectNamePlural': 'companies',
    },
  },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof RecordIndexPage>;

export const Default: Story = {
  parameters: userMetadataLoaderMocks,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  decorators: [PageDecorator],
};
