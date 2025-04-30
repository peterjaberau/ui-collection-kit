'use client';
import FormRender, { useForm } from '@/components/form-render';
import { memo, useEffect } from 'react';
import '../index.css';
import { safeJsonStringify } from '../../../utils';

interface INodeSwitchSettingPorps {
  onChange: (val: any) => void;
  value: any;
  readOnly: boolean;
}

const schema: any = {
  type: 'object',
  span: 24,
  displayType: 'row',
  properties: {
    list: {
      type: 'array',
      widget: 'simpleList',
      display: 'block',
      props: {
        hideCopy: true,
        hideMove: true,
      },
      items: {
        type: 'object',
        properties: {
          value: {
            title: 'Conditions',
            type: 'string',
          },
        },
      },
    },
  },
};

export default memo((props: INodeSwitchSettingPorps) => {
  const form = useForm();
  const { onChange, value } = props;

  const watch = {
    '#': (allValues: any) => {
      onChange({ ...allValues });
    },
  };

  useEffect(() => {
    form.resetFields();
    form.setValues(value || {});
  }, [safeJsonStringify(value)]);

  return (
    <FormRender
      schema={schema}
      form={form}
      watch={watch}
      size={'small'}
      className="custom-node-switch-setting"
      disabled={props.readOnly}
    />
  );
});
