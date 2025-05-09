import { RecordGqlRefEdge } from '@twenty-modules/object-record/cache/types/RecordGqlRefEdge';
import { RecordGqlConnection } from '@twenty-modules/object-record/graphql/types/RecordGqlConnection';

export type RecordGqlRefConnection = Omit<RecordGqlConnection, 'edges'> & {
  edges: RecordGqlRefEdge[];
};
