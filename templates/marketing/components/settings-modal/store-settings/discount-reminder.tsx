'use client';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';

import * as Checkbox from '@/components/ui/checkbox';
import { DashedDivider } from '@/components/dashed-divider';

export default function DiscountReminder() {
  const uniqueId = React.useId();

  return (
    <div className='flex flex-col gap-5 p-6'>
      <div className='flex items-center gap-5'>
        <Checkbox.Root defaultChecked id={`${uniqueId}-c1`} />
        <LabelPrimitives.Root
          className='cursor-pointer'
          htmlFor={`${uniqueId}-c1`}
        >
          <div className='flex flex-wrap items-center gap-1'>
            <div className='text-label-sm text-text-strong-950'>
              Black Friday
            </div>
            <div className='text-paragraph-xs text-text-sub-600'>
              (November)
            </div>
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Receive notifications for Black Friday promotions
          </div>
        </LabelPrimitives.Root>
      </div>
      <DashedDivider />
      <div className='flex items-center gap-5'>
        <Checkbox.Root defaultChecked id={`${uniqueId}-c2`} />
        <LabelPrimitives.Root
          className='cursor-pointer'
          htmlFor={`${uniqueId}-c2`}
        >
          <div className='flex flex-wrap items-center gap-1'>
            <div className='text-label-sm text-text-strong-950'>
              End of Season
            </div>
            <div className='text-paragraph-xs text-text-sub-600'>(January)</div>
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Receive notifications for winter season sales
          </div>
        </LabelPrimitives.Root>
      </div>
      <DashedDivider />
      <div className='flex items-center gap-5'>
        <Checkbox.Root id={`${uniqueId}-c3`} />
        <LabelPrimitives.Root
          className='cursor-pointer'
          htmlFor={`${uniqueId}-c3`}
        >
          <div className='flex flex-wrap items-center gap-1'>
            <div className='text-label-sm text-text-strong-950'>
              Summary Sale
            </div>
            <div className='text-paragraph-xs text-text-sub-600'>(June)</div>
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Receive notifications for summer collection sales
          </div>
        </LabelPrimitives.Root>
      </div>
    </div>
  );
}
