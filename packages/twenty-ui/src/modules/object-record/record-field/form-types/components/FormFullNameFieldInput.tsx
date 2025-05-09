import { FormFieldInputContainer } from '@twenty-modules/object-record/record-field/form-types/components/FormFieldInputContainer';
import { FormNestedFieldInputContainer } from '@twenty-modules/object-record/record-field/form-types/components/FormNestedFieldInputContainer';
import { FormTextFieldInput } from '@twenty-modules/object-record/record-field/form-types/components/FormTextFieldInput';
import { VariablePickerComponent } from '@twenty-modules/object-record/record-field/form-types/types/VariablePickerComponent';
import { FIRST_NAME_PLACEHOLDER_WITH_SPECIAL_CHARACTER_TO_AVOID_PASSWORD_MANAGERS } from '@twenty-modules/object-record/record-field/meta-types/input/constants/FirstNamePlaceholder';
import { LAST_NAME_PLACEHOLDER_WITH_SPECIAL_CHARACTER_TO_AVOID_PASSWORD_MANAGERS } from '@twenty-modules/object-record/record-field/meta-types/input/constants/LastNamePlaceholder';
import { FieldFullNameValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { InputLabel } from '@twenty-modules/ui/input/components/InputLabel';

type FormFullNameFieldInputProps = {
  label?: string;
  defaultValue: FieldFullNameValue | undefined;
  onChange: (value: FieldFullNameValue) => void;
  VariablePicker?: VariablePickerComponent;
  readonly?: boolean;
};

export const FormFullNameFieldInput = ({
  label,
  defaultValue,
  onChange,
  readonly,
  VariablePicker,
}: FormFullNameFieldInputProps) => {
  const handleFirstNameChange = (newText: string) => {
    onChange({
      lastName: defaultValue?.lastName ?? '',
      firstName: newText,
    });
  };

  const handleLastNameChange = (newText: string) => {
    onChange({
      firstName: defaultValue?.firstName ?? '',
      lastName: newText,
    });
  };

  return (
    <FormFieldInputContainer>
      {label ? <InputLabel>{label}</InputLabel> : null}
      <FormNestedFieldInputContainer>
        <FormTextFieldInput
          label="First Name"
          defaultValue={defaultValue?.firstName}
          onChange={handleFirstNameChange}
          placeholder={
            FIRST_NAME_PLACEHOLDER_WITH_SPECIAL_CHARACTER_TO_AVOID_PASSWORD_MANAGERS
          }
          readonly={readonly}
          VariablePicker={VariablePicker}
        />
        <FormTextFieldInput
          label="Last Name"
          defaultValue={defaultValue?.lastName}
          onChange={handleLastNameChange}
          placeholder={
            LAST_NAME_PLACEHOLDER_WITH_SPECIAL_CHARACTER_TO_AVOID_PASSWORD_MANAGERS
          }
          readonly={readonly}
          VariablePicker={VariablePicker}
        />
      </FormNestedFieldInputContainer>
    </FormFieldInputContainer>
  );
};
