import { FormFieldInputContainer } from '@twenty-modules/object-record/record-field/form-types/components/FormFieldInputContainer';
import { FormFieldInputInnerContainer } from '@twenty-modules/object-record/record-field/form-types/components/FormFieldInputInnerContainer';
import { FormFieldInputRowContainer } from '@twenty-modules/object-record/record-field/form-types/components/FormFieldInputRowContainer';
import { VariableChipStandalone } from '@twenty-modules/object-record/record-field/form-types/components/VariableChipStandalone';
import { VariablePickerComponent } from '@twenty-modules/object-record/record-field/form-types/types/VariablePickerComponent';
import { InlineCellHotkeyScope } from '@twenty-modules/object-record/record-inline-cell/types/InlineCellHotkeyScope';
import { InputLabel } from '@twenty-modules/ui/input/components/InputLabel';
import { Select } from '@twenty-modules/ui/input/components/Select';
import { usePreviousHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/hooks/usePreviousHotkeyScope';
import { useScopedHotkeys } from '@twenty-modules/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { isStandaloneVariableString } from '@twenty-modules/workflow/utils/isStandaloneVariableString';
import { useId, useState } from 'react';
import { Key } from 'ts-key-enum';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { SelectOption } from '@twenty-ui/input';

type FormSelectFieldInputProps = {
  label?: string;
  defaultValue: string | undefined;
  onChange: (value: string | null) => void;
  VariablePicker?: VariablePickerComponent;
  options: SelectOption[];
  readonly?: boolean;
};

export const FormSelectFieldInput = ({
  label,
  defaultValue,
  onChange,
  VariablePicker,
  options,
  readonly,
}: FormSelectFieldInputProps) => {
  const inputId = useId();

  const hotkeyScope = InlineCellHotkeyScope.InlineCell;

  const { goBackToPreviousHotkeyScope } = usePreviousHotkeyScope();

  const [draftValue, setDraftValue] = useState<
    | {
        type: 'static';
        value: string;
        editingMode: 'view' | 'edit';
      }
    | {
        type: 'variable';
        value: string;
      }
  >(
    isStandaloneVariableString(defaultValue)
      ? {
          type: 'variable',
          value: defaultValue,
        }
      : {
          type: 'static',
          value: isDefined(defaultValue) ? String(defaultValue) : '',
          editingMode: 'view',
        },
  );

  const onSelect = (option: string) => {
    setDraftValue({
      type: 'static',
      value: option,
      editingMode: 'view',
    });

    goBackToPreviousHotkeyScope();

    onChange(option);
  };

  const onCancel = () => {
    if (draftValue.type !== 'static') {
      throw new Error('Can only be called when editing a static value');
    }

    setDraftValue({
      ...draftValue,
      editingMode: 'view',
    });

    goBackToPreviousHotkeyScope();
  };

  const selectedOption = options.find(
    (option) => option.value === draftValue.value,
  );

  const handleUnlinkVariable = () => {
    setDraftValue({
      type: 'static',
      value: '',
      editingMode: 'view',
    });

    onChange(null);
  };

  const handleVariableTagInsert = (variableName: string) => {
    setDraftValue({
      type: 'variable',
      value: variableName,
    });

    onChange(variableName);
  };

  useScopedHotkeys(
    Key.Escape,
    () => {
      onCancel();
    },
    hotkeyScope,
    [onCancel],
  );

  return (
    <FormFieldInputContainer>
      {label ? <InputLabel>{label}</InputLabel> : null}

      <FormFieldInputRowContainer>
        {draftValue.type === 'static' ? (
          <Select
            dropdownId={`${inputId}-select-display`}
            options={options}
            value={selectedOption?.value}
            onChange={onSelect}
            fullWidth
            hasRightElement={isDefined(VariablePicker) && !readonly}
            withSearchInput
            disabled={readonly}
          />
        ) : (
          <FormFieldInputInnerContainer
            hasRightElement={isDefined(VariablePicker) && !readonly}
          >
            <VariableChipStandalone
              rawVariableName={draftValue.value}
              onRemove={readonly ? undefined : handleUnlinkVariable}
            />
          </FormFieldInputInnerContainer>
        )}

        {isDefined(VariablePicker) && !readonly && (
          <VariablePicker
            inputId={inputId}
            onVariableSelect={handleVariableTagInsert}
          />
        )}
      </FormFieldInputRowContainer>
    </FormFieldInputContainer>
  );
};
