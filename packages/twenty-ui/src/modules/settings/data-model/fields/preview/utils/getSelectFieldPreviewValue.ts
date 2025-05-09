import { isNonEmptyString } from '@sniptt/guards';

import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { FieldSelectValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { selectFieldDefaultValueSchema } from '@twenty-modules/object-record/record-field/validation-schemas/selectFieldDefaultValueSchema';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';
import { stripSimpleQuotesFromString } from '@twenty-ui/front/utils/string/stripSimpleQuotesFromString';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getSelectFieldPreviewValue = ({
  fieldMetadataItem,
}: {
  fieldMetadataItem: Pick<
    FieldMetadataItem,
    'defaultValue' | 'options' | 'type'
  >;
}): FieldSelectValue => {
  if (
    fieldMetadataItem.type !== FieldMetadataType.SELECT ||
    !fieldMetadataItem.options?.length
  ) {
    return null;
  }

  const firstOptionValue = fieldMetadataItem.options[0].value;

  return selectFieldDefaultValueSchema(fieldMetadataItem.options)
    .refine(isDefined)
    .transform(stripSimpleQuotesFromString)
    .refine(isNonEmptyString)
    .catch(firstOptionValue)
    .parse(fieldMetadataItem.defaultValue);
};
