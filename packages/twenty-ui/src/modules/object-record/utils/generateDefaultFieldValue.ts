import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { isFieldValueEmpty } from '@twenty-modules/object-record/record-field/utils/isFieldValueEmpty';
import { generateEmptyFieldValue } from '@twenty-modules/object-record/utils/generateEmptyFieldValue';
import { v4 } from 'uuid';
import { stripSimpleQuotesFromString } from '@twenty-ui/front/utils/string/stripSimpleQuotesFromString';

type GenerateEmptyFieldValueArgs = {
  fieldMetadataItem: Pick<FieldMetadataItem, 'defaultValue' | 'type'>;
};
export const generateDefaultFieldValue = ({
  fieldMetadataItem,
}: GenerateEmptyFieldValueArgs) => {
  const defaultValue = isFieldValueEmpty({
    fieldValue: fieldMetadataItem.defaultValue,
    fieldDefinition: fieldMetadataItem,
  })
    ? generateEmptyFieldValue({
        fieldMetadataItem,
      })
    : stripSimpleQuotesFromString(fieldMetadataItem.defaultValue);

  switch (defaultValue) {
    case 'uuid':
      return v4();
    case 'now':
      return new Date().toISOString();
    default:
      return defaultValue;
  }
};
