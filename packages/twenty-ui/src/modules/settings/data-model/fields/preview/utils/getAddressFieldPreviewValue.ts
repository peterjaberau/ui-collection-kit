import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { FieldAddressValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { getSettingsFieldTypeConfig } from '@twenty-modules/settings/data-model/utils/getSettingsFieldTypeConfig';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';
import { stripSimpleQuotesFromString } from '@twenty-ui/front/utils/string/stripSimpleQuotesFromString';

export const getAddressFieldPreviewValue = ({
  fieldMetadataItem,
}: {
  fieldMetadataItem: Pick<
    FieldMetadataItem,
    'defaultValue' | 'options' | 'type'
  >;
}): FieldAddressValue | null => {
  if (fieldMetadataItem.type !== FieldMetadataType.ADDRESS) return null;

  const addressFieldTypeConfig = getSettingsFieldTypeConfig(
    FieldMetadataType.ADDRESS,
  );

  const placeholderDefaultValue = addressFieldTypeConfig.exampleValue;

  const addressCountry =
    fieldMetadataItem.defaultValue?.addressCountry &&
    fieldMetadataItem.defaultValue.addressCountry !== ''
      ? stripSimpleQuotesFromString(
          fieldMetadataItem.defaultValue?.addressCountry,
        )
      : null;
  return {
    ...placeholderDefaultValue,
    addressCountry: addressCountry,
  };
};
