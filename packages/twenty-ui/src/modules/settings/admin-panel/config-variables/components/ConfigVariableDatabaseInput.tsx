import { Select } from '@twenty-modules/ui/input/components/Select';
import { SelectControl } from '@twenty-modules/ui/input/components/SelectControl';
import { TextArea } from '@twenty-modules/ui/input/components/TextArea';
import { TextInputV2 } from '@twenty-modules/ui/input/components/TextInputV2';
import { SelectHotkeyScope } from '@twenty-modules/ui/input/types/SelectHotkeyScope';
import { Dropdown } from '@twenty-modules/ui/layout/dropdown/components/Dropdown';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { ConfigVariableValue } from '@ui-collection-kit/twenty-shared/src/types';
import { MenuItemMultiSelect } from '@twenty-ui/navigation';
import { ConfigVariableType } from '@twenty-ui/front/generated/graphql';
import { ConfigVariableOptions } from '../types/ConfigVariableOptions';

type ConfigVariableDatabaseInputProps = {
  label: string;
  value: ConfigVariableValue;
  onChange: (value: string | number | boolean | string[] | null) => void;
  type: ConfigVariableType;
  options?: ConfigVariableOptions;
  disabled?: boolean;
  placeholder?: string;
};

export const ConfigVariableDatabaseInput = ({
  label,
  value,
  onChange,
  type,
  options,
  disabled,
  placeholder,
}: ConfigVariableDatabaseInputProps) => {
  const selectOptions =
    options && Array.isArray(options)
      ? options.map((option) => ({
          value: String(option),
          label: String(option),
        }))
      : [];

  const booleanOptions = [
    { value: 'true', label: 'true' },
    { value: 'false', label: 'false' },
  ];

  const isValueSelected = (optionValue: string) => {
    if (!Array.isArray(value)) return false;
    return value.includes(optionValue);
  };

  const handleMultiSelectChange = (optionValue: string) => {
    if (!Array.isArray(value)) return;

    let newValues = [...value];
    if (isValueSelected(optionValue)) {
      newValues = newValues.filter((val) => val !== optionValue);
    } else {
      newValues.push(optionValue);
    }
    onChange(newValues);
  };

  switch (type) {
    case ConfigVariableType.BOOLEAN:
      return (
        <Select
          label={label}
          value={String(value ?? '')}
          onChange={(newValue: string) => onChange(newValue === 'true')}
          disabled={disabled}
          options={booleanOptions}
          dropdownId="config-variable-boolean-select"
          fullWidth
        />
      );

    case ConfigVariableType.NUMBER:
      return (
        <TextInputV2
          label={label}
          value={value !== null && value !== undefined ? String(value) : ''}
          onChange={(text) => {
            const num = Number(text);
            onChange(isNaN(num) ? text : num);
          }}
          disabled={disabled}
          placeholder={placeholder}
          type="number"
          fullWidth
        />
      );

    case ConfigVariableType.ARRAY:
      return (
        <>
          {options && Array.isArray(options) ? (
            <Dropdown
              dropdownId="config-variable-array-dropdown"
              dropdownHotkeyScope={{ scope: SelectHotkeyScope.Select }}
              dropdownPlacement="bottom-start"
              dropdownOffset={{
                y: 8,
              }}
              clickableComponent={
                <SelectControl
                  selectedOption={{
                    value: '',
                    label:
                      Array.isArray(value) && value.length > 0
                        ? value.join(', ')
                        : 'Select options',
                  }}
                  isDisabled={disabled}
                  hasRightElement={false}
                  selectSizeVariant="default"
                />
              }
              dropdownComponents={
                <DropdownMenuItemsContainer>
                  {selectOptions.map((option) => (
                    <MenuItemMultiSelect
                      key={option.value}
                      text={option.label}
                      selected={isValueSelected(option.value)}
                      className="config-variable-array-menu-item-multi-select"
                      onSelectChange={() =>
                        handleMultiSelectChange(option.value)
                      }
                    />
                  ))}
                </DropdownMenuItemsContainer>
              }
            />
          ) : (
            <TextArea
              label={label}
              value={
                Array.isArray(value)
                  ? JSON.stringify(value)
                  : String(value ?? '')
              }
              onChange={(text) => {
                try {
                  const arr = JSON.parse(text);
                  onChange(Array.isArray(arr) ? arr : value);
                } catch {
                  onChange(text);
                }
              }}
              disabled={disabled}
              placeholder={placeholder || 'Enter JSON array'}
            />
          )}
        </>
      );

    case ConfigVariableType.ENUM:
      return (
        <Select
          label={label}
          value={String(value ?? '')}
          onChange={(newValue: string) => onChange(newValue)}
          disabled={disabled}
          options={selectOptions}
          dropdownId="config-variable-enum-select"
          fullWidth
        />
      );

    case ConfigVariableType.STRING:
      return (
        <TextInputV2
          label={label}
          value={
            typeof value === 'string'
              ? value
              : value !== null && value !== undefined
                ? JSON.stringify(value)
                : ''
          }
          onChange={(text) => onChange(text)}
          disabled={disabled}
          placeholder={placeholder || 'Enter value'}
          fullWidth
        />
      );

    default:
      throw new Error(`Unsupported type: ${type}`);
  }
};
