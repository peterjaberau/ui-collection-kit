import gql from 'graphql-tag';

import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { mapSoftDeleteFieldsToGraphQLQuery } from '@twenty-modules/object-metadata/utils/mapSoftDeleteFieldsToGraphQLQuery';
import { EMPTY_MUTATION } from '@twenty-modules/object-record/constants/EmptyMutation';
import { getDeleteOneRecordMutationResponseField } from '@twenty-modules/object-record/utils/getDeleteOneRecordMutationResponseField';
import { isUndefinedOrNull } from '@twenty-ui/front/utils/isUndefinedOrNull';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

export const useDeleteOneRecordMutation = ({
  objectNameSingular,
}: {
  objectNameSingular: string;
}) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  if (isUndefinedOrNull(objectMetadataItem)) {
    return { deleteOneRecordMutation: EMPTY_MUTATION };
  }

  const capitalizedObjectName = capitalize(objectMetadataItem.nameSingular);

  const mutationResponseField = getDeleteOneRecordMutationResponseField(
    objectMetadataItem.nameSingular,
  );

  const deleteOneRecordMutation = gql`
  mutation DeleteOne${capitalizedObjectName}($idToDelete: ID!) {
    ${mutationResponseField}(id: $idToDelete)
    ${mapSoftDeleteFieldsToGraphQLQuery(objectMetadataItem)}
  }
`;

  return {
    deleteOneRecordMutation,
  };
};
