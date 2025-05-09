import { WorkflowFormFieldSettingsDate } from '@twenty-modules/workflow/workflow-steps/workflow-actions/form-action/components/WorkflowFormFieldSettingsDate';
import { WorkflowFormFieldSettingsRecordPicker } from '@twenty-modules/workflow/workflow-steps/workflow-actions/form-action/components/WorkflowFormFieldSettingsRecordPicker';
import { WorkflowFormActionField } from '@twenty-modules/workflow/workflow-steps/workflow-actions/form-action/types/WorkflowFormActionField';
import { FieldMetadataType } from '@ui-collection-kit/twenty-shared/src/types';
import { assertUnreachable } from '@ui-collection-kit/twenty-shared/src/utils';
import { WorkflowFormFieldSettingsNumber } from './WorkflowFormFieldSettingsNumber';
import { WorkflowFormFieldSettingsText } from './WorkflowFormFieldSettingsText';

export const WorkflowFormFieldSettingsByType = ({
  field,
  onChange,
}: {
  field: WorkflowFormActionField;
  onChange: (updatedField: WorkflowFormActionField) => void;
}) => {
  switch (field.type) {
    case FieldMetadataType.TEXT:
      return (
        <WorkflowFormFieldSettingsText field={field} onChange={onChange} />
      );
    case FieldMetadataType.NUMBER:
      return (
        <WorkflowFormFieldSettingsNumber field={field} onChange={onChange} />
      );
    case FieldMetadataType.DATE:
      return (
        <WorkflowFormFieldSettingsDate field={field} onChange={onChange} />
      );
    case 'RECORD':
      return (
        <WorkflowFormFieldSettingsRecordPicker
          field={field}
          onChange={onChange}
        />
      );
    default:
      return assertUnreachable(field.type, 'Unknown form field type');
  }
};
