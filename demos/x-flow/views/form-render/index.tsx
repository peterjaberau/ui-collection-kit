'use client';
import { useState } from 'react';
import FormRender, { useForm } from '@/components/form-render';
import JsonView from 'react18-json-view';
import { allSchemas } from './schema';
import {controls, data} from './data';

export const FormRenderView = () => {
  const [dataValue, setDataValue] = useState<any>(null);
  const form = useForm();

  const onFinish = (formData: any) => {
    setDataValue(formData);
    console.log('formData:', formData);
  };

  const handleWatch = (allValues: any, changeValues: any) => {
    console.log('allValues:', allValues);
    console.log('changeValues:', changeValues);
  }

  return (
    <>
      <div className='flex flex-row w-[800px] justify-between items-start gap-6'>
        <div className={'flex-grow rounded-xl p-4 shadow-regular-md border-2'}>
          <FormRender
            form={form}
            // @ts-ignore
            schema={allSchemas['complete']}
            // schema={controls.linkButton}
            onFinish={onFinish}
            onMount={() => {}}

            displayType={'column'} // ['column', 'row', 'inline']
            labelAlign={'right'} // ['left', 'right']
            colon={true}

            removeHiddenData={true}
            readOnly={false}
            className=''
            style={{}}
            colum={1}
            disabled={false}
            local={'en-US'}
            scrollToFirstError={false} // boolean | ScrollOptions
            antdVersion={'v5'} // ['v4', 'v5']
            footer={true}
            // @ts-ignore
            // watch={handleWatch}
            // configProvider, validateMessages, id
            // @ts-ignore
            beforeFinish={({data, errors, schema, ...rest}) => {}}
              //@ts-ignore
            globalConfig={{
                mustacheDisabled: false,
                listOperate: {
                    btnType: 'icon', // ['text', 'icon']
                    hideMove: false,
                }
            }}
              // globalProps
              // widgets
              // watch
          />
        </div>
        <JsonView src={dataValue} collapsed={3} className={'flex-grow rounded-xl p-4 shadow-regular-md border-2'} />

      </div>
    </>
  );
};
