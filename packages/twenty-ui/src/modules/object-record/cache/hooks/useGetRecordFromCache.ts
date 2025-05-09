import { useApolloClient } from '@apollo/client';
import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';

import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { getRecordFromCache } from '@twenty-modules/object-record/cache/utils/getRecordFromCache';
import { RecordGqlFields } from '@twenty-modules/object-record/graphql/types/RecordGqlFields';
import { generateDepthOneRecordGqlFields } from '@twenty-modules/object-record/graphql/utils/generateDepthOneRecordGqlFields';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';

export const useGetRecordFromCache = ({
  objectNameSingular,
  recordGqlFields,
}: {
  objectNameSingular: string;
  recordGqlFields?: RecordGqlFields;
}) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const appliedRecordGqlFields =
    recordGqlFields ?? generateDepthOneRecordGqlFields({ objectMetadataItem });

  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  const apolloClient = useApolloClient();

  return useCallback(
    <T extends ObjectRecord = ObjectRecord>(
      recordId: string,
      cache = apolloClient.cache,
    ) => {
      return getRecordFromCache<T>({
        cache,
        recordId,
        objectMetadataItems,
        objectMetadataItem,
        recordGqlFields: appliedRecordGqlFields,
      });
    },
    [
      apolloClient.cache,
      objectMetadataItems,
      objectMetadataItem,
      appliedRecordGqlFields,
    ],
  );
};
