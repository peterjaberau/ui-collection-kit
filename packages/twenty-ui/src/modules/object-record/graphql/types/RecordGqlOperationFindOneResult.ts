import { RecordGqlNode } from '@twenty-modules/object-record/graphql/types/RecordGqlNode';

export type RecordGqlOperationFindOneResult = {
  [objectNameSingular: string]: RecordGqlNode;
};
