'use client';

import FormRender, { Schema, useForm } from '@/components/form-render';
import { produce } from 'immer';
import { debounce, isFunction } from 'lodash';
import { FC, forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { shallow } from 'zustand/shallow';
import { useStore } from '../../hooks/useStore';
import { ConfigContext } from '../../models/context';
import { safeJsonStringify, uuid } from '../../utils';

interface INodeEditorProps {
  data: any;
  onChange: (data: any) => void;
  nodeType: string;
  id: string;
  ref?: React.Ref<any>; // Add ref attribute
}

const NodeEditor: FC<INodeEditorProps | any> = forwardRef((props, ref: any): any => {
  const { data, onChange, nodeType, id } = props;
  const form = useForm();
  // // 1.Get node configuration information
  const { settingMap, widgets, readOnly }: any = useContext(ConfigContext);
  const nodeSetting = settingMap[nodeType] || {};
  const [customVal, setCustomVal] = useState(data);
  const CustomSettingWidget = widgets[`${nodeType}NodeSettingWidget`]; // Built-in setting component
  const NodeWidget = widgets[nodeSetting?.settingWidget]; // Custom panel configuration component
  const getSettingSchema = nodeSetting['getSettingSchema'];
  const [asyncSchema, setAsyncSchema] = useState<Schema>({});
  const nodeWidgetRef: any = useRef(null);

  useImperativeHandle(ref, () => ({
    validateForm: async () => {
      let result = true;
      if (nodeSetting?.settingSchema || (isFunction(getSettingSchema) && Object.keys(asyncSchema).length > 0)) {
        result = await form
          .validateFields()
          .then(() => {
            return true;
          })
          .catch((err) => {
            return false;
          });
      } else if (nodeSetting?.settingWidget && nodeWidgetRef.current?.validateForm) {
        result = await nodeWidgetRef.current.validateForm();
      }
      return result;
    },
  }));

  async function getSchema() {
    const shema = await getSettingSchema(id, nodeType, nodeSetting, data, form).catch(() => ({}));
    setAsyncSchema(shema);
  }
  useEffect(() => {
    if (isFunction(getSettingSchema)) {
      getSchema();
    }
  }, []);

  const { nodes, setNodes } = useStore(
    (state: any) => ({
      nodes: state.nodes,
      setNodes: state.setNodes,
    }),
    shallow,
  );

  useEffect(() => {
    if (nodeSetting?.settingSchema) {
      // Custom Schema
      form.resetFields();
      form.setValues(data || {});
    } else if (nodeSetting?.settingWidget) {
      // Custom components
      setCustomVal(data);
    } else {
      //May be a built-in schema or none
    }
  }, [safeJsonStringify(data), id]);

  const handleNodeValueChange = debounce((data: any) => {
    const newNodes = produce(nodes, (draft: any) => {
      let node = null;
      // Reverse query ID, because there are multiple elements with the same ID
      for (let i = draft?.length - 1; i >= 0; i--) {
        if (draft[i].id === id) {
          node = draft[i];
          break;
        }
      }
      if (node) {
        // Update the node data
        if (node?.data?._nodeType === 'Switch' || node?.data?._nodeType === 'Parallel') {
          data['list'] = (data?.list || [])?.map((item: any, index: any) => {
            if (item?._id) {
              return item;
            } else {
              if (node?.data?.list?.length && node?.data?.list[index]?._id) {
                return {
                  ...item,
                  _id: node?.data?.list[index]?._id,
                };
              } else {
                return { ...item, _id: `id_${uuid()}` };
              }
            }
          });
        }
        const { _nodeType, _status, _isCandidate, title, desc } = node?.data;
        node.data = { _nodeType, _status, _isCandidate, title, desc, ...data }; // form-render的list如果为空，不会返回list相应的字段，只能全部替换data
      }
    });
    setNodes(newNodes, false);
  }, 100);

  const watch = {
    '#': (allValues: any) => {
      handleNodeValueChange({ ...allValues });
    },
  };

  if (nodeSetting?.settingWidget && NodeWidget) {
    return (
      <NodeWidget
        {...nodeSetting?.settingWidgetProps}
        value={customVal}
        onChange={(values: any) => {
          setCustomVal(values);
          handleNodeValueChange({ ...values });
        }}
        readOnly={readOnly}
        ref={nodeWidgetRef}
      />
    );
  } else if (nodeSetting?.settingSchema) {
    return (
      <FormRender
        schema={nodeSetting?.settingSchema}
        form={form}
        widgets={widgets}
        watch={watch}
        size={'small'}
        readOnly={readOnly}
        onMount={() => {
          const initialValues = form.getValues();
          handleNodeValueChange(initialValues);
        }}
      />
    );
  } else if (isFunction(getSettingSchema) && Object.keys(asyncSchema).length > 0) {
    return (
      <FormRender schema={asyncSchema} form={form} widgets={widgets} watch={watch} size={'small'} readOnly={readOnly} />
    );
  } else if (CustomSettingWidget) {
    // Built-in nodes
    return (
      <CustomSettingWidget
        onChange={(val: any) => {
          handleNodeValueChange({ ...val });
        }}
        value={data}
        readOnly={readOnly}
      />
    );
  } else {
    return null;
  }
});

export default NodeEditor;
