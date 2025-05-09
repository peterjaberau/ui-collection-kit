import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { CurrencyCode } from '@twenty-modules/object-record/record-field/types/CurrencyCode';
import { FieldCurrencyValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { currencyFieldDefaultValueSchema } from '@twenty-modules/object-record/record-field/validation-schemas/currencyFieldDefaultValueSchema';
import { getSettingsFieldTypeConfig } from '@twenty-modules/settings/data-model/utils/getSettingsFieldTypeConfig';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';
import { stripSimpleQuotesFromString } from '@twenty-ui/front/utils/string/stripSimpleQuotesFromString';

export const getCurrencyFieldPreviewValue = ({
  fieldMetadataItem,
}: {
  fieldMetadataItem: Pick<
    FieldMetadataItem,
    'defaultValue' | 'options' | 'type'
  >;
}): FieldCurrencyValue | null => {
  if (fieldMetadataItem.type !== FieldMetadataType.CURRENCY) return null;

  const currencyFieldTypeConfig = getSettingsFieldTypeConfig(
    FieldMetadataType.CURRENCY,
  );

  const placeholderDefaultValue = currencyFieldTypeConfig.exampleValue;

  return currencyFieldDefaultValueSchema
    .transform((value) => ({
      amountMicros: value.amountMicros || placeholderDefaultValue.amountMicros,
      currencyCode: stripSimpleQuotesFromString(
        value.currencyCode,
      ) as CurrencyCode,
    }))
    .catch(placeholderDefaultValue)
    .parse(fieldMetadataItem.defaultValue);
};
