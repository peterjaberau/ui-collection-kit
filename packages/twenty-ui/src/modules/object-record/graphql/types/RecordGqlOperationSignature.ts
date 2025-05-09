import { RecordGqlOperationGqlRecordFields } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationGqlRecordFields';
import { RecordGqlOperationVariables } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationVariables';

export type RecordGqlOperationSignature = {
  objectNameSingular: string;
  variables: RecordGqlOperationVariables;
  fields?: RecordGqlOperationGqlRecordFields;
};
