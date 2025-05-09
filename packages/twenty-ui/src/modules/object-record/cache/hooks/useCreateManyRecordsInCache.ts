import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { ObjectMetadataItemIdentifier } from '@twenty-modules/object-metadata/types/ObjectMetadataItemIdentifier';
import { useCreateOneRecordInCache } from '@twenty-modules/object-record/cache/hooks/useCreateOneRecordInCache';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { prefillRecord } from '@twenty-modules/object-record/utils/prefillRecord';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useCreateManyRecordsInCache = <T extends ObjectRecord>({
  objectNameSingular,
}: ObjectMetadataItemIdentifier) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const createOneRecordInCache = useCreateOneRecordInCache({
    objectMetadataItem,
  });

  const createManyRecordsInCache = (recordsToCreate: Partial<T>[]) => {
    const recordsWithId = recordsToCreate
      .map((record) => {
        return prefillRecord<T>({
          input: record,
          objectMetadataItem,
        });
      })
      .filter(isDefined);

    const createdRecordsInCache = [] as T[];

    for (const record of recordsWithId) {
      if (isDefined(record)) {
        createOneRecordInCache(record);
        createdRecordsInCache.push(record);
      }
    }

    return createdRecordsInCache;
  };

  return { createManyRecordsInCache };
};
