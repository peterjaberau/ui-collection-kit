import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import { useEffect } from 'react';

import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { RecordFieldComponentInstanceContext } from '@twenty-modules/object-record/record-field/states/contexts/RecordFieldComponentInstanceContext';
import { DEFAULT_CELL_SCOPE } from '@twenty-modules/object-record/record-table/record-table-cell/hooks/useOpenRecordTableCellV2';
import { useSetHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/hooks/useSetHotkeyScope';
import { Decorator, Meta, StoryObj } from '@storybook/react';
import { FieldMetadataType } from '@twenty-ui/front/generated/graphql';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { ObjectMetadataItemsDecorator } from '@twenty-ui/front/testing/decorators/ObjectMetadataItemsDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';
import { RichTextFieldInput } from '../RichTextFieldInput';

const clickOutsideJestFn = () => console.log('fn');
const escapeJestFn = () => console.log('fn');

type RichTextFieldInputWithContextProps = {
  targetableObjectId?: string;
};

const clearMocksDecorator: Decorator = (Story, context) => {
  if (context.parameters.clearMocks !== false) {
  }
  return <Story />;
};

const RichTextFieldInputWithContext = ({
  targetableObjectId = 'test-id',
}: RichTextFieldInputWithContextProps) => {
  const setHotKeyScope = useSetHotkeyScope();

  useEffect(() => {
    setHotKeyScope(DEFAULT_CELL_SCOPE.scope);
  }, [setHotKeyScope]);

  return (
    <RecordFieldComponentInstanceContext.Provider
      value={{
        instanceId: 'record-field-component-instance-id',
      }}
    >
      <FieldContext.Provider
        value={{
          recordId: targetableObjectId,
          fieldDefinition: {
            fieldMetadataId: 'richText',
            label: 'Rich Text',
            type: FieldMetadataType.RICH_TEXT,
            iconName: 'IconRichText',
            metadata: {
              fieldName: 'richText',
              objectMetadataNameSingular: 'note',
            },
          },
          isLabelIdentifier: false,
          isReadOnly: false,
        }}
      >
        <RichTextFieldInput
          targetableObject={{
            id: targetableObjectId,
            targetObjectNameSingular: CoreObjectNameSingular.Note,
          }}
        />
      </FieldContext.Provider>
      <div data-testid="click-outside-element" />
    </RecordFieldComponentInstanceContext.Provider>
  );
};

const meta: Meta = {
  title: 'Refactor UI/Data/Field/Input/RichTextFieldInput',
  component: RichTextFieldInputWithContext,
  args: {
    targetableObjectId: 'test-id',
    onClickOutside: clickOutsideJestFn,
    onEscape: escapeJestFn,
  },
  argTypes: {
    onClickOutside: { control: false },
    onEscape: { control: false },
  },
  decorators: [
    clearMocksDecorator,
    SnackBarDecorator,
    I18nFrontDecorator,
    ObjectMetadataItemsDecorator,
  ],
  parameters: {
    clearMocks: true,
  },
};

export default meta;

type Story = StoryObj<typeof RichTextFieldInputWithContext>;

export const Default: Story = {};

export const Escape: Story = {

};

export const ClickOutside: Story = {

};
