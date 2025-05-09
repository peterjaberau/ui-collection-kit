import gql from 'graphql-tag';
import { useRecoilValue } from 'recoil';

import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { isAggregationEnabled } from '@twenty-modules/object-metadata/utils/isAggregationEnabled';
import { mapObjectMetadataToGraphQLQuery } from '@twenty-modules/object-metadata/utils/mapObjectMetadataToGraphQLQuery';
import { getFindDuplicateRecordsQueryResponseField } from '@twenty-modules/object-record/utils/getFindDuplicateRecordsQueryResponseField';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

export const useFindDuplicateRecordsQuery = ({
  objectNameSingular,
}: {
  objectNameSingular: string;
}) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  const findDuplicateRecordsQuery = gql`
    query FindDuplicate${capitalize(
      objectMetadataItem.nameSingular,
    )}($ids: [ID!]!) {
      ${getFindDuplicateRecordsQueryResponseField(
        objectMetadataItem.nameSingular,
      )}(ids: $ids) {
        edges {
          node ${mapObjectMetadataToGraphQLQuery({
            objectMetadataItems,
            objectMetadataItem,
          })}
          cursor
        }
        pageInfo {
          ${isAggregationEnabled(objectMetadataItem) ? 'hasNextPage' : ''}
          startCursor
          endCursor
        }
      }
    }
  `;

  return {
    findDuplicateRecordsQuery,
  };
};
