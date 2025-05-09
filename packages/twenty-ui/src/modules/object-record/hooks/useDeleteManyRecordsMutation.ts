import gql from 'graphql-tag';

import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { EMPTY_MUTATION } from '@twenty-modules/object-record/constants/EmptyMutation';
import { getDeleteManyRecordsMutationResponseField } from '@twenty-modules/object-record/utils/getDeleteManyRecordsMutationResponseField';
import { isUndefinedOrNull } from '@twenty-ui/front/utils/isUndefinedOrNull';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

export const useDeleteManyRecordsMutation = ({
  objectNameSingular,
}: {
  objectNameSingular: string;
}) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  if (isUndefinedOrNull(objectMetadataItem)) {
    return { deleteManyRecordsMutation: EMPTY_MUTATION };
  }

  const capitalizedObjectName = capitalize(objectMetadataItem.namePlural);

  const mutationResponseField = getDeleteManyRecordsMutationResponseField(
    objectMetadataItem.namePlural,
  );

  const deleteManyRecordsMutation = gql`
    mutation DeleteMany${capitalizedObjectName}($filter: ${capitalize(
      objectMetadataItem.nameSingular,
    )}FilterInput!)  {
      ${mutationResponseField}(filter: $filter) {
        id
      }
    }
  `;

  return {
    deleteManyRecordsMutation,
  };
};
