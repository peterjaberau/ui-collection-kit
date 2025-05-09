import { useLazyQuery, WatchQueryFetchPolicy } from '@apollo/client';

import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { ObjectMetadataItemIdentifier } from '@twenty-modules/object-metadata/types/ObjectMetadataItemIdentifier';
import { getRecordFromRecordNode } from '@twenty-modules/object-record/cache/utils/getRecordFromRecordNode';
import { RecordGqlOperationGqlRecordFields } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationGqlRecordFields';
import { generateDepthOneRecordGqlFields } from '@twenty-modules/object-record/graphql/utils/generateDepthOneRecordGqlFields';
import { useFindOneRecordQuery } from '@twenty-modules/object-record/hooks/useFindOneRecordQuery';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';

type UseLazyFindOneRecordParams = ObjectMetadataItemIdentifier & {
  recordGqlFields?: RecordGqlOperationGqlRecordFields;
  withSoftDeleted?: boolean;
  fetchPolicy?: WatchQueryFetchPolicy;
};

type FindOneRecordParams<T extends ObjectRecord> = {
  objectRecordId: string | undefined;
  onCompleted?: (data: T) => void;
};

export const useLazyFindOneRecord = <T extends ObjectRecord = ObjectRecord>({
  objectNameSingular,
  recordGqlFields,
  withSoftDeleted = false,
  fetchPolicy = 'cache-first',
}: UseLazyFindOneRecordParams) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const { findOneRecordQuery } = useFindOneRecordQuery({
    objectNameSingular,
    recordGqlFields:
      recordGqlFields ??
      generateDepthOneRecordGqlFields({ objectMetadataItem }),
    withSoftDeleted,
  });

  const [findOneRecord, { loading, error, data, called }] =
    useLazyQuery(findOneRecordQuery);

  return {
    findOneRecord: async ({
      objectRecordId,
      onCompleted,
    }: FindOneRecordParams<T>) => {
      await findOneRecord({
        variables: { objectRecordId },
        fetchPolicy,
        onCompleted: (data) => {
          const record = getRecordFromRecordNode<T>({
            recordNode: data[objectNameSingular],
          });
          onCompleted?.(record);
        },
      });
    },
    called,
    error,
    loading,
    record: data?.[objectNameSingular] || undefined,
  };
};
