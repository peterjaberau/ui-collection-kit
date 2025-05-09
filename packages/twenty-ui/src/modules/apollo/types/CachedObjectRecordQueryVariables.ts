import { RecordGqlOperationVariables } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationVariables';

export type CachedObjectRecordQueryVariables = Omit<
  RecordGqlOperationVariables,
  'limit'
> & { first?: RecordGqlOperationVariables['limit'] };
