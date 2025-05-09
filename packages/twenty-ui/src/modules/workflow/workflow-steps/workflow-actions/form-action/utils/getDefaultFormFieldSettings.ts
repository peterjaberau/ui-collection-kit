import { WorkflowFormFieldType } from '@twenty-modules/workflow/workflow-steps/workflow-actions/form-action/types/WorkflowFormFieldType';
import { FieldMetadataType } from '@ui-collection-kit/twenty-shared/src/types';
import { assertUnreachable } from '@ui-collection-kit/twenty-shared/src/utils';
import { v4 } from 'uuid';

export const getDefaultFormFieldSettings = (type: WorkflowFormFieldType) => {
  switch (type) {
    case FieldMetadataType.TEXT:
      return {
        id: v4(),
        name: 'text',
        label: 'Text',
        placeholder: 'Enter your text',
      };
    case FieldMetadataType.NUMBER:
      return {
        id: v4(),
        name: 'number',
        label: 'Number',
        placeholder: '1000',
      };
    case FieldMetadataType.DATE:
      return {
        id: v4(),
        name: 'date',
        label: 'Date',
        placeholder: 'mm/dd/yyyy',
      };
    case 'RECORD':
      return {
        id: v4(),
        name: 'record',
        label: 'Record',
        placeholder: `Select a Company`,
        settings: {
          objectName: 'company',
        },
      };
    default:
      assertUnreachable(type);
  }
};
