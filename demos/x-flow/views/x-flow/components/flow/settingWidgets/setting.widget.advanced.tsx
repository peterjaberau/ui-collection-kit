import { Button, Space } from 'antd';
import FormRender, { useForm } from '@/components/form-render';
import React, { forwardRef, useImperativeHandle } from 'react';

export interface AdvancedSettingWidgetProps {
  value: any;
  onChange: (value: any) => void;
  readOnly?: boolean;
}

export interface AdvancedSettingWidgetRef {
  validateForm: () => Promise<boolean>;
}

export const SettingWidgetAdvanced = forwardRef<AdvancedSettingWidgetRef, AdvancedSettingWidgetProps>(
  ({ value, onChange, readOnly }, ref) => {
    const form = useForm();

    // Expose verification method
    useImperativeHandle(ref, () => ({
      validateForm: async () => {
        return await form
          .validateFields()
          .then(() => {
            return true;
          })
          .catch((err) => {
            return false;
          });
      },
    }));

    const schema = {
      type: 'object',
      properties: {
        name: {
          title: 'Node name',
          type: 'string',
          required: true,
        },
        formType: {
          title: 'Configuration Type',
          type: 'string',
          enum: ['simple', 'complex'],
          enumNames: ['Simple configuration', 'complex configuration'],
          widget: 'radio',
          required: true,
        },
        simpleInput: {
          title: 'Simple input',
          type: 'string',
          hidden: '{{formData.formType !== "simple"}}',
          required: true,
        },
        complexConfig: {
          title: 'Complex configuration',
          type: 'object',
          hidden: '{{formData.formType !== "complex"}}',
          properties: {
            field1: {
              title: 'Field 1',
              type: 'string',
            },
            field2: {
              title: 'Field 2',
              type: 'string',
              description: 'Only when field 1 has a value can it be entered',
              disabled: '{{!formData.complexConfig?.field1}}',
            },
          },
        },
        conditions: {
          title: 'Conditional configuration',
          type: 'array',
          widget: 'cardList',
          items: {
            type: 'object',
            properties: {
              name: {
                title: 'Condition name',
                type: 'string',
                required: true,
              },
              operator: {
                title: 'Operator',
                type: 'string',
                enum: ['equals', 'contains', 'greater', 'less'],
                enumNames: ['equal to ', 'contains', 'greater than', 'less than'],
                required: true,
              },
              value: {
                title: 'Conditional value',
                type: 'string',
                required: true,
              },
            },
          },
        },
      },
    };

    // Listen to form changes
    const watch = {
      '#': (formData: any) => {
        onChange(formData);
      },
      name: (val: any) => {
        console.log('Listen to the changes in the node name', val);
      },
      'complexConfig.field1': (value: any) => {
        // When field1 changes, if empty, clear field2
        if (!value) {
          const values = form.getValues();
          form.setValues({
            ...values,
            complexConfig: {
              ...values.complexConfig,
              field2: '',
            },
          });
        }
      },
    };

    // Add condition button
    const addCondition = () => {
      const values = form.getValues();
      const conditions = values.conditions || [];
      form.setValues({
        ...values,
        conditions: [
          ...conditions,
          {
            name: '',
            operator: 'equals',
            value: '',
          },
        ],
      });
    };

    React.useEffect(() => {
      if (value) {
        form.setValues(value);
      }
    }, [value]);

    return (
      <div>
        <FormRender form={form} schema={schema} watch={watch} readOnly={readOnly} />
        {!readOnly && (
          <div style={{ marginTop: '16px' }}>
            <Space>
              <Button type="primary" onClick={addCondition}>
                Add conditions
              </Button>
            </Space>
          </div>
        )}
      </div>
    );
  },
);
