import { KeyOfCompositeField } from '@twenty-modules/object-record/spreadsheet-import/types/KeyOfCompositeField';

export type CompositeFieldLabels<T> = {
  [key in `${KeyOfCompositeField<T>}Label`]: string;
};
