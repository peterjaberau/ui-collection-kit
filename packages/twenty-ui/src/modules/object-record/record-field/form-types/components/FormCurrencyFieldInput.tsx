import { FormFieldInputContainer } from '@twenty-modules/object-record/record-field/form-types/components/FormFieldInputContainer';
import { FormNestedFieldInputContainer } from '@twenty-modules/object-record/record-field/form-types/components/FormNestedFieldInputContainer';
import { FormNumberFieldInput } from '@twenty-modules/object-record/record-field/form-types/components/FormNumberFieldInput';
import { FormSelectFieldInput } from '@twenty-modules/object-record/record-field/form-types/components/FormSelectFieldInput';
import { VariablePickerComponent } from '@twenty-modules/object-record/record-field/form-types/types/VariablePickerComponent';
import { CurrencyCode } from '@twenty-modules/object-record/record-field/types/CurrencyCode';
import { FormFieldCurrencyValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { CURRENCIES } from '@twenty-modules/settings/data-model/constants/Currencies';
import { InputLabel } from '@twenty-modules/ui/input/components/InputLabel';
import { useMemo } from 'react';
import { IconCircleOff } from '@twenty-ui/display';

type FormCurrencyFieldInputProps = {
  label?: string;
  defaultValue?: FormFieldCurrencyValue | null;
  onChange: (value: FormFieldCurrencyValue) => void;
  VariablePicker?: VariablePickerComponent;
  readonly?: boolean;
};

export const FormCurrencyFieldInput = ({
  label,
  defaultValue,
  onChange,
  VariablePicker,
  readonly,
}: FormCurrencyFieldInputProps) => {
  const currencies = useMemo(() => {
    return [
      {
        label: 'No currency',
        value: '',
        Icon: IconCircleOff,
      },
      ...CURRENCIES,
    ];
  }, []);

  const handleAmountMicrosChange = (
    newAmountMicros: string | number | null,
  ) => {
    onChange({
      currencyCode: defaultValue?.currencyCode ?? null,
      amountMicros: newAmountMicros ?? null,
    });
  };

  const handleCurrencyCodeChange = (newCurrencyCode: string | null) => {
    onChange({
      currencyCode: (newCurrencyCode as CurrencyCode) ?? null,
      amountMicros: defaultValue?.amountMicros ?? null,
    });
  };

  return (
    <FormFieldInputContainer>
      {label ? <InputLabel>{label}</InputLabel> : null}
      <FormNestedFieldInputContainer>
        <FormSelectFieldInput
          label="Currency Code"
          defaultValue={defaultValue?.currencyCode ?? ''}
          onChange={handleCurrencyCodeChange}
          options={currencies}
          VariablePicker={VariablePicker}
          readonly={readonly}
        />
        <FormNumberFieldInput
          label="Amount Micros"
          defaultValue={defaultValue?.amountMicros ?? ''}
          onChange={handleAmountMicrosChange}
          VariablePicker={VariablePicker}
          placeholder="Set 3210000 for $3.21"
          readonly={readonly}
        />
      </FormNestedFieldInputContainer>
    </FormFieldInputContainer>
  );
};
