import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { RecordGqlOperationSignatureFactory } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationSignatureFactory';

export const findAllViewsOperationSignatureFactory: RecordGqlOperationSignatureFactory =
  () => ({
    objectNameSingular: CoreObjectNameSingular.View,
    variables: {},
    fields: {
      id: true,
      createdAt: true,
      updatedAt: true,
      isCompact: true,
      openRecordIn: true,
      objectMetadataId: true,
      position: true,
      type: true,
      kanbanFieldMetadataId: true,
      kanbanAggregateOperation: true,
      kanbanAggregateOperationFieldMetadataId: true,
      name: true,
      icon: true,
      key: true,
      viewFilters: true,
      viewFilterGroups: true,
      viewSorts: true,
      viewFields: true,
      viewGroups: true,
    },
  });
