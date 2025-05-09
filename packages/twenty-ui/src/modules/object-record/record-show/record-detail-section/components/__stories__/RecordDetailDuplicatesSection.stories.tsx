import { Meta, StoryObj } from '@storybook/react';

import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { MemoryRouterDecorator } from '@twenty-ui/front/testing/decorators/MemoryRouterDecorator';
import { ObjectMetadataItemsDecorator } from '@twenty-ui/front/testing/decorators/ObjectMetadataItemsDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { getCompaniesMock } from '@twenty-ui/front/testing/mock-data/companies';

import { RecordDetailDuplicatesSection } from '../RecordDetailDuplicatesSection';
import { ComponentDecorator } from '@twenty-ui/testing';

const companiesMock = getCompaniesMock();

const meta: Meta<typeof RecordDetailDuplicatesSection> = {
  title:
    'Modules/ObjectRecord/RecordShow/RecordDetailSection/RecordDetailDuplicatesSection',
  component: RecordDetailDuplicatesSection,
  decorators: [
    ComponentDecorator,
    ObjectMetadataItemsDecorator,
    SnackBarDecorator,
    MemoryRouterDecorator,
  ],
  args: {
    objectRecordId: companiesMock[0].id,
    objectNameSingular: CoreObjectNameSingular.Company,
  },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;
type Story = StoryObj<typeof RecordDetailDuplicatesSection>;

export const Default: Story = {};
