import { Decorator, Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import { useEffect, useState } from 'react';

import { useSetHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/hooks/useSetHotkeyScope';
import { FieldMetadataType } from '@twenty-ui/front/generated/graphql';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';

import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { RecordFieldComponentInstanceContext } from '@twenty-modules/object-record/record-field/states/contexts/RecordFieldComponentInstanceContext';
import { DEFAULT_CELL_SCOPE } from '@twenty-modules/object-record/record-table/record-table-cell/hooks/useOpenRecordTableCellV2';
import { getRecordFieldInputId } from '@twenty-modules/object-record/utils/getRecordFieldInputId';
import { StorybookFieldInputDropdownFocusIdSetterEffect } from '@twenty-ui/front/testing/components/StorybookFieldInputDropdownFocusIdSetterEffect';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { useNumberField } from '../../../hooks/useNumberField';
import { NumberFieldInput, NumberFieldInputProps } from '../NumberFieldInput';

const NumberFieldValueSetterEffect = ({ value }: { value: number }) => {
  const { setFieldValue } = useNumberField();

  useEffect(() => {
    setFieldValue(value);
  }, [setFieldValue, value]);

  return <></>;
};

type NumberFieldInputWithContextProps = NumberFieldInputProps & {
  value: number;
  recordId?: string;
};

const NumberFieldInputWithContext = ({
  recordId,
  value,
  onEnter,
  onEscape,
  onClickOutside,
  onTab,
  onShiftTab,
}: NumberFieldInputWithContextProps) => {
  const setHotKeyScope = useSetHotkeyScope();

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isReady) {
      setHotKeyScope(DEFAULT_CELL_SCOPE.scope);
      setIsReady(true);
    }
  }, [isReady, setHotKeyScope]);

  return (
    <RecordFieldComponentInstanceContext.Provider
      value={{
        instanceId: getRecordFieldInputId(
          recordId ?? '',
          'Number',
          'record-table-cell',
        ),
      }}
    >
      <FieldContext.Provider
        value={{
          fieldDefinition: {
            fieldMetadataId: 'number',
            label: 'Number',
            iconName: 'Icon123',
            type: FieldMetadataType.NUMBER,
            metadata: {
              fieldName: 'number',
              placeHolder: 'Enter number',
              objectMetadataNameSingular: 'person',
            },
          },
          recordId: '123',
          isLabelIdentifier: false,
          isReadOnly: false,
        }}
      >
        {isReady && <StorybookFieldInputDropdownFocusIdSetterEffect />}
        <NumberFieldValueSetterEffect value={value} />
        <NumberFieldInput
          onEnter={onEnter}
          onEscape={onEscape}
          onClickOutside={onClickOutside}
          onTab={onTab}
          onShiftTab={onShiftTab}
        />
      </FieldContext.Provider>
      {isReady && <div data-testid="is-ready-marker" />}
      <div data-testid="data-field-input-click-outside-div" />
    </RecordFieldComponentInstanceContext.Provider>
  );
};

const enterJestFn =  () => console.log('fn');
const escapeJestfn =  () => console.log('fn');
const clickOutsideJestFn =  () => console.log('fn');
const tabJestFn =  () => console.log('fn');
const shiftTabJestFn =  () => console.log('fn');

const clearMocksDecorator: Decorator = (Story, context) => {
  if (context.parameters.clearMocks === true) {
  }
  return <Story />;
};

const meta: Meta = {
  title: 'Refactor UI/Data/Field/Input/NumberFieldInput',
  component: NumberFieldInputWithContext,
  args: {
    value: 1000,
    isPositive: true,
    onEnter: enterJestFn,
    onEscape: escapeJestfn,
    onClickOutside: clickOutsideJestFn,
    onTab: tabJestFn,
    onShiftTab: shiftTabJestFn,
  },
  argTypes: {
    onEnter: { control: false },
    onEscape: { control: false },
    onClickOutside: { control: false },
    onTab: { control: false },
    onShiftTab: { control: false },
  },
  decorators: [clearMocksDecorator, SnackBarDecorator, I18nFrontDecorator],
  parameters: {
    clearMocks: true,
  },
};

export default meta;

type Story = StoryObj<typeof NumberFieldInputWithContext>;

export const Default: Story = {};

export const Enter: Story = {

};

export const Escape: Story = {

};

export const ClickOutside: Story = {

};

export const Tab: Story = {

};

export const ShiftTab: Story = {

};
