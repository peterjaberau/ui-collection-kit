import gql from 'graphql-tag';
import { useRecoilValue } from 'recoil';

import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { mapObjectMetadataToGraphQLQuery } from '@twenty-modules/object-metadata/utils/mapObjectMetadataToGraphQLQuery';
import { RecordGqlOperationGqlRecordFields } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationGqlRecordFields';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

export const useFindOneRecordQuery = ({
  objectNameSingular,
  recordGqlFields,
  withSoftDeleted = false,
}: {
  objectNameSingular: string;
  recordGqlFields?: RecordGqlOperationGqlRecordFields;
  withSoftDeleted?: boolean;
}) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  const findOneRecordQuery = gql`
      query FindOne${capitalize(
        objectMetadataItem.nameSingular,
      )}($objectRecordId: ID!) {
        ${objectMetadataItem.nameSingular}(filter: {
        ${
          withSoftDeleted
            ? `
          or: [
            { deletedAt: { is: NULL } },
            { deletedAt: { is: NOT_NULL } }
          ],
        `
            : ''
        }
          id: {
            eq: $objectRecordId
          }
        })${mapObjectMetadataToGraphQLQuery({
          objectMetadataItems,
          objectMetadataItem,
          recordGqlFields,
        })}
      },
  `;

  return {
    findOneRecordQuery,
  };
};
