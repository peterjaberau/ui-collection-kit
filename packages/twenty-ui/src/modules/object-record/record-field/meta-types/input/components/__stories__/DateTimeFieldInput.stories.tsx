import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { useEffect } from 'react';

import { useSetHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/hooks/useSetHotkeyScope';
import { FieldMetadataType } from '@twenty-ui/front/generated/graphql';

import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { RecordFieldComponentInstanceContext } from '@twenty-modules/object-record/record-field/states/contexts/RecordFieldComponentInstanceContext';
import { DEFAULT_CELL_SCOPE } from '@twenty-modules/object-record/record-table/record-table-cell/hooks/useOpenRecordTableCellV2';
import { getRecordFieldInputId } from '@twenty-modules/object-record/utils/getRecordFieldInputId';
import { StorybookFieldInputDropdownFocusIdSetterEffect } from '@twenty-ui/front/testing/components/StorybookFieldInputDropdownFocusIdSetterEffect';
import { useDateTimeField } from '../../../hooks/useDateTimeField';
import {
  DateTimeFieldInput,
  DateTimeFieldInputProps,
} from '../DateTimeFieldInput';
const formattedDate = new Date(2022, 0, 1, 2, 0, 0);

const DateFieldValueSetterEffect = ({ value }: { value: Date }) => {
  const { setFieldValue } = useDateTimeField();

  useEffect(() => {
    setFieldValue(value.toISOString());
  }, [setFieldValue, value]);

  return <></>;
};

type DateFieldValueGaterProps = Pick<
  DateTimeFieldInputProps,
  'onEscape' | 'onEnter' | 'onClickOutside'
>;

const DateFieldValueGater = ({
  onEscape,
  onEnter,
  onClickOutside,
}: DateFieldValueGaterProps) => {
  const { fieldValue } = useDateTimeField();

  return (
    fieldValue && (
      <DateTimeFieldInput
        onEscape={onEscape}
        onEnter={onEnter}
        onClickOutside={onClickOutside}
      />
    )
  );
};

type DateFieldInputWithContextProps = DateTimeFieldInputProps & {
  value: Date;
  recordId?: string;
};

const DateFieldInputWithContext = ({
  value,
  recordId,
  onEscape,
  onEnter,
  onClickOutside,
}: DateFieldInputWithContextProps) => {
  const setHotkeyScope = useSetHotkeyScope();

  useEffect(() => {
    setHotkeyScope(DEFAULT_CELL_SCOPE.scope);
  }, [setHotkeyScope]);

  return (
    <RecordFieldComponentInstanceContext.Provider
      value={{
        instanceId: getRecordFieldInputId(
          recordId ?? '',
          'Date',
          'record-table-cell',
        ),
      }}
    >
      <FieldContext.Provider
        value={{
          fieldDefinition: {
            fieldMetadataId: 'date',
            defaultValue: null,
            label: 'Date',
            type: FieldMetadataType.DATE_TIME,
            iconName: 'IconCalendarEvent',
            metadata: {
              fieldName: 'Date',
              objectMetadataNameSingular: 'person',
            },
          },
          recordId: '123',
          isLabelIdentifier: false,
          isReadOnly: false,
        }}
      >
        <StorybookFieldInputDropdownFocusIdSetterEffect />
        <DateFieldValueSetterEffect value={value} />
        <DateFieldValueGater
          onEscape={onEscape}
          onEnter={onEnter}
          onClickOutside={onClickOutside}
        />
      </FieldContext.Provider>
      <div data-testid="data-field-input-click-outside-div"></div>
    </RecordFieldComponentInstanceContext.Provider>
  );
};

const escapeJestFn =  () => console.log('fn');
const enterJestFn =  () => console.log('fn');
const clickOutsideJestFn =  () => console.log('fn');

const meta: Meta = {
  title: 'Refactor UI/Data/Field/Input/DateTimeFieldInput',
  component: DateFieldInputWithContext,
  args: {
    value: formattedDate,
    onEscape: escapeJestFn,
    onEnter: enterJestFn,
    onClickOutside: clickOutsideJestFn,
  },
  argTypes: {
    onEscape: {
      control: false,
    },
    onEnter: {
      control: false,
    },
    onClickOutside: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof DateFieldInputWithContext>;

export const Default: Story = {

};

export const ClickOutside: Story = {

};

export const Escape: Story = {

};

export const Enter: Story = {

};
