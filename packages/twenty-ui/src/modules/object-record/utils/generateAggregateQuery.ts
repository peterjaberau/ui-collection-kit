import gql from 'graphql-tag';

import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { RecordGqlFields } from '@twenty-modules/object-record/graphql/types/RecordGqlFields';
import { getAggregateQueryName } from '@twenty-modules/object-record/utils/getAggregateQueryName';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

export const generateAggregateQuery = ({
  objectMetadataItem,
  recordGqlFields,
}: {
  objectMetadataItem: ObjectMetadataItem;
  recordGqlFields: RecordGqlFields;
}) => {
  const selectedFields = Object.entries(recordGqlFields)
    .filter(([_, shouldBeQueried]) => shouldBeQueried)
    .map(([fieldName]) => fieldName)
    .join('\n      ');

  return gql`
    query ${getAggregateQueryName(objectMetadataItem.namePlural)}($filter: ${capitalize(
      objectMetadataItem.nameSingular,
    )}FilterInput) {
      ${objectMetadataItem.namePlural}(filter: $filter) {
        ${selectedFields ? '' : '__typename'}
        ${selectedFields}
      }
    }
  `;
};
