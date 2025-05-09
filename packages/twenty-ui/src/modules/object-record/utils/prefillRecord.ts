import { isUndefined } from '@sniptt/guards';

import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { generateDefaultFieldValue } from '@twenty-modules/object-record/utils/generateDefaultFieldValue';
import { FieldMetadataType, RelationDefinitionType } from '@twenty-ui/front/generated/graphql';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type PrefillRecordArgs = {
  objectMetadataItem: ObjectMetadataItem;
  input: Record<string, unknown>;
};
export const prefillRecord = <T extends ObjectRecord>({
  objectMetadataItem,
  input,
}: PrefillRecordArgs) => {
  return Object.fromEntries(
    objectMetadataItem.fields
      .map((fieldMetadataItem) => {
        const inputValue = input[fieldMetadataItem.name];
        if (
          fieldMetadataItem.type === FieldMetadataType.RELATION &&
          fieldMetadataItem.relationDefinition?.direction ===
            RelationDefinitionType.MANY_TO_ONE
        ) {
          throwIfInputRelationDataIsInconsistent(input, fieldMetadataItem);
        }

        const fieldValue = isUndefined(inputValue)
          ? generateDefaultFieldValue({ fieldMetadataItem })
          : inputValue;
        return [fieldMetadataItem.name, fieldValue];
      })
      .filter(isDefined),
  ) as T;
};

const throwIfInputRelationDataIsInconsistent = (
  input: Record<string, unknown>,
  fieldMetadataItem: FieldMetadataItem,
) => {
  const inputValue = input[fieldMetadataItem.name];
  const relationIdFieldName = `${fieldMetadataItem.name}Id`;
  if (isDefined(inputValue) && !isDefined(input[relationIdFieldName])) {
    throw new Error(
      `Inconsistent input: ${fieldMetadataItem.name} is specified but ${relationIdFieldName} is missing`,
    );
  }
};
