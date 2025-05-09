import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import { useEffect, useState } from 'react';

import { useSetHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/hooks/useSetHotkeyScope';

import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { RecordFieldComponentInstanceContext } from '@twenty-modules/object-record/record-field/states/contexts/RecordFieldComponentInstanceContext';
import { DEFAULT_CELL_SCOPE } from '@twenty-modules/object-record/record-table/record-table-cell/hooks/useOpenRecordTableCellV2';
import { Decorator, Meta, StoryObj } from '@storybook/react';
import { FieldMetadataType } from '@twenty-ui/front/generated/graphql';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';
import { useTextField } from '../../../hooks/useTextField';
import { TextFieldInput, TextFieldInputProps } from '../TextFieldInput';

const TextFieldValueSetterEffect = ({ value }: { value: string }) => {
  const { setFieldValue } = useTextField();

  useEffect(() => {
    setFieldValue(value);
  }, [setFieldValue, value]);

  return <></>;
};

type TextFieldInputWithContextProps = TextFieldInputProps & {
  value: string;
  recordId?: string;
};

const TextFieldInputWithContext = ({
  recordId,
  value,
  onEnter,
  onEscape,
  onClickOutside,
  onTab,
  onShiftTab,
}: TextFieldInputWithContextProps) => {
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
        instanceId: 'record-field-component-instance-id',
      }}
    >
      <FieldContext.Provider
        value={{
          recordId: recordId ?? '123',
          fieldDefinition: {
            fieldMetadataId: 'text',
            label: 'Text',
            type: FieldMetadataType.TEXT,
            iconName: 'IconText',
            metadata: {
              fieldName: 'text',
              objectMetadataNameSingular: 'person',
              placeHolder: 'Enter text',
            },
          },
          isLabelIdentifier: false,
          isReadOnly: false,
        }}
      >
        <TextFieldValueSetterEffect value={value} />
        <TextFieldInput
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

const enterJestFn = () => console.log('fn');
const escapeJestfn = () => console.log('fn');
const clickOutsideJestFn = () => console.log('fn');
const tabJestFn = () => console.log('fn');
const shiftTabJestFn = () => console.log('fn');

const clearMocksDecorator: Decorator = (Story, context) => {
  if (context.parameters.clearMocks === true) {
  }
  return <Story />;
};

const meta: Meta = {
  title: 'Refactor UI/Data/Field/Input/TextFieldInput',
  component: TextFieldInputWithContext,
  args: {
    value: 'text',
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

type Story = StoryObj<typeof TextFieldInputWithContext>;

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
