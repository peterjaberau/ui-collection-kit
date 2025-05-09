import { isNonEmptyArray } from '@apollo/client/utilities';
import { isNonEmptyString } from '@sniptt/guards';

import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { FieldMultiSelectValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { multiSelectFieldDefaultValueSchema } from '@twenty-modules/object-record/record-field/validation-schemas/multiSelectFieldDefaultValueSchema';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';
import { stripSimpleQuotesFromString } from '@twenty-ui/front/utils/string/stripSimpleQuotesFromString';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getMultiSelectFieldPreviewValue = ({
  fieldMetadataItem,
}: {
  fieldMetadataItem: Pick<
    FieldMetadataItem,
    'defaultValue' | 'options' | 'type'
  >;
}): FieldMultiSelectValue => {
  if (
    fieldMetadataItem.type !== FieldMetadataType.MULTI_SELECT ||
    !fieldMetadataItem.options?.length
  ) {
    return null;
  }

  const allOptionValues = fieldMetadataItem.options.map(({ value }) => value);

  return multiSelectFieldDefaultValueSchema(fieldMetadataItem.options)
    .refine(isDefined)
    .transform((value) =>
      value.map(stripSimpleQuotesFromString).filter(isNonEmptyString),
    )
    .refine(isNonEmptyArray)
    .catch(allOptionValues)
    .parse(fieldMetadataItem.defaultValue);
};
