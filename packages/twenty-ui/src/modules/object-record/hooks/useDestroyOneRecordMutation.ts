import gql from 'graphql-tag';

import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { EMPTY_MUTATION } from '@twenty-modules/object-record/constants/EmptyMutation';
import { getDestroyOneRecordMutationResponseField } from '@twenty-modules/object-record/utils/getDestroyOneRecordMutationResponseField';
import { isUndefinedOrNull } from '@twenty-ui/front/utils/isUndefinedOrNull';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

export const useDestroyOneRecordMutation = ({
  objectNameSingular,
}: {
  objectNameSingular: string;
}) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  if (isUndefinedOrNull(objectMetadataItem)) {
    return { destroyOneRecordMutation: EMPTY_MUTATION };
  }

  const capitalizedObjectName = capitalize(objectMetadataItem.nameSingular);

  const mutationResponseField = getDestroyOneRecordMutationResponseField(
    objectMetadataItem.nameSingular,
  );

  const destroyOneRecordMutation = gql`
    mutation DestroyOne${capitalizedObjectName}($idToDestroy: ID!)  {
      ${mutationResponseField}(id: $idToDestroy) {
        id
      }
    }
  `;

  return {
    destroyOneRecordMutation,
  };
};
