import { FormFieldInputContainer } from '@twenty-modules/object-record/record-field/form-types/components/FormFieldInputContainer';
import { FormTextFieldInput } from '@twenty-modules/object-record/record-field/form-types/components/FormTextFieldInput';
import { InputLabel } from '@twenty-modules/ui/input/components/InputLabel';
import { WorkflowFormActionField } from '@twenty-modules/workflow/workflow-steps/workflow-actions/form-action/types/WorkflowFormActionField';
import { getDefaultFormFieldSettings } from '@twenty-modules/workflow/workflow-steps/workflow-actions/form-action/utils/getDefaultFormFieldSettings';
import camelCase from 'lodash.camelcase';
import { FieldMetadataType } from '@ui-collection-kit/twenty-shared/src/types';

type WorkflowFormFieldSettingsDateProps = {
  field: WorkflowFormActionField;
  onChange: (updatedField: WorkflowFormActionField) => void;
};

export const WorkflowFormFieldSettingsDate = ({
  field,
  onChange,
}: WorkflowFormFieldSettingsDateProps) => {
  return (
    <FormFieldInputContainer>
      <InputLabel>Label</InputLabel>
      <FormTextFieldInput
        onChange={(newLabel: string) => {
          onChange({
            ...field,
            label: newLabel,
            name: camelCase(newLabel),
          });
        }}
        defaultValue={field.label}
        placeholder={getDefaultFormFieldSettings(FieldMetadataType.DATE).label}
      />
    </FormFieldInputContainer>
  );
};
