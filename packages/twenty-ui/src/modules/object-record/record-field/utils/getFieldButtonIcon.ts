import { FieldDefinition } from '@twenty-modules/object-record/record-field/types/FieldDefinition';
import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { isFieldDisplayedAsPhone } from '@twenty-modules/object-record/record-field/types/guards/isFieldDisplayedAsPhone';
import { isFieldEmails } from '@twenty-modules/object-record/record-field/types/guards/isFieldEmails';
import { isFieldLinks } from '@twenty-modules/object-record/record-field/types/guards/isFieldLinks';
import { isFieldMultiSelect } from '@twenty-modules/object-record/record-field/types/guards/isFieldMultiSelect';
import { isFieldPhones } from '@twenty-modules/object-record/record-field/types/guards/isFieldPhones';
import { isFieldRelation } from '@twenty-modules/object-record/record-field/types/guards/isFieldRelation';
import { isUndefinedOrNull } from '@twenty-ui/front/utils/isUndefinedOrNull';

import { isFieldArray } from '@twenty-modules/object-record/record-field/types/guards/isFieldArray';
import { IconComponent, IconPencil } from '@twenty-ui/display';

export const getFieldButtonIcon = (
  fieldDefinition:
    | Pick<FieldDefinition<FieldMetadata>, 'type' | 'metadata'>
    | undefined
    | null,
): IconComponent | undefined => {
  if (isUndefinedOrNull(fieldDefinition)) return undefined;

  if (
    isFieldDisplayedAsPhone(fieldDefinition) ||
    isFieldMultiSelect(fieldDefinition) ||
    (isFieldRelation(fieldDefinition) &&
      fieldDefinition.metadata.relationObjectMetadataNameSingular !==
        'workspaceMember') ||
    isFieldLinks(fieldDefinition) ||
    isFieldEmails(fieldDefinition) ||
    isFieldArray(fieldDefinition) ||
    isFieldPhones(fieldDefinition)
  ) {
    return IconPencil;
  }
};
