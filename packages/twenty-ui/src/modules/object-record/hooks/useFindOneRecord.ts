import { useQuery } from '@apollo/client';
import { useMemo } from 'react';

import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { ObjectMetadataItemIdentifier } from '@twenty-modules/object-metadata/types/ObjectMetadataItemIdentifier';
import { getRecordFromRecordNode } from '@twenty-modules/object-record/cache/utils/getRecordFromRecordNode';
import { RecordGqlNode } from '@twenty-modules/object-record/graphql/types/RecordGqlNode';
import { RecordGqlOperationGqlRecordFields } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationGqlRecordFields';
import { generateDepthOneRecordGqlFields } from '@twenty-modules/object-record/graphql/utils/generateDepthOneRecordGqlFields';
import { useFindOneRecordQuery } from '@twenty-modules/object-record/hooks/useFindOneRecordQuery';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useFindOneRecord = <T extends ObjectRecord = ObjectRecord>({
  objectNameSingular,
  objectRecordId = '',
  recordGqlFields,
  onCompleted,
  skip,
  withSoftDeleted = false,
}: ObjectMetadataItemIdentifier & {
  objectRecordId: string | undefined;
  recordGqlFields?: RecordGqlOperationGqlRecordFields;
  onCompleted?: (data: T) => void;
  skip?: boolean;
  withSoftDeleted?: boolean;
}) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const computedRecordGqlFields =
    recordGqlFields ?? generateDepthOneRecordGqlFields({ objectMetadataItem });

  const { findOneRecordQuery } = useFindOneRecordQuery({
    objectNameSingular,
    recordGqlFields: computedRecordGqlFields,
    withSoftDeleted,
  });

  const { data, loading, error } = useQuery<{
    [nameSingular: string]: RecordGqlNode;
  }>(findOneRecordQuery, {
    skip: !objectMetadataItem || !objectRecordId || skip,
    variables: { objectRecordId },
    onCompleted: (data) => {
      const recordWithoutConnection = getRecordFromRecordNode<T>({
        recordNode: { ...data[objectNameSingular] },
      });

      if (isDefined(recordWithoutConnection)) {
        onCompleted?.(recordWithoutConnection);
      }
    },
  });

  // TODO: Remove connection from record
  const recordWithoutConnection = useMemo(
    () =>
      data?.[objectNameSingular]
        ? getRecordFromRecordNode<T>({
            recordNode: data?.[objectNameSingular],
          })
        : undefined,
    [data, objectNameSingular],
  );

  return {
    record: recordWithoutConnection,
    loading,
    error,
  };
};
