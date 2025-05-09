import { RecordGqlNode } from '@twenty-modules/object-record/graphql/types/RecordGqlNode';

export type RecordGqlEdge = {
  __typename: string;
  node: RecordGqlNode;
  cursor: string;
};
