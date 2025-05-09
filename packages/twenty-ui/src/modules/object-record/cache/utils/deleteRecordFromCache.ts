import { ApolloCache } from '@apollo/client';

import { triggerDestroyRecordsOptimisticEffect } from '@twenty-modules/apollo/optimistic-effect/utils/triggerDestroyRecordsOptimisticEffect';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { getObjectTypename } from '@twenty-modules/object-record/cache/utils/getObjectTypename';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';

export const deleteRecordFromCache = ({
  objectMetadataItem,
  objectMetadataItems,
  recordToDestroy,
  cache,
}: {
  objectMetadataItem: ObjectMetadataItem;
  objectMetadataItems: ObjectMetadataItem[];
  recordToDestroy: ObjectRecord;
  cache: ApolloCache<object>;
}) => {
  triggerDestroyRecordsOptimisticEffect({
    cache,
    objectMetadataItem,
    objectMetadataItems,
    recordsToDestroy: [
      {
        ...recordToDestroy,
        __typename: getObjectTypename(objectMetadataItem.nameSingular),
      },
    ],
  });
};
