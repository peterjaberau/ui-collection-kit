import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { orderWorkflowRunOutput } from '@twenty-modules/object-record/record-field/meta-types/utils/orderWorkflowRunOutput';
import { useContext } from 'react';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { JsonObject, JsonValue } from 'type-fest';
import { parseJson } from '@twenty-ui/front/utils/parseJson';

export const usePrecomputedJsonDraftValue = ({
  draftValue,
}: {
  draftValue: string | undefined;
}): JsonValue => {
  const { fieldDefinition } = useContext(FieldContext);

  const parsedJsonValue = parseJson<JsonValue>(draftValue);

  if (
    fieldDefinition.metadata.objectMetadataNameSingular ===
      CoreObjectNameSingular.WorkflowRun &&
    fieldDefinition.metadata.fieldName === 'output' &&
    isDefined(draftValue)
  ) {
    return orderWorkflowRunOutput(parsedJsonValue) as JsonObject;
  }

  return parsedJsonValue;
};
