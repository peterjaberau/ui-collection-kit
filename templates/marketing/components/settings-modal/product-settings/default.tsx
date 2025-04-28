'use client';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';
import * as SelectPrimitives from '@radix-ui/react-select';
import { RiArrowDownSLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Select from '@/components/ui/select';
import * as Switch from '@/components/ui/switch';
import { DashedDivider } from '@/components/dashed-divider';

export default function Default() {
  const uniqueId = React.useId();

  return (
    <div className='flex flex-col gap-5 p-6'>
      <div className='flex items-center justify-between gap-6'>
        <LabelPrimitives.Root
          className='flex-1 cursor-pointer'
          htmlFor={`${uniqueId}-s1`}
        >
          <div className='text-label-sm text-text-strong-950'>
            Track Inventory
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Enable inventory tracking for all products
          </div>
        </LabelPrimitives.Root>
        <Switch.Root id={`${uniqueId}-s1`} defaultChecked />
      </div>
      <DashedDivider />
      <div className='flex items-center justify-between gap-6'>
        <LabelPrimitives.Root
          className='flex-1 cursor-pointer'
          htmlFor={`${uniqueId}-s2`}
        >
          <div className='text-label-sm text-text-strong-950'>
            Show Out of Stock Products
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Display products with zero inventory on your store
          </div>
        </LabelPrimitives.Root>
        <Switch.Root id={`${uniqueId}-s2`} defaultChecked />
      </div>
      <DashedDivider />
      <div className='flex items-center justify-between gap-6'>
        <LabelPrimitives.Root
          className='flex-1 cursor-pointer'
          htmlFor={`${uniqueId}-s3`}
        >
          <div className='text-label-sm text-text-strong-950'>
            Show Compare at Price
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Enable price comparison display for discounted products
          </div>
        </LabelPrimitives.Root>
        <Switch.Root id={`${uniqueId}-s3`} defaultChecked />
      </div>
      <DashedDivider />
      <div className='flex items-center justify-between gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Default Stock Threshold
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Set minimum stock level for inventory alerts
          </div>
        </div>
        <Select.Root defaultValue='10'>
          <SelectPrimitives.Trigger asChild>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='xsmall'
              className='rounded-10'
            >
              <Select.Value />
              <Button.Icon as={RiArrowDownSLine} />
            </Button.Root>
          </SelectPrimitives.Trigger>
          <Select.Content>
            <Select.Item value='0'>0 quantity</Select.Item>
            <Select.Item value='10'>10 quantity</Select.Item>
            <Select.Item value='50'>50 quantity</Select.Item>
            <Select.Item value='100'>100 quantity</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  );
}
