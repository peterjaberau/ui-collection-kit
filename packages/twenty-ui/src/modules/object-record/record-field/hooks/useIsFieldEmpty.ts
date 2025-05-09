import { useContext } from 'react';

import { isFieldValueEmpty } from '@twenty-modules/object-record/record-field/utils/isFieldValueEmpty';
import { useRecordFieldValue } from '@twenty-modules/object-record/record-store/contexts/RecordFieldValueSelectorContext';

import { FieldContext } from '../contexts/FieldContext';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useIsFieldEmpty = () => {
  const { recordId, fieldDefinition, overridenIsFieldEmpty } =
    useContext(FieldContext);

  const fieldValue = useRecordFieldValue(
    recordId,
    fieldDefinition?.metadata?.fieldName ?? '',
  );

  if (isDefined(overridenIsFieldEmpty)) {
    return overridenIsFieldEmpty;
  }

  return isFieldValueEmpty({
    fieldDefinition,
    fieldValue,
  });
};
