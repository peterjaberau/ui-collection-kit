import gql from 'graphql-tag';
import { useRecoilValue } from 'recoil';

import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { mapObjectMetadataToGraphQLQuery } from '@twenty-modules/object-metadata/utils/mapObjectMetadataToGraphQLQuery';
import { EMPTY_MUTATION } from '@twenty-modules/object-record/constants/EmptyMutation';
import { RecordGqlOperationGqlRecordFields } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationGqlRecordFields';
import { generateDepthOneRecordGqlFields } from '@twenty-modules/object-record/graphql/utils/generateDepthOneRecordGqlFields';
import { getCreateOneRecordMutationResponseField } from '@twenty-modules/object-record/utils/getCreateOneRecordMutationResponseField';
import { isUndefinedOrNull } from '@twenty-ui/front/utils/isUndefinedOrNull';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

export const useCreateOneRecordMutation = ({
  objectNameSingular,
  recordGqlFields,
}: {
  objectNameSingular: string;
  recordGqlFields?: RecordGqlOperationGqlRecordFields;
}) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const appliedRecordGqlFields =
    recordGqlFields ??
    generateDepthOneRecordGqlFields({
      objectMetadataItem,
    });

  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  if (isUndefinedOrNull(objectMetadataItem)) {
    return { createOneRecordMutation: EMPTY_MUTATION };
  }

  const capitalizedObjectName = capitalize(objectMetadataItem.nameSingular);

  const mutationResponseField = getCreateOneRecordMutationResponseField(
    objectMetadataItem.nameSingular,
  );

  const createOneRecordMutation = gql`
    mutation CreateOne${capitalizedObjectName}($input: ${capitalizedObjectName}CreateInput!)  {
      ${mutationResponseField}(data: $input) ${mapObjectMetadataToGraphQLQuery({
        objectMetadataItems,
        objectMetadataItem,
        recordGqlFields: appliedRecordGqlFields,
      })}
    }
  `;

  return {
    createOneRecordMutation,
  };
};
