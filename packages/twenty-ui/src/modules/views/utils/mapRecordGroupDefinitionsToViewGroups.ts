import { RecordGroupDefinition } from '@twenty-modules/object-record/record-group/types/RecordGroupDefinition';
import { ViewGroup } from '@twenty-modules/views/types/ViewGroup';
import { recordGroupDefinitionToViewGroup } from '@twenty-modules/views/utils/recordGroupDefinitionToViewGroup';

export const mapRecordGroupDefinitionsToViewGroups = (
  groupDefinitions: RecordGroupDefinition[],
): ViewGroup[] => {
  return groupDefinitions.map(recordGroupDefinitionToViewGroup);
};
