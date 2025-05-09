import gql from 'graphql-tag';
import { useRecoilValue } from 'recoil';

import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { mapObjectMetadataToGraphQLQuery } from '@twenty-modules/object-metadata/utils/mapObjectMetadataToGraphQLQuery';
import { EMPTY_MUTATION } from '@twenty-modules/object-record/constants/EmptyMutation';
import { RecordGqlOperationGqlRecordFields } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationGqlRecordFields';
import { getCreateManyRecordsMutationResponseField } from '@twenty-modules/object-record/utils/getCreateManyRecordsMutationResponseField';
import { isUndefinedOrNull } from '@twenty-ui/front/utils/isUndefinedOrNull';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

export const useCreateManyRecordsMutation = ({
  objectNameSingular,
  recordGqlFields,
}: {
  objectNameSingular: string;
  recordGqlFields?: RecordGqlOperationGqlRecordFields;
}) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  if (isUndefinedOrNull(objectMetadataItem)) {
    return { createManyRecordsMutation: EMPTY_MUTATION };
  }

  const mutationResponseField = getCreateManyRecordsMutationResponseField(
    objectMetadataItem.namePlural,
  );

  const createManyRecordsMutation = gql`
    mutation Create${capitalize(
      objectMetadataItem.namePlural,
    )}($data: [${capitalize(
      objectMetadataItem.nameSingular,
    )}CreateInput!]!, $upsert: Boolean)  {
      ${mutationResponseField}(data: $data, upsert: $upsert) ${mapObjectMetadataToGraphQLQuery(
        {
          objectMetadataItems,
          objectMetadataItem,
          recordGqlFields,
        },
      )}
  }`;

  return {
    createManyRecordsMutation,
  };
};
