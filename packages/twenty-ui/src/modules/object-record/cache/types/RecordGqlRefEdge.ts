import { RecordGqlRefNode } from '@twenty-modules/object-record/cache/types/RecordGqlRefNode';
import { RecordGqlEdge } from '@twenty-modules/object-record/graphql/types/RecordGqlEdge';

export type RecordGqlRefEdge = Omit<RecordGqlEdge, 'node'> & {
  node: RecordGqlRefNode;
};
