import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import {
  WorkflowManualTriggerAvailability,
  WorkflowManualTriggerSettings,
} from '@twenty-modules/workflow/types/Workflow';
import { assertUnreachable } from '@twenty-modules/workflow/utils/assertUnreachable';

export const getManualTriggerDefaultSettings = ({
  availability,
  activeObjectMetadataItems,
}: {
  availability: WorkflowManualTriggerAvailability;
  activeObjectMetadataItems: ObjectMetadataItem[];
}): WorkflowManualTriggerSettings => {
  switch (availability) {
    case 'EVERYWHERE': {
      return {
        objectType: undefined,
        outputSchema: {},
      };
    }
    case 'WHEN_RECORD_SELECTED': {
      return {
        objectType: activeObjectMetadataItems[0].nameSingular,
        outputSchema: {},
      };
    }
  }

  return assertUnreachable(availability);
};
