'use client';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';

import * as Switch from '@/components/ui/switch';
import { DashedDivider } from '@/components/dashed-divider';
import { EditableInput } from '@/components/editable-input';

export default function ShippingMethods() {
  const uniqueId = React.useId();

  return (
    <div className='flex flex-col gap-5 p-6'>
      <div className='grid gap-4 sm:grid-cols-[minmax(0,1fr),312px] sm:items-center sm:gap-5'>
        <div className='flex items-center gap-5'>
          <Switch.Root defaultChecked id={`${uniqueId}-s1`} />
          <LabelPrimitives.Root
            className='cursor-pointer'
            htmlFor={`${uniqueId}-s1`}
          >
            <div className='text-label-sm text-text-strong-950'>
              Standard Shipping
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              3-5 business days
            </div>
          </LabelPrimitives.Root>
        </div>
        <EditableInput value='$29.90' />
      </div>
      <DashedDivider />
      <div className='grid gap-4 sm:grid-cols-[minmax(0,1fr),312px] sm:items-center sm:gap-5'>
        <div className='flex items-center gap-5'>
          <Switch.Root defaultChecked id={`${uniqueId}-s2`} />
          <LabelPrimitives.Root
            className='cursor-pointer'
            htmlFor={`${uniqueId}-s2`}
          >
            <div className='text-label-sm text-text-strong-950'>
              Express Shipping
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              1-2 business days
            </div>
          </LabelPrimitives.Root>
        </div>
        <EditableInput value='$49.90' />
      </div>
      <DashedDivider />
      <div className='grid gap-4 sm:grid-cols-[minmax(0,1fr),312px] sm:items-center sm:gap-5'>
        <div className='flex items-center gap-5'>
          <Switch.Root id={`${uniqueId}-s3`} />
          <LabelPrimitives.Root
            className='cursor-pointer'
            htmlFor={`${uniqueId}-s3`}
          >
            <div className='text-label-sm text-text-strong-950'>
              Free Shipping
            </div>
            <div className='mt-1 text-paragraph-xs text-text-sub-600'>
              For orders above threshold
            </div>
          </LabelPrimitives.Root>
        </div>
        <EditableInput value='$0' />
      </div>
    </div>
  );
}
