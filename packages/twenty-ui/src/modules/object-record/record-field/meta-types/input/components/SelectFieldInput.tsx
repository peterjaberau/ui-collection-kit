import { useClearField } from '@twenty-modules/object-record/record-field/hooks/useClearField';
import { useSelectField } from '@twenty-modules/object-record/record-field/meta-types/hooks/useSelectField';
import { SELECT_FIELD_INPUT_SELECTABLE_LIST_COMPONENT_INSTANCE_ID } from '@twenty-modules/object-record/record-field/meta-types/input/constants/SelectFieldInputSelectableListComponentInstanceId';
import { FieldInputEvent } from '@twenty-modules/object-record/record-field/types/FieldInputEvent';
import { DEFAULT_CELL_SCOPE } from '@twenty-modules/object-record/record-table/record-table-cell/hooks/useOpenRecordTableCellV2';
import { SelectInput } from '@twenty-modules/ui/field/input/components/SelectInput';
import { useSelectableList } from '@twenty-modules/ui/layout/selectable-list/hooks/useSelectableList';
import { useScopedHotkeys } from '@twenty-modules/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { useState } from 'react';
import { Key } from 'ts-key-enum';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { SelectOption } from '@twenty-ui/input';

type SelectFieldInputProps = {
  onSubmit?: FieldInputEvent;
  onCancel?: () => void;
};

export const SelectFieldInput = ({
  onSubmit,
  onCancel,
}: SelectFieldInputProps) => {
  const { persistField, fieldDefinition, fieldValue } = useSelectField();

  const [filteredOptions, setFilteredOptions] = useState<SelectOption[]>([]);

  const { resetSelectedItem } = useSelectableList(
    SELECT_FIELD_INPUT_SELECTABLE_LIST_COMPONENT_INSTANCE_ID,
  );
  const clearField = useClearField();

  const selectedOption = fieldDefinition.metadata.options.find(
    (option) => option.value === fieldValue,
  );
  // handlers
  const handleClearField = () => {
    clearField();
    onCancel?.();
  };

  const handleSubmit = (option: SelectOption) => {
    onSubmit?.(() => persistField(option?.value));

    resetSelectedItem();
  };

  useScopedHotkeys(
    Key.Escape,
    () => {
      onCancel?.();
      resetSelectedItem();
    },
    DEFAULT_CELL_SCOPE.scope,
    [onCancel, resetSelectedItem],
  );

  const optionIds = [
    `No ${fieldDefinition.label}`,
    ...filteredOptions.map((option) => option.value),
  ];

  return (
    <SelectInput
      selectableListComponentInstanceId={
        SELECT_FIELD_INPUT_SELECTABLE_LIST_COMPONENT_INSTANCE_ID
      }
      selectableItemIdArray={optionIds}
      hotkeyScope={DEFAULT_CELL_SCOPE.scope}
      onEnter={(itemId) => {
        const option = filteredOptions.find(
          (option) => option.value === itemId,
        );
        if (isDefined(option)) {
          onSubmit?.(() => persistField(option.value));
          resetSelectedItem();
        }
      }}
      onOptionSelected={handleSubmit}
      options={fieldDefinition.metadata.options}
      onCancel={onCancel}
      defaultOption={selectedOption}
      onFilterChange={setFilteredOptions}
      onClear={
        fieldDefinition.metadata.isNullable ? handleClearField : undefined
      }
      clearLabel={fieldDefinition.label}
    />
  );
};
