import { Meta, StoryObj } from '@storybook/react';

import { RecordTableContextProvider } from '@twenty-modules/object-record/record-table/components/RecordTableContextProvider';
import { RecordTableEmptyStateSoftDelete } from '@twenty-modules/object-record/record-table/empty-state/components/RecordTableEmptyStateSoftDelete';
import { ComponentDecorator } from '@twenty-ui/testing';
import { ContextStoreDecorator } from '@twenty-ui/front/testing/decorators/ContextStoreDecorator';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { MemoryRouterDecorator } from '@twenty-ui/front/testing/decorators/MemoryRouterDecorator';
import { ObjectMetadataItemsDecorator } from '@twenty-ui/front/testing/decorators/ObjectMetadataItemsDecorator';
import { RecordTableDecorator } from '@twenty-ui/front/testing/decorators/RecordTableDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';

const meta: Meta = {
  title: 'Modules/ObjectRecord/RecordTable/RecordTableEmptyStateSoftDelete',
  component: RecordTableEmptyStateSoftDelete,
  decorators: [
    (Story) => (
      <RecordTableContextProvider
        recordTableId="persons"
        viewBarId="view-bar"
        objectNameSingular="person"
      >
        <Story />
      </RecordTableContextProvider>
    ),
    ComponentDecorator,
    MemoryRouterDecorator,
    RecordTableDecorator,
    ContextStoreDecorator,
    SnackBarDecorator,
    ObjectMetadataItemsDecorator,
    I18nFrontDecorator,
  ],
  parameters: {
    recordTableObjectNameSingular: 'person',
    msw: graphqlMocks,
  },
};

export default meta;
type Story = StoryObj<typeof RecordTableEmptyStateSoftDelete>;

export const Default: Story = {};
