import gql from 'graphql-tag';

import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { mapObjectMetadataToGraphQLQuery } from '@twenty-modules/object-metadata/utils/mapObjectMetadataToGraphQLQuery';
import { RecordGqlOperationGqlRecordFields } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationGqlRecordFields';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

export type QueryCursorDirection = 'before' | 'after';

export const generateFindManyRecordsQuery = ({
  objectMetadataItem,
  objectMetadataItems,
  recordGqlFields,
  computeReferences,
  cursorDirection,
}: {
  objectMetadataItem: ObjectMetadataItem;
  objectMetadataItems: ObjectMetadataItem[];
  recordGqlFields?: RecordGqlOperationGqlRecordFields;
  computeReferences?: boolean;
  cursorDirection?: QueryCursorDirection;
}) => gql`
query FindMany${capitalize(
  objectMetadataItem.namePlural,
)}($filter: ${capitalize(
  objectMetadataItem.nameSingular,
)}FilterInput, $orderBy: [${capitalize(
  objectMetadataItem.nameSingular,
)}OrderByInput], $lastCursor: String, $limit: Int) {
  ${objectMetadataItem.namePlural}(filter: $filter, orderBy: $orderBy, ${
    cursorDirection === 'before'
      ? 'last: $limit, before: $lastCursor'
      : 'first: $limit, after: $lastCursor'
  } ){
    edges {
      node ${mapObjectMetadataToGraphQLQuery({
        objectMetadataItems,
        objectMetadataItem,
        recordGqlFields,
        computeReferences,
      })}
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
`;
