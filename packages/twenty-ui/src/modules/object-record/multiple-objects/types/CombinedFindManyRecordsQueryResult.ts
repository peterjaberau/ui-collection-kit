import { RecordGqlConnection } from '@twenty-modules/object-record/graphql/types/RecordGqlConnection';

export type CombinedFindManyRecordsQueryResult = {
  [namePlural: string]: RecordGqlConnection;
};
