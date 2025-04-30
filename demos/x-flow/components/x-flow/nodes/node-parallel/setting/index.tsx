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
  displayType: 'row',
  properties: {
    list: {
      type: 'array',
      widget: 'simpleList',
      props: {
        hideCopy: true,
        hideMove: true,
      },
      items: {
        type: 'object',
        properties: {
          title: {
            title: 'Title',
            type: 'string',
            props: {
              allowClear: true,
            },
            span: 6,
          },
          value: {
            title: 'Event',
            type: 'string',
            props: {
              allowClear: true,
            },
            span: 6,
          },
        },
      },
    },
  },
};

export default memo((props: INodeSwitchSettingPorps) => {
  const form: any = useForm();
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
      readOnly={props.readOnly}
    />
  );
});
