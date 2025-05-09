import { FormFieldInputContainer } from '@twenty-modules/object-record/record-field/form-types/components/FormFieldInputContainer';
import { FormNestedFieldInputContainer } from '@twenty-modules/object-record/record-field/form-types/components/FormNestedFieldInputContainer';
import { FormTextFieldInput } from '@twenty-modules/object-record/record-field/form-types/components/FormTextFieldInput';
import { VariablePickerComponent } from '@twenty-modules/object-record/record-field/form-types/types/VariablePickerComponent';
import { FieldEmailsValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { InputLabel } from '@twenty-modules/ui/input/components/InputLabel';

type FormEmailsFieldInputProps = {
  label?: string;
  defaultValue?: FieldEmailsValue;
  onChange: (value: FieldEmailsValue) => void;
  VariablePicker?: VariablePickerComponent;
  readonly?: boolean;
};

export const FormEmailsFieldInput = ({
  label,
  defaultValue,
  onChange,
  readonly,
  VariablePicker,
}: FormEmailsFieldInputProps) => {
  const handleChange = (email: string) => {
    onChange({
      primaryEmail: email,
      additionalEmails: [],
    });
  };

  return (
    <FormFieldInputContainer>
      {label ? <InputLabel>{label}</InputLabel> : null}
      <FormNestedFieldInputContainer>
        <FormTextFieldInput
          label="Primary Email"
          defaultValue={defaultValue?.primaryEmail}
          onChange={handleChange}
          placeholder={'Primary Email'}
          readonly={readonly}
          VariablePicker={VariablePicker}
        />
      </FormNestedFieldInputContainer>
    </FormFieldInputContainer>
  );
};
