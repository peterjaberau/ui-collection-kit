import { Decorator, Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import { useEffect } from 'react';

import { useSetHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/hooks/useSetHotkeyScope';

import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { RecordFieldComponentInstanceContext } from '@twenty-modules/object-record/record-field/states/contexts/RecordFieldComponentInstanceContext';
import { DEFAULT_CELL_SCOPE } from '@twenty-modules/object-record/record-table/record-table-cell/hooks/useOpenRecordTableCellV2';
import { getRecordFieldInputId } from '@twenty-modules/object-record/utils/getRecordFieldInputId';
import { FieldMetadataType } from '@ui-collection-kit/twenty-shared/src/types';
import { FieldRatingValue } from '../../../../types/FieldMetadata';
import { useRatingField } from '../../../hooks/useRatingField';
import { RatingFieldInput, RatingFieldInputProps } from '../RatingFieldInput';

const RatingFieldValueSetterEffect = ({
  value,
}: {
  value: FieldRatingValue;
}) => {
  const { setFieldValue } = useRatingField();

  useEffect(() => {
    setFieldValue(value);
  }, [setFieldValue, value]);

  return <></>;
};

type RatingFieldInputWithContextProps = RatingFieldInputProps & {
  value: FieldRatingValue;
  recordId?: string;
};

const RatingFieldInputWithContext = ({
  recordId,
  value,
  onSubmit,
}: RatingFieldInputWithContextProps) => {
  const setHotKeyScope = useSetHotkeyScope();

  useEffect(() => {
    setHotKeyScope(DEFAULT_CELL_SCOPE.scope);
  }, [setHotKeyScope]);

  return (
    <RecordFieldComponentInstanceContext.Provider
      value={{
        instanceId: getRecordFieldInputId(
          recordId ?? '',
          'Rating',
          'record-table-cell',
        ),
      }}
    >
      <FieldContext.Provider
        value={{
          fieldDefinition: {
            fieldMetadataId: 'rating',
            label: 'Rating',
            iconName: 'IconStar',
            type: FieldMetadataType.RATING,
            metadata: {
              fieldName: 'rating',
              objectMetadataNameSingular: 'person',
            },
          },
          recordId: recordId ?? '123',
          isLabelIdentifier: false,
          isReadOnly: false,
        }}
      >
        <RatingFieldValueSetterEffect value={value} />
        <RatingFieldInput onSubmit={onSubmit} />
      </FieldContext.Provider>
    </RecordFieldComponentInstanceContext.Provider>
  );
};

const submitJestFn = () => console.log('fn');

const clearMocksDecorator: Decorator = (Story, context) => {
  if (context.parameters.clearMocks === true) {
  }
  return <Story />;
};

const meta: Meta = {
  title: 'Refactor UI/Data/Field/Input/RatingFieldInput',
  component: RatingFieldInputWithContext,
  args: {
    value: '3',
    onSubmit: submitJestFn,
  },
  argTypes: {
    onSubmit: { control: false },
  },
  decorators: [clearMocksDecorator],
  parameters: {
    clearMocks: true,
  },
};

export default meta;

type Story = StoryObj<typeof RatingFieldInputWithContext>;

export const Default: Story = {};

export const Submit: Story = {

};
