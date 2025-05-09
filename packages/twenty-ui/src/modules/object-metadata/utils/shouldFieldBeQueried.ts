import { RecordGqlOperationGqlRecordFields } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationGqlRecordFields';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';
import { isUndefinedOrNull } from '@twenty-ui/front/utils/isUndefinedOrNull';

import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { FieldMetadataItem } from '../types/FieldMetadataItem';

export const shouldFieldBeQueried = ({
  gqlField,
  fieldMetadata,
  recordGqlFields,
}: {
  gqlField: string;
  fieldMetadata: Pick<FieldMetadataItem, 'name' | 'type'>;
  objectRecord?: ObjectRecord;
  recordGqlFields?: RecordGqlOperationGqlRecordFields;
}): any => {
  if (
    isUndefinedOrNull(recordGqlFields) &&
    fieldMetadata.type !== FieldMetadataType.RELATION
  ) {
    return true;
  }

  if (
    isDefined(recordGqlFields) &&
    isDefined(recordGqlFields[gqlField]) &&
    recordGqlFields[gqlField] !== false
  ) {
    return true;
  }

  return false;
};
