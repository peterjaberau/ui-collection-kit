import { generateActivityTargetMorphFieldKeys } from '@twenty-modules/activities/utils/generateActivityTargetMorphFieldKeys';
import { getJoinObjectNameSingular } from '@twenty-modules/activities/utils/getJoinObjectNameSingular';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { RecordGqlOperationSignatureFactory } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationSignatureFactory';

export const findActivityTargetsOperationSignatureFactory: RecordGqlOperationSignatureFactory =
  ({
    objectNameSingular,
    objectMetadataItems,
  }: {
    objectNameSingular: CoreObjectNameSingular;
    objectMetadataItems: ObjectMetadataItem[];
  }) => ({
    objectNameSingular: getJoinObjectNameSingular(objectNameSingular),
    variables: {},
    fields: {
      id: true,
      __typename: true,
      createdAt: true,
      updatedAt: true,
      ...generateActivityTargetMorphFieldKeys(objectMetadataItems),
    },
  });
