import { WatchQueryFetchPolicy } from '@apollo/client';

import { ObjectMetadataItemIdentifier } from '@twenty-modules/object-metadata/types/ObjectMetadataItemIdentifier';
import { RecordGqlOperationGqlRecordFields } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationGqlRecordFields';
import { RecordGqlOperationVariables } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationVariables';
import { OnFindManyRecordsCompleted } from '@twenty-modules/object-record/types/OnFindManyRecordsCompleted';

export type UseFindManyRecordsParams<T> = ObjectMetadataItemIdentifier &
  RecordGqlOperationVariables & {
    onCompleted?: OnFindManyRecordsCompleted<T>;
    skip?: boolean;
    recordGqlFields?: RecordGqlOperationGqlRecordFields;
    fetchPolicy?: WatchQueryFetchPolicy;
  };
