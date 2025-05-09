import gql from 'graphql-tag';

import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { EMPTY_MUTATION } from '@twenty-modules/object-record/constants/EmptyMutation';
import { getRestoreManyRecordsMutationResponseField } from '@twenty-modules/object-record/utils/getRestoreManyRecordsMutationResponseField';
import { isUndefinedOrNull } from '@twenty-ui/front/utils/isUndefinedOrNull';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

export const useRestoreManyRecordsMutation = ({
  objectNameSingular,
}: {
  objectNameSingular: string;
}) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  if (isUndefinedOrNull(objectMetadataItem)) {
    return { restoreManyRecordsMutation: EMPTY_MUTATION };
  }

  const capitalizedObjectName = capitalize(objectMetadataItem.namePlural);

  const mutationResponseField = getRestoreManyRecordsMutationResponseField(
    objectMetadataItem.namePlural,
  );

  const restoreManyRecordsMutation = gql`
    mutation RestoreMany${capitalizedObjectName}($filter: ${capitalize(
      objectMetadataItem.nameSingular,
    )}FilterInput!)  {
      ${mutationResponseField}(filter: $filter) {
        id
      }
    }
  `;

  return {
    restoreManyRecordsMutation,
  };
};
