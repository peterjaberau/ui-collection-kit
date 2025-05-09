import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { isFieldFullName } from '@twenty-modules/object-record/record-field/types/guards/isFieldFullName';
import { isFieldNumber } from '@twenty-modules/object-record/record-field/types/guards/isFieldNumber';
import { isFieldText } from '@twenty-modules/object-record/record-field/types/guards/isFieldText';

export const isFieldIdentifierDisplay = (
  field: Pick<FieldMetadataItem, 'type'>,
  isLabelIdentifier: boolean,
) =>
  isLabelIdentifier &&
  (isFieldText(field) || isFieldFullName(field) || isFieldNumber(field));
