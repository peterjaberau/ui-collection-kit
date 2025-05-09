import { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { RelationFromManyFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/display/components/RelationFromManyFieldDisplay';
import { FieldDefinition } from '@twenty-modules/object-record/record-field/types/FieldDefinition';
import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import {
  RecordFieldValueSelectorContextProvider,
  useSetRecordFieldValue,
} from '@twenty-modules/object-record/record-store/contexts/RecordFieldValueSelectorContext';
import { recordStoreFamilyState } from '@twenty-modules/object-record/record-store/states/recordStoreFamilyState';
import { ChipGeneratorsDecorator } from '@twenty-ui/front/testing/decorators/ChipGeneratorsDecorator';
import { MemoryRouterDecorator } from '@twenty-ui/front/testing/decorators/MemoryRouterDecorator';
import { getProfilingStory } from '@twenty-ui/front/testing/profiling/utils/getProfilingStory';

import { ComponentDecorator } from '@twenty-ui/testing';
import {
  fieldValue,
  otherPersonMock,
  relationFromManyFieldDisplayMock,
} from './relationFromManyFieldDisplayMock';

const RelationFieldValueSetterEffect = () => {
  const setEntity = useSetRecoilState(
    recordStoreFamilyState(relationFromManyFieldDisplayMock.recordId),
  );

  const setRelationEntity = useSetRecoilState(
    recordStoreFamilyState(relationFromManyFieldDisplayMock.relationRecordId),
  );

  const setRecordFieldValue = useSetRecordFieldValue();

  useEffect(() => {
    setEntity(relationFromManyFieldDisplayMock.entityValue);
    setRelationEntity(relationFromManyFieldDisplayMock.relationFieldValue);

    setRecordFieldValue(
      relationFromManyFieldDisplayMock.entityValue.id,
      'company',
      [relationFromManyFieldDisplayMock.entityValue],
    );
    setRecordFieldValue(otherPersonMock.entityValue.id, 'company', [
      relationFromManyFieldDisplayMock.entityValue,
    ]);
    setRecordFieldValue(
      relationFromManyFieldDisplayMock.relationFieldValue.id,
      'company',
      relationFromManyFieldDisplayMock.relationFieldValue,
    );
  }, [setEntity, setRelationEntity, setRecordFieldValue]);

  return null;
};

const meta: Meta = {
  title: 'Refactor UI/Data/Field/Display/RelationFromManyFieldDisplay',
  decorators: [
    MemoryRouterDecorator,
    ChipGeneratorsDecorator,
    (Story) => (
      <RecordFieldValueSelectorContextProvider>
        <FieldContext.Provider
          value={{
            recordId: relationFromManyFieldDisplayMock.recordId,
            isLabelIdentifier: false,
            fieldDefinition: {
              ...relationFromManyFieldDisplayMock.fieldDefinition,
            } as unknown as FieldDefinition<FieldMetadata>,
            isReadOnly: false,
          }}
        >
          <RelationFieldValueSetterEffect />
          <Story />
        </FieldContext.Provider>
      </RecordFieldValueSelectorContextProvider>
    ),
    ComponentDecorator,
  ],
  component: RelationFromManyFieldDisplay,
  argTypes: { value: { control: 'date' } },
  args: { fieldValue: fieldValue },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export default meta;

type Story = StoryObj<typeof RelationFromManyFieldDisplay>;

export const Default: Story = {};

// TODO: optimize this component once we have morph many
export const Performance = getProfilingStory({
  componentName: 'RelationFromManyFieldDisplay',
  averageThresholdInMs: 1,
  numberOfRuns: 20,
  numberOfTestsPerRun: 100,
});
