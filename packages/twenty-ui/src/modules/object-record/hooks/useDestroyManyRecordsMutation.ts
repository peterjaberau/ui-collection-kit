import gql from 'graphql-tag';

import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { EMPTY_MUTATION } from '@twenty-modules/object-record/constants/EmptyMutation';
import { getDestroyManyRecordsMutationResponseField } from '@twenty-modules/object-record/utils/getDestroyManyRecordsMutationResponseField';
import { isUndefinedOrNull } from '@twenty-ui/front/utils/isUndefinedOrNull';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

export const useDestroyManyRecordsMutation = ({
  objectNameSingular,
}: {
  objectNameSingular: string;
}) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  if (isUndefinedOrNull(objectMetadataItem)) {
    return { destroyManyRecordsMutation: EMPTY_MUTATION };
  }

  const capitalizedObjectName = capitalize(objectMetadataItem.namePlural);

  const mutationResponseField = getDestroyManyRecordsMutationResponseField(
    objectMetadataItem.namePlural,
  );

  const destroyManyRecordsMutation = gql`
    mutation DestroyMany${capitalizedObjectName}($filter: ${capitalize(
      objectMetadataItem.nameSingular,
    )}FilterInput!)  {
      ${mutationResponseField}(filter: $filter) {
        id
      }
    }
  `;

  return {
    destroyManyRecordsMutation,
  };
};
