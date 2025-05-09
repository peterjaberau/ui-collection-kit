import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { getEdgeTypename } from '@twenty-modules/object-record/cache/utils/getEdgeTypename';
import { getRecordNodeFromRecord } from '@twenty-modules/object-record/cache/utils/getRecordNodeFromRecord';
import { RecordGqlEdge } from '@twenty-modules/object-record/graphql/types/RecordGqlEdge';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';

export const getRecordEdgeFromRecord = <T extends ObjectRecord>({
  objectMetadataItems,
  objectMetadataItem,
  recordGqlFields,
  record,
  computeReferences = false,
  isRootLevel = false,
}: {
  objectMetadataItems: ObjectMetadataItem[];
  objectMetadataItem: Pick<
    ObjectMetadataItem,
    'fields' | 'namePlural' | 'nameSingular'
  >;
  recordGqlFields?: Record<string, any>;
  computeReferences?: boolean;
  isRootLevel?: boolean;
  record: T;
}) => {
  return {
    __typename: getEdgeTypename(objectMetadataItem.nameSingular),
    node: {
      ...getRecordNodeFromRecord({
        objectMetadataItems,
        objectMetadataItem,
        recordGqlFields,
        record,
        computeReferences,
        isRootLevel,
      }),
    },
    cursor: '',
  } as RecordGqlEdge;
};
