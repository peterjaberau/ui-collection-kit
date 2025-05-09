import {
  FieldActorValue,
  FieldActorValueSchema,
} from '@twenty-modules/object-record/record-field/types/FieldMetadata';

export const isFieldActorValue = (
  fieldValue: unknown,
): fieldValue is FieldActorValue =>
  FieldActorValueSchema.safeParse(fieldValue).success;
