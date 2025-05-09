import { useLazyQuery } from '@apollo/client';
import { useRecoilCallback } from 'recoil';

import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { RecordGqlOperationFindManyResult } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationFindManyResult';
import { useFetchMoreRecordsWithPagination } from '@twenty-modules/object-record/hooks/useFetchMoreRecordsWithPagination';
import { UseFindManyRecordsParams } from '@twenty-modules/object-record/hooks/useFindManyRecords';
import { useFindManyRecordsQuery } from '@twenty-modules/object-record/hooks/useFindManyRecordsQuery';
import { useHandleFindManyRecordsCompleted } from '@twenty-modules/object-record/hooks/useHandleFindManyRecordsCompleted';
import { useHandleFindManyRecordsError } from '@twenty-modules/object-record/hooks/useHandleFindManyRecordsError';
import { cursorFamilyState } from '@twenty-modules/object-record/states/cursorFamilyState';
import { hasNextPageFamilyState } from '@twenty-modules/object-record/states/hasNextPageFamilyState';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { getQueryIdentifier } from '@twenty-modules/object-record/utils/getQueryIdentifier';

type UseLazyFindManyRecordsParams<T> = Omit<
  UseFindManyRecordsParams<T>,
  'skip'
>;

export const useLazyFindManyRecords = <T extends ObjectRecord = ObjectRecord>({
  objectNameSingular,
  filter,
  orderBy,
  limit,
  recordGqlFields,
  fetchPolicy,
  onCompleted,
  onError,
}: UseLazyFindManyRecordsParams<T>) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const { findManyRecordsQuery } = useFindManyRecordsQuery({
    objectNameSingular,
    recordGqlFields,
  });

  const { handleFindManyRecordsError } = useHandleFindManyRecordsError({
    objectMetadataItem,
    handleError: onError,
  });

  const queryIdentifier = getQueryIdentifier({
    objectNameSingular,
    filter,
    orderBy,
    limit,
  });

  const { handleFindManyRecordsCompleted } = useHandleFindManyRecordsCompleted({
    objectMetadataItem,
    queryIdentifier,
    onCompleted,
  });

  const [findManyRecords, { data, loading, error, fetchMore }] =
    useLazyQuery<RecordGqlOperationFindManyResult>(findManyRecordsQuery, {
      variables: {
        filter,
        limit,
        orderBy,
      },
      fetchPolicy: fetchPolicy,
      onCompleted: handleFindManyRecordsCompleted,
      onError: handleFindManyRecordsError,
    });

  const { fetchMoreRecords, totalCount, records, hasNextPage } =
    useFetchMoreRecordsWithPagination<T>({
      objectNameSingular,
      filter,
      orderBy,
      limit,
      onCompleted,
      fetchMore,
      data,
      error,
      objectMetadataItem,
    });

  const findManyRecordsLazy = useRecoilCallback(
    ({ set }) =>
      async () => {
        const result = await findManyRecords();

        const hasNextPage =
          result?.data?.[objectMetadataItem.namePlural]?.pageInfo.hasNextPage ??
          false;

        const lastCursor =
          result?.data?.[objectMetadataItem.namePlural]?.pageInfo.endCursor ??
          '';

        set(hasNextPageFamilyState(queryIdentifier), hasNextPage);
        set(cursorFamilyState(queryIdentifier), lastCursor);

        return result;
      },
    [queryIdentifier, findManyRecords, objectMetadataItem],
  );

  return {
    objectMetadataItem,
    records,
    totalCount,
    loading,
    error,
    fetchMore,
    fetchMoreRecords,
    queryStateIdentifier: queryIdentifier,
    findManyRecords: findManyRecordsLazy,
    hasNextPage,
  };
};
