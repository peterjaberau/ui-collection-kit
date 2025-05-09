import { isCompositeFilterableFieldType } from '@twenty-modules/object-record/object-filter-dropdown/utils/isCompositeFilterableFieldType';
import { CompositeFilterableFieldType } from '@twenty-modules/object-record/record-filter/types/CompositeFilterableFieldType';
import { CompositeFieldSubFieldName } from '@twenty-modules/settings/data-model/types/CompositeFieldSubFieldName';
import { FieldType } from '@twenty-modules/settings/data-model/types/FieldType';
import { assertUnreachable } from '@ui-collection-kit/twenty-shared/src/utils';

export const getDefaultSubFieldNameForCompositeFilterableFieldType = (
  fieldType: FieldType,
): CompositeFieldSubFieldName | undefined => {
  if (!isCompositeFilterableFieldType(fieldType as any)) {
    return undefined;
  }

  const compositeFieldType = fieldType as CompositeFilterableFieldType;

  switch (compositeFieldType) {
    case 'CURRENCY':
      return 'amountMicros';
    case 'LINKS':
      return 'primaryLinkUrl';
    case 'PHONES':
      return 'primaryPhoneNumber';
    case 'EMAILS':
      return 'primaryEmail';
    case 'ADDRESS':
      return 'addressCity';
    case 'ACTOR':
      return 'source';
    case 'FULL_NAME':
      return 'firstName';
    default:
      assertUnreachable(compositeFieldType);
  }
};
