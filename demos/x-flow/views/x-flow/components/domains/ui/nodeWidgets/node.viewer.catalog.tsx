'use client';
import { useMemo, useState } from 'react';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';
import { RiFlagLine } from '@remixicon/react';

import * as Divider from '@/components/ui/divider';
import * as Radio from '@/components/ui/radio';

export const NodeViewerCatalog = ({ data }: any) => {
  const [selected, setSelected] = useState([0]) as any;

  const dataOptions = useMemo(() => {
    return data.data.list.map((item: any) => ({
      value: item,
      label: item,
    }));
  }, [data.data.list]);

  return (
    <>
      <div className='w-full max-w-[440px] rounded-20 bg-bg-white-0 shadow-regular-md ring-1 ring-inset ring-stroke-soft-200'>
        <div className='flex items-center gap-3 px-5 py-4'>
          <RiFlagLine className='size-4 text-text-sub-600' />
          <div className='text-label-sm text-text-strong-950'>Catalog</div>
        </div>

        <Divider.Root />

        <Radio.Group className='flex flex-col gap-3 p-5'>
          {data.data.list.map((item: any) => (
            <div key={item} className='flex items-center gap-2'>
              <Radio.Item id={item} value={item} />
              <LabelPrimitives.Root
                htmlFor={item}
                className='cursor-pointer text-paragraph-sm text-text-strong-950'
              >
                {item}
              </LabelPrimitives.Root>
            </div>
          ))}
        </Radio.Group>
      </div>
    </>
  );
};
