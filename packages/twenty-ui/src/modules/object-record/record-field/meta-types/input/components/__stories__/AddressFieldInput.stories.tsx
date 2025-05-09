import { Decorator, Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import { useEffect } from 'react';

import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { useAddressField } from '@twenty-modules/object-record/record-field/meta-types/hooks/useAddressField';
import { RecordFieldComponentInstanceContext } from '@twenty-modules/object-record/record-field/states/contexts/RecordFieldComponentInstanceContext';
import { FieldAddressDraftValue } from '@twenty-modules/object-record/record-field/types/FieldInputDraftValue';
import { DEFAULT_CELL_SCOPE } from '@twenty-modules/object-record/record-table/record-table-cell/hooks/useOpenRecordTableCellV2';
import { getRecordFieldInputId } from '@twenty-modules/object-record/utils/getRecordFieldInputId';
import {
  AddressInput,
  AddressInputProps,
} from '@twenty-modules/ui/field/input/components/AddressInput';
import { useSetHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/hooks/useSetHotkeyScope';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';

const AddressValueSetterEffect = ({
  value,
}: {
  value: FieldAddressDraftValue;
}) => {
  const { setFieldValue } = useAddressField();

  useEffect(() => {
    setFieldValue(value);
  }, [setFieldValue, value]);

  return <></>;
};

type AddressInputWithContextProps = AddressInputProps & {
  value: string;
  recordId?: string;
};

const AddressInputWithContext = ({
  recordId,
  value,
  onEnter,
  onEscape,
  onClickOutside,
  onTab,
  onShiftTab,
}: AddressInputWithContextProps) => {
  const setHotKeyScope = useSetHotkeyScope();

  useEffect(() => {
    setHotKeyScope(DEFAULT_CELL_SCOPE.scope);
  }, [setHotKeyScope]);

  return (
    <div>
      <RecordFieldComponentInstanceContext.Provider
        value={{
          instanceId: getRecordFieldInputId(
            recordId ?? '',
            'Address',
            'record-table-cell',
          ),
        }}
      >
        <FieldContext.Provider
          value={{
            fieldDefinition: {
              fieldMetadataId: 'text',
              label: 'Address',
              type: FieldMetadataType.ADDRESS,
              iconName: 'IconTag',
              metadata: {
                fieldName: 'Address',
                placeHolder: 'Enter text',
                objectMetadataNameSingular: 'person',
              },
            },
            recordId: recordId ?? '123',
            isLabelIdentifier: false,
            isReadOnly: false,
          }}
        >
          <AddressValueSetterEffect value={value} />
          <AddressInput
            onEnter={onEnter}
            onEscape={onEscape}
            onClickOutside={onClickOutside}
            value={value}
            hotkeyScope={DEFAULT_CELL_SCOPE.scope}
            onTab={onTab}
            onShiftTab={onShiftTab}
          />
        </FieldContext.Provider>
        <div data-testid="data-field-input-click-outside-div" />
      </RecordFieldComponentInstanceContext.Provider>
    </div>
  );
};

const enterJestFn = () => console.log('fn');
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
  title: 'UI/Data/Field/Input/AddressFieldInput',
  component: AddressInputWithContext,
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
  decorators: [clearMocksDecorator],
  parameters: {
    clearMocks: true,
  },
};

export default meta;

type Story = StoryObj<typeof AddressInputWithContext>;

export const Default: Story = {};

export const Enter: Story = {

};
