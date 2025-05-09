import { RecordGqlOperationFilter } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationFilter';
import { RecordGqlOperationOrderBy } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationOrderBy';
import { QueryCursorDirection } from '@twenty-modules/object-record/utils/generateFindManyRecordsQuery';

export type RecordGqlOperationVariables = {
  filter?: RecordGqlOperationFilter;
  orderBy?: RecordGqlOperationOrderBy;
  limit?: number;
  cursorFilter?: {
    cursor: string;
    cursorDirection: QueryCursorDirection;
  };
};
