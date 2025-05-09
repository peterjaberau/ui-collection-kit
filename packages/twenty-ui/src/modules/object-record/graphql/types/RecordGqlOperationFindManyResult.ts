import { RecordGqlConnection } from '@twenty-modules/object-record/graphql/types/RecordGqlConnection';

export type RecordGqlOperationFindManyResult = {
  [objectNamePlural: string]: RecordGqlConnection;
};
