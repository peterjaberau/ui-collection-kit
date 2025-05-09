import { useFormContext } from 'react-hook-form';

import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { CurrencyCode } from '@twenty-modules/object-record/record-field/types/CurrencyCode';
import { SettingsDataModelFieldCurrencyFormValues } from '@twenty-modules/settings/data-model/fields/forms/currency/components/SettingsDataModelFieldCurrencyForm';
import { applySimpleQuotesToString } from '@twenty-ui/front/utils/string/applySimpleQuotesToString';

export const useCurrencySettingsFormInitialValues = ({
  fieldMetadataItem,
}: {
  fieldMetadataItem?: Pick<FieldMetadataItem, 'defaultValue'>;
}) => {
  const initialAmountMicrosValue =
    (fieldMetadataItem?.defaultValue?.amountMicros as number | null) ?? null;
  const initialCurrencyCodeValue =
    fieldMetadataItem?.defaultValue?.currencyCode ??
    applySimpleQuotesToString(CurrencyCode.USD);
  const initialDefaultValue = {
    amountMicros: initialAmountMicrosValue,
    currencyCode: initialCurrencyCodeValue,
  };

  const { resetField } =
    useFormContext<SettingsDataModelFieldCurrencyFormValues>();

  const resetDefaultValueField = () =>
    resetField('defaultValue', { defaultValue: initialDefaultValue });

  return {
    initialAmountMicrosValue,
    initialCurrencyCodeValue,
    initialDefaultValue,
    resetDefaultValueField,
  };
};
