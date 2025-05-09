import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { isWorkflowSubObjectMetadata } from '@twenty-modules/object-metadata/utils/isWorkflowSubObjectMetadata';
import { isWorkflowRunJsonField } from '@twenty-modules/object-record/record-field/meta-types/utils/isWorkflowRunJsonField';
import { isFieldActor } from '@twenty-modules/object-record/record-field/types/guards/isFieldActor';
import { isFieldRichText } from '@twenty-modules/object-record/record-field/types/guards/isFieldRichText';

import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';

type isFieldValueReadOnlyParams = {
  objectNameSingular?: string;
  fieldName?: string;
  fieldType?: FieldMetadataType;
  isRecordReadOnly?: boolean;
  isCustom?: boolean;
};

export const isFieldValueReadOnly = ({
  objectNameSingular,
  fieldName,
  fieldType,
  isRecordReadOnly = false,
  isCustom = false,
}: isFieldValueReadOnlyParams) => {
  if (isRecordReadOnly) {
    return true;
  }

  if (
    isWorkflowRunJsonField({
      objectMetadataNameSingular: objectNameSingular,
      fieldName,
    })
  ) {
    return false;
  }

  if (isWorkflowSubObjectMetadata(objectNameSingular)) {
    return true;
  }

  if (objectNameSingular === CoreObjectNameSingular.CalendarEvent) {
    return true;
  }

  if (
    objectNameSingular === CoreObjectNameSingular.Workflow &&
    fieldName !== 'name' &&
    !isCustom
  ) {
    return true;
  }

  if (
    objectNameSingular !== CoreObjectNameSingular.Note &&
    fieldName === 'noteTargets'
  ) {
    return true;
  }

  if (
    objectNameSingular !== CoreObjectNameSingular.Task &&
    fieldName === 'taskTargets'
  ) {
    return true;
  }

  if (
    isDefined(fieldType) &&
    (isFieldActor({ type: fieldType }) || isFieldRichText({ type: fieldType }))
  ) {
    return true;
  }

  return false;
};
