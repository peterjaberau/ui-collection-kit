'use client';

import * as React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';
import * as SelectPrimitives from '@radix-ui/react-select';
import { RiArrowDownSLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Select from '@/components/ui/select';
import { DashedDivider } from '@/components/dashed-divider';

export default function Inventory() {
  const uniqueId = React.useId();

  return (
    <div className='flex flex-col gap-5 p-6'>
      <div className='flex items-center justify-between gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Low Stock Alert
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Set threshold for low inventory notifications
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
      <DashedDivider />
      <div className='flex items-center justify-between gap-6'>
        <div>
          <div className='text-label-sm text-text-strong-950'>
            Out of Stock Alert
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Set alert when products become unavailable
          </div>
        </div>
        <Select.Root defaultValue='0'>
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
      <DashedDivider />
      <div className='flex items-center justify-between gap-6'>
        <LabelPrimitives.Root
          className='flex-1 cursor-pointer'
          htmlFor={`${uniqueId}-c1`}
        >
          <div className='text-label-sm text-text-strong-950'>
            Allow Backorders
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Enable ordering for out of stock products
          </div>
        </LabelPrimitives.Root>
        <Checkbox.Root id={`${uniqueId}-c1`} defaultChecked />
      </div>
      <DashedDivider />
      <div className='flex items-center justify-between gap-6'>
        <LabelPrimitives.Root
          className='flex-1 cursor-pointer'
          htmlFor={`${uniqueId}-c2`}
        >
          <div className='text-label-sm text-text-strong-950'>
            Auto Update Stock
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Enable automatic inventory adjustments
          </div>
        </LabelPrimitives.Root>
        <Checkbox.Root id={`${uniqueId}-c2`} defaultChecked />
      </div>
      <DashedDivider />
      <div className='flex items-center justify-between gap-6'>
        <LabelPrimitives.Root
          className='flex-1 cursor-pointer'
          htmlFor={`${uniqueId}-c3`}
        >
          <div className='text-label-sm text-text-strong-950'>
            Show Stock Quantity
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Display available inventory on products
          </div>
        </LabelPrimitives.Root>
        <Checkbox.Root id={`${uniqueId}-c3`} />
      </div>
      <DashedDivider />
      <div className='flex items-center justify-between gap-6'>
        <LabelPrimitives.Root
          className='flex-1 cursor-pointer'
          htmlFor={`${uniqueId}-c4`}
        >
          <div className='text-label-sm text-text-strong-950'>
            Show Out of Stock Badge
          </div>
          <div className='mt-1 text-paragraph-xs text-text-sub-600'>
            Display unavailable product indicators
          </div>
        </LabelPrimitives.Root>
        <Checkbox.Root id={`${uniqueId}-c4`} />
      </div>
    </div>
  );
}
