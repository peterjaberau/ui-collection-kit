import { useRecoilState } from 'recoil';

import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { getRecordsFromRecordConnection } from '@twenty-modules/object-record/cache/utils/getRecordsFromRecordConnection';
import { RecordGqlOperationFindManyResult } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationFindManyResult';
import { cursorFamilyState } from '@twenty-modules/object-record/states/cursorFamilyState';
import { hasNextPageFamilyState } from '@twenty-modules/object-record/states/hasNextPageFamilyState';
import { OnFindManyRecordsCompleted } from '@twenty-modules/object-record/types/OnFindManyRecordsCompleted';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useHandleFindManyRecordsCompleted = <T>({
  queryIdentifier,
  onCompleted,
  objectMetadataItem,
}: {
  queryIdentifier: string;
  objectMetadataItem: ObjectMetadataItem;
  onCompleted?: OnFindManyRecordsCompleted<T>;
}) => {
  const [, setLastCursor] = useRecoilState(cursorFamilyState(queryIdentifier));

  const [, setHasNextPage] = useRecoilState(
    hasNextPageFamilyState(queryIdentifier),
  );

  const handleFindManyRecordsCompleted = (
    data: RecordGqlOperationFindManyResult,
  ) => {
    if (!isDefined(data)) {
      onCompleted?.([]);
    }

    const pageInfo = data?.[objectMetadataItem.namePlural]?.pageInfo;

    const records = getRecordsFromRecordConnection({
      recordConnection: data?.[objectMetadataItem.namePlural],
    }) as T[];

    onCompleted?.(records, {
      pageInfo,
      totalCount: data?.[objectMetadataItem.namePlural]?.totalCount,
    });

    if (isDefined(data?.[objectMetadataItem.namePlural])) {
      setLastCursor(pageInfo.endCursor ?? '');
      setHasNextPage(pageInfo.hasNextPage ?? false);
    }
  };

  return {
    handleFindManyRecordsCompleted,
  };
};
