import { Meta, StoryObj } from '@storybook/react';

import { RecordTableWithWrappers } from '@twenty-modules/object-record/record-table/components/RecordTableWithWrappers';
import { RecordTableEmptyStateNoGroupNoRecordAtAll } from '@twenty-modules/object-record/record-table/empty-state/components/RecordTableEmptyStateNoGroupNoRecordAtAll';
import { fireEvent, userEvent, within } from '@storybook/test';
import { ComponentDecorator } from '@twenty-ui/testing';
import { ContextStoreDecorator } from '@twenty-ui/front/testing/decorators/ContextStoreDecorator';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { MemoryRouterDecorator } from '@twenty-ui/front/testing/decorators/MemoryRouterDecorator';
import { ObjectMetadataItemsDecorator } from '@twenty-ui/front/testing/decorators/ObjectMetadataItemsDecorator';
import { RecordTableDecorator } from '@twenty-ui/front/testing/decorators/RecordTableDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { mockedViewsData } from '@twenty-ui/front/testing/mock-data/views';
import { sleep } from '@twenty-ui/front/utils/sleep';

const meta: Meta = {
  title: 'Refactor Modules/ObjectRecord/RecordTable/RecordTable',
  component: RecordTableWithWrappers,
  decorators: [
    ComponentDecorator,
    MemoryRouterDecorator,
    RecordTableDecorator,
    ContextStoreDecorator,
    SnackBarDecorator,
    ObjectMetadataItemsDecorator,
    I18nFrontDecorator,
  ],
  args: {
    recordTableId: `companies-${mockedViewsData[0].id}`,
    viewBarId: 'view-bar',
    objectNameSingular: 'company',
  },
  parameters: {
    recordTableObjectNameSingular: 'company',
    msw: graphqlMocks,
  },
};

export default meta;
type Story = StoryObj<typeof RecordTableEmptyStateNoGroupNoRecordAtAll>;

export const Default: Story = {

};

export const HeaderMenuOpen: Story = {

};

export const ScrolledLeft: Story = {
  parameters: {
    container: {
      width: 1000,
    },
  },

};

export const ScrolledBottom: Story = {
  parameters: {
    container: {
      height: 300,
    },
  },

};
