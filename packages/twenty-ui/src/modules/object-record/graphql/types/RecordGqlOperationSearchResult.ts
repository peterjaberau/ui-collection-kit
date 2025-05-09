import { RecordGqlConnection } from '@twenty-modules/object-record/graphql/types/RecordGqlConnection';

export type RecordGqlOperationSearchResult = {
  [objectNamePlural: string]: RecordGqlConnection;
};
