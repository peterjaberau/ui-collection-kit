import { FieldActorValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';

export const isFilterOnActorSourceSubField = (
  subFieldName?: string | null | undefined,
) => {
  return subFieldName === ('source' satisfies keyof FieldActorValue);
};
