import { RecordGroupDefinition } from '@twenty-modules/object-record/record-group/types/RecordGroupDefinition';
import { ViewGroup } from '@twenty-modules/views/types/ViewGroup';

export const recordGroupDefinitionToViewGroup = (
  recordGroup: RecordGroupDefinition,
): ViewGroup => {
  return {
    __typename: 'ViewGroup',
    id: recordGroup.id,
    fieldMetadataId: recordGroup.fieldMetadataId,
    position: recordGroup.position,
    isVisible: recordGroup.isVisible ?? true,
    fieldValue: recordGroup.value ?? '',
  };
};
