import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { ComponentWithRecoilScopeDecorator } from '@twenty-ui/front/testing/decorators/ComponentWithRecoilScopeDecorator';
import { ObjectMetadataItemsDecorator } from '@twenty-ui/front/testing/decorators/ObjectMetadataItemsDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { allMockPersonRecords } from '@twenty-ui/front/testing/mock-data/people';
import { sleep } from '@twenty-ui/front/utils/sleep';

import { SingleRecordPicker } from '@twenty-modules/object-record/record-picker/single-record-picker/components/SingleRecordPicker';
import { SingleRecordPickerRecord } from '@twenty-modules/object-record/record-picker/single-record-picker/types/SingleRecordPickerRecord';
import { ComponentDecorator } from '@twenty-ui/testing';
import { IconUserCircle } from '@twenty-ui/display';

const records = allMockPersonRecords.map<SingleRecordPickerRecord>(
  (person) => ({
    id: person.id,
    name: person.name.firstName + ' ' + person.name.lastName,
    avatarUrl: 'https://picsum.photos/200',
    avatarType: 'rounded',
    record: { ...person, __typename: 'Person' },
  }),
);

const meta: Meta<typeof SingleRecordPicker> = {
  title: 'Refactor UI/RecordPicker/SingleRecordPicker',
  component: SingleRecordPicker,
  decorators: [
    ComponentDecorator,
    ComponentWithRecoilScopeDecorator,
    ObjectMetadataItemsDecorator,
    SnackBarDecorator,
  ],
  args: {
    objectNameSingular: CoreObjectNameSingular.WorkspaceMember,
    componentInstanceId: 'single-record-picker',
  },
  argTypes: {
    selectedRecord: {
      options: records.map(({ name }) => name),
      mapping: records.reduce(
        (result, entity) => ({ ...result, [entity.name]: entity }),
        {},
      ),
    },
  },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;
type Story = StoryObj<typeof SingleRecordPicker>;

export const Default: Story = {};

export const WithSelectedRecord: Story = {
  args: { selectedRecord: records[2] },
};

export const WithEmptyOption: Story = {
  args: {
    EmptyIcon: IconUserCircle,
    emptyLabel: 'Nobody',
  },
};

export const WithSearchFilter: Story = {

};
