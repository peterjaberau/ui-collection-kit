import gql from 'graphql-tag';
import { useRecoilValue } from 'recoil';

import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { mapObjectMetadataToGraphQLQuery } from '@twenty-modules/object-metadata/utils/mapObjectMetadataToGraphQLQuery';
import { EMPTY_MUTATION } from '@twenty-modules/object-record/constants/EmptyMutation';
import { RecordGqlOperationGqlRecordFields } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationGqlRecordFields';
import { generateDepthOneRecordGqlFields } from '@twenty-modules/object-record/graphql/utils/generateDepthOneRecordGqlFields';
import { getUpdateOneRecordMutationResponseField } from '@twenty-modules/object-record/utils/getUpdateOneRecordMutationResponseField';
import { isUndefinedOrNull } from '@twenty-ui/front/utils/isUndefinedOrNull';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

export const useUpdateOneRecordMutation = ({
  objectNameSingular,
  recordGqlFields,
  computeReferences = false,
}: {
  objectNameSingular: string;
  recordGqlFields?: RecordGqlOperationGqlRecordFields;
  computeReferences?: boolean;
}) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  if (isUndefinedOrNull(objectMetadataItem)) {
    return { updateOneRecordMutation: EMPTY_MUTATION };
  }

  const appliedRecordGqlFields =
    recordGqlFields ??
    generateDepthOneRecordGqlFields({
      objectMetadataItem,
    });

  const capitalizedObjectName = capitalize(objectMetadataItem.nameSingular);

  const mutationResponseField = getUpdateOneRecordMutationResponseField(
    objectMetadataItem.nameSingular,
  );

  const updateOneRecordMutation = gql`
    mutation UpdateOne${capitalizedObjectName}($idToUpdate: ID!, $input: ${capitalizedObjectName}UpdateInput!)  {
       ${mutationResponseField}(id: $idToUpdate, data: $input) ${mapObjectMetadataToGraphQLQuery(
         {
           objectMetadataItems,
           objectMetadataItem,
           computeReferences,
           recordGqlFields: appliedRecordGqlFields,
         },
       )}
    }
  `;

  return {
    updateOneRecordMutation,
  };
};
