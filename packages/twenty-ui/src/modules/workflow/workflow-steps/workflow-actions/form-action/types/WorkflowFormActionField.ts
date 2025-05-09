import { WorkflowFormFieldType } from '@twenty-modules/workflow/workflow-steps/workflow-actions/form-action/types/WorkflowFormFieldType';

export type WorkflowFormActionField = {
  id: string;
  name: string;
  label: string;
  type: WorkflowFormFieldType;
  placeholder?: string;
  settings?: Record<string, any>;
  value?: any;
};
