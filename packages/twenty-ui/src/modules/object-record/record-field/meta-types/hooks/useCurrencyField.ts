import { useContext } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { usePersistField } from '@twenty-modules/object-record/record-field/hooks/usePersistField';
import { useRecordFieldInput } from '@twenty-modules/object-record/record-field/hooks/useRecordFieldInput';
import { FieldCurrencyValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { assertFieldMetadata } from '@twenty-modules/object-record/record-field/types/guards/assertFieldMetadata';
import { isFieldCurrency } from '@twenty-modules/object-record/record-field/types/guards/isFieldCurrency';
import { isFieldCurrencyValue } from '@twenty-modules/object-record/record-field/types/guards/isFieldCurrencyValue';
import { recordStoreFamilySelector } from '@twenty-modules/object-record/record-store/states/selectors/recordStoreFamilySelector';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';
import { convertCurrencyAmountToCurrencyMicros } from '@twenty-ui/front/utils/convertCurrencyToCurrencyMicros';

export const useCurrencyField = () => {
  const { recordId, fieldDefinition } = useContext(FieldContext);

  assertFieldMetadata(
    FieldMetadataType.CURRENCY,
    isFieldCurrency,
    fieldDefinition,
  );

  const fieldName = fieldDefinition.metadata.fieldName;

  const [fieldValue, setFieldValue] = useRecoilState<FieldCurrencyValue>(
    recordStoreFamilySelector({
      recordId,
      fieldName: fieldName,
    }),
  );

  const persistField = usePersistField();

  const persistCurrencyField = ({
    amountText,
    currencyCode,
  }: {
    amountText: string;
    currencyCode: string;
  }) => {
    const amount = parseFloat(amountText);

    const newCurrencyValue = {
      amountMicros: isNaN(amount)
        ? null
        : convertCurrencyAmountToCurrencyMicros(amount),
      currencyCode,
    };

    if (!isFieldCurrencyValue(newCurrencyValue)) {
      return;
    }
    persistField(newCurrencyValue);
  };

  const { setDraftValue, getDraftValueSelector } =
    useRecordFieldInput<FieldCurrencyValue>();

  const draftValue = useRecoilValue(getDraftValueSelector());

  const defaultValue = fieldDefinition.defaultValue;

  return {
    fieldDefinition,
    fieldValue,
    draftValue,
    setDraftValue,
    setFieldValue,
    persistCurrencyField,
    defaultValue,
  };
};
