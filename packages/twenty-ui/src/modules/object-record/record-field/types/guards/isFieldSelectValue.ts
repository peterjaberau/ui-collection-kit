import { FieldSelectValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { selectFieldValueSchema } from '@twenty-modules/object-record/record-field/validation-schemas/selectFieldValueSchema';

export const isFieldSelectValue = (
  fieldValue: unknown,
  options?: string[],
): fieldValue is FieldSelectValue =>
  selectFieldValueSchema(options).safeParse(fieldValue).success;
