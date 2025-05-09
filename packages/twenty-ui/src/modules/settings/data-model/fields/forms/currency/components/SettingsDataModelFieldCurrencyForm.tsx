import { Controller, useFormContext } from 'react-hook-form';
import { z } from 'zod';

import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { currencyFieldDefaultValueSchema } from '@twenty-modules/object-record/record-field/validation-schemas/currencyFieldDefaultValueSchema';
import { SettingsOptionCardContentSelect } from '@twenty-modules/settings/components/SettingsOptions/SettingsOptionCardContentSelect';
import { CURRENCIES } from '@twenty-modules/settings/data-model/constants/Currencies';
import { useCurrencySettingsFormInitialValues } from '@twenty-modules/settings/data-model/fields/forms/currency/hooks/useCurrencySettingsFormInitialValues';
import { Select } from '@twenty-modules/ui/input/components/Select';
import { useLingui } from '@lingui/react/macro';
import { IconCurrencyDollar } from '@twenty-ui/display';

export const settingsDataModelFieldCurrencyFormSchema = z.object({
  defaultValue: currencyFieldDefaultValueSchema,
});

export type SettingsDataModelFieldCurrencyFormValues = z.infer<
  typeof settingsDataModelFieldCurrencyFormSchema
>;

type SettingsDataModelFieldCurrencyFormProps = {
  disabled?: boolean;
  fieldMetadataItem: Pick<FieldMetadataItem, 'defaultValue'>;
};

export const SettingsDataModelFieldCurrencyForm = ({
  disabled,
  fieldMetadataItem,
}: SettingsDataModelFieldCurrencyFormProps) => {
  const { t } = useLingui();
  const { control } =
    useFormContext<SettingsDataModelFieldCurrencyFormValues>();

  const { initialAmountMicrosValue, initialCurrencyCodeValue } =
    useCurrencySettingsFormInitialValues({ fieldMetadataItem });

  return (
    <>
      <Controller
        name="defaultValue.amountMicros"
        control={control}
        defaultValue={initialAmountMicrosValue}
        render={() => <></>}
      />
      <Controller
        name="defaultValue.currencyCode"
        control={control}
        defaultValue={initialCurrencyCodeValue}
        render={({ field: { onChange, value } }) => (
          <SettingsOptionCardContentSelect
            Icon={IconCurrencyDollar}
            title={t`Default Value`}
            description={t`Choose the default currency that will apply`}
          >
            <Select<string>
              dropdownWidth={220}
              value={value}
              onChange={onChange}
              disabled={disabled}
              dropdownId="object-field-default-value-select-currency"
              options={CURRENCIES}
              selectSizeVariant="small"
              withSearchInput={true}
            />
          </SettingsOptionCardContentSelect>
        )}
      />
    </>
  );
};
