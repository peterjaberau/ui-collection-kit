import { RecordGqlConnection } from '@twenty-modules/object-record/graphql/types/RecordGqlConnection';

export type RecordGqlOperationFindDuplicatesResult = {
  [objectNamePlural: string]: RecordGqlConnection[];
};
