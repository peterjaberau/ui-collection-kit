import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { orderWorkflowRunOutput } from '@twenty-modules/object-record/record-field/meta-types/utils/orderWorkflowRunOutput';
import { FieldJsonValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { useContext } from 'react';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useFormattedJsonFieldValue = ({
  fieldValue,
}: {
  fieldValue: FieldJsonValue | undefined;
}): FieldJsonValue | undefined => {
  const { fieldDefinition } = useContext(FieldContext);

  if (
    fieldDefinition.metadata.objectMetadataNameSingular ===
      CoreObjectNameSingular.WorkflowRun &&
    fieldDefinition.metadata.fieldName === 'output' &&
    isDefined(fieldValue)
  ) {
    return orderWorkflowRunOutput(fieldValue) as FieldJsonValue;
  }

  return fieldValue;
};
